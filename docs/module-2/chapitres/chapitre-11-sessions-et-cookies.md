---
prev: 
    text: 'Exercices - Formulaires HTML et PHP'
    link: '/module-2/exercices/chapitre-10-formulaires-html-et-php'

next:
  text: 'Exercices - Sessions et cookies'
  link: '/module-2/exercices/chapitre-11-sessions-et-cookies'
---

# Chapitre 11 : Sessions et cookies

## 📋 Prérequis
- Comprendre le protocole HTTP (Chapitre 9)
- Maîtriser les formulaires (Chapitre 10)
- Savoir que HTTP est "sans état"

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Utiliser les sessions PHP
- Créer et lire des cookies
- Créer un système d'authentification
- Gérer un panier d'achat
- Sécuriser les sessions

---

## Introduction

**Le problème :** HTTP est sans état. Le serveur ne se "souvient" pas d'une requête à l'autre. Comment alors garder un utilisateur connecté entre les pages ?

**Les solutions :**
- **Sessions** : données stockées côté serveur, identifiant dans un cookie
- **Cookies** : données stockées côté client (navigateur)

---

## Les sessions PHP

### Principe de fonctionnement

1. L'utilisateur arrive sur le site
2. `session_start()` crée une session et un ID unique
3. PHP envoie un cookie avec cet ID au navigateur
4. À chaque requête, le navigateur renvoie ce cookie
5. PHP retrouve la session et ses données

**Stockage :** Les données sont sur le serveur (dans `/tmp` par défaut).

### Démarrer une session

```php
<?php
// TOUJOURS en premier, avant toute sortie
session_start();

// Maintenant on peut utiliser $_SESSION
$_SESSION['nom'] = 'Alice';
$_SESSION['role'] = 'admin';

echo "Session créée !";
?>
```

**⚠️ Important :** `session_start()` doit être appelé :
- Avant tout `echo`, tout HTML, tout espace
- Sur chaque page qui utilise les sessions

### Stocker des données

```php
<?php
session_start();

// Types simples
$_SESSION['nom'] = 'Alice';
$_SESSION['age'] = 25;
$_SESSION['admin'] = true;

// Tableaux
$_SESSION['panier'] = ['pomme', 'banane', 'orange'];

// Tableaux associatifs
$_SESSION['user'] = [
    'id' => 1,
    'nom' => 'Alice',
    'email' => 'alice@example.com'
];

// Incrémenter
$_SESSION['compteur'] = ($_SESSION['compteur'] ?? 0) + 1;
?>
```

### Lire des données

```php
<?php
session_start();

// Vérifier l'existence
if (isset($_SESSION['nom'])) {
    echo "Bonjour " . $_SESSION['nom'];
} else {
    echo "Pas de session";
}

// Avec valeur par défaut
$nom = $_SESSION['nom'] ?? 'Invité';
echo "Bonjour $nom";

// Lire un tableau
if (isset($_SESSION['user'])) {
    $user = $_SESSION['user'];
    echo "Email : " . $user['email'];
}
?>
```

### Supprimer des données

```php
<?php
session_start();

// Supprimer une variable
unset($_SESSION['nom']);

// Vider toute la session
$_SESSION = [];

// Détruire complètement la session
session_destroy();

// Détruire ET supprimer le cookie
session_unset();
session_destroy();
setcookie('PHPSESSID', '', time() - 3600, '/');
?>
```

---

## Système d'authentification simple

### Page de connexion

```php
<?php
// login.php
session_start();

$erreur = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // Simuler une vérification (on verra les vraies BDD au Module 3)
    $users = [
        'alice@example.com' => [
            'nom' => 'Alice',
            'password' => password_hash('secret123', PASSWORD_DEFAULT)
        ],
        'bob@example.com' => [
            'nom' => 'Bob',
            'password' => password_hash('motdepasse', PASSWORD_DEFAULT)
        ]
    ];
    
    if (isset($users[$email])) {
        if (password_verify($password, $users[$email]['password'])) {
            // Connexion réussie
            $_SESSION['user'] = [
                'email' => $email,
                'nom' => $users[$email]['nom']
            ];
            
            // Régénérer l'ID de session (sécurité)
            session_regenerate_id(true);
            
            header('Location: dashboard.php');
            exit;
        }
    }
    
    $erreur = 'Email ou mot de passe incorrect';
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Connexion</title>
</head>
<body>
    <h1>Connexion</h1>
    
    <?php if ($erreur): ?>
        <p style="color:red"><?= htmlspecialchars($erreur) ?></p>
    <?php endif; ?>
    
    <form method="POST">
        <div>
            <label>Email :</label>
            <input type="email" name="email" required>
        </div>
        
        <div>
            <label>Mot de passe :</label>
            <input type="password" name="password" required>
        </div>
        
        <button type="submit">Se connecter</button>
    </form>
</body>
</html>
```

### Page protégée

```php
<?php
// dashboard.php
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['user'])) {
    header('Location: login.php');
    exit;
}

$user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
</head>
<body>
    <h1>Dashboard</h1>
    <p>Bienvenue <?= htmlspecialchars($user['nom']) ?> !</p>
    <p>Email : <?= htmlspecialchars($user['email']) ?></p>
    
    <a href="logout.php">Se déconnecter</a>
</body>
</html>
```

### Déconnexion

```php
<?php
// logout.php
session_start();

// Détruire la session
$_SESSION = [];
session_destroy();

// Supprimer le cookie de session
setcookie('PHPSESSID', '', time() - 3600, '/');

// Rediriger
header('Location: login.php');
exit;
?>
```

### Fonction helper pour vérifier la connexion

```php
<?php
// functions.php

function require_auth() {
    session_start();
    
    if (!isset($_SESSION['user'])) {
        header('Location: login.php');
        exit;
    }
}

function get_user() {
    session_start();
    return $_SESSION['user'] ?? null;
}

function is_logged_in() {
    session_start();
    return isset($_SESSION['user']);
}

// Utilisation dans une page protégée
require_auth();
?>
```

---

## Les cookies

### Principe

Un cookie est un petit fichier texte stocké dans le navigateur. Contrairement aux sessions, les données sont côté client.

**Utilisations :**
- Préférences utilisateur (langue, thème)
- "Se souvenir de moi"
- Tracking (analytics)

### Créer un cookie

```php
<?php
// setcookie(nom, valeur, expiration, chemin, domaine, secure, httponly)

// Cookie simple (expire à la fermeture du navigateur)
setcookie('nom', 'Alice');

// Cookie avec durée (7 jours)
setcookie('nom', 'Alice', time() + (7 * 24 * 3600), '/');

// Cookie sécurisé
setcookie('nom', 'Alice', time() + 3600, '/', '', true, true);
// true = HTTPS seulement
// true = Pas accessible en JavaScript (protection XSS)

// ⚠️ setcookie() DOIT être appelé AVANT toute sortie
?>
```

### Lire un cookie

```php
<?php
// Les cookies sont dans $_COOKIE
if (isset($_COOKIE['nom'])) {
    echo "Bonjour " . htmlspecialchars($_COOKIE['nom']);
}

// Avec valeur par défaut
$nom = $_COOKIE['nom'] ?? 'Invité';

// Vérifier l'existence
if (isset($_COOKIE['theme'])) {
    $theme = $_COOKIE['theme'];
} else {
    $theme = 'light';
}
?>
```

### Supprimer un cookie

```php
<?php
// Mettre une date dans le passé
setcookie('nom', '', time() - 3600, '/');

// Ou
setcookie('nom', '', 1, '/');
?>
```

### "Se souvenir de moi"

```php
<?php
// login.php avec checkbox "Se souvenir"
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $remember = isset($_POST['remember']);
    
    // Vérifier les identifiants...
    if ($identifiants_valides) {
        $_SESSION['user'] = ['email' => $email];
        
        // Si "se souvenir de moi"
        if ($remember) {
            // Créer un token unique
            $token = bin2hex(random_bytes(32));
            
            // Stocker le token (normalement en BDD)
            // Ici on simplifie
            $tokens_file = 'tokens.json';
            $tokens = json_decode(file_get_contents($tokens_file), true) ?? [];
            $tokens[$token] = $email;
            file_put_contents($tokens_file, json_encode($tokens));
            
            // Cookie de 30 jours
            setcookie('remember_token', $token, time() + (30 * 24 * 3600), '/', '', true, true);
        }
        
        header('Location: dashboard.php');
        exit;
    }
}

// Sur chaque page, vérifier le cookie
if (!isset($_SESSION['user']) && isset($_COOKIE['remember_token'])) {
    $token = $_COOKIE['remember_token'];
    
    // Vérifier le token
    $tokens = json_decode(file_get_contents('tokens.json'), true) ?? [];
    if (isset($tokens[$token])) {
        // Reconnecter l'utilisateur
        $_SESSION['user'] = ['email' => $tokens[$token]];
        session_regenerate_id(true);
    }
}
?>
```

---

## Panier d'achat

### Ajouter au panier

```php
<?php
// add_to_cart.php
session_start();

// Initialiser le panier s'il n'existe pas
if (!isset($_SESSION['panier'])) {
    $_SESSION['panier'] = [];
}

// Récupérer l'ID du produit
$product_id = $_POST['product_id'] ?? 0;
$quantity = $_POST['quantity'] ?? 1;

if ($product_id > 0) {
    // Si le produit existe déjà, augmenter la quantité
    if (isset($_SESSION['panier'][$product_id])) {
        $_SESSION['panier'][$product_id] += $quantity;
    } else {
        $_SESSION['panier'][$product_id] = $quantity;
    }
}

header('Location: cart.php');
exit;
?>
```

### Afficher le panier

```php
<?php
// cart.php
session_start();

$panier = $_SESSION['panier'] ?? [];

// Simuler des produits (normalement depuis BDD)
$produits = [
    1 => ['nom' => 'Pomme', 'prix' => 2.50],
    2 => ['nom' => 'Banane', 'prix' => 1.80],
    3 => ['nom' => 'Orange', 'prix' => 3.00]
];

$total = 0;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Panier</title>
</head>
<body>
    <h1>Mon panier</h1>
    
    <?php if (empty($panier)): ?>
        <p>Votre panier est vide</p>
    <?php else: ?>
        <table>
            <tr>
                <th>Produit</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Sous-total</th>
                <th>Action</th>
            </tr>
            <?php foreach ($panier as $product_id => $quantity): ?>
                <?php 
                $produit = $produits[$product_id];
                $sous_total = $produit['prix'] * $quantity;
                $total += $sous_total;
                ?>
                <tr>
                    <td><?= htmlspecialchars($produit['nom']) ?></td>
                    <td><?= number_format($produit['prix'], 2) ?> €</td>
                    <td><?= $quantity ?></td>
                    <td><?= number_format($sous_total, 2) ?> €</td>
                    <td>
                        <a href="remove_from_cart.php?id=<?= $product_id ?>">Retirer</a>
                    </td>
                </tr>
            <?php endforeach; ?>
            <tr>
                <td colspan="3"><strong>Total</strong></td>
                <td><strong><?= number_format($total, 2) ?> €</strong></td>
                <td></td>
            </tr>
        </table>
        
        <a href="checkout.php">Passer commande</a>
        <a href="clear_cart.php">Vider le panier</a>
    <?php endif; ?>
</body>
</html>
```

### Retirer du panier

```php
<?php
// remove_from_cart.php
session_start();

$product_id = $_GET['id'] ?? 0;

if ($product_id > 0 && isset($_SESSION['panier'][$product_id])) {
    unset($_SESSION['panier'][$product_id]);
}

header('Location: cart.php');
exit;
?>
```

### Vider le panier

```php
<?php
// clear_cart.php
session_start();

$_SESSION['panier'] = [];

header('Location: cart.php');
exit;
?>
```

---

## Configuration et sécurité des sessions

### Paramètres de session

```php
<?php
// Configurer AVANT session_start()

// Nom du cookie de session
ini_set('session.name', 'MON_APP_SESSION');

// Durée de vie du cookie (0 = jusqu'à fermeture navigateur)
ini_set('session.cookie_lifetime', 0);

// Accessible seulement via HTTP (pas JavaScript)
ini_set('session.cookie_httponly', 1);

// HTTPS seulement
ini_set('session.cookie_secure', 1);

// Protection contre fixation de session
ini_set('session.use_strict_mode', 1);

// SameSite (protection CSRF)
ini_set('session.cookie_samesite', 'Strict');

session_start();
?>
```

### Régénérer l'ID de session

```php
<?php
session_start();

// Après connexion réussie, toujours régénérer
if ($connexion_reussie) {
    session_regenerate_id(true);  // true = supprimer l'ancienne session
    $_SESSION['user'] = $user_data;
}

// Régénérer périodiquement (toutes les 15 min)
if (!isset($_SESSION['last_regeneration'])) {
    $_SESSION['last_regeneration'] = time();
} elseif (time() - $_SESSION['last_regeneration'] > 900) {
    session_regenerate_id(true);
    $_SESSION['last_regeneration'] = time();