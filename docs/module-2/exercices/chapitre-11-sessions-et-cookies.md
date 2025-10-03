---
prev: 
    text: 'Chapitre 11 : Sessions et cookies'
    link: '/module-2/chapitres/chapitre-11-sessions-et-cookies'

next:
  text: 'Chapitre 12 : Inclusions et organisation'
  link: '/module-2/chapitres/chapitre-12-inclusions-et-organisation'
---

# Exercices - Chapitre 11 : Sessions et cookies

## 📝 Sessions de base

### Exercice 11.1 : Première session
```php
<?php
// Crée une session
// Stocke ton prénom
// Affiche "Bonjour [prénom] !"
// Recharge la page : le prénom doit persister
?>
```

---

### Exercice 11.2 : Compteur de pages vues
```php
<?php
// Crée un compteur qui s'incrémente à chaque visite
// Affiche : "Vous avez vu X pages"
?>
```

---

### Exercice 11.3 : Dernière visite
```php
<?php
// Enregistre la date/heure de la visite
// Affiche : "Dernière visite : [date]"
// Lors de la première visite : "Bienvenue !"
?>
```

---

### Exercice 11.4 : Détruire une session
```php
<?php
// Page 1 : crée une session avec des données
// Page 2 : affiche les données
// Page 3 : détruit la session
// Vérifie que les données ont disparu
?>
```

---

## 📝 Authentification

### Exercice 11.5 : Login simple
```php
<?php
// Crée un formulaire de connexion
// Email : admin@example.com
// Mot de passe : secret123
// Si correct : stocke l'email en session
// Redirige vers dashboard.php
?>
```

---

### Exercice 11.6 : Page protégée
```php
<?php
// dashboard.php
// Vérifie si l'utilisateur est connecté
// Si non : redirige vers login.php
// Si oui : affiche "Bienvenue [email]"
?>
```

---

### Exercice 11.7 : Déconnexion
```php
<?php
// logout.php
// Détruit la session
// Redirige vers login.php
// Vérifie qu'on ne peut plus accéder au dashboard
?>
```

---

### Exercice 11.8 : Système complet
```php
<?php
// Crée un système login/logout complet avec :
// - login.php (formulaire)
// - dashboard.php (protégé)
// - logout.php (déconnexion)
// - Protection des pages
?>
```

---

## 📝 Cookies

### Exercice 11.9 : Premier cookie
```php
<?php
// Crée un cookie "prenom" qui dure 7 jours
// Affiche "Bonjour [prenom]" s'il existe
?>
```

---

### Exercice 11.10 : Supprimer un cookie
```php
<?php
// Crée un cookie
// Puis supprime-le
// Vérifie qu'il n'existe plus
?>
```

---

### Exercice 11.11 : Préférence de langue
```php
<?php
// Formulaire pour choisir la langue (fr, en, es)
// Stocke dans un cookie
// Affiche le contenu dans la langue choisie
?>
```

---

### Exercice 11.12 : Thème clair/sombre
```php
<?php
// Bouton pour basculer entre thème clair et sombre
// Stocke la préférence dans un cookie
// Applique le thème (change la classe CSS)
?>
```

---

## 📝 Panier d'achat

### Exercice 11.13 : Ajouter au panier
```php
<?php
// Liste de 3 produits avec bouton "Ajouter au panier"
// Stocke les produits dans $_SESSION['panier']
// Affiche "X produits dans le panier"
?>
```

---

### Exercice 11.14 : Afficher le panier
```php
<?php
// Page cart.php qui affiche :
// - Liste des produits
// - Quantité de chaque produit
// - Prix total
?>
```

---

### Exercice 11.15 : Modifier quantités
```php
<?php
// Dans le panier, permets de :
// - Augmenter la quantité (+)
// - Diminuer la quantité (-)
// - Retirer complètement un produit
?>
```

---

### Exercice 11.16 : Vider le panier
```php
<?php
// Bouton "Vider le panier"
// Supprime tous les produits
// Affiche "Panier vide"
?>
```

---

## 📝 Messages flash

### Exercice 11.17 : Message de succès
```php
<?php
// Après soumission d'un formulaire
// Affiche "Message envoyé !" en vert
// Le message disparaît au rechargement
?>
```

---

### Exercice 11.18 : Système de flash complet
```php
<?php
// Crée les fonctions :
// - set_flash($type, $message)
// - get_flash($type)
// Types : success, error, info, warning
// Affiche avec des couleurs différentes
?>
```

---

### Exercice 11.19 : Flash après redirection
```php
<?php
// form.php : formulaire
// Si valide : set_flash + redirection
// success.php : affiche le flash
?>
```

---

## 📝 Sécurité

### Exercice 11.20 : Régénération d'ID
```php
<?php
// Après connexion réussie
// Régénère l'ID de session
// Affiche l'ancien et le nouvel ID
?>
```

---

### Exercice 11.21 : Expiration de session
```php
<?php
// Session expire après 5 minutes d'inactivité
// Affiche "Session expirée, reconnectez-vous"
// Redirige vers login.php
?>
```

---

### Exercice 11.22 : Limitation de tentatives
```php
<?php
// Limite à 3 tentatives de connexion
// Après 3 échecs : "Trop de tentatives, réessayez dans 5 minutes"
// Utilise $_SESSION pour compter
?>
```

---

### Exercice 11.23 : Vérification IP
```php
<?php
// À la connexion, stocke l'IP
// Sur chaque page, vérifie l'IP
// Si différente : déconnexion et message d'alerte
?>
```

---

## 📝 Cas pratiques

### Exercice 11.24 : Historique de navigation
```php
<?php
// Enregistre les 5 dernières pages visitées
// Affiche l'historique avec liens
?>
```

---

### Exercice 11.25 : Système de favoris
```php
<?php
// Liste d'articles
// Bouton "Ajouter aux favoris"
// Page favoris : affiche tous les favoris
// Bouton "Retirer des favoris"
?>
```

---

### Exercice 11.26 : "Se souvenir de moi"
```php
<?php
// Checkbox sur le formulaire de login
// Si cochée : cookie de 30 jours avec token
// Reconnexion automatique si cookie valide
?>
```

---

### Exercice 11.27 : Sondage avec cookie
```php
<?php
// Sondage : "Aimez-vous PHP ?"
// Une seule réponse par utilisateur
// Utilise un cookie pour empêcher les doublons
// Affiche les résultats en %
?>
```

---

### Exercice 11.28 : Système de notification
```php
<?php
// Stocke des notifications en session
// Badge avec le nombre de notifications
// Page pour voir et marquer comme lues
?>
```

---

## 🎯 Exercices bonus (difficiles)

### Bonus 1 : Multi-authentification
```php
<?php
// Système avec plusieurs utilisateurs stockés en JSON
// Chaque user : email, password (hashé), nom, role
// Login vérifie les credentials
// Dashboard affiche les infos du user connecté
?>
```

---

### Bonus 2 : Système de rôles
```php
<?php
// 3 rôles : admin, moderator, user
// admin.php : accessible seulement aux admins
// moderator.php : accessible aux admins et moderators
// dashboard.php : accessible à tous les connectés
?>
```

---

### Bonus 3 : Panier persistant
```php
<?php
// Le panier persiste même après fermeture du navigateur
// Utilise un cookie avec un ID unique
// Stocke le panier dans un fichier JSON lié à cet ID
?>
```

---

### Bonus 4 : Session multi-onglets
```php
<?php
// Gère plusieurs onglets/fenêtres correctement
// Compteur de "connexions actives"
// Détecte quand tous les onglets sont fermés
?>
```

---

### Bonus 5 : Système de cache utilisateur
```php
<?php
// Cache les données utilisateur en session
// Si données absentes : charge depuis fichier JSON
// Si présentes : utilise le cache
// Bouton "Rafraîchir" pour recharger
?>
```

---

### Bonus 6 : Tracking d'activité
```php
<?php
// Enregistre toutes les actions de l'utilisateur :
// - Page visitée
// - Date/heure
// - Action (vue, ajout panier, achat)
// Affiche l'historique complet dans le profil
?>
```

---

### Bonus 7 : Session avec base de données simulée
```php
<?php
// Au lieu de fichiers, stocke les sessions dans un fichier JSON
// Structure : [session_id => données]
// Implémente :
// - session_open, session_close
// - session_read, session_write
// - session_destroy
?>
```

---

### Bonus 8 : Statistiques de visite avancées
```php
<?php
// Enregistre pour chaque visite :
// - Date/heure
// - Page
// - Durée sur la page
// - Navigateur
// - Système d'exploitation
// Affiche des stats : pages populaires, durée moyenne, etc.
?>
```

---

### Bonus 9 : Système de connexion temporaire
```php
<?php
// Login qui dure seulement 15 minutes
// Affiche un compte à rebours
// À l'expiration : message et déconnexion auto
// Bouton "Prolonger la session"
?>
```

---

### Bonus 10 : Multi-device login
```php
<?php
// Permet de se connecter sur plusieurs appareils
// Dashboard affiche tous les appareils connectés :
// - Navigateur
// - IP
// - Date de connexion
// Bouton "Déconnecter cet appareil"
?>
```

---

## 💡 Conseils

- **session_start()** TOUJOURS en premier, avant toute sortie
- **Régénère** l'ID de session après login (sécurité)
- **Expire** les sessions inactives (timeout)
- **Utilise HTTPS** en production pour sécuriser les cookies
- **httponly** et **secure** sur les cookies sensibles
- **Ne stocke jamais** de mots de passe en clair
- **Valide** les données de session (IP, User Agent)
- **Limite** les tentatives de connexion

**Solutions disponibles après avoir essayé par toi-même !**