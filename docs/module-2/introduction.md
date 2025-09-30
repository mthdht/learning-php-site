---
prev: 
    text: 'Module 1: Conclusion'
    link: '/module-1/conclusion'

next:
  text: 'Chapitre 9: Le protocole HTTP.'
  link: '/module-2/chapitres/chapitre-9-le-protocole-http'
---
# Module 2 : PHP Web & Formulaires


## 🌐 Bienvenue dans le web !

Jusqu'ici, tu as écrit des scripts PHP en ligne de commande. Maintenant, on passe au **web** : ton code va communiquer avec des navigateurs, récupérer des données d'utilisateurs, et créer des pages dynamiques.

C'est là que PHP prend tout son sens. PHP a été créé pour le web.


## 🎯 Qu'est-ce qu'on va apprendre ?

### Les 5 chapitres du module

**Chapitre 9 : Le protocole HTTP**
- Comment le navigateur et le serveur communiquent
- GET vs POST : quand utiliser quoi
- Les en-têtes HTTP (headers)
- Les codes de statut (200, 404, 500...)

**Chapitre 10 : Formulaires HTML et PHP**
- Créer des formulaires HTML
- Récupérer les données avec $_GET et $_POST
- Valider les données côté serveur
- Gérer les uploads de fichiers

**Chapitre 11 : Sessions et cookies**
- Se "souvenir" des utilisateurs entre les pages
- Créer un système de connexion/déconnexion
- Gérer un panier d'achat
- Sécuriser les sessions

**Chapitre 12 : Inclusions et organisation**
- Structurer ton code proprement
- include vs require
- Templates et layouts
- Architecture MVC basique

**Chapitre 13 : Gestion des erreurs**
- Types d'erreurs PHP
- Try-catch et exceptions
- Logger les erreurs
- Différence dev/production


## 🔄 La grande différence

### Module 1 : Scripts locaux
```php
<?php
$nom = "Alice";
echo "Bonjour $nom";
// Exécution : php script.php
?>
```

### Module 2 : Applications web
```php
<?php
$nom = $_POST['nom'] ?? 'Invité';
echo "Bonjour $nom";
// Exécution : via navigateur (http://localhost/page.php)
?>
```

**Ce qui change :**
- Les données viennent d'utilisateurs (formulaires)
- Le code s'exécute sur un serveur web
- La réponse part vers un navigateur
- HTTP est le langage de communication

---

## ⏱️ Combien de temps ça prend ?

**Estimation : 30-45 heures au total**
- Lecture des chapitres : 12-15h
- Exercices pratiques : 18-30h

**Difficulté :** ⭐⭐⭐☆☆ (Intermédiaire)

**Prérequis obligatoire :**
- Module 1 terminé et compris
- Connaissances HTML de base (formulaires)

---

## 🚀 Ce que tu vas construire

Dès ce module, tu pourras créer :

### Applications simples
- Formulaire de contact avec validation
- Système de connexion (login/logout)
- Livre d'or avec commentaires
- Calculatrice web interactive

### Applications intermédiaires
- Mini blog avec articles et commentaires
- Liste de tâches (todo list) persistante
- Panier d'achat avec sessions
- Formulaire d'inscription complet

---

## 💡 Comment utiliser ce module ?

### 1. Configure ton environnement web
Tu as besoin d'un serveur web (Apache) et PHP. Si tu as installé XAMPP/WAMP/MAMP au Chapitre 1, c'est bon.

**Test rapide :**
```php
<?php phpinfo(); ?>
```
Sauvegarde dans `htdocs/test.php`, ouvre `http://localhost/test.php`

### 2. Teste dans le navigateur
Plus de ligne de commande ! Tous les exercices se testent dans le navigateur.

### 3. Utilise les DevTools
Appuie sur F12 dans ton navigateur. Onglet "Network" : tu verras toutes les requêtes HTTP.

### 4. Active l'affichage des erreurs
```php
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>
```

---

## ⚠️ Erreurs courantes du débutant web

### 1. "Headers already sent"
```php
<?php
echo "Hello";  // Sortie envoyée
header('Location: page.php');  // ❌ Trop tard !
?>
```
**Solution :** Appelle `header()` AVANT tout `echo`.

### 2. Oublier session_start()
```php
<?php
$_SESSION['user'] = 'Alice';  // ❌ Ne fonctionne pas
?>
```
**Solution :** Toujours `session_start()` en premier.

### 3. Confondre GET et POST
```php
<form method="POST">
    <input name="nom">
</form>

<?php
$nom = $_GET['nom'];  // ❌ Mauvaise méthode
?>
```
**Solution :** Utilise `$_POST` pour un formulaire POST.

### 4. Ne pas valider les données
```php
<?php
echo $_POST['nom'];  // ❌ Dangereux (XSS)
echo htmlspecialchars($_POST['nom']);  // ✅ Sécurisé
?>
```

---

## 🔐 Sécurité : règle d'or

**JAMAIS faire confiance aux données utilisateur.**

Tout ce qui vient de l'utilisateur doit être :
1. **Validé** : c'est le bon type/format ?
2. **Nettoyé** : pas de caractères dangereux ?
3. **Échappé** : sécurisé pour l'affichage ?

On verra ça en détail dans chaque chapitre.

---

## 🛠️ Outils recommandés

### Navigateur
- Chrome/Firefox avec DevTools (F12)
- Extension : "EditThisCookie" pour voir les cookies
- Extension : "HTTP Headers" pour voir les en-têtes

### Éditeur
- VS Code avec extension PHP
- PhpStorm (payant mais excellent)

### Autres
- Postman : tester les requêtes HTTP
- XAMPP/WAMP/MAMP : serveur web local

---

## 📚 Concepts clés à comprendre

### Client / Serveur
- **Client** = navigateur de l'utilisateur
- **Serveur** = ta machine avec Apache + PHP
- Ils communiquent via **HTTP**

### Le cycle web
1. Utilisateur remplit un formulaire
2. Navigateur envoie requête HTTP POST
3. Serveur exécute PHP
4. PHP génère HTML
5. Serveur renvoie réponse HTTP
6. Navigateur affiche la page

### HTTP est "sans état"
Chaque requête est indépendante. Le serveur ne se souvient de rien.  
**Solution :** Sessions et cookies (Chapitre 11).

---

## 🎯 Objectif du module

À la fin, tu sauras :
- ✅ Créer des formulaires et traiter les données
- ✅ Gérer les sessions utilisateur
- ✅ Organiser ton code proprement
- ✅ Gérer les erreurs professionnellement
- ✅ Sécuriser les entrées utilisateur

---

## 🚀 C'est parti !

Tu as les fondations (Module 1). Maintenant, on construit dessus.

Le web est plus visuel, plus interactif, plus concret. Tu vas adorer.

**Prêt à comprendre HTTP ?**

Direction le Chapitre 9 ! 👉