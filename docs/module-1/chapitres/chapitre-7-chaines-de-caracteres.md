---
prev: 
    text: 'Exercices: Les tableaux'
    link: '/module-1/exercices/chapitre-6-les-fonctions'

next:
  text: 'Exercices: Les fonctions'
  link: '/module-1/exercices/chapitre-7-chaines-de-caracteres'
---

# Chapitre 7 : Chaînes de caractères

## 📋 Prérequis
- Maîtriser les variables et types (Chapitre 2)
- Comprendre les fonctions (Chapitre 6)
- Connaître les tableaux (Chapitre 5)

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Manipuler les chaînes de caractères
- Utiliser les fonctions natives de strings
- Maîtriser les expressions régulières (regex)
- Formater du texte efficacement

---

## Introduction

Les chaînes de caractères (strings) sont partout en PHP : noms, emails, contenus, URL, etc. PHP offre une panoplie de fonctions pour les manipuler.

---

## Création et syntaxe

### Guillemets simples vs doubles

```php
<?php
$nom = "Alice";

// Guillemets doubles : interprète les variables et séquences d'échappement
echo "Bonjour $nom";        // Bonjour Alice
echo "Ligne 1\nLigne 2";    // Saut de ligne

// Guillemets simples : littéral (plus rapide)
echo 'Bonjour $nom';        // Bonjour $nom
echo 'Ligne 1\nLigne 2';    // Ligne 1\nLigne 2

// Accolades pour clarifier
$fruits = ["pomme", "banane"];
echo "J'aime les {$fruits[0]}";  // J'aime les pomme
?>
```

### Séquences d'échappement

```php
<?php
echo "Citation : \"Hello\"";     // Citation : "Hello"
echo "Backslash : \\";           // Backslash : \
echo "Tabulation : \t";          // Ajoute une tab
echo "Nouvelle ligne : \n";      // Saut de ligne
echo "Retour chariot : \r";      // Retour au début
echo "Variable : \$prix";        // Variable : $prix

// Dans guillemets simples, seuls \' et \\ fonctionnent
echo 'C\'est l\'été';            // C'est l'été
?>
```

### Heredoc et Nowdoc

```php
<?php
$nom = "Alice";

// Heredoc (comme guillemets doubles)
$texte = <<<EOT
Bonjour $nom,

Ceci est un long texte
sur plusieurs lignes.
EOT;

// Nowdoc (comme guillemets simples)
$texte = <<<'EOT'
Bonjour $nom,

Les variables ne sont pas interprétées.
EOT;

// Utile pour du HTML
$html = <<<HTML
<div class="card">
    <h2>$nom</h2>
    <p>Contenu ici</p>
</div>
HTML;
?>
```

---

## Longueur et accès aux caractères

```php
<?php
$texte = "Bonjour";

// Longueur
echo strlen($texte);  // 7

// Accès par index (comme un tableau)
echo $texte[0];   // B
echo $texte[3];   // j
echo $texte[-1];  // r (dernier, PHP 7.1+)

// Modification
$texte[0] = 'b';
echo $texte;  // bonjour

// Parcourir
for ($i = 0; $i < strlen($texte); $i++) {
    echo $texte[$i] . " ";
}
?>
```

---

## Concaténation

```php
<?php
$prenom = "Alice";
$nom = "Dupont";

// Opérateur .
$complet = $prenom . " " . $nom;  // Alice Dupont

// Opérateur .=
$message = "Bonjour ";
$message .= $prenom;
$message .= " !";
echo $message;  // Bonjour Alice !

// Dans les guillemets doubles (plus lisible)
echo "Bonjour $prenom $nom !";
echo "Bonjour {$prenom} {$nom} !";
?>
```

---

## Casse (majuscules/minuscules)

```php
<?php
$texte = "Bonjour Le Monde";

echo strtolower($texte);   // bonjour le monde
echo strtoupper($texte);   // BONJOUR LE MONDE
echo ucfirst($texte);      // Bonjour le monde (1ère lettre maj)
echo lcfirst($texte);      // bonjour Le Monde (1ère lettre min)
echo ucwords($texte);      // Bonjour Le Monde (chaque mot)

// Comparaison insensible à la casse
$a = "Hello";
$b = "hello";
var_dump(strcasecmp($a, $b) === 0);  // true
?>
```

---

## Recherche dans une chaîne

### strpos : trouver une position

```php
<?php
$texte = "Bonjour le monde";

// Trouver la position
$pos = strpos($texte, "le");  // 8

// Si non trouvé : false (attention !== 0)
if (strpos($texte, "monde") !== false) {
    echo "Trouvé !";
}

// Depuis la droite
$pos = strrpos($texte, "o");  // 13 (dernier 'o')

// Insensible à la casse
$pos = stripos($texte, "MONDE");  // 11
?>
```

### str_contains, str_starts_with, str_ends_with (PHP 8+)

```php
<?php
$texte = "Bonjour le monde";

// Contient
var_dump(str_contains($texte, "monde"));     // true
var_dump(str_contains($texte, "hello"));     // false

// Commence par
var_dump(str_starts_with($texte, "Bonjour"));  // true
var_dump(str_starts_with($texte, "Hello"));    // false

// Finit par
var_dump(str_ends_with($texte, "monde"));    // true
var_dump(str_ends_with($texte, "bonjour"));  // false
?>
```

### strstr : extraire une sous-chaîne

```php
<?php
$email = "user@example.com";

// Depuis la première occurrence
echo strstr($email, "@");        // @example.com

// Avant la première occurrence
echo strstr($email, "@", true);  // user

// Insensible à la casse
echo stristr($email, "EXAMPLE");  // example.com
?>
```

---

## Extraction et découpage

### substr : extraire une portion

```php
<?php
$texte = "Bonjour le monde";

echo substr($texte, 0, 7);    // Bonjour (début, longueur)
echo substr($texte, 8);       // le monde (début seulement)
echo substr($texte, -5);      // monde (depuis la fin)
echo substr($texte, 0, -5);   // Bonjour le (jusqu'à -5 depuis fin)

// Remplacer une portion
$nouveau = substr_replace($texte, "tout", 8, 2);
echo $nouveau;  // Bonjour tout monde
?>
```

### explode et implode

```php
<?php
// Découper en tableau
$texte = "pomme,banane,orange";
$fruits = explode(",", $texte);
print_r($fruits);  // ["pomme", "banane", "orange"]

// Limiter les découpes
$fruits = explode(",", $texte, 2);
print_r($fruits);  // ["pomme", "banane,orange"]

// Joindre un tableau
$nouveau = implode(" - ", $fruits);
echo $nouveau;  // pomme - banane - orange

// Alias de implode
$nouveau = join(" | ", $fruits);
?>
```

### str_split : convertir en tableau de caractères

```php
<?php
$texte = "Hello";
$chars = str_split($texte);
print_r($chars);  // ["H", "e", "l", "l", "o"]

// Par morceaux de N caractères
$morceaux = str_split($texte, 2);
print_r($morceaux);  // ["He", "ll", "o"]
?>
```

---

## Nettoyage et formatage

### trim, ltrim, rtrim

```php
<?php
$texte = "  Bonjour le monde  ";

echo trim($texte);   // "Bonjour le monde"
echo ltrim($texte);  // "Bonjour le monde  "
echo rtrim($texte);  // "  Bonjour le monde"

// Supprimer des caractères spécifiques
$texte = "***Hello***";
echo trim($texte, "*");  // Hello

$texte = "000123000";
echo trim($texte, "0");  // 123
?>
```

### str_pad : compléter une chaîne

```php
<?php
$numero = "42";

echo str_pad($numero, 5, "0", STR_PAD_LEFT);   // 00042
echo str_pad($numero, 5, "0", STR_PAD_RIGHT);  // 42000
echo str_pad($numero, 6, "-", STR_PAD_BOTH);   // --42--
?>
```

### wordwrap : couper les lignes

```php
<?php
$texte = "Ceci est un très long texte qui doit être coupé en plusieurs lignes";
echo wordwrap($texte, 20, "\n");
// Ceci est un très
// long texte qui doit
// être coupé en
// plusieurs lignes
?>
```

---

## Remplacement

### str_replace

```php
<?php
$texte = "Bonjour le monde";

// Remplacer
echo str_replace("monde", "PHP", $texte);  // Bonjour le PHP

// Plusieurs remplacements
$texte = "J'aime les pommes et les pommes sont bonnes";
echo str_replace("pommes", "bananes", $texte);

// Insensible à la casse
echo str_ireplace("MONDE", "PHP", $texte);

// Compter les remplacements
$count = 0;
$nouveau = str_replace("le", "LE", $texte, $count);
echo "Remplacé $count fois";

// Tableaux de recherche/remplacement
$recherche = ["monde", "Bonjour"];
$remplacement = ["PHP", "Hello"];
echo str_replace($recherche, $remplacement, $texte);
?>
```

### strtr : translitération

```php
<?php
$texte = "hello world";

// Remplacements multiples (tableau associatif)
$remplacements = [
    "hello" => "bonjour",
    "world" => "monde"
];
echo strtr($texte, $remplacements);  // bonjour monde

// Caractère par caractère
echo strtr($texte, "helo", "HELO");  // HELLo wOrLd
?>
```

---

## Comparaison

```php
<?php
$a = "abc";
$b = "abd";

// Comparaison (retourne <0, 0, >0)
echo strcmp($a, $b);   // -1 (a < b)
echo strcmp($b, $a);   // 1 (b > a)
echo strcmp($a, $a);   // 0 (égaux)

// Insensible à la casse
echo strcasecmp("Hello", "HELLO");  // 0

// Avec longueur limitée
echo strncmp("hello", "help", 3);  // 0 (premiers 3 caractères égaux)

// Naturel (humain)
$files = ["file1.txt", "file10.txt", "file2.txt"];
sort($files);           // file1, file10, file2
natsort($files);        // file1, file2, file10
?>
```

---

## Fonctions diverses

### str_repeat et str_shuffle

```php
<?php
echo str_repeat("*", 10);  // **********
echo str_repeat("Ab", 3);  // AbAbAb

// Mélanger aléatoirement
echo str_shuffle("hello");  // llohe (aléatoire)
?>
```

### str_word_count

```php
<?php
$texte = "Bonjour le monde";

// Compter les mots
echo str_word_count($texte);  // 3

// Retourner un tableau
$mots = str_word_count($texte, 1);
print_r($mots);  // ["Bonjour", "le", "monde"]

// Avec positions
$positions = str_word_count($texte, 2);
print_r($positions);  // [0 => "Bonjour", 8 => "le", 11 => "monde"]
?>
```

### number_format

```php
<?php
$nombre = 1234567.891;

echo number_format($nombre);              // 1,234,568
echo number_format($nombre, 2);           // 1,234,567.89
echo number_format($nombre, 2, ',', ' '); // 1 234 567,89

// Prix formaté
$prix = 1299.99;
echo number_format($prix, 2, ',', ' ') . " €";  // 1 299,99 €
?>
```

---

## Encodage et conversion

### htmlspecialchars et htmlentities

```php
<?php
$texte = '<script>alert("XSS")</script>';

// Échapper pour HTML (sécurité importante !)
echo htmlspecialchars($texte);
// &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;

// Convertir toutes les entités
echo htmlentities("é à è");  // &eacute; &agrave; &egrave;

// Décoder
$encoded = "&lt;b&gt;Hello&lt;/b&gt;";
echo html_entity_decode($encoded);  // <b>Hello</b>
?>
```

### Encodage d'URL

```php
<?php
$url = "hello world & special=chars";

// Encoder pour URL
echo urlencode($url);  // hello+world+%26+special%3Dchars

// Encoder pour chemin
echo rawurlencode($url);  // hello%20world%20%26%20special%3Dchars

// Décoder
$encoded = "hello+world";
echo urldecode($encoded);  // hello world
?>
```

### base64

```php
<?php
$texte = "Hello World";

// Encoder
$encoded = base64_encode($texte);
echo $encoded;  // SGVsbG8gV29ybGQ=

// Décoder
$decoded = base64_decode($encoded);
echo $decoded;  // Hello World
?>
```

---

## Expressions régulières (Regex)

### preg_match : chercher un motif

```php
<?php
$texte = "Mon email est user@example.com";

// Chercher un email
if (preg_match('/[\w\.-]+@[\w\.-]+\.\w+/', $texte, $matches)) {
    echo "Email trouvé : " . $matches[0];  // user@example.com
}

// Avec groupes de capture
$texte = "Date : 2024-12-25";
if (preg_match('/(\d{4})-(\d{2})-(\d{2})/', $texte, $matches)) {
    echo "Année : {$matches[1]}";   // 2024
    echo "Mois : {$matches[2]}";    // 12
    echo "Jour : {$matches[3]}";    // 25
}

// Retourne 1 si trouvé, 0 sinon
?>
```

### preg_match_all : toutes les occurrences

```php
<?php
$texte = "Les emails sont : user@test.com et admin@test.com";

preg_match_all('/[\w\.-]+@[\w\.-]+\.\w+/', $texte, $matches);
print_r($matches[0]);
// ["user@test.com", "admin@test.com"]
?>
```

### preg_replace : remplacer avec regex

```php
<?php
$texte = "Mon numéro est 06 12 34 56 78";

// Supprimer les espaces des numéros
$propre = preg_replace('/\s+/', '', $texte);
echo $propre;  // Monnuméroest0612345678

// Masquer email
$email = "user@example.com";
$masque = preg_replace('/(.{2}).+(@.+)/', '$1***$2', $email);
echo $masque;  // us***@example.com

// Callback
$texte = "hello world";
$maj = preg_replace_callback('/\b\w/', function($match) {
    return strtoupper($match[0]);
}, $texte);
echo $maj;  // Hello World
?>
```

### preg_split : découper avec regex

```php
<?php
$texte = "pomme,banane;orange:kiwi";

// Découper sur plusieurs séparateurs
$fruits = preg_split('/[,;:]/', $texte);
print_r($fruits);  // ["pomme", "banane", "orange", "kiwi"]

// Découper sur espaces multiples
$texte = "un    deux     trois";
$mots = preg_split('/\s+/', $texte);
print_r($mots);  // ["un", "deux", "trois"]
?>
```

### Motifs regex courants

```php
<?php
// Email (simple)
$pattern = '/^[\w\.-]+@[\w\.-]+\.\w{2,}$/';

// URL
$pattern = '/^https?:\/\/[\w\.-]+(\/.*)?$/';

// Téléphone français
$pattern = '/^0[1-9](\d{2}){4}$/';

// Code postal français
$pattern = '/^\d{5}$/';

// Date (YYYY-MM-DD)
$pattern = '/^\d{4}-\d{2}-\d{2}$/';

// Mot de passe fort (8+ chars, maj, min, chiffre)
$pattern = '/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/';

// Hexadécimal
$pattern = '/^#?[0-9A-Fa-f]{6}$/';
?>
```

---

## Cas pratiques

### Valider un email

```php
<?php
function valider_email($email): bool {
    // Avec filter_var (recommandé)
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    
    // Ou avec regex
    // return preg_match('/^[\w\.-]+@[\w\.-]+\.\w{2,}$/', $email) === 1;
}

var_dump(valider_email("user@example.com"));  // true
var_dump(valider_email("invalid.email"));     // false
?>
```

### Slugifier un texte

```php
<?php
function slugify($texte): string {
    // Minuscules
    $texte = strtolower($texte);
    
    // Remplacer accents
    $texte = iconv('UTF-8', 'ASCII//TRANSLIT//IGNORE', $texte);
    
    // Garder seulement lettres, chiffres, tirets
    $texte = preg_replace('/[^a-z0-9-]/', '-', $texte);
    
    // Supprimer tirets multiples
    $texte = preg_replace('/-+/', '-', $texte);
    
    // Trim les tirets
    $texte = trim($texte, '-');
    
    return $texte;
}

echo slugify("Mon Super Article !");  // mon-super-article
?>
```

### Extraire des mentions (@user)

```php
<?php
function extraire_mentions($texte): array {
    preg_match_all('/@(\w+)/', $texte, $matches);
    return $matches[1];
}

$tweet = "Hello @alice et @bob, comment allez-vous ?";
$mentions = extraire_mentions($tweet);
print_r($mentions);  // ["alice", "bob"]
?>
```

### Masquer informations sensibles

```php
<?php
function masquer_email($email): string {
    return preg_replace('/(.{2}).+(@.+)/', '$1***$2', $email);
}

function masquer_telephone($tel): string {
    return preg_replace('/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/', '$1 ** ** ** $5', $tel);
}

echo masquer_email("alice@example.com");  // al***@example.com
echo masquer_telephone("0612345678");      // 06 ** ** ** 78
?>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ La manipulation de chaînes (concaténation, extraction, recherche)
- ✅ Les fonctions natives (strlen, substr, str_replace, etc.)
- ✅ Le formatage et nettoyage (trim, pad, format)
- ✅ L'encodage (HTML, URL, base64)
- ✅ Les expressions régulières pour patterns complexes

Les strings sont omniprésentes. Ces compétences sont essentielles pour valider, formater, et sécuriser les données !

---

## 🚀 Prochaine étape

**Chapitre 8 : Gestion des fichiers**

Maintenant que tu sais manipuler du texte, on va apprendre à travailler avec les fichiers ! Lecture, écriture, upload, et manipulation de répertoires.