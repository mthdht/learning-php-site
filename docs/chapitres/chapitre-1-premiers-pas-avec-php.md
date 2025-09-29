---
next:
  text: 'Exercices: premiers pas avec PHP.'
  link: '/exercices/chapitre-1-premiers-pas-avec-php'
---


# Chapitre 1 : Premier pas avec PHP

## 📋 Prérequis
- Aucun ! On part vraiment de zéro
- Un ordinateur (Windows, macOS ou Linux)
- Un navigateur web
- De la curiosité

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Ce qu'est PHP et pourquoi l'utiliser
- Installer un environnement de développement
- Écrire et exécuter ton premier script PHP
- Comprendre la syntaxe de base

---

## Introduction

PHP (Hypertext Preprocessor) est un langage de script côté serveur créé en 1995. Aujourd'hui, il fait tourner plus de 75% des sites web, dont WordPress, Facebook, et Wikipedia.

**Pourquoi PHP ?**
- Facile à apprendre pour les débutants
- Puissant pour les applications complexes
- Excellente intégration avec les bases de données
- Grande communauté et ressources
- Gratuit et open source

**Comment ça marche ?**
```
Client (navigateur) → Serveur web → PHP traite le code → HTML renvoyé → Client affiche
```

PHP s'exécute sur le serveur, pas dans le navigateur. Le client ne voit jamais le code PHP, seulement le résultat.

---

## Installation de l'environnement

### Option 1 : Solution tout-en-un (Recommandé pour débuter)

**XAMPP (Windows, macOS, Linux)**
1. Télécharge XAMPP sur [apachefriends.org](https://www.apachefriends.org)
2. Installe-le (garde les options par défaut)
3. Lance XAMPP Control Panel
4. Démarre Apache (clique sur "Start")
5. Tes fichiers vont dans : `C:\xampp\htdocs` (Windows) ou `/Applications/XAMPP/htdocs` (macOS)

**Alternatives :**
- **WAMP** (Windows uniquement) : wampserver.com
- **MAMP** (macOS et Windows) : mamp.info
- **Laragon** (Windows, moderne et rapide) : laragon.org

### Option 2 : Installation depuis les sources

**Ubuntu/Debian :**
```bash
sudo apt update
sudo apt install apache2 php libapache2-mod-php
sudo systemctl start apache2
```

**macOS (avec Homebrew) :**
```bash
brew install php
brew services start php
```

**Windows :**
Télécharge PHP sur [windows.php.net](https://windows.php.net/download/) et configure manuellement (plus complexe).

### Option 3 : Conteneur Docker

Si tu connais Docker :
```bash
docker run -d -p 8080:80 -v $(pwd):/var/www/html php:8.2-apache
```

### Option 4 : Solutions en ligne (pour tester rapidement)

- **PHP Sandbox** : phpsandbox.io
- **PHP Fiddle** : phpfiddle.org
- **3v4l.org** : teste sur plusieurs versions de PHP

---

## Premier script : Hello World

### Créer ton premier fichier

1. Ouvre un éditeur de texte (Notepad++, VS Code, Sublime Text...)
2. Crée un fichier `hello.php` dans `htdocs`
3. Écris ce code :

```php
<?php
echo "Hello World !";
?>
```

4. Ouvre ton navigateur et va sur : `http://localhost/hello.php`
5. Tu devrais voir : **Hello World !**

**🎉 Félicitations, tu viens d'exécuter ton premier script PHP !**

### Décortiquons le code

```php
<?php
// Balise d'ouverture PHP (obligatoire)

echo "Hello World !";
// echo affiche du texte
// ; termine chaque instruction

?>
// Balise de fermeture (optionnelle en fin de fichier)
```

**Règles importantes :**
- Le code PHP commence par `<?php`
- Chaque instruction se termine par `;`
- PHP est sensible à la casse pour les variables, pas pour les mots-clés
- Les commentaires : `//` pour une ligne, `/* */` pour plusieurs lignes

---

## Syntaxe de base

### Afficher du texte

```php
<?php
echo "Bonjour !";
echo 'Salut !';  // Guillemets simples ou doubles

// Plusieurs façons d'afficher
print "Hello";   // Alternative à echo
echo "Ligne 1", "Ligne 2", "Ligne 3";  // echo accepte plusieurs arguments
?>
```

### Mélanger HTML et PHP

```php
<!DOCTYPE html>
<html>
<head>
    <title>Ma page PHP</title>
</head>
<body>
    <h1><?php echo "Bienvenue sur mon site !"; ?></h1>
    <p>La date est : <?php echo date("d/m/Y"); ?></p>
</body>
</html>
```

Tu peux insérer du PHP n'importe où dans ton HTML avec `<?php ... ?>`.

### Commentaires

```php
<?php
// Ceci est un commentaire sur une ligne

/* 
   Ceci est un commentaire
   sur plusieurs lignes
*/

# Ceci est aussi un commentaire (style Unix)

echo "Visible"; // Commentaire en fin de ligne
?>
```

### Structure d'un fichier PHP

```php
<?php
// 1. Déclarations et configurations
error_reporting(E_ALL);

// 2. Inclusions de fichiers
// require 'config.php';

// 3. Logique PHP
$message = "Bonjour";

// 4. Affichage HTML
?>
<!DOCTYPE html>
<html>
<body>
    <h1><?php echo $message; ?></h1>
</body>
</html>
```

**Bonne pratique :** Ne ferme pas `?>` en fin de fichier pour les fichiers PHP pur (sans HTML). Ça évite les espaces blancs parasites.

---

## Vérifier ton installation

Crée un fichier `info.php` :

```php
<?php
phpinfo();
?>
```

Accède à `http://localhost/info.php` pour voir toutes les infos sur ton installation PHP (version, extensions, configuration).

**⚠️ Important :** Supprime ce fichier après, il ne doit jamais être en production (infos sensibles).

---

## Erreurs courantes de débutant

### 1. Oublier le point-virgule
```php
<?php
echo "Hello"  // ❌ Erreur !
echo "World";
?>
```

### 2. Utiliser des balises courtes (déconseillé)
```php
<? echo "Hello"; ?>  // ❌ Peut ne pas marcher partout
<?php echo "Hello"; ?>  // ✅ Toujours utilisable
```

### 3. Afficher sans echo
```php
<?php
"Hello World";  // ❌ Ne s'affiche pas
echo "Hello World";  // ✅ S'affiche
?>
```

### 4. Mélanger guillemets
```php
<?php
echo "Hello';  // ❌ Erreur de syntaxe
echo "Hello";  // ✅ Cohérent
?>
```

---

## Conclusion

Tu as maintenant :
- ✅ Un environnement PHP fonctionnel
- ✅ Écrit et exécuté ton premier script
- ✅ Compris la syntaxe de base de PHP
- ✅ Appris à mélanger PHP et HTML

PHP s'exécute côté serveur, génère du HTML, et le renvoie au navigateur. C'est un langage accessible mais puissant.

---

## 🚀 Prochaine étape

**Chapitre 2 : Variables et types de données**

Maintenant que ton environnement est prêt, on va apprendre à stocker des informations avec les variables. Tu découvriras les différents types de données en PHP : nombres, texte, booléens, et comment les manipuler efficacement.