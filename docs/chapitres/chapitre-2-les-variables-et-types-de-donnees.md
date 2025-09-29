---
prev: 
    text: 'Exercices: Premiers pas avec PHP'
    link: '/exercices/chapitre-1-premiers-pas-avec-php'

next:
  text: 'Exercices: Les variables et types de données.'
  link: '/exercices/chapitre-2-les-variables-et-types-de-donnees'
---

# Chapitre 2 : Variables et types de données

## 📋 Prérequis
- Avoir un environnement PHP fonctionnel
- Savoir créer et exécuter un fichier PHP
- Connaître la syntaxe de base (Chapitre 1)

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Créer et utiliser des variables
- Comprendre les différents types de données
- Convertir entre types
- Utiliser les constantes

---

## Introduction

Les variables sont des conteneurs qui stockent des informations. Imagine une boîte avec une étiquette : le nom de la variable est l'étiquette, et le contenu est la valeur.

En PHP, les variables sont dynamiques : tu n'as pas besoin de déclarer leur type, PHP le devine automatiquement.

---

## Déclaration de variables

### Syntaxe de base

```php
<?php
$nom = "Alice";
$age = 25;
$prix = 19.99;

echo $nom;  // Affiche : Alice
?>
```

**Règles pour nommer une variable :**
- Commence toujours par `$`
- Puis une lettre ou underscore `_`
- Peut contenir lettres, chiffres, underscores
- Sensible à la casse (`$age` ≠ `$Age`)
- Pas d'espaces ni de caractères spéciaux

```php
<?php
// ✅ Valides
$nom = "Bob";
$prenom_utilisateur = "Alice";
$age2 = 30;
$_temp = 42;

// ❌ Invalides
$2age = 30;        // Commence par un chiffre
$prenom-nom = "X"; // Contient un tiret
$mon age = 25;     // Contient un espace
?>
```

### Conventions de nommage

```php
<?php
// Snake case (recommandé en PHP)
$nom_utilisateur = "Alice";
$prix_total = 100;

// Camel case (aussi utilisé)
$nomUtilisateur = "Bob";
$prixTotal = 200;

// Noms descriptifs (préférable)
$email_client = "alice@example.com";  // ✅ Clair
$e = "alice@example.com";             // ❌ Pas clair
?>
```

---

## Types de données primitifs

### 1. String (Chaîne de caractères)

```php
<?php
$prenom = "Alice";
$nom = 'Dupont';
$message = "Bonjour tout le monde !";

// Guillemets doubles : interprète les variables
$texte = "Bonjour $prenom";  // Bonjour Alice

// Guillemets simples : pas d'interprétation
$texte = 'Bonjour $prenom';  // Bonjour $prenom

// Concaténation avec le point
$nom_complet = $prenom . " " . $nom;  // Alice Dupont
?>
```

**Différence importante :**
```php
<?php
$ville = "Paris";

echo "J'habite à $ville";    // J'habite à Paris
echo 'J\'habite à $ville';   // J'habite à $ville

// Échappement du guillemet simple avec \
?>
```

### 2. Integer (Nombre entier)

```php
<?php
$age = 25;
$temperature = -5;
$grand_nombre = 1000000;

// Formats spéciaux
$hexa = 0xFF;      // 255 en hexadécimal
$octal = 0755;     // 493 en octal
$binaire = 0b1010; // 10 en binaire

echo $age;  // 25
?>
```

### 3. Float (Nombre décimal)

```php
<?php
$prix = 19.99;
$pi = 3.14159;
$scientifique = 1.5e3;  // 1500 (notation scientifique)

$total = 10.5 + 5.3;    // 15.8
?>
```

### 4. Boolean (Booléen)

```php
<?php
$est_connecte = true;
$est_admin = false;

$majeur = ($age >= 18);  // true si age >= 18

// Valeurs considérées comme false
$vide = "";          // false
$zero = 0;           // false
$null_var = null;    // false
$tableau_vide = [];  // false

// Tout le reste est true
?>
```

### 5. NULL

```php
<?php
$variable_nulle = null;
$non_definie;  // null par défaut

// Tester si null
if ($variable_nulle === null) {
    echo "C'est null";
}

// Isset teste si existe et non null
if (isset($variable_nulle)) {
    echo "Variable définie";
}
?>
```

---

## Afficher le type d'une variable

```php
<?php
$nombre = 42;

// var_dump : affiche type et valeur
var_dump($nombre);  // int(42)

// gettype : retourne le type en string
echo gettype($nombre);  // integer

// is_* : teste le type
var_dump(is_int($nombre));     // bool(true)
var_dump(is_string($nombre));  // bool(false)
var_dump(is_bool($nombre));    // bool(false)
?>
```

---

## Conversion de types (Cast)

### Conversion explicite

```php
<?php
$texte = "123";
$nombre = (int)$texte;     // Cast en integer
$decimal = (float)$texte;  // Cast en float

echo $nombre + 10;  // 133

// Autres conversions
$chaine = (string)42;      // "42"
$booleen = (bool)1;        // true
$tableau = (array)"test";  // ["test"]
?>
```

### Conversion automatique (Type Juggling)

```php
<?php
$a = "10";
$b = 5;

// PHP convertit automatiquement
echo $a + $b;      // 15 (string "10" devient int 10)
echo $a . $b;      // "105" (concatenation, int 5 devient string "5")

// Attention aux conversions surprenantes
echo "10 pommes" + 5;  // 15 (extrait le nombre)
echo "pommes" + 5;     // 5 (aucun nombre = 0)
?>
```

### Fonctions de conversion

```php
<?php
$texte = "123";

$nombre = intval($texte);    // 123
$decimal = floatval($texte); // 123.0
$chaine = strval(456);       // "456"

// settype modifie directement la variable
$var = "123";
settype($var, "integer");
echo $var;  // 123 (maintenant un int)
?>
```

---

## Constantes

Les constantes sont comme des variables qui ne changent jamais.

### Avec define()

```php
<?php
define("SITE_NAME", "Mon Super Site");
define("MAX_USERS", 100);
define("VERSION", 2.5);

echo SITE_NAME;  // Mon Super Site

// Les constantes sont globales partout
function afficher() {
    echo SITE_NAME;  // Fonctionne sans problème
}
?>
```

### Avec const (plus moderne)

```php
<?php
const TVA = 0.20;
const DEVISE = "EUR";

$prix_ht = 100;
$prix_ttc = $prix_ht * (1 + TVA);  // 120

echo "Prix : $prix_ttc " . DEVISE;
?>
```

**Différences define vs const :**
- `const` doit être au niveau racine (ou dans une classe)
- `const` fonctionne au moment de la compilation
- `define()` peut être dans une condition
- `const` est plus rapide

### Constantes magiques

PHP fournit des constantes automatiques :

```php
<?php
echo __FILE__;      // Chemin complet du fichier
echo __DIR__;       // Répertoire du fichier
echo __LINE__;      // Numéro de ligne actuel
echo __FUNCTION__;  // Nom de la fonction courante
echo __CLASS__;     // Nom de la classe courante

// Exemple pratique
echo "Erreur dans le fichier " . __FILE__ . " ligne " . __LINE__;
?>
```

---

## Variables variables

PHP permet des variables dont le nom est dynamique :

```php
<?php
$nom_var = "prenom";
$$nom_var = "Alice";  // Crée $prenom = "Alice"

echo $prenom;  // Alice
echo $$nom_var;  // Alice

// Utile mais attention à la lisibilité
$fruit = "pomme";
$pomme = "rouge";
echo $$fruit;  // rouge
?>
```

---

## Vérification de types

```php
<?php
$valeur = 42;

// Fonctions is_*
var_dump(is_int($valeur));      // true
var_dump(is_float($valeur));    // false
var_dump(is_string($valeur));   // false
var_dump(is_bool($valeur));     // false
var_dump(is_array($valeur));    // false
var_dump(is_null($valeur));     // false
var_dump(is_numeric($valeur));  // true (nombre ou string numérique)

// Vérifications utiles
var_dump(isset($valeur));   // true (existe et non null)
var_dump(empty($valeur));   // false (non vide)
?>
```

---

## Scope des variables

```php
<?php
$globale = "Je suis globale";

function test() {
    $locale = "Je suis locale";
    echo $locale;       // ✅ Fonctionne
    // echo $globale;   // ❌ N'existe pas ici
}

test();
echo $locale;  // ❌ N'existe pas ici
echo $globale; // ✅ Fonctionne

// On verra comment accéder aux globales dans le chapitre Fonctions
?>
```

---

## Pièges courants

### 1. Comparaison de types
```php
<?php
$a = "10";
$b = 10;

echo $a == $b;   // true (comparaison de valeur)
echo $a === $b;  // false (comparaison stricte type + valeur)

// Toujours utiliser === quand possible
?>
```

### 2. Variables non initialisées
```php
<?php
// ❌ Mauvaise pratique
$total = $total + 10;  // Warning si $total n'existe pas

// ✅ Bonne pratique
$total = 0;
$total = $total + 10;
?>
```

### 3. Noms de variables sensibles à la casse
```php
<?php
$age = 25;
$Age = 30;
$AGE = 35;

// Ce sont 3 variables différentes !
echo $age;  // 25
?>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ La création et l'utilisation de variables
- ✅ Les types de données primitifs (string, int, float, bool, null)
- ✅ La conversion entre types
- ✅ Les constantes avec define() et const
- ✅ La vérification de types avec is_*

Les variables sont la base de tout programme. Tu vas les utiliser partout !

---

## 🚀 Prochaine étape

**Chapitre 3 : Opérateurs et expressions**

Maintenant que tu sais stocker des données, on va apprendre à les manipuler ! Tu découvriras tous les opérateurs : calculs mathématiques, comparaisons, logique booléenne, et bien plus encore.