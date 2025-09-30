---
prev: 
    text: 'Exercices: '
    link: '/module-2/exercices/'

next:
  text: 'Module 3: .'
  link: '/module-3/introduction'
---

# Module 2 : PHP Web & Formulaires
## Conclusion

---

## 🎉 Bravo !

Tu as terminé le Module 2. Tu n'écris plus juste des scripts PHP : tu créer maintenant des **applications web interactives**.

---

## ✅ Ce que tu maîtrises maintenant

### HTTP et communication web
- Le cycle requête/réponse HTTP
- Les méthodes GET et POST (quand utiliser quoi)
- Les en-têtes HTTP (lire et envoyer)
- Les codes de statut (200, 404, 500...)
- Les superglobales ($_GET, $_POST, $_SERVER, $_FILES)
- Les redirections avec header()

### Formulaires et données
- Créer des formulaires HTML complets
- Récupérer les données avec $_GET et $_POST
- Valider toutes les entrées utilisateur
- Afficher des erreurs proprement
- Gérer les uploads de fichiers sécurisés
- Protection CSRF basique

### Sessions et état
- Démarrer et gérer des sessions ($_SESSION)
- Créer et lire des cookies
- Système d'authentification (login/logout)
- Panier d'achat persistant
- Sécuriser les sessions (régénération d'ID, expiration)

### Organisation du code
- include vs require (et leurs variantes _once)
- Séparer logique et présentation
- Templates et layouts
- Architecture MVC basique
- Autoloading simple

### Gestion d'erreurs
- Types d'erreurs PHP (Warning, Notice, Fatal, Parse)
- Try-catch-finally pour les exceptions
- Exceptions personnalisées
- Gestionnaires d'erreurs custom
- Logging professionnel
- Différence dev/production

---

## 🧠 Nouvelles compétences

### Techniques
- **Développement web** : tu crées des sites dynamiques
- **Interaction utilisateur** : formulaires, sessions, cookies
- **Architecture** : tu structures des projets web
- **Sécurité web** : validation, échappement, CSRF
- **Debugging web** : DevTools, logs, gestion d'erreurs

### Transversales
- **Pensée "utilisateur"** : anticiper les actions possibles
- **Sécurité** : toujours valider, jamais faire confiance
- **Organisation** : séparer le code en modules logiques
- **Professionnalisme** : gérer les erreurs proprement

---

## 📊 Auto-évaluation

Teste-toi honnêtement :

1. **Peux-tu créer un formulaire avec validation complète ?**
   - ✅ Oui → Parfait !
   - ❌ Non → Revois le Chapitre 10

2. **Comprends-tu la différence entre GET et POST ?**
   - ✅ Oui → Bien !
   - ❌ Non → Revois le Chapitre 9

3. **Peux-tu créer un système de connexion simple ?**
   - ✅ Oui → Excellent !
   - ❌ Non → Revois le Chapitre 11

4. **Sais-tu organiser un projet avec include/require ?**
   - ✅ Oui → Super !
   - ❌ Non → Revois le Chapitre 12

5. **Peux-tu gérer les erreurs avec try-catch ?**
   - ✅ Oui → Bravo !
   - ❌ Non → Revois le Chapitre 13

**4-5 réponses positives** : Tu es prêt pour le Module 3 ! 🚀  
**2-3 réponses positives** : Révise les chapitres concernés  
**0-1 réponse positive** : Reprends le module tranquillement

---

## 💪 Projet de validation

Pour valider ce module, crée ce projet :

### Mini système d'authentification

**Fonctionnalités requises :**
1. Page d'inscription (nom, email, mot de passe)
   - Validation complète des champs
   - Affichage des erreurs
   - Stockage dans fichier JSON

2. Page de connexion
   - Vérification email/mot de passe
   - Session utilisateur
   - Redirection vers dashboard

3. Page dashboard (protégée)
   - Affichage du nom de l'utilisateur
   - Bouton de déconnexion

4. Déconnexion
   - Destruction de la session
   - Redirection vers accueil

5. Organisation
   - Code séparé en fichiers logiques
   - Gestion d'erreurs propre
   - Sécurité (validation, échappement)

**Si tu peux faire ce projet, tu as validé le Module 2.**

---

## 🚀 Ce que tu peux construire maintenant

### Applications complètes
- Blog avec articles et commentaires
- Forum de discussion simple
- Galerie de photos avec upload
- Gestionnaire de tâches collaboratif
- Site e-commerce basique

### Fonctionnalités avancées
- Authentification multi-utilisateurs
- Système de rôles (admin, user, guest)
- Upload et traitement d'images
- Pagination de résultats
- Recherche et filtres

---

## 🎯 Et maintenant ?

### Option 1 : Consolide avec un projet perso

Avant le Module 3, crée quelque chose qui te plaît :
- Un site pour ton CV
- Un blog personnel
- Un outil pratique pour toi
- Une application pour un ami

**L'important : UTILISE ce que tu as appris.**

### Option 2 : Passe au Module 3

Si tu es à l'aise avec tout, direction les bases de données !

---

## 💡 Idées de projets

### Projets débutants
1. **Formulaire de contact avancé** : captcha, envoi email, log des messages
2. **Sondage en ligne** : plusieurs questions, résultats en pourcentage
3. **Mini wiki** : créer/éditer des pages, liens entre pages
4. **Gestionnaire de signets** : sauvegarder des URLs avec catégories

### Projets intermédiaires
1. **Blog complet** : articles, commentaires, catégories, recherche
2. **Forum** : sujets, réponses, utilisateurs, modération
3. **Galerie photos** : upload, albums, commentaires, likes
4. **Site de recettes** : ajouter recettes, ingrédients, notes

### Projets avancés
1. **Réseau social mini** : profils, amis, posts, feed
2. **Marketplace** : produits, panier, commandes, paiement
3. **CMS simple** : créer pages, menus, templates dynamiques
4. **Système de tickets** : support client, statuts, assignation

---

## 🔑 Règles d'or à ne jamais oublier

### Sécurité TOUJOURS
1. **Valider** toutes les entrées utilisateur
2. **Échapper** toutes les sorties avec htmlspecialchars()
3. **Utiliser** les requêtes préparées (on verra au Module 3)
4. **Régénérer** l'ID de session après login
5. **Ne jamais** afficher les erreurs en production

### Bonnes pratiques web
1. Utiliser POST pour modifier des données
2. Rediriger après un POST (pattern PRG)
3. Toujours session_start() avant d'utiliser $_SESSION
4. header() doit être appelé AVANT toute sortie
5. Valider côté serveur (jamais seulement côté client)

### Organisation
1. Séparer la logique de la présentation
2. Un fichier = une responsabilité
3. Réutiliser avec include/require
4. Nommer clairement fichiers et variables
5. Commenter le code complexe

---

## 📚 Pour aller plus loin

### Approfondis ce module
- **OWASP** : apprends les 10 vulnérabilités web les plus communes
- **PSR standards** : conventions PHP modernes
- **Composer** : gestionnaire de dépendances

### Prépare le Module 3
- Révise le SQL si tu le connais
- Installe MySQL/MariaDB
- Familiarise-toi avec phpMyAdmin

---

## 🚀 Module 3 : Bases de données SQL

**C'est quoi ?**
Jusqu'ici, tu stockes dans des fichiers. C'est bien pour apprendre, mais limité. Les vraies applications utilisent des **bases de données**.

**Au programme :**
- Introduction aux BDD relationnelles
- Langage SQL (CREATE, SELECT, INSERT, UPDATE, DELETE)
- Jointures et relations entre tables
- PHP + MySQL avec PDO
- Requêtes préparées (sécurité)

**Ce que tu pourras faire :**
- Stocker des milliers d'utilisateurs
- Gérer des relations complexes (articles ↔ commentaires ↔ auteurs)
- Faire des recherches performantes
- Créer de vraies applications scalables

---

## 📝 Dernier mot

Le web, c'est fait. Tu sais maintenant créer des applications interactives.

Mais il manque encore la pièce centrale : **