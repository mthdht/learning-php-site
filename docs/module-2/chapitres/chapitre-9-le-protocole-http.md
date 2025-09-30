---
prev: 
    text: 'Module 2: Introduction'
    link: '/module-2/introduction'

next:
  text: 'Exercices: Le protocole HTTP.'
  link: '/module-2/exercices/chapitre-9-le-protocole-http'
---

# Chapitre 9 : Le protocole HTTP

## 📋 Prérequis
- Avoir terminé le Module 1 (Fondations PHP)
- Comprendre le concept client/serveur
- Connaître les bases du HTML

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Comprendre le fonctionnement du protocole HTTP
- Utiliser GET et POST correctement
- Manipuler les en-têtes HTTP
- Gérer les codes de statut
- Récupérer des informations sur la requête

---

## Introduction

**HTTP** (HyperText Transfer Protocol) est le protocole qui permet au navigateur et au serveur de communiquer. C'est la fondation du web.

**Le principe :**
1. Le client (navigateur) **envoie une requête**
2. Le serveur **traite la requête** (avec PHP)
3. Le serveur **renvoie une réponse**
4. Le navigateur **affiche la réponse**

HTTP est **sans état** : chaque requête est indépendante. Le serveur ne "se souvient" pas de la requête précédente (d'où l'utilité des sessions, qu'on verra au Chapitre 11).

---

## Le cycle requête/réponse

### Anatomie d'une requête HTTP

```
GET /page.php?id=5 HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0
Accept: text/html
Cookie: session_id=abc123
```

**Décomposition :**
- `GET` : la méthode HTTP
- `/page.php?id=5` : le chemin et la query string
- `HTTP/1.1` : la version du protocole
- Les lignes suivantes : les **en-têtes** (headers)

### Anatomie d'une réponse HTTP

```
HTTP/1.1 200 OK
Content-Type: text/html
Set-Cookie: user=Alice
Content-Length: 1234

<!DOCTYPE html>
<html>...
```

**Décomposition :**
- `200 OK` : le code de statut
- Les en-têtes de réponse
- Une ligne vide
- Le **corps** de la réponse (HTML, JSON, etc.)

---

## Les méthodes HTTP

### GET : récupérer des données

```php
<?php
// URL : page.php?nom=Alice&age=25

// Récupérer les paramètres
$nom = $_GET['nom'];    // "Alice"
$age = $_GET['age'];    // "25"

// Vérifier l'existence
if (isset($_GET['nom'])) {
    echo "Bonjour " . $_GET['nom'];
}

// Avec valeur par défaut (PHP 7+)
$nom = $_GET['nom'] ?? 'Invité';

// Récupérer tous les paramètres
print_r($_GET);
// Array ( [nom] => Alice [age] => 25 )
?>
```

**Caractéristiques de GET :**
- ✅ Visible dans l'URL
- ✅ Peut être mis en favori
- ✅ Peut être partagé
- ❌ Limité en taille (~2000 caractères)
- ❌ Pas pour données sensibles (mot de passe)
- ✅ Idempotent (même requête = même résultat)

**Utiliser GET pour :**
- Recherche : `search.php?q=php`
- Pagination : `articles.php?page=2`
- Filtrage : `products.php?category=books`
- Lecture de ressources

### POST : envoyer des données

```html
<form method="POST" action="traitement.php">
    <input type="text" name="nom">
    <input type="password" name="password">
    <button type="submit">Envoyer</button>
</form>
```

```php
<?php
// traitement.php

// Récupérer les données
$nom = $_POST['nom'];
$password = $_POST['password'];

// Vérifier l'existence
if (isset($_POST['nom'])) {
    echo "Bonjour " . $_POST['nom'];
}

// Avec valeur par défaut
$nom = $_POST['nom'] ?? '';

// Vérifier si c'est une requête POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Traiter le formulaire
}

// Récupérer tout
print_r($_POST);
?>
```

**Caractéristiques de POST :**
- ✅ Invisible dans l'URL
- ✅ Pas de limite de taille
- ✅ Pour données sensibles
- ❌ Ne peut pas être mis en favori
- ❌ Non idempotent (peut modifier l'état)

**Utiliser POST pour :**
- Formulaires de connexion
- Création/modification de données
- Upload de fichiers
- Actions qui modifient l'état

### Autres méthodes (aperçu)

```php
<?php
// PUT : mettre à jour complètement une ressource
// DELETE : supprimer une ressource
// PATCH : mettre à jour partiellement
// HEAD : comme GET mais sans corps
// OPTIONS : obtenir les méthodes supportées

// Récupérer la méthode utilisée
$methode = $_SERVER['REQUEST_METHOD'];

switch ($methode) {
    case 'GET':
        // Lire
        break;
    case 'POST':
        // Créer
        break;
    case 'PUT':
        // Mettre à jour
        break;
    case 'DELETE':
        // Supprimer
        break;
}
?>
```

---

## $_REQUEST : GET + POST + COOKIE

```php
<?php
// $_REQUEST contient $_GET + $_POST + $_COOKIE
$valeur = $_REQUEST['nom'];

// ⚠️ Pas recommandé : on ne sait pas d'où vient la donnée
// Préfère $_GET ou $_POST explicitement

// Ordre de priorité (configurable)
// Par défaut : COOKIE > POST > GET
?>
```

---

## Les superglobales HTTP

### $_SERVER : informations sur le serveur et la requête

```php
<?php
// Méthode HTTP
echo $_SERVER['REQUEST_METHOD'];  // GET, POST, etc.

// URI demandée
echo $_SERVER['REQUEST_URI'];  // /page.php?id=5

// Script exécuté
echo $_SERVER['SCRIPT_NAME'];  // /page.php

// Query string
echo $_SERVER['QUERY_STRING'];  // id=5

// Protocole
echo $_SERVER['SERVER_PROTOCOL'];  // HTTP/1.1

// Nom de domaine
echo $_SERVER['HTTP_HOST'];  // example.com

// IP du client
echo $_SERVER['REMOTE_ADDR'];  // 192.168.1.1

// User Agent (navigateur)
echo $_SERVER['HTTP_USER_AGENT'];  // Mozilla/5.0...

// Referer (page précédente)
echo $_SERVER['HTTP_REFERER'] ?? 'Direct';

// Port du serveur
echo $_SERVER['SERVER_PORT'];  // 80 ou 443

// HTTPS activé ?
$is_https = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';

// URL complète
$url = (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . 
       $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
?>
```

### $_FILES : fichiers uploadés

```php
<?php
// On verra en détail au Chapitre 10
if (isset($_FILES['fichier'])) {
    $fichier = $_FILES['fichier'];
    $nom = $fichier['name'];
    $taille = $fichier['size'];
    $type = $fichier['type'];
    $tmp = $fichier['tmp_name'];
}
?>
```

---

## Les en-têtes HTTP (Headers)

### Lire les en-têtes de requête

```php
<?php
// Fonction pour tous les en-têtes
$headers = getallheaders();
print_r($headers);
/*
Array (
    [Host] => example.com
    [User-Agent] => Mozilla/5.0...
    [Accept] => text/html
    [Cookie] => session=abc123
)
*/

// En-tête spécifique
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$acceptLanguage = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';

// Détection de l'accept
$accept = $_SERVER['HTTP_ACCEPT'] ?? '';
if (strpos($accept, 'application/json') !== false) {
    // Le client préfère JSON
}
?>
```

### Envoyer des en-têtes de réponse

```php
<?php
// ⚠️ header() DOIT être appelé AVANT toute sortie

// Content-Type
header('Content-Type: text/html; charset=utf-8');
header('Content-Type: application/json');
header('Content-Type: text/plain');

// Redirection
header('Location: /autre-page.php');
exit;  // Important après une redirection

// Code de statut
header('HTTP/1.1 404 Not Found');
http_response_code(404);  // Plus simple

// Cache control
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

// Download forcé
header('Content-Disposition: attachment; filename="document.pdf"');

// CORS (Cross-Origin Resource Sharing)
header('Access-Control-Allow-Origin: *');

// Sécurité
header('X-Frame-Options: DENY');
header('X-Content-Type-Options: nosniff');
?>
```

**⚠️ Erreur courante : "Headers already sent"**

```php
<?php
echo "Hello";  // Sortie envoyée

header('Location: /page.php');  // ❌ Erreur !
// Cannot modify header information - headers already sent

// ✅ Solution : appeler header() avant toute sortie
?>
```

---

## Les codes de statut HTTP

### Codes de succès (2xx)

```php
<?php
// 200 OK : succès
http_response_code(200);  // Par défaut

// 201 Created : ressource créée
http_response_code(201);
echo json_encode(['id' => 42]);

// 204 No Content : succès sans corps
http_response_code(204);
?>
```

### Codes de redirection (3xx)

```php
<?php
// 301 Moved Permanently : redirection permanente
header('HTTP/1.1 301 Moved Permanently');
header('Location: /nouvelle-url.php');
exit;

// 302 Found : redirection temporaire
header('Location: /page-temporaire.php');  // 302 par défaut
exit;

// 304 Not Modified : ressource non modifiée (cache)
http_response_code(304);
?>
```

### Codes d'erreur client (4xx)

```php
<?php
// 400 Bad Request : requête invalide
if (!isset($_POST['email'])) {
    http_response_code(400);
    echo "Email requis";
    exit;
}

// 401 Unauthorized : authentification requise
if (!isset($_SESSION['user'])) {
    http_response_code(401);
    echo "Connexion requise";
    exit;
}

// 403 Forbidden : accès interdit
if (!$user->isAdmin()) {
    http_response_code(403);
    echo "Accès refusé";
    exit;
}

// 404 Not Found : ressource non trouvée
if (!file_exists($fichier)) {
    http_response_code(404);
    echo "Page non trouvée";
    exit;
}

// 405 Method Not Allowed : mauvaise méthode
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "Méthode POST requise";
    exit;
}

// 422 Unprocessable Entity : données invalides
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo "Email invalide";
    exit;
}

// 429 Too Many Requests : trop de requêtes
if ($rate_limit_exceeded) {
    http_response_code(429);
    header('Retry-After: 60');
    echo "Trop de requêtes, réessayez dans 60 secondes";
    exit;
}
?>
```

### Codes d'erreur serveur (5xx)

```php
<?php
// 500 Internal Server Error : erreur serveur
try {
    // Code qui peut échouer
} catch (Exception $e) {
    http_response_code(500);
    echo "Erreur serveur";
    exit;
}

// 503 Service Unavailable : service indisponible
if ($maintenance_mode) {
    http_response_code(503);
    header('Retry-After: 3600');
    echo "Site en maintenance";
    exit;
}
?>
```

---

## Redirections

### Redirection simple

```php
<?php
// Redirection vers une autre page
header('Location: /accueil.php');
exit;  // Important !

// Avec chemin relatif
header('Location: autre-page.php');
exit;

// Avec paramètres
header('Location: page.php?id=5&action=edit');
exit;

// Vers un autre site
header('Location: https://example.com');
exit;
?>
```

### Redirection après traitement

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Traiter les données
    $nom = $_POST['nom'];
    
    // Sauvegarder en base...
    
    // Rediriger pour éviter la resoumission
    header('Location: /confirmation.php');
    exit;
}
?>
```

### Pattern PRG (Post/Redirect/Get)

```php
<?php
// Évite le "Renvoyer le formulaire ?" du navigateur

// Page avec formulaire (GET)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    ?>
    <form method="POST">
        <input name="nom">
        <button>Envoyer</button>
    </form>
    <?php
}

// Traitement (POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = $_POST['nom'];
    
    // Traiter...
    
    // Redirection (GET)
    $_SESSION['message'] = "Enregistré avec succès !";
    header('Location: /confirmation.php');
    exit;
}
?>
```

---

## Télécharger un fichier

### Forcer le téléchargement

```php
<?php
$fichier = 'documents/rapport.pdf';

if (file_exists($fichier)) {
    // En-têtes pour forcer le téléchargement
    header('Content-Type: application/pdf');
    header('Content-Disposition: attachment; filename="' . basename($fichier) . '"');
    header('Content-Length: ' . filesize($fichier));
    
    // Lire et envoyer le fichier
    readfile($fichier);
    exit;
} else {
    http_response_code(404);
    echo "Fichier non trouvé";
}
?>
```

### Afficher dans le navigateur

```php
<?php
$image = 'images/photo.jpg';

if (file_exists($image)) {
    // Afficher l'image dans le navigateur
    header('Content-Type: image/jpeg');
    header('Content-Length: ' . filesize($image));
    
    readfile($image);
    exit;
}
?>
```

---

## Réponses JSON (API)

```php
<?php
// Définir le Content-Type
header('Content-Type: application/json; charset=utf-8');

// Données
$response = [
    'success' => true,
    'data' => [
        'id' => 1,
        'nom' => 'Alice',
        'age' => 25
    ],
    'message' => 'Données récupérées'
];

// Envoyer JSON
echo json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
exit;

// Avec code de statut
http_response_code(200);
echo json_encode($response);
exit;

// Erreur en JSON
http_response_code(404);
echo json_encode([
    'success' => false,
    'error' => 'Ressource non trouvée'
]);
exit;
?>
```

---

## Sécurité et bonnes pratiques

### HTTPS

```php
<?php
// Forcer HTTPS
if (!isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] !== 'on') {
    $redirect = 'https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header('Location: ' . $redirect);
    exit;
}

// Vérifier si HTTPS
function is_https() {
    return isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
}
?>
```

### Valider la méthode HTTP

```php
<?php
// Accepter seulement POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    die('Méthode non autorisée');
}

// Fonction helper
function require_method($method) {
    if ($_SERVER['REQUEST_METHOD'] !== strtoupper($method)) {
        http_response_code(405);
        die("Méthode $method requise");
    }
}

require_method('POST');
?>
```

### Nettoyer les données GET/POST

```php
<?php
// Toujours valider et nettoyer
$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
if ($id === false || $id === null) {
    http_response_code(400);
    die('ID invalide');
}

$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
if ($email === false) {
    http_response_code(400);
    die('Email invalide');
}

// Fonction de nettoyage
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

$nom = clean_input($_POST['nom'] ?? '');
?>
```

### Headers de sécurité

```php
<?php
// Protections basiques
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Content Security Policy (avancé)
header("Content-Security-Policy: default-src 'self'");

// HSTS (forcer HTTPS)
header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
?>
```

---

## Cas pratiques

### Système de routing simple

```php
<?php
// index.php

$uri = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];

// Nettoyer l'URI
$uri = parse_url($uri, PHP_URL_PATH);
$uri = trim($uri, '/');

// Router
switch ($uri) {
    case '':
    case 'accueil':
        require 'pages/accueil.php';
        break;
    
    case 'articles':
        if ($method === 'GET') {
            require 'pages/articles/liste.php';
        } elseif ($method === 'POST') {
            require 'pages/articles/creer.php';
        }
        break;
    
    case 'contact':
        require 'pages/contact.php';
        break;
    
    default:
        http_response_code(404);
        require 'pages/404.php';
}
?>
```

### API REST simple

```php
<?php
// api.php

header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

// Parser l'URI
$path = parse_url($uri, PHP_URL_PATH);
$segments = explode('/', trim($path, '/'));

// Route : /api/users ou /api/users/5
if ($segments[0] === 'api' && $segments[1] === 'users') {
    
    $id = $segments[2] ?? null;
    
    switch ($method) {
        case 'GET':
            if ($id) {
                // Récupérer un utilisateur
                $user = get_user($id);
                if ($user) {
                    echo json_encode($user);
                } else {
                    http_response_code(404);
                    echo json_encode(['error' => 'User not found']);
                }
            } else {
                // Liste des utilisateurs
                $users = get_all_users();
                echo json_encode($users);
            }
            break;
        
        case 'POST':
            // Créer un utilisateur
            $data = json_decode(file_get_contents('php://input'), true);
            $user = create_user($data);
            http_response_code(201);
            echo json_encode($user);
            break;
        
        case 'PUT':
            // Mettre à jour
            if ($id) {
                $data = json_decode(file_get_contents('php://input'), true);
                $user = update_user($id, $data);
                echo json_encode($user);
            }
            break;
        
        case 'DELETE':
            // Supprimer
            if ($id) {
                delete_user($id);
                http_response_code(204);
            }
            break;
    }
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Endpoint not found']);
}
?>
```

### Détection de mobile

```php
<?php
function is_mobile() {
    $user_agent = $_SERVER['HTTP_USER_AGENT'] ?? '';
    
    $mobile_agents = [
        'Mobile', 'Android', 'iPhone', 'iPad', 
        'Windows Phone', 'webOS'
    ];
    
    foreach ($mobile_agents as $agent) {
        if (stripos($user_agent, $agent) !== false) {
            return true;
        }
    }
    
    return false;
}

if (is_mobile()) {
    require 'templates/mobile.php';
} else {
    require 'templates/desktop.php';
}
?>
```

---

## Debugging HTTP

### Afficher toutes les variables

```php
<?php
echo "<h2>GET</h2>";
print_r($_GET);

echo "<h2>POST</h2>";
print_r($_POST);

echo "<h2>SERVER</h2>";
print_r($_SERVER);

echo "<h2>HEADERS</h2>";
print_r(getallheaders());
?>
```

### Logger les requêtes

```php
<?php
function log_request() {
    $log = sprintf(
        "[%s] %s %s - %s\n",
        date('Y-m-d H:i:s'),
        $_SERVER['REQUEST_METHOD'],
        $_SERVER['REQUEST_URI'],
        $_SERVER['REMOTE_ADDR']
    );
    
    file_put_contents('requests.log', $log, FILE_APPEND);
}

log_request();
?>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ Le fonctionnement du protocole HTTP
- ✅ Les différences entre GET et POST
- ✅ Les superglobales ($_GET, $_POST, $_SERVER)
- ✅ Les en-têtes HTTP (lecture et envoi)
- ✅ Les codes de statut HTTP
- ✅ Les redirections
- ✅ Les bonnes pratiques de sécurité

HTTP est la fondation du web. Comprendre comment il fonctionne est essentiel pour créer des applications web robustes !

---

## 🚀 Prochaine étape

**Chapitre 10 : Formulaires HTML et PHP**

Maintenant que tu comprends HTTP, on va créer des formulaires interactifs ! Tu apprendras à récupérer, valider et traiter les données envoyées par les utilisateurs.