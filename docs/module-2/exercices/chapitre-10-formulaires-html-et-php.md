---
prev: 
    text: 'Chapitre 10 : Formulaires HTML et PHP'
    link: '/module-2/chapitres/chapitre-10-formulaires-html-et-php'

next:
  text: 'Chapitre 11 : Sessions et cookies'
  link: '/module-2/chapitres/chapitre-11-sessions-et-cookies'
---

# Exercices - Chapitre 10 : Formulaires HTML et PHP

## 📝 Formulaires de base

### Exercice 10.1 : Formulaire simple
```php
<?php
// Crée un formulaire avec nom et prénom
// Après soumission, affiche : "Bonjour [prénom] [nom] !"
?>
```

---

### Exercice 10.2 : Calculatrice
```php
<?php
// Formulaire avec :
// - Nombre 1
// - Opération (+, -, *, /)
// - Nombre 2
// Affiche le résultat du calcul
?>
```

---

### Exercice 10.3 : Convertisseur
```php
<?php
// Formulaire de conversion température
// Champs : température, unité de départ (C/F), unité d'arrivée (C/F)
// Affiche le résultat de la conversion
?>
```

---

### Exercice 10.4 : Formulaire GET vs POST
```php
<?php
// Crée le même formulaire en GET et POST
// Compare les différences dans l'URL
// Lequel est adapté pour un formulaire de contact ?
?>
```

---

## 📝 Validation

### Exercice 10.5 : Inscription simple
```php
<?php
// Formulaire d'inscription avec :
// - Nom (requis, min 2 caractères)
// - Email (requis, format valide)
// - Âge (requis, entre 18 et 100)
// Affiche les erreurs de validation
?>
```

---

### Exercice 10.6 : Mot de passe fort
```php
<?php
// Formulaire avec mot de passe
// Valide qu'il contient :
// - Au moins 8 caractères
// - Au moins une majuscule
// - Au moins une minuscule
// - Au moins un chiffre
// Affiche les critères manquants
?>
```

---

### Exercice 10.7 : Téléphone français
```php
<?php
// Formulaire avec numéro de téléphone
// Valide le format : 0612345678 ou 06 12 34 56 78
// Accepte les deux formats, stocke sans espaces
?>
```

---

### Exercice 10.8 : Date de naissance
```php
<?php
// Formulaire avec date de naissance
// Valide que :
// - La date est valide
// - La personne a au moins 18 ans
// - La personne a moins de 120 ans
?>
```

---

## 📝 Affichage des erreurs

### Exercice 10.9 : Erreurs individuelles
```php
<?php
// Formulaire avec nom, email, message
// Affiche l'erreur sous chaque champ
// Conserve les valeurs en cas d'erreur
?>
```

---

### Exercice 10.10 : Liste d'erreurs groupée
```php
<?php
// Même formulaire que 10.9
// Mais affiche toutes les erreurs en haut du formulaire
// En liste à puces rouge
?>
```

---

### Exercice 10.11 : Message de succès
```php
<?php
// Formulaire de contact complet
// Si valide : affiche "Message envoyé !" en vert
// Et vide le formulaire
// Si erreurs : affiche les erreurs, garde les valeurs
?>
```

---

## 📝 Types de champs

### Exercice 10.12 : Checkbox
```php
<?php
// Formulaire avec :
// - Nom
// - Checkbox "J'accepte les CGU" (requis)
// Valide que la checkbox est cochée
?>
```

---

### Exercice 10.13 : Checkboxes multiples
```php
<?php
// Formulaire avec plusieurs checkboxes :
// - Sport, Lecture, Musique, Cinéma, Voyage
// Affiche les hobbies sélectionnés
?>
```

---

### Exercice 10.14 : Radio buttons
```php
<?php
// Formulaire avec choix de civilité :
// - M., Mme, Autre
// Affiche "Bonjour [civilité] [nom]"
?>
```

---

### Exercice 10.15 : Select
```php
<?php
// Formulaire avec liste déroulante de pays :
// France, Belgique, Suisse, Canada, Autre
// Affiche le pays sélectionné
?>
```

---

### Exercice 10.16 : Textarea
```php
<?php
// Formulaire avec textarea pour un commentaire
// Valide :
// - Min 20 caractères
// - Max 500 caractères
// Affiche le nombre de caractères restants
?>
```

---

## 📝 Upload de fichiers

### Exercice 10.17 : Upload image simple
```php
<?php
// Formulaire d'upload d'une image
// Accepte : jpg, png, gif
// Max 2 Mo
// Affiche un message de succès avec le nom du fichier
?>
```

---

### Exercice 10.18 : Validation complète d'upload
```php
<?php
// Upload d'image avec validation :
// - Extensions autorisées (jpg, png, gif)
// - Taille max 5 Mo
// - Vérification du type MIME réel
// - Renommage avec nom unique
// Affiche les erreurs clairement
?>
```

---

### Exercice 10.19 : Upload multiple
```php
<?php
// Upload de plusieurs images (max 5)
// Valide chaque fichier
// Affiche un récapitulatif :
// - Réussis : [liste]
// - Échoués : [liste avec raisons]
?>
```

---

### Exercice 10.20 : Aperçu avant upload
```php
<?php
// Formulaire avec upload d'image
// Après upload, affiche l'image uploadée
// Avec ses informations (nom, taille, dimensions)
?>
```

---

## 📝 Sécurité

### Exercice 10.21 : Protection CSRF
```php
<?php
// Formulaire de contact avec token CSRF
// Génère un token en session
// Valide le token à la soumission
// Refuse si token invalide
?>
```

---

### Exercice 10.22 : Nettoyage des données
```php
<?php
// Crée une fonction clean_input($data)
// Qui nettoie les données :
// - trim()
// - stripslashes()
// - htmlspecialchars()
// Utilise-la sur tous les champs d'un formulaire
?>
```

---

### Exercice 10.23 : Rate limiting
```php
<?php
// Formulaire qui limite à 3 soumissions par session
// Après 3 essais, affiche :
// "Trop de tentatives, réessayez plus tard"
?>
```

---

## 📝 Cas pratiques

### Exercice 10.24 : Formulaire de contact complet
```php
<?php
// Crée un formulaire de contact avec :
// - Nom, Email, Téléphone (optionnel), Sujet, Message
// - Validation complète
// - Protection CSRF
// - Affichage des erreurs
// - Sauvegarde dans un fichier JSON
// - Message de confirmation
?>
```

---

### Exercice 10.25 : Inscription utilisateur
```php
<?php
// Formulaire d'inscription avec :
// - Nom, Prénom, Email, Mot de passe, Confirmation mot de passe
// - Validation complète (mdp fort, email unique)
// - Sauvegarde dans un fichier JSON
// - Hash du mot de passe (password_hash)
?>
```

---

### Exercice 10.26 : Générateur de CV
```php
<?php
// Formulaire pour créer un CV :
// - Infos perso (nom, email, tel, adresse)
// - Formation (diplôme, école, année)
// - Expériences (poste, entreprise, durée)
// Génère une page HTML formatée avec le CV
?>
```

---

### Exercice 10.27 : Sondage
```php
<?php
// Crée un sondage :
// - Question : "Quel est votre langage préféré ?"
// - Choix : PHP, JavaScript, Python, Java, Autre
// Sauvegarde les votes dans un fichier
// Affiche les résultats en pourcentage
?>
```

---

### Exercice 10.28 : Calculateur d'IMC
```php
<?php
// Formulaire avec :
// - Poids (en kg)
// - Taille (en cm)
// Calcule l'IMC (poids / (taille/100)²)
// Affiche l'IMC et l'interprétation :
// < 18.5 : Insuffisance pondérale
// 18.5-25 : Normal
// 25-30 : Surpoids
// > 30 : Obésité
?>
```

---

## 🎯 Exercices bonus (difficiles)

### Bonus 1 : Formulaire multi-étapes
```php
<?php
// Formulaire en 3 étapes :
// Étape 1 : Infos perso (nom, email)
// Étape 2 : Adresse (rue, ville, CP)
// Étape 3 : Confirmation et validation
// Utilise $_SESSION pour conserver entre les étapes
?>
```

---

### Bonus 2 : Upload avec redimensionnement
```php
<?php
// Upload d'image qui :
// - Accepte jpg, png
// - Redimensionne automatiquement à 800x600 max
// - Conserve les proportions
// - Génère une miniature 200x200
// Utilise GD ou Imagick
?>
```

---

### Bonus 3 : Validation asynchrone
```php
<?php
// Formulaire d'inscription
// Avec vérification AJAX de l'email
// api-check-email.php vérifie si l'email existe déjà
// Affiche en temps réel "Email disponible" ou "Email déjà pris"
?>
```

---

### Bonus 4 : Générateur de formulaires
```php
<?php
// Crée une fonction generate_form($config)
// Qui génère un formulaire HTML depuis une config :
// $config = [
//     'nom' => ['type' => 'text', 'label' => 'Nom', 'required' => true],
//     'email' => ['type' => 'email', 'label' => 'Email', 'required' => true]
// ];
?>
```

---

### Bonus 5 : Import CSV via formulaire
```php
<?php
// Upload d'un fichier CSV
// Parse le CSV
// Valide chaque ligne (email, âge, etc.)
// Affiche un rapport :
// - X lignes valides importées
// - Y lignes avec erreurs (détaille les erreurs)
?>
```

---

### Bonus 6 : Système de notation
```php
<?php
// Formulaire de notation (1 à 5 étoiles)
// Avec commentaire optionnel
// Sauvegarde dans un fichier JSON
// Affiche la moyenne et tous les avis
// Avec date et pseudo
?>
```

---

### Bonus 7 : Formulaire dynamique
```php
<?php
// Formulaire où on peut ajouter des champs dynamiquement
// Ex : "Ajouter une expérience professionnelle"
// Bouton "+" ajoute un nouveau bloc de champs
// JavaScript côté client + traitement PHP
?>
```

---

### Bonus 8 : Validation en temps réel
```php
<?php
// Formulaire avec validation AJAX
// Chaque champ est validé dès qu'on quitte le champ (blur)
// Affiche une coche verte ou croix rouge
// api-validate.php valide chaque champ individuellement
?>
```

---

### Bonus 9 : Export des soumissions
```php
<?php
// Page admin qui liste toutes les soumissions d'un formulaire
// Avec possibilité d'exporter en CSV ou JSON
// Filtres : date, statut, recherche
?>
```

---

### Bonus 10 : Formulaire avec captcha
```php
<?php
// Intègre un captcha simple :
// - Affiche une opération mathématique (ex: "5 + 3 = ?")
// - L'utilisateur doit répondre correctement
// - Valide la réponse avant de traiter le formulaire
// Génère une nouvelle question à chaque soumission
?>
```

---

## 💡 Conseils

- **Toujours valider côté serveur**, même avec validation HTML5
- **Échapper les sorties** avec htmlspecialchars()
- **Conserver les valeurs** du formulaire en cas d'erreur
- **Messages clairs** : dis à l'utilisateur exactement ce qui ne va pas
- **Protection CSRF** sur tous les formulaires qui modifient des données
- **Upload sécurisé** : vérifie type MIME, extension, taille
- **Teste tous les cas** : données valides, invalides, vides, malveillantes
- **UX** : affiche les erreurs près des champs concernés