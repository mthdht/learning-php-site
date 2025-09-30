---
prev: 
    text: 'Chapitre 8: Gestion des fichiers.'
    link: '/module-1/exercices/chapitre-7-chaines-de-caracteres'

next:
  text: 'Module 1: Conclusion'
  link: '/module-1/conclusion'
---

# Exercices - Chapitre 8 : Gestion des fichiers

## 📝 Lecture de fichiers

### Exercice 8.1 : Lire et afficher
```php
<?php
// Crée un fichier texte.txt avec du contenu
// Lis et affiche tout le contenu
?>
```

---

### Exercice 8.2 : Compter les lignes
```php
<?php
// Compte le nombre de lignes d'un fichier
// Sans charger tout le fichier en mémoire
?>
```

---

### Exercice 8.3 : Afficher ligne par ligne
```php
<?php
// Lis un fichier et affiche chaque ligne numérotée
// Format : "Ligne 1 : contenu"
?>
```

---

### Exercice 8.4 : Chercher dans un fichier
```php
<?php
$recherche = "PHP";

// Trouve et affiche toutes les lignes contenant "PHP"
?>
```

---

## 📝 Écriture de fichiers

### Exercice 8.5 : Créer un fichier
```php
<?php
// Crée un fichier notes.txt
// Écris 3 lignes de texte dedans
?>
```

---

### Exercice 8.6 : Ajouter à un fichier
```php
<?php
// Ajoute une nouvelle ligne à un fichier existant
// Sans écraser le contenu
?>
```

---

### Exercice 8.7 : Journal intime
```php
<?php
$date = date('Y-m-d H:i:s');
$entree = "Aujourd'hui j'ai appris PHP !";

// Ajoute l'entrée au format : "[date] texte"
// Dans un fichier journal.txt
?>
```

---

### Exercice 8.8 : Copie de fichier
```php
<?php
// Copie le contenu de source.txt vers destination.txt
// Ligne par ligne (sans utiliser copy())
?>
```

---

## 📝 Informations sur fichiers

### Exercice 8.9 : Statistiques
```php
<?php
$fichier = "texte.txt";

// Affiche :
// - Taille en octets
// - Taille en Ko
// - Nombre de lignes
// - Nombre de mots
// - Date de dernière modification
?>
```

---

### Exercice 8.10 : Lister extensions
```php
<?php
// Liste tous les fichiers du répertoire courant
// Avec leur extension
// Format : "fichier.txt - Extension: txt"
?>
```

---

### Exercice 8.11 : Plus gros fichier
```php
<?php
// Trouve le fichier le plus volumineux dans un répertoire
// Affiche son nom et sa taille
?>
```

---

## 📝 Manipulation de répertoires

### Exercice 8.12 : Créer une structure
```php
<?php
// Crée cette structure de dossiers :
// projet/
//   src/
//   tests/
//   public/
?>
```

---

### Exercice 8.13 : Lister récursivement
```php
<?php
// Liste TOUS les fichiers d'un répertoire
// Y compris dans les sous-répertoires
// Affiche le chemin complet de chaque fichier
?>
```

---

### Exercice 8.14 : Compter fichiers par type
```php
<?php
// Dans un répertoire, compte :
// - Combien de fichiers .php
// - Combien de fichiers .txt
// - Combien de fichiers .jpg
// - Autres types
?>
```

---

### Exercice 8.15 : Taille totale
```php
<?php
// Calcule la taille totale d'un répertoire
// (tous fichiers et sous-dossiers inclus)
// Affiche en Ko ou Mo
?>
```

---

## 📝 CSV et JSON

### Exercice 8.16 : Écrire un CSV
```php
<?php
$utilisateurs = [
    ['Alice', 25, 'Paris'],
    ['Bob', 30, 'Lyon'],
    ['Charlie', 35, 'Marseille']
];

// Crée un fichier users.csv avec en-tête
// Format : nom,age,ville
?>
```

---

### Exercice 8.17 : Lire un CSV
```php
<?php
// Lis le fichier users.csv
// Affiche chaque utilisateur formaté :
// "Alice (25 ans) habite à Paris"
?>
```

---

### Exercice 8.18 : CSV vers JSON
```php
<?php
// Lis un fichier CSV
// Convertis-le en JSON
// Sauvegarde dans un fichier .json
?>
```

---

### Exercice 8.19 : JSON vers CSV
```php
<?php
// Lis un fichier JSON
// Convertis-le en CSV
// Sauvegarde dans un fichier .csv
?>
```

---

## 📝 Logger et compteurs

### Exercice 8.20 : Système de log
```php
<?php
// Crée une fonction log_message($niveau, $message)
// Niveaux : INFO, WARNING, ERROR
// Format : [2024-12-25 14:30:00] [INFO] Message
// Écrit dans logs.txt
?>
```

---

### Exercice 8.21 : Compteur de visites
```php
<?php
// Crée un compteur qui :
// - S'incrémente à chaque visite
// - Affiche le nombre total de visites
// - Affiche la date de la première visite
?>
```

---

### Exercice 8.22 : Statistiques de visites
```php
<?php
// Pour chaque visite, enregistre dans un fichier :
// - Date et heure
// - IP du visiteur
// Puis affiche un récapitulatif :
// - Total de visites
// - Visites aujourd'hui
// - IP les plus fréquentes
?>
```

---

## 📝 Upload de fichiers

### Exercice 8.23 : Upload simple
```php
<?php
// Crée un formulaire d'upload
// Accepte seulement les images (jpg, png, gif)
// Taille max : 2 Mo
// Renomme avec un nom unique
?>
```

---

### Exercice 8.24 : Galerie d'images
```php
<?php
// Crée un système de galerie :
// - Upload d'images
// - Liste des images uploadées
// - Affichage des miniatures
?>
```

---

### Exercice 8.25 : Upload multiple avec validation
```php
<?php
// Upload jusqu'à 5 fichiers
// Vérifie le type MIME réel (pas juste l'extension)
// Génère un rapport : réussis, échoués, raisons
?>
```

---

## 📝 Cache et configuration

### Exercice 8.26 : Système de cache
```php
<?php
// Crée deux fonctions :
// - cache_set($cle, $valeur, $duree = 3600)
// - cache_get($cle)
// Le cache expire après $duree secondes
?>
```

---

### Exercice 8.27 : Configuration
```php
<?php
// Crée un fichier config.php qui retourne un tableau :
// - Nom du site
// - Email de contact
// - Mode debug (true/false)
// - Base de données (host, user, password)
// Puis crée une fonction load_config()
?>
```

---

### Exercice 8.28 : Gestion d'INI
```php
<?php
// Lis un fichier .ini
// Permet de modifier une valeur
// Sauvegarde les modifications
?>
```

---

## 📝 Cas pratiques avancés

### Exercice 8.29 : Gestionnaire de téléchargements
```php
<?php
// Crée un système qui :
// - Enregistre chaque téléchargement dans downloads.log
// - Format : date | fichier | IP
// - Affiche les stats : fichier le plus téléchargé, total téléchargements
?>
```

---

### Exercice 8.30 : Mini CMS
```php
<?php
// Crée un système de pages :
// - Chaque page = un fichier .txt
// - Liste toutes les pages
// - Affiche une page
// - Crée/édite une page
?>
```

---

### Exercice 8.31 : Export de données
```php
<?php
$utilisateurs = [
    ['nom' => 'Alice', 'age' => 25, 'ville' => 'Paris'],
    ['nom' => 'Bob', 'age' => 30, 'ville' => 'Lyon'],
];

// Crée une fonction export($data, $format)
// Formats : 'csv', 'json', 'txt'
// Retourne le contenu formaté
?>
```

---

### Exercice 8.32 : Sauvegarde automatique
```php
<?php
// Crée un système qui :
// - Sauvegarde un tableau PHP dans un fichier
// - Ajoute un timestamp au nom de fichier
// - Garde seulement les 5 dernières sauvegardes
// - Supprime les plus anciennes
?>
```

---

## 🎯 Exercices bonus (difficiles)

### Bonus 1 : Recherche dans fichiers
```php
<?php
// Cherche un mot dans tous les fichiers .txt d'un répertoire
// Affiche : fichier, numéro de ligne, ligne complète
// Compte le nombre total d'occurrences
?>
```

---

### Bonus 2 : Diff de fichiers
```php
<?php
// Compare deux fichiers ligne par ligne
// Affiche les différences :
// - Lignes présentes seulement dans fichier1
// - Lignes présentes seulement dans fichier2
// - Lignes différentes (même numéro)
?>
```

---

### Bonus 3 : Compresseur de logs
```php
<?php
// Lis un fichier de logs volumineux
// Garde seulement les entrées ERROR et WARNING
// Supprime les doublons
// Écrit dans un nouveau fichier compressé
?>
```

---

### Bonus 4 : Gestionnaire de versions
```php
<?php
// Crée un système de versionnage simple :
// - save_version($fichier) : sauvegarde une version
// - list_versions($fichier) : liste toutes les versions
// - restore_version($fichier, $version) : restaure une version
// Les versions sont stockées avec timestamps
?>
```

---

### Bonus 5 : Moniteur de changements
```php
<?php
// Surveille un répertoire
// Détecte les changements depuis la dernière vérification :
// - Nouveaux fichiers
// - Fichiers modifiés (compare les dates)
// - Fichiers supprimés
// Écrit un rapport dans monitoring.log
?>
```

---

### Bonus 6 : Parser de logs Apache
```php
<?php
// Lis un fichier access.log (Apache)
// Format typique :
// 127.0.0.1 - - [01/Jan/2024:12:00:00] "GET /page.php HTTP/1.1" 200 1234
// Extrait et affiche :
// - Top 10 des IP
// - Top 10 des pages
// - Nombre de 404
// - Trafic par heure
?>
```

---

### Bonus 7 : Générateur de sitemap
```php
<?php
// Scanne tous les fichiers .php d'un site
// Génère un sitemap.xml
// Format XML :
// <url>
//   <loc>http://example.com/page.php</loc>
//   <lastmod>2024-12-25</lastmod>
// </url>
?>
```

---

### Bonus 8 : Nettoyeur de fichiers temporaires
```php
<?php
// Dans un dossier /tmp :
// - Supprime les fichiers plus vieux que 24h
// - Supprime les fichiers de plus de 10 Mo
// - Garde un log des suppressions
// - Affiche l'espace libéré
?>
```

---

### Bonus 9 : Synchronisation de répertoires
```php
<?php
// Compare deux répertoires (source et destination)
// Copie les fichiers manquants ou plus récents de source vers destination
// Affiche un rapport des actions effectuées
?>
```

---

### Bonus 10 : Analyseur de code
```php
<?php
// Scanne tous les fichiers .php d'un projet
// Compte :
// - Nombre de lignes de code
// - Nombre de lignes de commentaires
// - Nombre de fonctions
// - Nombre de classes
// - Fichier le plus long
// Génère un rapport détaillé
?>
```

---

## 💡 Conseils

- **Toujours vérifier** si un fichier existe avant de le lire
- **Toujours fermer** les fichiers ouverts avec fopen()
- **Valider les chemins** pour éviter Directory Traversal
- **Utiliser LOCK_EX** pour éviter les écritures simultanées
- **Ne jamais faire confiance** aux noms de fichiers uploadés
- **Vérifier le type MIME** réel, pas juste l'extension
- **Gérer les erreurs** : file_get_contents peut retourner false
- **Limiter la taille** des uploads et fichiers traités
- Pour les gros fichiers, utiliser **fopen/fgets** plutôt que file_get_contents
- **Sauvegarder régulièrement** les données importantes

**Solutions disponibles après avoir essayé par toi-même !**