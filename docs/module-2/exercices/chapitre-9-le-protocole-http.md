---
prev: 
    text: 'Chapitre 9: Le protocole HTTP.'
    link: '/module-2/chapitres/chapitre-9-le-protocole-http'

next:
  text: 'Chapitre 10: .'
  link: '/module-2/exercices/chapitre-10'
---

# Exercices - Chapitre 9 : Le protocole HTTP

## 📝 GET et POST

### Exercice 9.1 : Paramètres GET
```php
<?php
// Crée une page search.php
// Récupère un paramètre "q" via GET
// Affiche : "Résultats pour : [recherche]"
// URL de test : search.php?q=php
?>
```

---

### Exercice 9.2 : Pagination
```php
<?php
// Crée un système de pagination
// Récupère le paramètre "page" via GET
// Affiche : "Vous êtes sur la page X"
// Page par défaut : 1
// URL de test : page.php?page=3
?>
```

---

### Exercice 9.3 : Formulaire POST simple
```php
<?php
// Crée un formulaire avec nom et email (méthode POST)
// Après soumission, affiche : "Bonjour [nom], votre email est [email]"
?>
```

---

### Exercice 9.4 : Différence GET vs POST
```php
<?php
// Crée deux formulaires identiques
// Un avec method="GET", l'autre avec method="POST"
// Compare le comportement dans l'URL
?>
```

---

## 📝 $_SERVER

### Exercice 9.5 : Informations de requête
```php
<?php
// Affiche :
// - La méthode HTTP utilisée
// - L'URI complète
// - L'adresse IP du visiteur
// - Le User Agent (navigateur)
?>
```

---

### Exercice 9.6 : Détection de navigateur
```php
<?php
// À partir du User Agent, détecte :
// - Chrome
// - Firefox
// - Safari
// - Edge
// - Autre
?>
```

---

### Exercice 9.7 : URL complète
```php
<?php
// Reconstruit l'URL complète de la page
// Résultat : "https://example.com/page.php?id=5"
?>
```

---

### Exercice 9.8 : Referer
```php
<?php
// Si l'utilisateur vient d'une autre page, affiche :
// "Vous venez de : [URL]"
// Sinon : "Accès direct"
?>
```

---

## 📝 En-têtes HTTP

### Exercice 9.9 : Content-Type
```php
<?php
// Crée 3 pages différentes :
// - Une qui envoie du HTML
// - Une qui envoie du JSON
// - Une qui envoie du texte brut
?>
```

---

### Exercice 9.10 : Téléchargement forcé
```php
<?php
// Crée un fichier texte
// Force son téléchargement au lieu de l'afficher
?>
```

---

### Exercice 9.11 : Headers de sécurité
```php
<?php
// Ajoute les en-têtes de sécurité :
// - X-Content-Type-Options
// - X-Frame-Options
// - X-XSS-Protection
?>
```

---

## 📝 Codes de statut

### Exercice 9.12 : Page 404
```php
<?php
// Si le paramètre "page" n'est pas fourni
// Renvoie un code 404
// Affiche "Page non trouvée"
?>
```

---

### Exercice 9.13 : Validation avec 400
```php
<?php
// Si le paramètre "age" n'est pas un nombre
// Renvoie un code 400
// Affiche "Requête invalide"
?>
```

---

### Exercice 9.14 : Authentification basique
```php
<?php
// Si le paramètre "token" ne vaut pas "secret123"
// Renvoie un code 401
// Affiche "Authentification requise"
?>
```

---

### Exercice 9.15 : Méthode non autorisée
```php
<?php
// Accepte seulement les requêtes POST
// Pour les autres méthodes, renvoie 405
// Affiche "Méthode POST requise"
?>
```

---

## 📝 Redirections

### Exercice 9.16 : Redirection simple
```php
<?php
// Redirige automatiquement vers Google
// Après 3 secondes (utilise header() ou HTML meta)
?>
```

---

### Exercice 9.17 : Redirection après POST
```php
<?php
// Si la requête est POST :
// - Traite les données
// - Redirige vers success.php
// Sinon, affiche le formulaire
?>
```

---

### Exercice 9.18 : Redirection avec message
```php
<?php
// Page 1 : formulaire
// Après soumission, redirige vers page 2
// Page 2 : affiche un message de confirmation
// Utilise $_SESSION pour passer le message
?>
```

---

### Exercice 9.19 : Anciennes URLs
```php
<?php
// Si on accède à old-page.php
// Redirige (301) vers new-page.php
?>
```

---

## 📝 API et JSON

### Exercice 9.20 : Réponse JSON
```php
<?php
// Crée une API qui renvoie :
// {
//   "nom": "Alice",
//   "age": 25,
//   "ville": "Paris"
// }
?>
```

---

### Exercice 9.21 : API avec paramètres
```php
<?php
// API qui prend un paramètre "id" via GET
// Renvoie les infos d'un utilisateur en JSON
// Si id invalide : erreur 404 en JSON
?>
```

---

### Exercice 9.22 : API CRUD
```php
<?php
// Crée une API simple :
// GET /users : liste des utilisateurs
// POST /users : créer un utilisateur
// Utilise un tableau en mémoire
?>
```

---

## 📝 Cas pratiques

### Exercice 9.23 : Calculatrice web
```php
<?php
// Formulaire avec :
// - Nombre 1
// - Opération (+, -, *, /)
// - Nombre 2
// Affiche le résultat
// Valide les entrées
?>
```

---

### Exercice 9.24 : Recherche avec filtres
```php
<?php
// Formulaire de recherche de produits avec :
// - Mot-clé (GET: q)
// - Catégorie (GET: cat)
// - Prix min/max (GET: min, max)
// Affiche les paramètres reçus
?>
```

---

### Exercice 9.25 : Upload d'image (aperçu)
```php
<?php
// Formulaire d'upload (méthode POST, enctype)
// Affiche les informations du fichier uploadé :
// - Nom
// - Taille
// - Type
// (Ne pas encore le sauvegarder, juste afficher les infos)
?>
```

---

### Exercice 9.26 : Logger de requêtes
```php
<?php
// À chaque visite, enregistre dans un fichier :
// - Date/heure
// - Méthode HTTP
// - URI
// - IP
// Format : [2024-12-25 14:30] GET /page.php - 192.168.1.1
?>
```

---

### Exercice 9.27 : Force HTTPS
```php
<?php
// Si la connexion n'est pas en HTTPS
// Redirige vers la version HTTPS
?>
```

---

## 🎯 Exercices bonus (difficiles)

### Bonus 1 : Router avancé
```php
<?php
// Crée un router qui gère :
// / → accueil
// /articles → liste
// /articles/5 → article n°5
// /contact → contact
// Autres → 404
?>
```

---

### Bonus 2 : Rate limiting
```php
<?php
// Limite à 10 requêtes par minute par IP
// Utilise un fichier pour stocker les compteurs
// Si dépassé : code 429 avec Retry-After
?>
```

---

### Bonus 3 : API RESTful complète
```php
<?php
// API complète pour des articles :
// GET /api/articles → liste
// GET /api/articles/5 → article 5
// POST /api/articles → créer
// PUT /api/articles/5 → modifier
// DELETE /api/articles/5 → supprimer
// Utilise un fichier JSON pour stocker
?>
```

---

### Bonus 4 : Content negotiation
```php
<?php
// Selon l'en-tête Accept, renvoie :
// - text/html → page HTML
// - application/json → JSON
// - text/plain → texte brut
// Même données, format différent
?>
```

---

### Bonus 5 : Proxy simple
```php
<?php
// Crée un proxy qui :
// - Reçoit une URL via GET
// - Récupère le contenu de cette URL
// - Le renvoie au client
// Gère les erreurs (URL invalide, timeout)
?>
```

---

### Bonus 6 : Statistiques de trafic
```php
<?php
// Enregistre toutes les requêtes
// Puis affiche des stats :
// - Total de requêtes
// - Répartition GET vs POST
// - Top 10 des pages
// - Top 10 des IP
// - Trafic par heure
?>
```

---

### Bonus 7 : Middleware system
```php
<?php
// Crée un système de middlewares :
// - Middleware de logging
// - Middleware d'authentification
// - Middleware de rate limiting
// Chaque requête passe par tous les middlewares
?>
```

---

### Bonus 8 : CORS preflight
```php
<?php
// Gère les requêtes OPTIONS (preflight CORS)
// Renvoie les bons en-têtes CORS :
// - Access-Control-Allow-Origin
// - Access-Control-Allow-Methods
// - Access-Control-Allow-Headers
?>
```

---

### Bonus 9 : Cache HTTP
```php
<?php
// Implémente le cache HTTP :
// - Envoie Last-Modified
// - Vérifie If-Modified-Since
// - Renvoie 304 si non modifié
// - Sinon renvoie le contenu avec 200
?>
```

---

### Bonus 10 : Webhook receiver
```php
<?php
// Crée un endpoint qui reçoit des webhooks :
// - Vérifie la signature HMAC
// - Log la requête
// - Traite les données reçues
// - Renvoie 200 ou 400
?>
```

---

## 💡 Conseils

- Utilise les **DevTools du navigateur** (F12) pour voir les requêtes HTTP
- Onglet **Network** : vois les en-têtes, le statut, le corps de la requête
- Teste avec **Postman** ou **curl** pour simuler différentes requêtes
- Active **display_errors** en développement pour voir les problèmes
- Les **redirections** doivent toujours finir par `exit;`
- **Valide toujours** les données GET/POST
- N'oublie pas : **header() avant toute sortie**

**Solutions disponibles après avoir essayé par toi-même !**