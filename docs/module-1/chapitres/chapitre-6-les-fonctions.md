---
prev: 
    text: 'Exercices: Les tableaux'
    link: '/module-1/exercices/chapitre-5-les-tableaux'

next:
  text: 'Exercices: Les fonctions'
  link: '/module-1/exercices/chapitre-6-les-fonctions'
---

# Chapitre 6 : Fonctions

## 📋 Prérequis
- Maîtriser les variables et types (Chapitre 2)
- Comprendre les structures de contrôle (Chapitre 4)
- Savoir manipuler les tableaux (Chapitre 5)

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Créer et utiliser des fonctions
- Gérer les paramètres et arguments
- Comprendre les valeurs de retour
- Maîtriser la portée des variables (scope)
- Utiliser les fonctions anonymes et fléchées

---

## Introduction

Les fonctions sont des blocs de code réutilisables. Au lieu de copier-coller du code, tu crées une fonction et tu l'appelles quand tu en as besoin.

**Avantages :**
- Éviter la répétition (DRY : Don't Repeat Yourself)
- Faciliter la maintenance
- Rendre le code plus lisible
- Permettre le test unitaire
- Organiser la logique

---

## Déclaration et appel

### Fonction simple

```php
<?php
// Déclaration
function direBonjour() {
    echo "Bonjour !\n";
}

// Appel
direBonjour();  // Affiche : Bonjour !
direBonjour();  // Affiche : Bonjour !

// On peut l'appeler autant de fois qu'on veut
?>
```

### Convention de nommage

```php
<?php
// Snake case (recommandé en PHP)
function calculer_prix_ttc() {
    // ...
}

// Camel case (aussi utilisé)
function calculerPrixTtc() {
    // ...
}

// Noms descriptifs
function valider_email() { }        // ✅ Clair
function v() { }                     // ❌ Pas clair

// Verbes pour les actions
function envoyer_email() { }
function recuperer_utilisateur() { }
function est_majeur() { }            // Question = is/est
?>
```

---

## Paramètres et arguments

### Paramètres simples

```php
<?php
function direBonjour($nom) {
    echo "Bonjour $nom !\n";
}

direBonjour("Alice");   // Bonjour Alice !
direBonjour("Bob");     // Bonjour Bob !

// Plusieurs paramètres
function additionner($a, $b) {
    $resultat = $a + $b;
    echo "$a + $b = $resultat\n";
}

additionner(5, 3);  // 5 + 3 = 8
?>
```

### Paramètres avec valeurs par défaut

```php
<?php
function direBonjour($nom = "Invité") {
    echo "Bonjour $nom !\n";
}

direBonjour("Alice");  // Bonjour Alice !
direBonjour();         // Bonjour Invité !

// Plusieurs paramètres par défaut
function creer_utilisateur($nom, $role = "user", $actif = true) {
    echo "Utilisateur : $nom, Rôle : $role, Actif : " . ($actif ? "oui" : "non") . "\n";
}

creer_utilisateur("Alice");                      // user, actif
creer_utilisateur("Bob", "admin");               // admin, actif
creer_utilisateur("Charlie", "moderator", false); // moderator, inactif
?>
```

**Important :** Les paramètres avec valeur par défaut doivent être à la fin.

```php
<?php
// ❌ Erreur
function test($a = 5, $b) { }

// ✅ Correct
function test($b, $a = 5) { }
?>
```

### Type hinting (déclaration de types)

```php
<?php
// PHP 7+
function additionner(int $a, int $b) {
    return $a + $b;
}

echo additionner(5, 3);     // 8
echo additionner(5.7, 3.2); // 8 (convertis en int)

// Types disponibles
function exemples(
    int $entier,
    float $decimal,
    string $texte,
    bool $booleen,
    array $tableau,
    callable $fonction,
    object $objet
) {
    // ...
}

// Autoriser null (PHP 7.1+)
function direBonjour(?string $nom) {
    if ($nom === null) {
        echo "Bonjour !\n";
    } else {
        echo "Bonjour $nom !\n";
    }
}

direBonjour("Alice");  // Bonjour Alice !
direBonjour(null);     // Bonjour !
?>
```

### Type union (PHP 8+)

```php
<?php
function traiter(int|float $nombre) {
    return $nombre * 2;
}

echo traiter(5);     // 10
echo traiter(5.5);   // 11

// Plusieurs types
function afficher(string|int|null $valeur) {
    echo $valeur ?? "rien";
}
?>
```

---

## Valeurs de retour

### return simple

```php
<?php
function additionner($a, $b) {
    return $a + $b;
}

$resultat = additionner(5, 3);
echo $resultat;  // 8

// Sans return, la fonction retourne null
function ne_retourne_rien() {
    echo "Hello";
}

$valeur = ne_retourne_rien();  // Hello
var_dump($valeur);              // NULL
?>
```

### Return avec type

```php
<?php
// Spécifier le type de retour
function additionner(int $a, int $b): int {
    return $a + $b;
}

function diviser(float $a, float $b): float {
    return $a / $b;
}

function est_majeur(int $age): bool {
    return $age >= 18;
}

// Retour nullable
function trouver_utilisateur(int $id): ?array {
    // Retourne un tableau ou null si non trouvé
    return null;
}
?>
```

### Retours multiples (early return)

```php
<?php
function calculer_reduction(float $prix, bool $est_membre): float {
    if ($prix <= 0) {
        return 0;
    }
    
    if (!$est_membre) {
        return 0;
    }
    
    if ($prix > 100) {
        return $prix * 0.20;  // 20%
    }
    
    return $prix * 0.10;  // 10%
}

echo calculer_reduction(150, true);   // 30
echo calculer_reduction(50, true);    // 5
echo calculer_reduction(150, false);  // 0
?>
```

### Retourner plusieurs valeurs

```php
<?php
// Via un tableau
function calculer_stats($nombres) {
    $min = min($nombres);
    $max = max($nombres);
    $moyenne = array_sum($nombres) / count($nombres);
    
    return [$min, $max, $moyenne];
}

$stats = calculer_stats([10, 20, 30, 40]);
echo "Min: {$stats[0]}, Max: {$stats[1]}, Moy: {$stats[2]}\n";

// Avec déstructuration (PHP 7.1+)
[$min, $max, $moyenne] = calculer_stats([10, 20, 30, 40]);
echo "Min: $min, Max: $max, Moy: $moyenne\n";

// Tableau associatif (plus explicite)
function calculer_stats_v2($nombres) {
    return [
        'min' => min($nombres),
        'max' => max($nombres),
        'moyenne' => array_sum($nombres) / count($nombres)
    ];
}

$stats = calculer_stats_v2([10, 20, 30, 40]);
echo "Min: {$stats['min']}\n";
?>
```

---

## Portée des variables (scope)

### Variables locales

```php
<?php
function calculer() {
    $x = 10;  // Variable locale
    echo $x;
}

calculer();  // 10
// echo $x;  // Erreur : $x n'existe pas ici
?>
```

### Variables globales

```php
<?php
$compteur = 0;  // Variable globale

function incrementer() {
    global $compteur;  // Accès à la globale
    $compteur++;
}

incrementer();
incrementer();
echo $compteur;  // 2

// Ou avec $GLOBALS
function incrementer_v2() {
    $GLOBALS['compteur']++;
}
?>
```

**⚠️ Attention :** Les variables globales rendent le code difficile à tester et maintenir. Préfère passer des paramètres.

```php
<?php
// ❌ Mauvaise pratique
$total = 0;
function ajouter($n) {
    global $total;
    $total += $n;
}

// ✅ Bonne pratique
function ajouter($total, $n) {
    return $total + $n;
}

$total = 0;
$total = ajouter($total, 10);
$total = ajouter($total, 20);
?>
```

### Variables statiques

```php
<?php
function compteur() {
    static $count = 0;  // Garde sa valeur entre les appels
    $count++;
    echo "Appel n°$count\n";
}

compteur();  // Appel n°1
compteur();  // Appel n°2
compteur();  // Appel n°3

// Utile pour les compteurs, caches, etc.
?>
```

---

## Passage par valeur vs référence

### Par valeur (défaut)

```php
<?php
function doubler($nombre) {
    $nombre = $nombre * 2;
    echo "Dans la fonction : $nombre\n";
}

$x = 10;
doubler($x);  // Dans la fonction : 20
echo $x;      // 10 (inchangé)
?>
```

### Par référence

```php
<?php
function doubler(&$nombre) {  // & = passage par référence
    $nombre = $nombre * 2;
}

$x = 10;
doubler($x);
echo $x;  // 20 (modifié)

// Pratique pour modifier plusieurs variables
function incrementer_tous(&$a, &$b, &$c) {
    $a++;
    $b++;
    $c++;
}

$x = $y = $z = 0;
incrementer_tous($x, $y, $z);
echo "$x, $y, $z";  // 1, 1, 1
?>
```

---

## Fonctions variadiques

### Nombre variable d'arguments

```php
<?php
// PHP 5.6+
function additionner(...$nombres) {
    $total = 0;
    foreach ($nombres as $n) {
        $total += $n;
    }
    return $total;
}

echo additionner(1, 2, 3);           // 6
echo additionner(10, 20, 30, 40);    // 100
echo additionner(5);                 // 5

// Combiner avec paramètres normaux
function creer_message($titre, ...$items) {
    echo "$titre :\n";
    foreach ($items as $item) {
        echo "- $item\n";
    }
}

creer_message("Courses", "Pain", "Lait", "Œufs");
?>
```

### func_get_args (ancienne méthode)

```php
<?php
function somme() {
    $args = func_get_args();
    return array_sum($args);
}

echo somme(1, 2, 3, 4, 5);  // 15
?>
```

---

## Fonctions anonymes (closures)

### Syntaxe de base

```php
<?php
// Fonction anonyme stockée dans une variable
$dire_bonjour = function($nom) {
    echo "Bonjour $nom !\n";
};

$dire_bonjour("Alice");  // Bonjour Alice !

// Utilisation avec array_map
$nombres = [1, 2, 3, 4, 5];
$carres = array_map(function($n) {
    return $n * $n;
}, $nombres);
print_r($carres);  // [1, 4, 9, 16, 25]
?>
```

### Capturer des variables (use)

```php
<?php
$multiplicateur = 3;

$multiplier = function($n) use ($multiplicateur) {
    return $n * $multiplicateur;
};

echo $multiplier(5);  // 15

// Capturer par référence
$compteur = 0;
$incrementer = function() use (&$compteur) {
    $compteur++;
};

$incrementer();
$incrementer();
echo $compteur;  // 2
?>
```

### Arrow functions (PHP 7.4+)

```php
<?php
// Syntaxe courte
$carre = fn($n) => $n * $n;
echo $carre(5);  // 25

// Capture automatique des variables
$multiplicateur = 3;
$multiplier = fn($n) => $n * $multiplicateur;  // Pas besoin de use
echo $multiplier(5);  // 15

// Avec array_map
$nombres = [1, 2, 3, 4, 5];
$doubles = array_map(fn($n) => $n * 2, $nombres);
print_r($doubles);  // [2, 4, 6, 8, 10]

// ⚠️ Pas de bloc { }, seulement une expression
?>
```

---

## Fonctions de rappel (callbacks)

```php
<?php
function traiter_tableau(array $data, callable $callback) {
    $resultat = [];
    foreach ($data as $item) {
        $resultat[] = $callback($item);
    }
    return $resultat;
}

$nombres = [1, 2, 3, 4, 5];

// Avec fonction nommée
function doubler($n) {
    return $n * 2;
}
$doubles = traiter_tableau($nombres, 'doubler');

// Avec fonction anonyme
$carres = traiter_tableau($nombres, function($n) {
    return $n * $n;
});

// Avec arrow function
$triples = traiter_tableau($nombres, fn($n) => $n * 3);

print_r($triples);  // [3, 6, 9, 12, 15]
?>
```

---

## Fonctions récursives

Une fonction qui s'appelle elle-même.

```php
<?php
// Factorielle
function factorielle($n) {
    if ($n <= 1) {
        return 1;  // Cas de base
    }
    return $n * factorielle($n - 1);  // Appel récursif
}

echo factorielle(5);  // 120 (5 × 4 × 3 × 2 × 1)

// Fibonacci
function fibonacci($n) {
    if ($n <= 1) {
        return $n;
    }
    return fibonacci($n - 1) + fibonacci($n - 2);
}

echo fibonacci(10);  // 55

// Parcourir un tableau multidimensionnel
function compter_elements($array) {
    $count = 0;
    foreach ($array as $item) {
        if (is_array($item)) {
            $count += compter_elements($item);  // Récursif
        } else {
            $count++;
        }
    }
    return $count;
}

$data = [1, 2, [3, 4, [5, 6]], 7];
echo compter_elements($data);  // 7
?>
```

**⚠️ Attention :** Toujours avoir un cas de base pour éviter la boucle infinie !

---

## Cas pratiques

### Validation de formulaire

```php
<?php
function valider_email($email): bool {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function valider_age($age): bool {
    return is_numeric($age) && $age >= 0 && $age <= 120;
}

function valider_formulaire($data): array {
    $erreurs = [];
    
    if (empty($data['nom'])) {
        $erreurs[] = "Le nom est requis";
    }
    
    if (!valider_email($data['email'] ?? '')) {
        $erreurs[] = "Email invalide";
    }
    
    if (!valider_age($data['age'] ?? '')) {
        $erreurs[] = "Âge invalide";
    }
    
    return $erreurs;
}

$formulaire = [
    'nom' => 'Alice',
    'email' => 'alice@example.com',
    'age' => 25
];

$erreurs = valider_formulaire($formulaire);
if (empty($erreurs)) {
    echo "Formulaire valide !";
} else {
    foreach ($erreurs as $erreur) {
        echo "- $erreur\n";
    }
}
?>
```

### Formater du texte

```php
<?php
function slugify($texte): string {
    $texte = strtolower($texte);
    $texte = preg_replace('/[^a-z0-9]+/', '-', $texte);
    $texte = trim($texte, '-');
    return $texte;
}

echo slugify("Mon Super Article !");  // mon-super-article

function tronquer($texte, $longueur = 50): string {
    if (strlen($texte) <= $longueur) {
        return $texte;
    }
    return substr($texte, 0, $longueur) . '...';
}

echo tronquer("Ceci est un très long texte qui sera tronqué", 20);
// Ceci est un très lo...
?>
```

### Calculs financiers

```php
<?php
function calculer_prix_ttc(float $prix_ht, float $tva = 0.20): float {
    return $prix_ht * (1 + $tva);
}

function appliquer_reduction(float $prix, float $reduction_pct): float {
    return $prix * (1 - $reduction_pct / 100);
}

function calculer_prix_final(float $prix_ht, bool $est_membre = false): float {
    $prix_ttc = calculer_prix_ttc($prix_ht);
    
    if ($est_membre) {
        $prix_ttc = appliquer_reduction($prix_ttc, 15);
    }
    
    return round($prix_ttc, 2);
}

echo calculer_prix_final(100);        // 120.00
echo calculer_prix_final(100, true);  // 102.00 (avec réduction)
?>
```

---

## Bonnes pratiques

### 1. Une fonction = une responsabilité

```php
<?php
// ❌ Fait trop de choses
function traiter_utilisateur($data) {
    // Valide
    // Enregistre en base
    // Envoie un email
    // Log
}

// ✅ Séparé en fonctions simples
function valider_utilisateur($data) { }
function enregistrer_utilisateur($data) { }
function envoyer_email_bienvenue($email) { }
function logger($message) { }
?>
```

### 2. Noms descriptifs

```php
<?php
// ❌ Pas clair
function f($x, $y) { }
function calc() { }

// ✅ Explicite
function calculer_distance($x1, $y1, $x2, $y2) { }
function obtenir_prix_total() { }
?>
```

### 3. Éviter les effets de bord

```php
<?php
// ❌ Modifie une variable globale
$total = 0;
function ajouter($n) {
    global $total;
    $total += $n;
}

// ✅ Pure function (pas d'effet de bord)
function ajouter($total, $n) {
    return $total + $n;
}
?>
```

### 4. Limiter le nombre de paramètres

```php
<?php
// ❌ Trop de paramètres
function creer_user($nom, $prenom, $email, $tel, $adresse, $ville, $cp, $pays) { }

// ✅ Utiliser un tableau
function creer_user(array $data) {
    // Accès via $data['nom'], etc.
}
?>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ La déclaration et l'appel de fonctions
- ✅ Les paramètres (par défaut, typés, variadiques)
- ✅ Les valeurs de retour
- ✅ La portée des variables (local, global, static)
- ✅ Le passage par valeur et référence
- ✅ Les fonctions anonymes et arrow functions
- ✅ Les fonctions récursives

Les fonctions sont essentielles pour organiser ton code. Tu vas les utiliser partout !

---

## 🚀 Prochaine étape

**Chapitre 7 : Chaînes de caractères**

Maintenant que tu sais structurer ton code avec des fonctions, on va plonger dans la manipulation de texte ! Tu découvriras toutes les fonctions pour traiter les strings, les expressions régulières, et le formatage avancé.