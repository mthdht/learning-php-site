---
prev: 
    text: 'Exercices: Chaines de caractères.'
    link: '/module-1/exercices/chapitre-7-chaines-de-caracteres'

next:
  text: 'Exercices: Gestion des fichiers'
  link: '/module-1/exercices/chapitre-8-gestion-des-fichiers'
---

# Chapitre 8 : Gestion des fichiers

## 📋 Prérequis
- Maîtriser les variables et types (Chapitre 2)
- Comprendre les fonctions (Chapitre 6)
- Connaître les chaînes de caractères (Chapitre 7)

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Lire et écrire dans des fichiers
- Manipuler des répertoires
- Gérer les uploads de fichiers
- Traiter les erreurs de fichiers

---

## Introduction

La manipulation de fichiers permet de :
- Stocker des données de manière persistante
- Lire/écrire des logs
- Gérer des configurations
- Traiter des uploads utilisateurs
- Générer des exports (CSV, JSON, etc.)

**⚠️ Sécurité :** La gestion de fichiers est sensible. On doit toujours valider et sécuriser !

---

## Vérification d'existence

```php
<?php
// Vérifier si un fichier existe
if (file_exists('fichier.txt')) {
    echo "Le fichier existe";
}

// Vérifier si c'est un fichier
if (is_file('fichier.txt')) {
    echo "C'est un fichier";
}

// Vérifier si c'est un répertoire
if (is_dir('mon_dossier')) {
    echo "C'est un répertoire";
}

// Vérifier si lisible
if (is_readable('fichier.txt')) {
    echo "Fichier lisible";
}

// Vérifier si modifiable
if (is_writable('fichier.txt')) {
    echo "Fichier modifiable";
}
?>
```

---

## Lire un fichier

### file_get_contents : tout lire d'un coup

```php
<?php
// Lire tout le fichier en une chaîne
$contenu = file_get_contents('fichier.txt');
echo $contenu;

// Avec gestion d'erreur
if ($contenu = file_get_contents('fichier.txt')) {
    echo $contenu;
} else {
    echo "Erreur de lecture";
}

// Lire depuis une URL
$html = file_get_contents('https://example.com');
?>
```

### file : lire en tableau de lignes

```php
<?php
// Chaque ligne = un élément du tableau
$lignes = file('fichier.txt');

foreach ($lignes as $numero => $ligne) {
    echo "Ligne $numero : $ligne";
}

// Sans les sauts de ligne
$lignes = file('fichier.txt', FILE_IGNORE_NEW_LINES);

// Ignorer les lignes vides
$lignes = file('fichier.txt', FILE_SKIP_EMPTY_LINES);
?>
```

### fopen, fgets, fclose : lecture ligne par ligne

```php
<?php
// Ouvrir le fichier
$handle = fopen('fichier.txt', 'r');

if ($handle) {
    // Lire ligne par ligne
    while (($ligne = fgets($handle)) !== false) {
        echo $ligne;
    }
    
    // Toujours fermer !
    fclose($handle);
} else {
    echo "Impossible d'ouvrir le fichier";
}

// Lire caractère par caractère
$handle = fopen('fichier.txt', 'r');
while (($char = fgetc($handle)) !== false) {
    echo $char;
}
fclose($handle);

// Lire un nombre spécifique d'octets
$handle = fopen('fichier.txt', 'r');
$chunk = fread($handle, 1024);  // Lit 1024 octets
fclose($handle);
?>
```

### Modes d'ouverture

```php
<?php
// 'r'  : lecture seule, début du fichier
// 'r+' : lecture/écriture, début du fichier
// 'w'  : écriture seule, efface le contenu existant
// 'w+' : lecture/écriture, efface le contenu existant
// 'a'  : écriture seule, ajoute à la fin
// 'a+' : lecture/écriture, ajoute à la fin
// 'x'  : création seule, erreur si existe déjà
// 'x+' : création lecture/écriture, erreur si existe
?>
```

---

## Écrire dans un fichier

### file_put_contents : écrire d'un coup

```php
<?php
// Écraser le fichier
$contenu = "Bonjour le monde !";
file_put_contents('fichier.txt', $contenu);

// Ajouter à la fin (sans écraser)
file_put_contents('fichier.txt', "\nNouvelle ligne", FILE_APPEND);

// Avec verrou (éviter écritures simultanées)
file_put_contents('fichier.txt', $contenu, LOCK_EX);

// Vérifier le succès
$octets = file_put_contents('fichier.txt', $contenu);
if ($octets !== false) {
    echo "$octets octets écrits";
}
?>
```

### fopen, fwrite, fclose

```php
<?php
// Ouvrir en écriture
$handle = fopen('fichier.txt', 'w');

if ($handle) {
    fwrite($handle, "Ligne 1\n");
    fwrite($handle, "Ligne 2\n");
    fwrite($handle, "Ligne 3\n");
    
    fclose($handle);
} else {
    echo "Impossible d'ouvrir le fichier";
}

// Ajouter à la fin
$handle = fopen('fichier.txt', 'a');
fwrite($handle, "Ligne ajoutée\n");
fclose($handle);
?>
```

---

## Informations sur les fichiers

```php
<?php
$fichier = 'fichier.txt';

// Taille en octets
$taille = filesize($fichier);
echo "Taille : $taille octets";

// Date de dernière modification
$timestamp = filemtime($fichier);
echo "Modifié le : " . date('Y-m-d H:i:s', $timestamp);

// Date de dernier accès
$timestamp = fileatime($fichier);
echo "Accédé le : " . date('Y-m-d H:i:s', $timestamp);

// Type MIME
$type = mime_content_type($fichier);
echo "Type : $type";

// Informations complètes
$infos = stat($fichier);
print_r($infos);

// Extension
$extension = pathinfo($fichier, PATHINFO_EXTENSION);
echo "Extension : $extension";

// Nom de fichier sans extension
$nom = pathinfo($fichier, PATHINFO_FILENAME);
echo "Nom : $nom";

// Répertoire parent
$dir = pathinfo($fichier, PATHINFO_DIRNAME);
echo "Répertoire : $dir";
?>
```

---

## Copier, déplacer, supprimer

```php
<?php
// Copier
if (copy('source.txt', 'destination.txt')) {
    echo "Fichier copié";
}

// Renommer / Déplacer
if (rename('ancien.txt', 'nouveau.txt')) {
    echo "Fichier renommé";
}

if (rename('fichier.txt', 'dossier/fichier.txt')) {
    echo "Fichier déplacé";
}

// Supprimer
if (unlink('fichier.txt')) {
    echo "Fichier supprimé";
}

// Vérifier avant de supprimer
if (file_exists('fichier.txt')) {
    unlink('fichier.txt');
}
?>
```

---

## Manipulation de répertoires

### Créer, supprimer

```php
<?php
// Créer un répertoire
if (mkdir('nouveau_dossier')) {
    echo "Répertoire créé";
}

// Avec permissions (Unix/Linux)
mkdir('dossier', 0755);

// Créer récursivement (sous-dossiers)
mkdir('parent/enfant/petit-enfant', 0755, true);

// Supprimer un répertoire (doit être vide)
if (rmdir('dossier')) {
    echo "Répertoire supprimé";
}

// Vérifier si vide
if (count(scandir('dossier')) == 2) {  // . et ..
    rmdir('dossier');
}
?>
```

### Lister le contenu

```php
<?php
// Lister avec scandir
$fichiers = scandir('.');
foreach ($fichiers as $fichier) {
    if ($fichier != '.' && $fichier != '..') {
        echo "$fichier\n";
    }
}

// Avec glob (pattern matching)
$images = glob('images/*.jpg');
foreach ($images as $image) {
    echo "$image\n";
}

// Patterns glob
$tous = glob('*');              // Tous les fichiers
$php = glob('*.php');           // Fichiers .php
$txt_ou_log = glob('*.{txt,log}', GLOB_BRACE);

// Récursif avec DirectoryIterator
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator('.')
);

foreach ($iterator as $fichier) {
    if ($fichier->isFile()) {
        echo $fichier->getPathname() . "\n";
    }
}
?>
```

### Parcourir avec opendir

```php
<?php
$dir = opendir('.');

if ($dir) {
    while (($fichier = readdir($dir)) !== false) {
        if ($fichier != '.' && $fichier != '..') {
            echo "$fichier\n";
        }
    }
    closedir($dir);
}
?>
```

---

## Chemins et répertoires de travail

```php
<?php
// Répertoire courant
echo getcwd();  // /var/www/html

// Changer de répertoire
chdir('/tmp');

// Répertoire du script
echo __DIR__;   // Répertoire du fichier PHP actuel
echo dirname(__FILE__);  // Idem

// Chemin absolu
$absolu = realpath('fichier.txt');
echo $absolu;  // /var/www/html/fichier.txt

// Nom de fichier depuis un chemin
$nom = basename('/var/www/html/fichier.txt');  // fichier.txt
$nom = basename('/var/www/html/fichier.txt', '.txt');  // fichier

// Combiner des chemins
$chemin = __DIR__ . DIRECTORY_SEPARATOR . 'fichier.txt';
?>
```

---

## Upload de fichiers

### Formulaire HTML

```html
<form method="POST" enctype="multipart/form-data">
    <input type="file" name="fichier">
    <button type="submit">Envoyer</button>
</form>
```

### Traitement PHP

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Vérifier qu'un fichier a été uploadé
    if (isset($_FILES['fichier']) && $_FILES['fichier']['error'] === UPLOAD_ERR_OK) {
        
        $fichier = $_FILES['fichier'];
        
        // Informations disponibles
        $nom_original = $fichier['name'];        // photo.jpg
        $nom_temporaire = $fichier['tmp_name']; // /tmp/phpXXXXX
        $taille = $fichier['size'];             // en octets
        $type = $fichier['type'];               // image/jpeg
        $erreur = $fichier['error'];            // 0 si OK
        
        // Validation
        $extensions_autorisees = ['jpg', 'jpeg', 'png', 'gif'];
        $taille_max = 5 * 1024 * 1024; // 5 Mo
        
        $extension = strtolower(pathinfo($nom_original, PATHINFO_EXTENSION));
        
        if (!in_array($extension, $extensions_autorisees)) {
            echo "Extension non autorisée";
            exit;
        }
        
        if ($taille > $taille_max) {
            echo "Fichier trop volumineux";
            exit;
        }
        
        // Nom unique pour éviter les écrasements
        $nouveau_nom = uniqid() . '.' . $extension;
        $destination = 'uploads/' . $nouveau_nom;
        
        // Déplacer le fichier
        if (move_uploaded_file($nom_temporaire, $destination)) {
            echo "Fichier uploadé avec succès : $nouveau_nom";
        } else {
            echo "Erreur lors du déplacement";
        }
        
    } else {
        // Gestion des erreurs
        $erreur = $_FILES['fichier']['error'] ?? UPLOAD_ERR_NO_FILE;
        
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
            if ($fichiers['error'][$i] === UPLOAD_ERR_OK) {
                
                $nom = $fichiers['name'][$i];
                $tmp = $fichiers['tmp_name'][$i];
                $taille = $fichiers['size'][$i];
                
                // Validation et traitement
                $nouveau_nom = uniqid() . '_' . $nom;
                $destination = 'uploads/' . $nouveau_nom;
                
                if (move_uploaded_file($tmp, $destination)) {
                    echo "Fichier $nom uploadé\n";
                }
            }
        }
    }
}
?>
```

---

## Fichiers CSV

### Lire un CSV

```php
<?php
// Avec fgetcsv
$handle = fopen('data.csv', 'r');

// Lire l'en-tête
$entetes = fgetcsv($handle, 1000, ',');

// Lire les données
while (($ligne = fgetcsv($handle, 1000, ',')) !== false) {
    // $ligne est un tableau
    print_r($ligne);
}

fclose($handle);

// Avec en-têtes comme clés
$handle = fopen('data.csv', 'r');
$entetes = fgetcsv($handle, 1000, ',');

$donnees = [];
while (($ligne = fgetcsv($handle, 1000, ',')) !== false) {
    $donnees[] = array_combine($entetes, $ligne);
}
fclose($handle);

print_r($donnees);
// [
//   ['nom' => 'Alice', 'age' => '25'],
//   ['nom' => 'Bob', 'age' => '30']
// ]
?>
```

### Écrire un CSV

```php
<?php
$donnees = [
    ['nom', 'age', 'ville'],
    ['Alice', 25, 'Paris'],
    ['Bob', 30, 'Lyon'],
    ['Charlie', 35, 'Marseille']
];

$handle = fopen('export.csv', 'w');

foreach ($donnees as $ligne) {
    fputcsv($handle, $ligne, ',');
}

fclose($handle);
?>
```

---

## Fichiers JSON

```php
<?php
$donnees = [
    'nom' => 'Alice',
    'age' => 25,
    'hobbies' => ['lecture', 'sport', 'musique']
];

// Écrire JSON
$json = json_encode($donnees, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
file_put_contents('data.json', $json);

// Lire JSON
$json = file_get_contents('data.json');
$donnees = json_decode($json, true);  // true = tableau associatif

print_r($donnees);

// Vérifier les erreurs
if (json_last_error() !== JSON_ERROR_NONE) {
    echo "Erreur JSON : " . json_last_error_msg();
}
?>
```

---

## Verrouillage de fichiers

```php
<?php
// Éviter les écritures simultanées
$handle = fopen('compteur.txt', 'c+');

if (flock($handle, LOCK_EX)) {  // Verrou exclusif
    
    $compteur = (int)fread($handle, filesize('compteur.txt'));
    $compteur++;
    
    ftruncate($handle, 0);  // Vider le fichier
    rewind($handle);        // Retour au début
    fwrite($handle, $compteur);
    
    fflush($handle);        // Forcer l'écriture
    flock($handle, LOCK_UN);  // Libérer le verrou
}

fclose($handle);

// Avec file_put_contents
file_put_contents('fichier.txt', $contenu, LOCK_EX);
?>
```

---

## Gestion d'erreurs

```php
<?php
// Vérifications avant opérations
if (!file_exists('fichier.txt')) {
    die("Le fichier n'existe pas");
}

if (!is_readable('fichier.txt')) {
    die("Le fichier n'est pas lisible");
}

if (!is_writable('fichier.txt')) {
    die("Le fichier n'est pas modifiable");
}

// Avec try/catch (PHP 8+)
try {
    $contenu = file_get_contents('fichier.txt');
    if ($contenu === false) {
        throw new Exception("Impossible de lire le fichier");
    }
} catch (Exception $e) {
    echo "Erreur : " . $e->getMessage();
}

// Supprimer l'affichage d'erreurs avec @
$contenu = @file_get_contents('fichier.txt');
if ($contenu === false) {
    echo "Erreur de lecture";
}
?>
```

---

## Cas pratiques

### Logger des événements

```php
<?php
function logger($message, $niveau = 'INFO') {
    $date = date('Y-m-d H:i:s');
    $ligne = "[$date] [$niveau] $message\n";
    file_put_contents('logs.txt', $ligne, FILE_APPEND | LOCK_EX);
}

logger("Application démarrée");
logger("Utilisateur connecté", "INFO");
logger("Erreur de connexion", "ERROR");
?>
```

### Compteur de visites

```php
<?php
$fichier = 'compteur.txt';

// Initialiser si n'existe pas
if (!file_exists($fichier)) {
    file_put_contents($fichier, 0);
}

// Lire, incrémenter, écrire
$compteur = (int)file_get_contents($fichier);
$compteur++;
file_put_contents($fichier, $compteur, LOCK_EX);

echo "Visiteur n°$compteur";
?>
```

### Cache simple

```php
<?php
function get_cache($cle, $duree = 3600) {
    $fichier = "cache/$cle.txt";
    
    if (file_exists($fichier)) {
        if (time() - filemtime($fichier) < $duree) {
            return file_get_contents($fichier);
        }
        unlink($fichier);  // Cache expiré
    }
    
    return null;
}

function set_cache($cle, $valeur) {
    $fichier = "cache/$cle.txt";
    file_put_contents($fichier, $valeur, LOCK_EX);
}

// Utilisation
$donnees = get_cache('users');
if ($donnees === null) {
    $donnees = "Données depuis la DB...";
    set_cache('users', $donnees);
}
?>
```

### Configuration

```php
<?php
// config.ini
/*
[database]
host = localhost
user = root
password = secret

[app]
debug = true
timezone = Europe/Paris
*/

// Lire configuration
$config = parse_ini_file('config.ini', true);

echo $config['database']['host'];  // localhost
echo $config['app']['debug'];      // 1 (true)
?>
```

---

## Sécurité

### Validation des chemins

```php
<?php
// ❌ DANGER : Directory Traversal
$fichier = $_GET['file'];  // ../../etc/passwd
include($fichier);

// ✅ Valider le chemin
$fichier = basename($_GET['file']);  // Supprime les /
$chemin = realpath('uploads/' . $fichier);

// Vérifier que c'est dans le bon répertoire
$dossier_autorise = realpath('uploads');
if (strpos($chemin, $dossier_autorise) !== 0) {
    die("Accès refusé");
}
?>
```

### Validation d'uploads

```php
<?php
// ❌ Ne JAMAIS faire confiance à l'extension
$extension = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);

// ✅ Vérifier le type MIME réel
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$type = finfo_file($finfo, $_FILES['file']['tmp_name']);
finfo_close($finfo);

$types_autorises = ['image/jpeg', 'image/png', 'image/gif'];
if (!in_array($type, $types_autorises)) {
    die("Type de fichier non autorisé");
}

// ✅ Renommer avec nom unique
$nouveau_nom = uniqid() . '.' . $extension;

// ✅ Stocker hors de webroot si possible
$destination = '/var/data/uploads/' . $nouveau_nom;
?>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ La lecture et l'écriture de fichiers
- ✅ La manipulation de répertoires
- ✅ La gestion d'uploads sécurisés
- ✅ Le traitement de CSV et JSON
- ✅ Les bonnes pratiques de sécurité

La gestion de fichiers est essentielle mais sensible. Toujours valider, sécuriser, et gérer les erreurs !

---

## 🚀 Prochaine étape

**Chapitre 9 : Le protocole HTTP**

Maintenant que tu sais manipuler les fichiers, on va plonger dans le web ! Tu apprendras comment fonctionne HTTP, comment récupérer des données avec GET et POST, et comment gérer les en-têtes.