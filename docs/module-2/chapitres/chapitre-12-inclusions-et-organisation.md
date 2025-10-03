---
prev: 
    text: 'Exercices - Sessions et cookies'
    link: '/module-2/exercices/chapitre-11-sessions-et-cookies'

next:
  text: 'Exercices - Inclusions et organisation'
  link: '/module-2/exercices/chapitre-12-inclusions-et-organisation'
---


# Chapitre 12 : Inclusions et organisation

## 📋 Prérequis
- Maîtriser les bases PHP (Module 1)
- Comprendre les formulaires et sessions (Chapitres 10-11)
- Avoir créé plusieurs pages PHP

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Utiliser include et require
- Organiser un projet PHP proprement
- Créer des templates et layouts
- Comprendre l'architecture MVC basique
- Mettre en place un autoloader simple

---

## Introduction

Jusqu'ici, tu as probablement copié-collé le header et footer sur chaque page. C'est fastidieux et difficile à maintenir. Si tu changes le menu, il faut modifier 20 fichiers !

**Les inclusions** permettent de réutiliser du code et d'organiser proprement un projet.

---

## include vs require

### include : inclusion simple

```php
<?php
// header.php
?>
<!DOCTYPE html>
<html>
<head>
    <title>Mon site</title>
</head>
<body>
    <header>
        <h1>Mon Site</h1>
        <nav>
            <a href="index.php">Accueil</a>
            <a href="about.php">À propos</a>
            <a href="contact.php">Contact</a>
        </nav>
    </header>
```

```php
<?php
// index.php
include 'header.php';
?>

<main>
    <h2>Bienvenue</h2>
    <p>Contenu de la page d'accueil</p>
</main>

<?php include 'footer.php'; ?>
```

```php
<?php
// footer.php
?>
    <footer>
        <p>&copy; 2024 Mon Site</p>
    </footer>
</body>
</html>
```

**Si le fichier n'existe pas :** Warning mais continue l'exécution.

### require : inclusion obligatoire

```php
<?php
// config.php
define('DB_HOST', 'localhost');
define('DB_NAME', 'myapp');
?>
```

```php
<?php
// index.php
require 'config.php';  // Fichier critique

echo DB_HOST;  // localhost
?>
```

**Si le fichier n'existe pas :** Erreur fatale, script s'arrête.

### include_once et require_once

Empêche l'inclusion multiple du même fichier.

```php
<?php
// functions.php
function saluer($nom) {
    return "Bonjour $nom";
}
?>
```

```php
<?php
// Sans _once
include 'functions.php';
include 'functions.php';  // Erreur : fonction déjà définie

// Avec _once
include_once 'functions.php';
include_once 'functions.php';  // Ignore, déjà inclus
?>
```

**Quand utiliser quoi ?**
- `require` : fichiers critiques (config, fonctions)
- `include` : templates, parties optionnelles
- `_once` : fichiers avec fonctions/classes

---

## Organisation d'un projet

### Structure de base

```
mon-projet/
├── index.php
├── about.php
├── contact.php
├── config/
│   └── config.php
├── includes/
│   ├── header.php
│   ├── footer.php
│   └── functions.php
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
└── uploads/
```

### Fichier de configuration

```php
<?php
// config/config.php

// Environnement
define('ENV', 'development');  // ou 'production'

// Chemins
define('ROOT_PATH', __DIR__ . '/..');
define('INCLUDES_PATH', ROOT_PATH . '/includes');
define('UPLOADS_PATH', ROOT_PATH . '/uploads');

// Base URL
define('BASE_URL', 'http://localhost/mon-projet');

// Affichage des erreurs
if (ENV === 'development') {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}

// Session
session_start();
?>
```

### Fichier de fonctions communes

```php
<?php
// includes/functions.php

function redirect($url) {
    header("Location: $url");
    exit;
}

function is_logged_in() {
    return isset($_SESSION['user']);
}

function require_auth() {
    if (!is_logged_in()) {
        redirect('login.php');
    }
}

function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

function set_flash($type, $message) {
    $_SESSION['flash'][$type] = $message;
}

function get_flash($type) {
    if (isset($_SESSION['flash'][$type])) {
        $msg = $_SESSION['flash'][$type];
        unset($_SESSION['flash'][$type]);
        return $msg;
    }
    return null;
}
?>
```

---

## Templates et layouts

### Layout de base

```php
<?php
// includes/layout.php

function render($view, $data = []) {
    // Extraire les variables
    extract($data);
    
    // Buffer de sortie
    ob_start();
    
    // Inclure la vue
    require "views/$view.php";
    
    // Récupérer le contenu
    $content = ob_get_clean();
    
    // Inclure le layout
    require 'includes/template.php';
}
?>
```

```php
<?php
// includes/template.php
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?? 'Mon Site' ?></title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <h1>Mon Site</h1>
        <nav>
            <a href="index.php">Accueil</a>
            <a href="about.php">À propos</a>
            <?php if (is_logged_in()): ?>
                <a href="dashboard.php">Dashboard</a>
                <a href="logout.php">Déconnexion</a>
            <?php else: ?>
                <a href="login.php">Connexion</a>
            <?php endif; ?>
        </nav>
    </header>
    
    <main>
        <?php if ($flash = get_flash('success')): ?>
            <div class="alert success"><?= escape($flash) ?></div>
        <?php endif; ?>
        
        <?php if ($flash = get_flash('error')): ?>
            <div class="alert error"><?= escape($flash) ?></div>
        <?php endif; ?>
        
        <?= $content ?>
    </main>
    
    <footer>
        <p>&copy; <?= date('Y') ?> Mon Site</p>
    </footer>
</body>
</html>
```

### Utilisation

```php
<?php
// views/home.php
?>
<h2>Bienvenue</h2>
<p>Ceci est la page d'accueil</p>
```

```php
<?php
// index.php
require 'config/config.php';
require 'includes/functions.php';
require 'includes/layout.php';

render('home', [
    'title' => 'Accueil - Mon Site'
]);
?>
```

---

## Architecture MVC basique

### Principe

**MVC = Model-View-Controller**
- **Model** : gestion des données
- **View** : affichage (HTML)
- **Controller** : logique métier

```
mon-projet-mvc/
├── index.php
├── config/
│   └── config.php
├── controllers/
│   ├── HomeController.php
│   └── UserController.php
├── models/
│   └── User.php
├── views/
│   ├── home.php
│   ├── users/
│   │   ├── list.php
│   │   └── profile.php
│   └── layout.php
└── public/
    ├── css/
    └── js/
```

### Model

```php
<?php
// models/User.php

class User {
    private $users_file = 'data/users.json';
    
    public function getAll() {
        if (!file_exists($this->users_file)) {
            return [];
        }
        
        $json = file_get_contents($this->users_file);
        return json_decode($json, true);
    }
    
    public function find($id) {
        $users = $this->getAll();
        
        foreach ($users as $user) {
            if ($user['id'] == $id) {
                return $user;
            }
        }
        
        return null;
    }
    
    public function create($data) {
        $users = $this->getAll();
        
        $user = [
            'id' => count($users) + 1,
            'nom' => $data['nom'],
            'email' => $data['email'],
            'created_at' => date('Y-m-d H:i:s')
        ];
        
        $users[] = $user;
        
        file_put_contents(
            $this->users_file,
            json_encode($users, JSON_PRETTY_PRINT)
        );
        
        return $user;
    }
}
?>
```

### Controller

```php
<?php
// controllers/UserController.php

class UserController {
    private $userModel;
    
    public function __construct() {
        $this->userModel = new User();
    }
    
    public function index() {
        $users = $this->userModel->getAll();
        
        render('users/list', [
            'title' => 'Liste des utilisateurs',
            'users' => $users
        ]);
    }
    
    public function show($id) {
        $user = $this->userModel->find($id);
        
        if (!$user) {
            http_response_code(404);
            render('errors/404');
            return;
        }
        
        render('users/profile', [
            'title' => $user['nom'],
            'user' => $user
        ]);
    }
    
    public function create() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = [
                'nom' => $_POST['nom'],
                'email' => $_POST['email']
            ];
            
            $user = $this->userModel->create($data);
            
            set_flash('success', 'Utilisateur créé !');
            redirect('users.php');
        }
        
        render('users/create', [
            'title' => 'Nouvel utilisateur'
        ]);
    }
}
?>
```

### View

```php
<?php
// views/users/list.php
?>
<h2>Liste des utilisateurs</h2>

<a href="users.php?action=create">Nouvel utilisateur</a>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($users as $user): ?>
            <tr>
                <td><?= $user['id'] ?></td>
                <td><?= escape($user['nom']) ?></td>
                <td><?= escape($user['email']) ?></td>
                <td>
                    <a href="users.php?action=show&id=<?= $user['id'] ?>">Voir</a>
                </td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>
```

### Point d'entrée

```php
<?php
// users.php

require 'config/config.php';
require 'includes/functions.php';
require 'includes/layout.php';
require 'models/User.php';
require 'controllers/UserController.php';

$controller = new UserController();
$action = $_GET['action'] ?? 'index';

switch ($action) {
    case 'index':
        $controller->index();
        break;
    
    case 'show':
        $id = $_GET['id'] ?? 0;
        $controller->show($id);
        break;
    
    case 'create':
        $controller->create();
        break;
    
    default:
        http_response_code(404);
        echo "404 Not Found";
}
?>
```

---

## Router simple

### Router basique

```php
<?php
// Router.php

class Router {
    private $routes = [];
    
    public function get($path, $callback) {
        $this->routes['GET'][$path] = $callback;
    }
    
    public function post($path, $callback) {
        $this->routes['POST'][$path] = $callback;
    }
    
    public function dispatch() {
        $method = $_SERVER['REQUEST_METHOD'];
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        
        // Supprimer le base path si nécessaire
        $uri = str_replace('/mon-projet', '', $uri);
        
        if (isset($this->routes[$method][$uri])) {
            $callback = $this->routes[$method][$uri];
            call_user_func($callback);
        } else {
            http_response_code(404);
            echo "404 Not Found";
        }
    }
}
?>
```

### Utilisation

```php
<?php
// index.php

require 'config/config.php';
require 'includes/functions.php';
require 'Router.php';

$router = new Router();

// Définir les routes
$router->get('/', function() {
    render('home', ['title' => 'Accueil']);
});

$router->get('/about', function() {
    render('about', ['title' => 'À propos']);
});

$router->get('/contact', function() {
    render('contact', ['title' => 'Contact']);
});

$router->post('/contact', function() {
    // Traiter le formulaire
    set_flash('success', 'Message envoyé !');
    redirect('/contact');
});

// Dispatch
$router->dispatch();
?>
```

---

## Autoloading

### Autoloader simple

```php
<?php
// autoload.php

spl_autoload_register(function($class) {
    $paths = [
        'controllers/',
        'models/',
        'lib/'
    ];
    
    foreach ($paths as $path) {
        $file = $path . $class . '.php';
        
        if (file_exists($file)) {
            require $file;
            return;
        }
    }
});
?>
```

### Utilisation

```php
<?php
// index.php

require 'config/config.php';
require 'autoload.php';

// Plus besoin de require manuel !
$userModel = new User();  // Charge automatiquement models/User.php
$controller = new UserController();  // Charge controllers/UserController.php
?>
```

---

## Bonnes pratiques d'organisation

### 1. Séparer la logique de la présentation

```php
<?php
// ❌ Mauvais : tout mélangé
?>
<!DOCTYPE html>
<html>
<body>
    <?php
    $users = json_decode(file_get_contents('users.json'), true);
    foreach ($users as $user) {
        echo $user['nom'] . '<br>';
    }
    ?>
</body>
</html>
```

```php
<?php
// ✅ Bon : séparé

// Logique
$users = json_decode(file_get_contents('users.json'), true);

// Présentation
?>
<!DOCTYPE html>
<html>
<body>
    <?php foreach ($users as $user): ?>
        <p><?= escape($user['nom']) ?></p>
    <?php endforeach; ?>
</body>
</html>
```

### 2. Un fichier = une responsabilité

```php
// config/config.php → Configuration
// includes/functions.php → Fonctions utilitaires
// models/User.php → Logique utilisateur
// controllers/UserController.php → Actions utilisateur
// views/users/list.php → Affichage liste
```

### 3. Nommer clairement

```php
// ❌ Mauvais
include 'f.php';
include 'u.php';

// ✅ Bon
include 'includes/functions.php';
include 'models/User.php';
```

### 4. Utiliser des constantes pour les chemins

```php
<?php
define('ROOT_PATH', __DIR__);
define('INCLUDES_PATH', ROOT_PATH . '/includes');
define('VIEWS_PATH', ROOT_PATH . '/views');

require INCLUDES_PATH . '/functions.php';
require VIEWS_PATH . '/header.php';
?>
```

---

## Projet exemple complet

```
blog/
├── index.php              # Point d'entrée
├── article.php            # Page article
├── admin.php              # Admin
├── config/
│   ├── config.php         # Configuration
│   └── database.php       # Connexion BDD (Module 3)
├── includes/
│   ├── functions.php      # Fonctions utilitaires
│   ├── auth.php           # Authentification
│   └── layout.php         # Système de layout
├── controllers/
│   ├── ArticleController.php
│   └── AdminController.php
├── models/
│   └── Article.php
├── views/
│   ├── layout.php         # Template principal
│   ├── home.php
│   ├── articles/
│   │   ├── list.php
│   │   └── single.php
│   └── admin/
│       ├── dashboard.php
│       └── articles/
│           ├── create.php
│           └── edit.php
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── uploads/
└── data/
    └── articles.json
```

### index.php

```php
<?php
// Point d'entrée principal

require 'config/config.php';
require 'includes/functions.php';
require 'includes/layout.php';
require 'models/Article.php';
require 'controllers/ArticleController.php';

$controller = new ArticleController();
$controller->index();
?>
```

### article.php

```php
<?php
require 'config/config.php';
require 'includes/functions.php';
require 'includes/layout.php';
require 'models/Article.php';
require 'controllers/ArticleController.php';

$id = $_GET['id'] ?? 0;

$controller = new ArticleController();
$controller->show($id);
?>
```

### admin.php

```php
<?php
require 'config/config.php';
require 'includes/functions.php';
require 'includes/auth.php';
require 'includes/layout.php';
require 'models/Article.php';
require 'controllers/AdminController.php';

// Vérifier authentification
require_auth();

$controller = new AdminController();
$action = $_GET['action'] ?? 'dashboard';

switch ($action) {
    case 'dashboard':
        $controller->dashboard();
        break;
    
    case 'create':
        $controller->create();
        break;
    
    case 'edit':
        $id = $_GET['id'] ?? 0;
        $controller->edit($id);
        break;
    
    case 'delete':
        $id = $_GET['id'] ?? 0;
        $controller->delete($id);
        break;
    
    default:
        $controller->dashboard();
}
?>
```

---

## Gestion des dépendances

### Fichier bootstrap

```php
<?php
// bootstrap.php
// Charge tout ce qui est nécessaire

// Configuration
require __DIR__ . '/config/config.php';

// Autoloader
require __DIR__ . '/autoload.php';

// Fonctions globales
require __DIR__ . '/includes/functions.php';

// Session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Timezone
date_default_timezone_set('Europe/Paris');
?>
```

### Utilisation

```php
<?php
// index.php
require 'bootstrap.php';

// Tout est déjà chargé !
$user = new User();
?>
```

---

## Inclusions conditionnelles

### Charger selon l'environnement

```php
<?php
// config/config.php

define('ENV', 'development');

if (ENV === 'development') {
    require 'config/dev.php';
} else {
    require 'config/prod.php';
}
?>
```

```php
<?php
// config/dev.php
error_reporting(E_ALL);
ini_set('display_errors', 1);
define('DEBUG', true);
?>
```

```php
<?php
// config/prod.php
error_reporting(0);
ini_set('display_errors', 0);
define('DEBUG', false);
?>
```

### Charger selon l'authentification

```php
<?php
session_start();

if (isset($_SESSION['user'])) {
    require 'includes/menu-logged.php';
} else {
    require 'includes/menu-guest.php';
}
?>
```

---

## Chemins relatifs vs absolus

### Problème des chemins relatifs

```php
<?php
// index.php
include 'includes/header.php';  // ✅ Fonctionne

// admin/users.php
include 'includes/header.php';  // ❌ Ne trouve pas le fichier
?>
```

### Solution 1 : Chemins absolus

```php
<?php
// config/config.php
define('ROOT_PATH', __DIR__ . '/..');

// Partout
require ROOT_PATH . '/includes/header.php';  // ✅ Toujours correct
?>
```

### Solution 2 : __DIR__

```php
<?php
// Toujours relatif au fichier actuel
require __DIR__ . '/../includes/header.php';
?>
```

---

## Performances et cache

### Cache de templates

```php
<?php
function render_cached($view, $data = [], $cache_time = 3600) {
    $cache_file = "cache/$view.html";
    
    // Si cache existe et valide
    if (file_exists($cache_file) && 
        time() - filemtime($cache_file) < $cache_time) {
        
        readfile($cache_file);
        return;
    }
    
    // Sinon, générer et cacher
    ob_start();
    render($view, $data);
    $content = ob_get_clean();
    
    file_put_contents($cache_file, $content);
    echo $content;
}
?>
```

### Minification automatique

```php
<?php
function minify_html($html) {
    // Supprimer espaces, tabs, newlines superflus
    $html = preg_replace('/\s+/', ' ', $html);
    $html = preg_replace('/>\s+</', '><', $html);
    return trim($html);
}

function render_minified($view, $data = []) {
    ob_start();
    render($view, $data);
    $content = ob_get_clean();
    
    echo minify_html($content);
}
?>
```

---

## Debugging et développement

### Mode debug

```php
<?php
// config/config.php

define('DEBUG', true);

if (DEBUG) {
    // Afficher les erreurs
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    // Logger les includes
    function debug_include($file) {
        echo "<!-- Include: $file -->\n";
        include $file;
    }
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
}
?>
```

### Profiler d'inclusions

```php
<?php
$includes_count = 0;
$includes_list = [];

function track_include($file) {
    global $includes_count, $includes_list;
    
    $start = microtime(true);
    require $file;
    $time = microtime(true) - $start;
    
    $includes_count++;
    $includes_list[] = [
        'file' => $file,
        'time' => $time
    ];
}

// En fin de page
if (DEBUG) {
    echo "<!-- $includes_count fichiers inclus -->";
    foreach ($includes_list as $inc) {
        echo "<!-- {$inc['file']}: " . round($inc['time'] * 1000, 2) . "ms -->";
    }
}
?>
```

---

## Erreurs courantes

### 1. Include dans include

```php
<?php
// header.php
require 'functions.php';  // Chemin relatif à header.php

// index.php
require 'includes/header.php';  // ❌ functions.php introuvable

// ✅ Solution : utiliser __DIR__
// header.php
require __DIR__ . '/functions.php';
?>
```

### 2. Variables non définies

```php
<?php
// page.php
$titre = "Mon titre";
require 'includes/header.php';

// header.php
echo $titre;  // ✅ Fonctionne : les variables sont partagées
?>
```

### 3. Output avant header()

```php
<?php
// header.php
?>
<html>...

<?php
// page.php
require 'header.php';  // Affiche du HTML
header('Location: autre.php');  // ❌ Headers already sent
?>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ include, require et leurs variantes _once
- ✅ Organisation d'un projet PHP structuré
- ✅ Création de templates et layouts
- ✅ Architecture MVC basique
- ✅ Système de routing simple
- ✅ Autoloading de classes
- ✅ Bonnes pratiques d'organisation

Ton code est maintenant organisé, maintenable et professionnel !

---

## 🚀 Prochaine étape

**Chapitre 13 : Gestion des erreurs**

Maintenant que ton code est bien organisé, il faut le rendre robuste ! Tu vas apprendre à gérer les erreurs proprement : try-catch, exceptions personnalisées, logging, et affichage adapté selon l'environnement.