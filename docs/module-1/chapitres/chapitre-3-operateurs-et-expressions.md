---
prev: 
    text: 'Exercices: Les variables et type de données'
    link: '/module-1/exercices/chapitre-2-les-variables-et-type-de-donnees'

next:
  text: 'Exercices: Les opérateurs et expressions'
  link: '/module-1/exercices/chapitre-3-operateurs-et-expressions'
---

# Chapitre 3: Opérateurs et expressions.

## 📋 Prérequis
- Comprendre les variables (Chapitre 2)
- Connaître les types de données de base
- Savoir afficher des résultats avec echo

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Effectuer des calculs mathématiques
- Comparer des valeurs
- Utiliser la logique booléenne
- Manipuler des variables avec les opérateurs d'assignation
- Comprendre la priorité des opérateurs

---

## Introduction

Les opérateurs sont des symboles qui effectuent des opérations sur des valeurs. Comme en mathématiques : `+` additionne, `-` soustrait, etc. PHP en propose bien plus !

---

## Opérateurs arithmétiques

### Les bases

```php
<?php
$a = 10;
$b = 3;

echo $a + $b;  // 13 (addition)
echo $a - $b;  // 7  (soustraction)
echo $a * $b;  // 30 (multiplication)
echo $a / $b;  // 3.333... (division)
echo $a % $b;  // 1  (modulo : reste de la division)
echo $a ** $b; // 1000 (puissance : 10³)
?>
```

### Le modulo en pratique

```php
<?php
$nombre = 17;

// Nombre pair ou impair ?
if ($nombre % 2 == 0) {
    echo "Pair";
} else {
    echo "Impair";
}

// Tous les 5 éléments
for ($i = 0; $i < 20; $i++) {
    if ($i % 5 == 0) {
        echo "$i est divisible par 5\n";
    }
}
?>
```

### Division entière

```php
<?php
$total = 17;
$par_page = 5;

// Division normale
echo $total / $par_page;  // 3.4

// Division entière (tronquer)
echo intdiv($total, $par_page);  // 3

// Nombre de pages nécessaires (arrondi au-dessus)
echo ceil($total / $par_page);  // 4
?>
```

---

## Opérateurs d'assignation

### Assignation simple

```php
<?php
$x = 10;      // Assignation de base
$y = $x;      // $y vaut maintenant 10
$z = $x + 5;  // $z vaut 15
?>
```

### Opérateurs combinés

```php
<?php
$nombre = 10;

$nombre += 5;   // Équivalent : $nombre = $nombre + 5  (15)
$nombre -= 3;   // Équivalent : $nombre = $nombre - 3  (12)
$nombre *= 2;   // Équivalent : $nombre = $nombre * 2  (24)
$nombre /= 4;   // Équivalent : $nombre = $nombre / 4  (6)
$nombre %= 4;   // Équivalent : $nombre = $nombre % 4  (2)

// Concaténation
$texte = "Hello";
$texte .= " World";  // $texte = $texte . " World"
echo $texte;  // Hello World
?>
```

### Incrémentation et décrémentation

```php
<?php
$i = 5;

// Post-incrémentation
echo $i++;  // Affiche 5, puis $i devient 6
echo $i;    // Affiche 6

// Pré-incrémentation
echo ++$i;  // $i devient 7, puis affiche 7

// Décrémentation
echo $i--;  // Affiche 7, puis $i devient 6
echo --$i;  // $i devient 5, puis affiche 5

// Pratique dans les boucles
for ($j = 0; $j < 10; $j++) {
    echo $j;  // 0, 1, 2, ..., 9
}
?>
```

**Différence pré/post :**
```php
<?php
$a = 5;
$b = $a++;  // $b = 5, $a = 6 (affecte puis incrémente)

$x = 5;
$y = ++$x;  // $y = 6, $x = 6 (incrémente puis affecte)
?>
```

---

## Opérateurs de comparaison

### Comparaisons basiques

```php
<?php
$a = 10;
$b = 5;
$c = "10";

var_dump($a == $c);   // true  (égalité de valeur)
var_dump($a === $c);  // false (égalité stricte : valeur ET type)
var_dump($a != $b);   // true  (différent)
var_dump($a !== $c);  // true  (strictement différent)

var_dump($a > $b);    // true  (supérieur)
var_dump($a < $b);    // false (inférieur)
var_dump($a >= 10);   // true  (supérieur ou égal)
var_dump($a <= 5);    // false (inférieur ou égal)
?>
```

### Spaceship operator (PHP 7+)

```php
<?php
$a = 5;
$b = 10;

echo $a <=> $b;  // -1 (si $a < $b)
echo $b <=> $a;  //  1 (si $b > $a)
echo $a <=> $a;  //  0 (si égaux)

// Très utile pour trier
$fruits = ["orange", "pomme", "banane"];
usort($fruits, function($a, $b) {
    return $a <=> $b;  // Tri alphabétique
});
?>
```

### Null coalescing operator (??)

```php
<?php
// Sans ??
$nom = isset($_GET['nom']) ? $_GET['nom'] : 'Anonyme';

// Avec ?? (plus concis)
$nom = $_GET['nom'] ?? 'Anonyme';

// Chaîner plusieurs valeurs
$valeur = $config ?? $default ?? $fallback ?? 'par_defaut';

// Depuis PHP 7.4 : ??=
$options['theme'] ??= 'dark';  // Assigne seulement si non défini
?>
```

---

## Opérateurs logiques

### AND, OR, NOT

```php
<?php
$age = 25;
$permis = true;

// AND (&&) : tous doivent être vrais
if ($age >= 18 && $permis) {
    echo "Peut conduire";
}

// OR (||) : au moins un doit être vrai
if ($age < 18 || !$permis) {
    echo "Ne peut pas conduire";
}

// NOT (!) : inverse le booléen
$est_mineur = !($age >= 18);  // false

// XOR : vrai si exactement un est vrai (rarement utilisé)
var_dump(true XOR false);   // true
var_dump(true XOR true);    // false
?>
```

### Versions longues (and, or)

```php
<?php
// && et AND sont différents (priorité)
$a = true && false;   // $a = false
$b = true and false;  // $b = true (and a une priorité plus faible)

// Préfère toujours &&, ||, ! (conventions)
?>
```

### Court-circuit

```php
<?php
function verifier() {
    echo "Fonction appelée\n";
    return true;
}

// AND : si le premier est false, le second n'est pas évalué
false && verifier();  // "Fonction appelée" ne s'affiche PAS

// OR : si le premier est true, le second n'est pas évalué
true || verifier();   // "Fonction appelée" ne s'affiche PAS

// Pratique pour éviter les erreurs
$user && $user->display();  // display() seulement si $user existe
?>
```

---

## Opérateurs de chaînes

### Concaténation

```php
<?php
$prenom = "Alice";
$nom = "Dupont";

// Avec .
$complet = $prenom . " " . $nom;  // Alice Dupont

// Avec .=
$message = "Bonjour ";
$message .= $prenom;
$message .= "!";
echo $message;  // Bonjour Alice!

// Dans les guillemets doubles
echo "Bonjour $prenom $nom";  // Bonjour Alice Dupont
echo "Total : {$prix}€";      // Accolades pour clarifier
?>
```

---

## Opérateur ternaire

### Syntaxe de base

```php
<?php
$age = 20;

// if/else classique
if ($age >= 18) {
    $statut = "Majeur";
} else {
    $statut = "Mineur";
}

// Ternaire (condition ? si_vrai : si_faux)
$statut = ($age >= 18) ? "Majeur" : "Mineur";

// Exemples pratiques
$reduction = ($montant > 100) ? 10 : 0;
$class = ($actif) ? "active" : "inactive";
$message = ($erreurs > 0) ? "Erreurs détectées" : "OK";
?>
```

### Ternaire abrégé (depuis PHP 5.3)

```php
<?php
// Si la condition est vraie, retourne la condition elle-même
$nom = $nom ?: "Anonyme";
// Équivalent à : $nom = $nom ? $nom : "Anonyme"

// Mais attention aux variables non définies
$user = $user ?: "Invité";  // Warning si $user n'existe pas

// Préfère ?? pour les variables potentiellement non définies
$user = $user ?? "Invité";  // Pas de warning
?>
```

### Ternaires imbriqués (à éviter)

```php
<?php
// ❌ Difficile à lire
$note = ($score >= 90) ? "A" : ($score >= 80) ? "B" : ($score >= 70) ? "C" : "D";

// ✅ Préfère if/elseif pour la lisibilité
if ($score >= 90) {
    $note = "A";
} elseif ($score >= 80) {
    $note = "B";
} elseif ($score >= 70) {
    $note = "C";
} else {
    $note = "D";
}
?>
```

---

## Opérateurs sur les bits (avancé)

```php
<?php
// Rarement utilisés, mais bon à connaître
$a = 5;   // 0101 en binaire
$b = 3;   // 0011 en binaire

echo $a & $b;   // 1  (AND : 0001)
echo $a | $b;   // 7  (OR  : 0111)
echo $a ^ $b;   // 6  (XOR : 0110)
echo ~$a;       // -6 (NOT : inverse les bits)
echo $a << 1;   // 10 (décalage à gauche : 1010)
echo $a >> 1;   // 2  (décalage à droite : 0010)

// Cas d'usage : permissions, flags
define('READ', 1);    // 001
define('WRITE', 2);   // 010
define('EXECUTE', 4); // 100

$permissions = READ | WRITE;  // 011 (read + write)

if ($permissions & READ) {
    echo "Peut lire";
}
?>
```

---

## Priorité des opérateurs

Les opérateurs ont un ordre d'évaluation :

```php
<?php
// Multiplication avant addition
echo 2 + 3 * 4;  // 14 (pas 20)

// Utilise des parenthèses pour clarifier
echo (2 + 3) * 4;  // 20

// Priorités (de haute à basse) :
// 1. ++ -- (incrémentation)
// 2. ** (puissance)
// 3. * / % (multiplication, division, modulo)
// 4. + - . (addition, soustraction, concaténation)
// 5. < <= > >= (comparaisons)
// 6. == != === !== (égalité)
// 7. && (AND logique)
// 8. || (OR logique)
// 9. ?: (ternaire)
// 10. = += -= etc. (assignation)

// Exemple complexe
$result = 2 + 3 * 4 > 10 && 5 < 10;  // true
// Évaluation : 2 + 12 > 10 && true → 14 > 10 && true → true
?>
```

**Bonne pratique :** En cas de doute, utilise des parenthèses !

---

## Opérateur de suppression d'erreur (@)

```php
<?php
// @ supprime les messages d'erreur (à éviter généralement)
$fichier = @file_get_contents("inexistant.txt");

// ❌ Mauvaise pratique : cache les problèmes
$resultat = @($a / $b);  // Si $b = 0, erreur silencieuse

// ✅ Bonne pratique : gère les erreurs proprement
if (file_exists("fichier.txt")) {
    $fichier = file_get_contents("fichier.txt");
} else {
    echo "Fichier introuvable";
}
?>
```

---

## Opérateurs de tableaux (aperçu)

```php
<?php
$a = [1, 2, 3];
$b = [4, 5, 6];

// Union
$c = $a + $b;  // [1, 2, 3] (garde les clés de $a)

// Égalité
var_dump($a == $b);   // false (valeurs différentes)
var_dump($a === $b);  // false (strictement différent)

// On verra les tableaux en détail au Chapitre 5
?>
```

---

## Cas pratiques

### Calculatrice

```php
<?php
$a = 15;
$b = 4;
$operation = "+";

switch ($operation) {
    case "+":
        $resultat = $a + $b;
        break;
    case "-":
        $resultat = $a - $b;
        break;
    case "*":
        $resultat = $a * $b;
        break;
    case "/":
        $resultat = ($b != 0) ? $a / $b : "Division par zéro";
        break;
    default:
        $resultat = "Opération inconnue";
}

echo "$a $operation $b = $resultat";
?>
```

### Validation d'âge

```php
<?php
$age = 17;
$avec_parent = false;

$peut_entrer = ($age >= 18) || ($age >= 13 && $avec_parent);

echo $peut_entrer ? "Accès autorisé" : "Accès refusé";
?>
```

### Calcul de réduction

```php
<?php
$prix = 120;
$est_membre = true;
$premiere_commande = false;

// Réduction de 20% pour les membres, 10% pour première commande
$reduction_pct = $est_membre ? 20 : ($premiere_commande ? 10 : 0);
$reduction = $prix * ($reduction_pct / 100);
$prix_final = $prix - $reduction;

echo "Prix : $prix€\n";
echo "Réduction : -$reduction€ ($reduction_pct%)\n";
echo "Total : $prix_final€";
?>
```

---

## Pièges courants

### 1. Confusion = et ==
```php
<?php
$a = 5;

if ($a = 10) {  // ❌ Assignation ! Toujours true
    echo "Oups";
}

if ($a == 10) {  // ✅ Comparaison
    echo "Correct";
}
?>
```

### 2. Priorité des opérateurs
```php
<?php
// ❌ Pas ce qu'on veut
$resultat = 10 + 5 * 2;  // 20, pas 30

// ✅ Avec parenthèses
$resultat = (10 + 5) * 2;  // 30
?>
```

### 3. Division par zéro
```php
<?php
$a = 10;
$b = 0;

// ❌ Erreur fatale (division normale)
// echo $a / $b;

// ✅ Toujours vérifier
if ($b != 0) {
    echo $a / $b;
} else {
    echo "Division impossible";
}
?>
```

### 4. Comparaison de types différents
```php
<?php
echo "10" + 5;     // 15 (conversion auto)
echo "10" . 5;     // "105" (concaténation)
echo "10abc" + 5;  // 15 (extrait le nombre)

// Toujours faire attention au contexte
?>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ Les opérateurs arithmétiques (+, -, *, /, %, **)
- ✅ Les opérateurs d'assignation (=, +=, -=, ++, --)
- ✅ Les opérateurs de comparaison (==, ===, !=, !==, <, >, <=, >=)
- ✅ Les opérateurs logiques (&&, ||, !)
- ✅ L'opérateur ternaire (? :)
- ✅ La priorité des opérateurs

Les opérateurs sont les outils qui te permettent de manipuler les données. Tu les utiliseras constamment !

---

## 🚀 Prochaine étape

**Chapitre 4 : Structures de contrôle**

Maintenant que tu sais faire des calculs et des comparaisons, on va apprendre à prendre des décisions dans le code ! Tu découvriras les conditions (if, else, switch) et les boucles (for, while, foreach) pour contrôler le flux d'exécution de tes programmes.