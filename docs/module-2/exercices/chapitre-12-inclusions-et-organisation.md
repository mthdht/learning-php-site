---
prev: 
    text: 'Chapitre 12 : Inclusions et organisation'
    link: '/module-2/chapitres/chapitre-12-inclusions-et-organisation'

next:
  text: 'Chapitre 13 : Gestion des erreurs'
  link: '/module-2/chapitres/chapitre-13-gestion-des-erreurs'
---

# Exercices - Chapitre 12 : Inclusions et organisation

## 📝 Include et require

### Exercice 12.1 : Header et footer
```php
<?php
// Crée header.php avec :
// - DOCTYPE, head, début de body
// - Menu de navigation

// Crée footer.php avec :
// - Copyright
// - Fin de body et html

// Utilise-les dans index.php
?>
```

---

### Exercice 12.2 : Différence include vs require
```php
<?php
// Teste la différence :
// Page 1 : include un fichier inexistant
// Page 2 : require un fichier inexistant
// Observe le comportement
?>
```

---

### Exercice 12.3 : Functions.php
```php
<?php
// Crée includes/functions.php avec :
// - escape($str)
// - redirect($url)
// - is_logged_in()

// Utilise-les dans plusieurs pages
?>
```

---

### Exercice 12.4 : Include_once
```php
<?php
// Crée functions.php avec une fonction
// Teste include vs include_once
// Vérifie qu'include_once évite les doublons
?>
```

---

## 📝 Organisation de projet

### Exercice 12.5 : Structure de base
```
Crée cette structure :
mon-site/
├── index.php
├── about.php
├── contact.php
├── config/
│   └── config.php
├── includes/
│   ├── header.php
│   ├── footer.php
│   └── functions.php
└── assets/
    └── css/
        └── style.css
```

---

### Exercice 12.6 : Config.php
```php
<?php
// config/config.php doit définir :
// - ROOT_PATH
// - BASE_URL
// - ENV (development/production)
// - Affichage d'erreurs selon ENV
?>
```

---

### Exercice 12.7 : Menu dynamique
```php
<?php
// includes/nav.php
// Menu qui indique la page active
// Utilise $_SERVER['SCRIPT_NAME']
// Ajoute la classe "active" sur le lien actuel
?>
```

---

## 📝 Templates

### Exercice 12.8 : Template de base
```php
<?php
// Crée un système de template :
// - includes/layout.php (structure HTML)
// - views/home.php (contenu)
// - render($view, $data)
?>
```

---

### Exercice 12.9 : Template avec variables
```php
<?php
// Layout qui affiche :
// - $title dans <title>
// - $content dans <main>
// - $user si connecté

// Utilise extract($data)
?>
```

---

### Exercice 12.10 : Plusieurs layouts
```php
<?php
// Crée 2 layouts :
// - layouts/default.php (menu complet)
// - layouts/minimal.php (sans menu, pour login)

// render($view, $data, $layout = 'default')
?>
```

---

## 📝 MVC basique

### Exercice 12.11 : Model User
```php
<?php
// models/User.php
// Classe avec méthodes :
// - getAll() : tous les users depuis JSON
// - find($id) : un user par ID
// - create($data) : créer un user
?>
```

---

### Exercice 12.12 : Controller User
```php
<?php
// controllers/UserController.php
// Méthodes :
// - index() : affiche liste
// - show($id) : affiche profil
// - create() : formulaire + traitement
?>
```

---

### Exercice 12.13 : Views User
```php
<?php
// Crée les vues :
// - views/users/list.php
// - views/users/profile.php
// - views/users/create.php

// Utilisées par le controller
?>
```

---

### Exercice 12.14 : Application MVC complète
```php
<?php
// Crée une app de gestion d'articles :
// - models/Article.php
// - controllers/ArticleController.php
// - views/articles/*.php
// - articles.php (point d'entrée)
?>
```

---

## 📝 Router

### Exercice 12.15 : Router simple
```php
<?php
// Crée Router.php avec :
// - get($path, $callback)
// - post($path, $callback)
// - dispatch()

// Routes : /, /about, /contact
?>
```

---

### Exercice 12.16 : Routes avec paramètres
```php
<?php
// Router qui gère :
// /article/5
// /user/profile/alice

// Extrait les paramètres et les passe au callback
?>
```

---

### Exercice 12.17 : Routes vers controllers
```php
<?php
// Au lieu de callbacks, appelle des controllers :
// $router->get('/articles', 'ArticleController@index');
// Parse et appelle la méthode du controller
?>
```

---

## 📝 Autoloading

### Exercice 12.18 : Autoloader basique
```php
<?php
// autoload.php
// spl_autoload_register()
// Cherche dans controllers/, models/, lib/

// Teste en instanciant une classe sans require
?>
```

---

### Exercice 12.19 : Autoloader PSR-4
```php
<?php
// Autoloader qui respecte PSR-4 :
// App\Models\User → models/User.php
// App\Controllers\UserController → controllers/UserController.php
?>
```

---

## 📝 Organisation avancée

### Exercice 12.20 : Bootstrap
```php
<?php
// bootstrap.php qui charge :
// - config
// - autoloader
// - functions
// - session_start()

// index.php : juste require 'bootstrap.php'
?>
```

---

### Exercice 12.21 : Fichiers d'environnement
```php
<?php
// config/dev.php : debug ON
// config/prod.php : debug OFF
// config/config.php : charge selon ENV
?>
```

---

### Exercice 12.22 : Helpers multiples
```php
<?php
// includes/helpers/
// ├── auth.php (is_logged_in, require_auth)
// ├── flash.php (set_flash, get_flash)
// ├── html.php (escape, url, asset)
// └── validation.php (validate_email, etc.)

// Charge tous les helpers automatiquement
?>
```

---

## 📝 Cas pratiques

### Exercice 12.23 : Mini blog structuré
```php
<?php
// Crée un mini blog avec :
// Structure :
// ├── index.php (liste articles)
// ├── article.php (article complet)
// ├── admin.php (CRUD articles)
// ├── models/Article.php
// ├── controllers/ArticleController.php
// └── views/articles/*.php
?>
```

---

### Exercice 12.24 : Dashboard admin
```php
<?php
// Zone admin séparée :
// admin/
// ├── index.php (dashboard)
// ├── users.php (gestion users)
// ├── articles.php (gestion articles)
// └── includes/
//     ├── sidebar.php
//     └── header.php (différent du front)
?>
```

---

### Exercice 12.25 : API structurée
```php
<?php
// api/
// ├── index.php (router API)
// ├── controllers/
// │   └── ApiController.php
// └── responses/
//     ├── success.php
//     └── error.php

// Routes : /api/users, /api/articles
// Retourne JSON
?>
```

---

## 🎯 Exercices bonus (difficiles)

### Bonus 1 : Multi-langue
```php
<?php
// Système de traduction :
// lang/
// ├── fr.php (return ['welcome' => 'Bienvenue'])
// ├── en.php (return ['welcome' => 'Welcome'])
// └── es.php (return ['welcome' => 'Bienvenido'])

// trans('welcome') selon $_SESSION['lang']
?>
```

---

### Bonus 2 : Système de modules
```php
<?php
// modules/
// ├── blog/
// │   ├── controllers/
// │   ├── models/
// │   └── views/
// └── shop/
//     ├── controllers/
//     ├── models/
//     └── views/

// Charge dynamiquement selon le module actif
?>
```

---

### Bonus 3 : Cache de templates
```php
<?php
// render_cached($view, $data, $ttl = 3600)
// Cache le HTML généré
// cache/
// └── home.html (fichier caché)

// Si cache valide : readfile()
// Sinon : render() + save cache
?>
```

---

### Bonus 4 : Middleware system
```php
<?php
// Middlewares qui s'exécutent avant les routes :
// - AuthMiddleware (vérifie auth)
// - LogMiddleware (log la requête)
// - CsrfMiddleware (vérifie token)

// $router->middleware(['auth', 'csrf'])->get(...)
?>
```

---

### Bonus 5 : Dependency injection
```php
<?php
// Container qui gère les dépendances :
// $container->bind('User', function() {
//     return new User();
// });

// Dans controller :
// function __construct(User $user) {
//     $this->user = $user;
// }
?>
```

---

### Bonus 6 : Service locator
```php
<?php
// Registry/ServiceLocator pattern :
// App::register('db', $db);
// App::register('auth', $auth);

// Partout : $db = App::get('db');
?>
```

---

### Bonus 7 : Événements
```php
<?php
// Système d'événements :
// Event::listen('user.registered', function($user) {
//     // Envoyer email
// });

// Event::trigger('user.registered', $user);
?>
```

---

### Bonus 8 : Views avec sections
```php
<?php
// Layout :
// @yield('content')
// @yield('sidebar')

// View :
// @section('content')
//     <p>Contenu</p>
// @endsection

// Parse et remplace les sections
?>
```

---

### Bonus 9 : Assets pipeline
```php
<?php
// asset('css/style.css')
// Génère : <link href="/assets/css/style.css?v=hash">

// Hash change si fichier modifié (cache busting)
?>
```

---

### Bonus 10 : Console commands
```php
<?php
// php console.php make:controller ArticleController
// php console.php make:model User
// php console.php clear:cache

// Génère automatiquement les fichiers
?>
```

---

## 💡 Conseils

- **Organise dès le début** : plus facile que de refactorer après
- **Un fichier = une responsabilité** : pas de fichier de 1000 lignes
- **Chemins absolus** : utilise des constantes (ROOT_PATH)
- **Conventions** : reste cohérent dans ton nommage
- **Commentaires** : documente la structure du projet
- **Autoloading** : évite les require manuels partout
- **DRY** : Don't Repeat Yourself, factorise !

**Solutions disponibles après avoir essayé par toi-même !**