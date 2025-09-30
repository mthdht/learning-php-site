---
prev: 
    text: 'Exercices: Le protocole HTTP'
    link: '/module-2/exercices/chapitre-9-le-protocole-http'

next:
  text: 'Exercices: Formulaires et PHP'
  link: '/module-2/exercices/chapitre-10-formulaires-html-et-php'
---

# Chapitre 10 : Formulaires HTML et PHP

## 📋 Prérequis
- Maîtriser le protocole HTTP (Chapitre 9)
- Connaître les bases du HTML
- Comprendre GET et POST

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Créer des formulaires HTML complets
- Récupérer et traiter les données
- Valider les entrées côté serveur
- Gérer les uploads de fichiers
- Sécuriser les formulaires

---

## Introduction

Les formulaires sont l'interface principale entre l'utilisateur et ton application. C'est par eux que transitent toutes les données : connexion, inscription, commentaires, recherche, etc.

**Un formulaire bien fait :**
- Valide les données côté client ET serveur
- Affiche des messages d'erreur clairs
- Conserve les valeurs en cas d'erreur
- Est sécurisé contre les attaques
- Offre une bonne expérience utilisateur

---

## Formulaire HTML de base

### Structure minimale

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Formulaire</title>
</head>
<body>
    <form action="traitement.php" method="POST">
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" required>
        
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" required>
        
        <button type="submit">Envoyer</button>
    </form>
</body>
</html>
```

**Attributs importants :**
- `action` : URL de traitement (par défaut : page actuelle)
- `method` : GET ou POST
- `name` : clé pour récupérer en PHP ($_POST['nom'])
- `id` : pour le label (accessibilité)

### Types d'inputs

```html
<form action="traitement.php" method="POST">
    <!-- Texte simple -->
    <input type="text" name="nom" placeholder="Votre nom">
    
    <!-- Email (validation navigateur) -->
    <input type="email" name="email" required>
    
    <!-- Mot de passe (masqué) -->
    <input type="password" name="password" minlength="8">
    
    <!-- Nombre -->
    <input type="number" name="age" min="18" max="120">
    
    <!-- Date -->
    <input type="date" name="naissance">
    
    <!-- Téléphone -->
    <input type="tel" name="telephone">
    
    <!-- URL -->
    <input type="url" name="site">
    
    <!-- Checkbox (case à cocher) -->
    <input type="checkbox" name="newsletter" value="1">
    <label>Recevoir la newsletter</label>
    
    <!-- Radio (choix unique) -->
    <input type="radio" name="genre" value="h" id="homme">
    <label for="homme">Homme</label>
    
    <input type="radio" name="genre" value="f" id="femme">
    <label for="femme">Femme</label>
    
    <!-- Fichier -->
    <input type="file" name="photo" accept="image/*">
    
    <!-- Zone de texte multi-lignes -->
    <textarea name="message" rows="5" cols="40"></textarea>
    
    <!-- Liste déroulante -->
    <select name="pays">
        <option value="">-- Choisir --</option>
        <option value="fr">France</option>
        <option value="be">Belgique</option>
        <option value="ch">Suisse</option>
    </select>
    
    <!-- Champs cachés -->
    <input type="hidden" name="id" value="123">
    
    <button type="submit">Envoyer</button>
</form>
```

---

## Récupérer les données en PHP

### Formulaire POST (recommandé)

```php
<?php
// form.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données
    $nom = $_POST['nom'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    
    echo "Nom : $nom<br>";
    echo "Email : $email<br>";
    echo "Message : $message<br>";
}
?>

<form method="POST">
    <input type="text" name="nom" placeholder="Nom">
    <input type="email" name="email" placeholder="Email">
    <textarea name="message" placeholder="Message"></textarea>
    <button type="submit">Envoyer</button>
</form>
```

### Vérifier si un champ existe

```php
<?php
// Isset : existe et non null
if (isset($_POST['nom'])) {
    echo "Nom fourni";
}

// Empty : vide, null, ou n'existe pas
if (empty($_POST['nom'])) {
    echo "Nom manquant ou vide";
}

// Null coalescing (meilleure approche)
$nom = $_POST['nom'] ?? 'Anonyme';

// Avec valeur par défaut personnalisée
$newsletter = $_POST['newsletter'] ?? false;
?>
```

### Checkbox et radio

```php
<?php
// Checkbox (présent seulement si coché)
if (isset($_POST['newsletter'])) {
    echo "Newsletter activée";
}

$newsletter = isset($_POST['newsletter']);  // true/false

// Radio
$genre = $_POST['genre'] ?? '';
if ($genre === 'h') {
    echo "Homme sélectionné";
}

// Checkbox multiples
// <input type="checkbox" name="hobbies[]" value="sport">
// <input type="checkbox" name="hobbies[]" value="lecture">
$hobbies = $_POST['hobbies'] ?? [];
foreach ($hobbies as $hobby) {
    echo "- $hobby<br>";
}
?>
```

### Select

```php
<?php
$pays = $_POST['pays'] ?? '';

switch ($pays) {
    case 'fr':
        echo "France sélectionnée";
        break;
    case 'be':
        echo "Belgique sélectionnée";
        break;
    default:
        echo "Pas de pays sélectionné";
}

// Select multiple
// <select name="langues[]" multiple>
$langues = $_POST['langues'] ?? [];
print_r($langues);
?>
```

---

## Validation côté serveur

### Validation basique

```php
<?php
$erreurs = [];

// Nom requis
if (empty($_POST['nom'])) {
    $erreurs[] = "Le nom est requis";
} elseif (strlen($_POST['nom']) < 2) {
    $erreurs[] = "Le nom doit faire au moins 2 caractères";
}

// Email valide
if (empty($_POST['email'])) {
    $erreurs[] = "L'email est requis";
} elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $erreurs[] = "Email invalide";
}

// Âge numérique
if (empty($_POST['age'])) {
    $erreurs[] = "L'âge est requis";
} elseif (!is_numeric($_POST['age'])) {
    $erreurs[] = "L'âge doit être un nombre";
} elseif ($_POST['age'] < 18) {
    $erreurs[] = "Vous devez avoir au moins 18 ans";
}

// Mot de passe fort
$password = $_POST['password'] ?? '';
if (strlen($password) < 8) {
    $erreurs[] = "Le mot de passe doit faire au moins 8 caractères";
}
if (!preg_match('/[A-Z]/', $password)) {
    $erreurs[] = "Le mot de passe doit contenir une majuscule";
}
if (!preg_match('/[0-9]/', $password)) {
    $erreurs[] = "Le mot de passe doit contenir un chiffre";
}

// Si erreurs
if (!empty($erreurs)) {
    foreach ($erreurs as $erreur) {
        echo "<p style='color:red'>$erreur</p>";
    }
} else {
    echo "Formulaire valide !";
    // Traiter les données...
}
?>
```

### Fonctions de validation

```php
<?php
function valider_nom($nom) {
    if (empty($nom)) {
        return "Le nom est requis";
    }
    if (strlen($nom) < 2 || strlen($nom) > 50) {
        return "Le nom doit faire entre 2 et 50 caractères";
    }
    if (!preg_match('/^[a-zA-ZÀ-ÿ\s\-]+$/', $nom)) {
        return "Le nom contient des caractères invalides";
    }
    return null;  // Valide
}

function valider_email($email) {
    if (empty($email)) {
        return "L'email est requis";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return "Email invalide";
    }
    return null;
}

function valider_telephone($tel) {
    $tel = preg_replace('/\s/', '', $tel);  // Supprimer espaces
    if (!preg_match('/^0[1-9]\d{8}$/', $tel)) {
        return "Téléphone invalide (format : 0612345678)";
    }
    return null;
}

// Utilisation
$erreurs = [];

if ($err = valider_nom($_POST['nom'] ?? '')) {
    $erreurs[] = $err;
}

if ($err = valider_email($_POST['email'] ?? '')) {
    $erreurs[] = $err;
}

if (empty($erreurs)) {
    echo "Formulaire valide !";
}
?>
```

---

## Afficher les erreurs et conserver les valeurs

### Affichage des erreurs

```php
<?php
$erreurs = [];
$nom = '';
$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = trim($_POST['nom'] ?? '');
    $email = trim($_POST['email'] ?? '');
    
    // Validation
    if (empty($nom)) {
        $erreurs['nom'] = "Le nom est requis";
    }
    if (empty($email)) {
        $erreurs['email'] = "L'email est requis";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erreurs['email'] = "Email invalide";
    }
    
    // Si pas d'erreurs
    if (empty($erreurs)) {
        echo "<p style='color:green'>Formulaire envoyé avec succès !</p>";
        // Traiter...
    }
}
?>

<form method="POST">
    <div>
        <label>Nom :</label>
        <input type="text" name="nom" value="<?= htmlspecialchars($nom) ?>">
        <?php if (isset($erreurs['nom'])): ?>
            <span style="color:red"><?= $erreurs['nom'] ?></span>
        <?php endif; ?>
    </div>
    
    <div>
        <label>Email :</label>
        <input type="email" name="email" value="<?= htmlspecialchars($email) ?>">
        <?php if (isset($erreurs['email'])): ?>
            <span style="color:red"><?= $erreurs['email'] ?></span>
        <?php endif; ?>
    </div>
    
    <button type="submit">Envoyer</button>
</form>
```

### Helper pour afficher les erreurs

```php
<?php
function afficher_erreur($champ, $erreurs) {
    if (isset($erreurs[$champ])) {
        echo '<span class="erreur">' . htmlspecialchars($erreurs[$champ]) . '</span>';
    }
}

function get_valeur($champ, $defaut = '') {
    return htmlspecialchars($_POST[$champ] ?? $defaut);
}
?>

<form method="POST">
    <input type="text" name="nom" value="<?= get_valeur('nom') ?>">
    <?php afficher_erreur('nom', $erreurs); ?>
    
    <input type="email" name="email" value="<?= get_valeur('email') ?>">
    <?php afficher_erreur('email', $erreurs); ?>
</form>
```

---

## Upload de fichiers

### Formulaire d'upload

```html
<form method="POST" enctype="multipart/form-data">
    <label>Photo :</label>
    <input type="file" name="photo" accept="image/*">
    
    <button type="submit">Envoyer</button>
</form>
```

**⚠️ Important :** `enctype="multipart/form-data"` est obligatoire !

### Traitement de l'upload

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
        
        $fichier = $_FILES['photo'];
        
        // Informations
        $nom_original = $fichier['name'];
        $nom_temporaire = $fichier['tmp_name'];
        $taille = $fichier['size'];
        $type_mime = $fichier['type'];
        
        // Validation
        $extensions_autorisees = ['jpg', 'jpeg', 'png', 'gif'];
        $taille_max = 5 * 1024 * 1024;  // 5 Mo
        
        $extension = strtolower(pathinfo($nom_original, PATHINFO_EXTENSION));
        
        // Vérifier l'extension
        if (!in_array($extension, $extensions_autorisees)) {
            echo "Extension non autorisée";
            exit;
        }
        
        // Vérifier la taille
        if ($taille > $taille_max) {
            echo "Fichier trop volumineux (max 5 Mo)";
            exit;
        }
        
        // Vérifier le type MIME réel (sécurité)
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $type_reel = finfo_file($finfo, $nom_temporaire);
        finfo_close($finfo);
        
        $types_autorises = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($type_reel, $types_autorises)) {
            echo "Type de fichier non autorisé";
            exit;
        }
        
        // Nom unique pour éviter les écrasements
        $nouveau_nom = uniqid() . '_' . time() . '.' . $extension;
        $destination = 'uploads/' . $nouveau_nom;
        
        // Créer le dossier si nécessaire
        if (!file_exists('uploads')) {
            mkdir('uploads', 0755, true);
        }
        
        // Déplacer le fichier
        if (move_uploaded_file($nom_temporaire, $destination)) {
            echo "Fichier uploadé avec succès : $nouveau_nom";
        } else {
            echo "Erreur lors du déplacement";
        }
        
    } else {
        // Gestion des erreurs d'upload
        $erreur = $_FILES['photo']['error'] ?? UPLOAD_ERR_NO_FILE;
        
        switch ($erreur) {
            case UPLOAD_ERR_INI_SIZE:
            case UPLOAD_ERR_FORM_SIZE:
                echo "Fichier trop volumineux";
                break;
            case UPLOAD_ERR_PARTIAL:
                echo "Fichier partiellement uploadé";
                break;
            case UPLOAD_ERR_NO_FILE:
                echo "Aucun fichier sélectionné";
                break;
            default:
                echo "Erreur d'upload";
        }
    }
}
?>
```

### Upload multiple

```html
<form method="POST" enctype="multipart/form-data">
    <input type="file" name="fichiers[]" multiple>
    <button type="submit">Envoyer</button>
</form>
```

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if (isset($_FILES['fichiers'])) {
        $fichiers = $_FILES['fichiers'];
        $nb_fichiers = count($fichiers['name']);
        
        for ($i = 0; $i < $nb_fichiers; $i++) {
            // Vérifier qu'il n'y a pas d'erreur
            if ($fichiers['error'][$i] === UPLOAD_ERR_OK) {
                
                $nom = $fichiers['name'][$i];
                $tmp = $fichiers['tmp_name'][$i];
                $taille = $fichiers['size'][$i];
                
                // Validation et traitement
                // ... (même logique que pour un seul fichier)
                
                $nouveau_nom = uniqid() . '_' . $nom;
                $destination = 'uploads/' . $nouveau_nom;
                
                if (move_uploaded_file($tmp, $destination)) {
                    echo "Fichier $nom uploadé<br>";
                }
            }
        }
    }
}
?>
```

---

## Sécurité des formulaires

### Protection CSRF (Cross-Site Request Forgery)

```php
<?php
session_start();

// Générer un token CSRF
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Traitement du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Vérifier le token
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die("Token CSRF invalide");
    }
    
    // Traiter le formulaire...
}
?>

<form method="POST">
    <!-- Champ caché avec le token -->
    <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
    
    <input type="text" name="nom">
    <button type="submit">Envoyer</button>
</form>
```

### Nettoyage des données

```php
<?php
function nettoyer($data) {
    $data = trim($data);              // Supprimer espaces
    $data = stripslashes($data);      // Supprimer backslashes
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');  // Échapper HTML
    return $data;
}

$nom = nettoyer($_POST['nom'] ?? '');
$email = nettoyer($_POST['email'] ?? '');

// Pour l'affichage
echo "Bonjour " . htmlspecialchars($nom);

// Pour la base de données (on verra au Module 3)
// Utiliser les requêtes préparées
?>
```

### Limiter les tentatives

```php
<?php
session_start();

// Initialiser le compteur
if (!isset($_SESSION['tentatives'])) {
    $_SESSION['tentatives'] = 0;
    $_SESSION['dernier_essai'] = time();
}

// Réinitialiser après 15 minutes
if (time() - $_SESSION['dernier_essai'] > 900) {
    $_SESSION['tentatives'] = 0;
}

// Vérifier le nombre de tentatives
if ($_SESSION['tentatives'] >= 5) {
    die("Trop de tentatives. Réessayez dans 15 minutes.");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Vérifier les données...
    
    // Si erreur
    $_SESSION['tentatives']++;
    $_SESSION['dernier_essai'] = time();
}
?>
```

---

## Formulaire complet (exemple)

```php
<?php
session_start();

// Générer token CSRF
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

$erreurs = [];
$succes = false;

// Données du formulaire
$nom = '';
$email = '';
$telephone = '';
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Vérifier CSRF
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die("Token CSRF invalide");
    }
    
    // Récupérer et nettoyer
    $nom = trim($_POST['nom'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $telephone = trim($_POST['telephone'] ?? '');
    $message = trim($_POST['message'] ?? '');
    
    // Validation
    if (empty($nom)) {
        $erreurs['nom'] = "Le nom est requis";
    } elseif (strlen($nom) < 2) {
        $erreurs['nom'] = "Le nom doit faire au moins 2 caractères";
    }
    
    if (empty($email)) {
        $erreurs['email'] = "L'email est requis";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $erreurs['email'] = "Email invalide";
    }
    
    if (!empty($telephone)) {
        $tel_clean = preg_replace('/\s/', '', $telephone);
        if (!preg_match('/^0[1-9]\d{8}$/', $tel_clean)) {
            $erreurs['telephone'] = "Téléphone invalide";
        }
    }
    
    if (empty($message)) {
        $erreurs['message'] = "Le message est requis";
    } elseif (strlen($message) < 10) {
        $erreurs['message'] = "Le message doit faire au moins 10 caractères";
    }
    
    // Si pas d'erreurs
    if (empty($erreurs)) {
        // Sauvegarder dans un fichier
        $data = [
            'nom' => $nom,
            'email' => $email,
            'telephone' => $telephone,
            'message' => $message,
            'date' => date('Y-m-d H:i:s')
        ];
        
        file_put_contents(
            'messages.json',
            json_encode($data, JSON_PRETTY_PRINT) . "\n",
            FILE_APPEND
        );
        
        $succes = true;
        
        // Réinitialiser le formulaire
        $nom = $email = $telephone = $message = '';
        
        // Régénérer le token
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Formulaire de contact</title>
    <style>
        .erreur { color: red; font-size: 0.9em; }
        .succes { color: green; padding: 10px; background: #d4edda; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; }
        input, textarea { width: 100%; padding: 8px; }
    </style>
</head>
<body>
    <h1>Formulaire de contact</h1>
    
    <?php if ($succes): ?>
        <div class="succes">Votre message a été envoyé avec succès !</div>
    <?php endif; ?>
    
    <form method="POST">
        <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
        
        <div class="form-group">
            <label for="nom">Nom * :</label>
            <input type="text" id="nom" name="nom" value="<?= htmlspecialchars($nom) ?>">
            <?php if (isset($erreurs['nom'])): ?>
                <span class="erreur"><?= $erreurs['nom'] ?></span>
            <?php endif; ?>
        </div>
        
        <div class="form-group">
            <label for="email">Email * :</label>
            <input type="email" id="email" name="email" value="<?= htmlspecialchars($email) ?>">
            <?php if (isset($erreurs['email'])): ?>
                <span class="erreur"><?= $erreurs['email'] ?></span>
            <?php endif; ?>
        </div>
        
        <div class="form-group">
            <label for="telephone">Téléphone :</label>
            <input type="tel" id="telephone" name="telephone" value="<?= htmlspecialchars($telephone) ?>">
            <?php if (isset($erreurs['telephone'])): ?>
                <span class="erreur"><?= $erreurs['telephone'] ?></span>
            <?php endif; ?>
        </div>
        
        <div class="form-group">
            <label for="message">Message * :</label>
            <textarea id="message" name="message" rows="5"><?= htmlspecialchars($message) ?></textarea>
            <?php if (isset($erreurs['message'])): ?>
                <span class="erreur"><?= $erreurs['message'] ?></span>
            <?php endif; ?>
        </div>
        
        <button type="submit">Envoyer</button>
    </form>
</body>
</html>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ La création de formulaires HTML complets
- ✅ La récupération de données avec $_GET et $_POST
- ✅ La validation côté serveur
- ✅ L'affichage d'erreurs et conservation des valeurs
- ✅ L'upload de fichiers sécurisé
- ✅ La protection CSRF
- ✅ Le nettoyage et l'échappement des données

Les formulaires sont au cœur des applications web. Maîtrise-les bien, c'est essentiel !

---

## 🚀 Prochaine étape

**Chapitre 11 : Sessions et cookies**

Maintenant que tu sais récupérer des données, on va apprendre à "se souvenir" des utilisateurs ! Les sessions permettent de maintenir un état entre les pages : authentification, panier d'achat, préférences, etc.