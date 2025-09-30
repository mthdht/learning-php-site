---
prev: 
    text: 'Exercices: Structures de contrôle'
    link: '/module-1/exercices/chapitre-4-structures-de-controle'

next:
  text: 'Exercices: Les tableaux'
  link: '/module-1/exercices/chapitre-5-les-tableaux'
---

# Chapitre 5: Les tableaux.

## 📋 Prérequis
- Maîtriser les variables et types de données (Chapitre 2)
- Comprendre les boucles, notamment foreach (Chapitre 4)
- Connaître les opérateurs de base

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Créer et manipuler des tableaux indexés
- Utiliser des tableaux associatifs
- Travailler avec des tableaux multidimensionnels
- Maîtriser les fonctions natives de manipulation de tableaux

---

## Introduction

Les tableaux (arrays) permettent de stocker plusieurs valeurs dans une seule variable. Au lieu de créer `$produit1`, `$produit2`, `$produit3`, tu crées un tableau `$produits` qui contient toutes les valeurs.

En PHP, les tableaux sont très puissants et flexibles : ils peuvent contenir n'importe quel type de données, même d'autres tableaux !

---

## Tableaux indexés

### Création

```php
<?php
// Syntaxe moderne (recommandée)
$fruits = ["Pomme", "Banane", "Orange"];

// Ancienne syntaxe (toujours valide)
$legumes = array("Carotte", "Tomate", "Salade");

// Création vide puis ajout
$couleurs = [];
$couleurs[] = "Rouge";
$couleurs[] = "Vert";
$couleurs[] = "Bleu";

// Avec index spécifique
$nombres = [0 => 10, 1 => 20, 2 => 30];
?>
```

### Accès aux éléments

```php
<?php
$fruits = ["Pomme", "Banane", "Orange"];

echo $fruits[0];  // Pomme (premier élément)
echo $fruits[1];  // Banane
echo $fruits[2];  // Orange

// Modification
$fruits[1] = "Fraise";
echo $fruits[1];  // Fraise

// Ajout à la fin
$fruits[] = "Kiwi";
echo $fruits[3];  // Kiwi
?>
```

### Parcourir un tableau indexé

```php
<?php
$fruits = ["Pomme", "Banane", "Orange", "Fraise"];

// Avec foreach (le plus simple)
foreach ($fruits as $fruit) {
    echo "$fruit\n";
}

// Avec foreach et index
foreach ($fruits as $index => $fruit) {
    echo "$index : $fruit\n";
}

// Avec for
for ($i = 0; $i < count($fruits); $i++) {
    echo $fruits[$i] . "\n";
}
?>
```

---

## Tableaux associatifs

Les clés sont des chaînes de caractères au lieu de nombres.

### Création

```php
<?php
$personne = [
    "prenom" => "Alice",
    "nom" => "Dupont",
    "age" => 25,
    "ville" => "Paris"
];

// Ancienne syntaxe
$voiture = array(
    "marque" => "Renault",
    "modele" => "Clio",
    "annee" => 2020
);
?>
```

### Accès aux éléments

```php
<?php
$personne = [
    "prenom" => "Alice",
    "nom" => "Dupont",
    "age" => 25
];

echo $personne["prenom"];  // Alice
echo $personne["age"];     // 25

// Modification
$personne["age"] = 26;

// Ajout d'une clé
$personne["email"] = "alice@example.com";
?>
```

### Parcourir un tableau associatif

```php
<?php
$personne = [
    "prenom" => "Alice",
    "nom" => "Dupont",
    "age" => 25,
    "ville" => "Paris"
];

// Avec foreach
foreach ($personne as $cle => $valeur) {
    echo "$cle : $valeur\n";
}
// prenom : Alice
// nom : Dupont
// age : 25
// ville : Paris

// Seulement les valeurs
foreach ($personne as $valeur) {
    echo "$valeur\n";
}
?>
```

---

## Tableaux multidimensionnels

Des tableaux qui contiennent d'autres tableaux.

### Tableau 2D (liste de listes)

```php
<?php
$produits = [
    ["Pomme", 2.50, 10],
    ["Banane", 1.80, 15],
    ["Orange", 3.00, 8]
];

// Accès
echo $produits[0][0];  // Pomme
echo $produits[0][1];  // 2.50
echo $produits[1][0];  // Banane

// Parcourir
foreach ($produits as $produit) {
    echo "Produit : {$produit[0]}, Prix : {$produit[1]}€, Stock : {$produit[2]}\n";
}
?>
```

### Tableau associatif de tableaux associatifs

```php
<?php
$users = [
    "user1" => [
        "nom" => "Dupont",
        "email" => "dupont@example.com",
        "role" => "admin"
    ],
    "user2" => [
        "nom" => "Martin",
        "email" => "martin@example.com",
        "role" => "user"
    ]
];

// Accès
echo $users["user1"]["nom"];    // Dupont
echo $users["user2"]["email"];  // martin@example.com

// Parcourir
foreach ($users as $id => $user) {
    echo "ID: $id\n";
    echo "Nom: {$user['nom']}\n";
    echo "Email: {$user['email']}\n";
    echo "---\n";
}
?>
```

### Tableau complexe mixte

```php
<?php
$entreprise = [
    "nom" => "TechCorp",
    "fondation" => 2010,
    "employes" => [
        [
            "prenom" => "Alice",
            "poste" => "Dev",
            "salaire" => 45000
        ],
        [
            "prenom" => "Bob",
            "poste" => "Designer",
            "salaire" => 40000
        ]
    ],
    "bureaux" => ["Paris", "Lyon", "Marseille"]
];

// Accès
echo $entreprise["nom"];                    // TechCorp
echo $entreprise["employes"][0]["prenom"]; // Alice
echo $entreprise["bureaux"][1];            // Lyon
?>
```

---

## Fonctions de manipulation de tableaux

### Informations sur les tableaux

```php
<?php
$fruits = ["Pomme", "Banane", "Orange"];

// Nombre d'éléments
echo count($fruits);  // 3
echo sizeof($fruits); // 3 (alias de count)

// Vérifier si vide
var_dump(empty($fruits));  // false

// Vérifier si une clé existe
var_dump(isset($fruits[1]));     // true
var_dump(array_key_exists(1, $fruits));  // true

// Vérifier si une valeur existe
var_dump(in_array("Pomme", $fruits));  // true
var_dump(in_array("Kiwi", $fruits));   // false
?>
```

### Ajouter et supprimer des éléments

```php
<?php
$fruits = ["Pomme", "Banane"];

// Ajouter à la fin
$fruits[] = "Orange";
array_push($fruits, "Fraise", "Kiwi");
print_r($fruits);  // Pomme, Banane, Orange, Fraise, Kiwi

// Ajouter au début
array_unshift($fruits, "Mangue");
print_r($fruits);  // Mangue, Pomme, Banane, Orange, Fraise, Kiwi

// Retirer du début
$premier = array_shift($fruits);  // Retourne "Mangue"
print_r($fruits);  // Pomme, Banane, Orange, Fraise, Kiwi

// Retirer de la fin
$dernier = array_pop($fruits);  // Retourne "Kiwi"
print_r($fruits);  // Pomme, Banane, Orange, Fraise

// Supprimer par index
unset($fruits[1]);  // Supprime "Banane"
print_r($fruits);  // [0 => Pomme, 2 => Orange, 3 => Fraise]

// Réindexer après unset
$fruits = array_values($fruits);
print_r($fruits);  // [0 => Pomme, 1 => Orange, 2 => Fraise]
?>
```

### Trier les tableaux

```php
<?php
$nombres = [5, 2, 8, 1, 9];

// Tri croissant (modifie le tableau)
sort($nombres);
print_r($nombres);  // [1, 2, 5, 8, 9]

// Tri décroissant
rsort($nombres);
print_r($nombres);  // [9, 8, 5, 2, 1]

// Tri avec conservation des clés
$ages = ["Alice" => 25, "Bob" => 30, "Charlie" => 20];
asort($ages);  // Tri par valeurs
print_r($ages);  // Charlie => 20, Alice => 25, Bob => 30

ksort($ages);  // Tri par clés
print_r($ages);  // Alice => 25, Bob => 30, Charlie => 20

// Tri inverse avec clés
arsort($ages);  // Par valeurs décroissantes
krsort($ages);  // Par clés décroissantes
?>
```

### Fusionner et découper

```php
<?php
$tab1 = [1, 2, 3];
$tab2 = [4, 5, 6];

// Fusionner
$fusion = array_merge($tab1, $tab2);
print_r($fusion);  // [1, 2, 3, 4, 5, 6]

// Avec l'opérateur + (attention aux clés)
$resultat = $tab1 + $tab2;  // Garde les clés de $tab1

// Extraire une portion
$nombres = [1, 2, 3, 4, 5, 6, 7, 8];
$portion = array_slice($nombres, 2, 4);
print_r($portion);  // [3, 4, 5, 6] (à partir de l'index 2, 4 éléments)

// Supprimer et remplacer
$fruits = ["Pomme", "Banane", "Orange", "Fraise"];
array_splice($fruits, 1, 2, ["Kiwi", "Mangue"]);
print_r($fruits);  // [Pomme, Kiwi, Mangue, Fraise]
?>
```

### Recherche et filtrage

```php
<?php
$nombres = [10, 20, 30, 40, 50];

// Trouver la position d'une valeur
$position = array_search(30, $nombres);  // 2
var_dump($position);

// Filtrer avec une condition
$pairs = array_filter($nombres, function($n) {
    return $n % 2 == 0;
});
print_r($pairs);  // Tous les éléments (tous pairs ici)

// Transformer chaque élément
$doubles = array_map(function($n) {
    return $n * 2;
}, $nombres);
print_r($doubles);  // [20, 40, 60, 80, 100]

// Réduire à une seule valeur
$somme = array_reduce($nombres, function($carry, $item) {
    return $carry + $item;
}, 0);
echo $somme;  // 150
?>
```

### Clés et valeurs

```php
<?php
$personne = [
    "prenom" => "Alice",
    "nom" => "Dupont",
    "age" => 25
];

// Obtenir les clés
$cles = array_keys($personne);
print_r($cles);  // [prenom, nom, age]

// Obtenir les valeurs
$valeurs = array_values($personne);
print_r($valeurs);  // [Alice, Dupont, 25]

// Combiner (créer tableau associatif)
$keys = ["a", "b", "c"];
$vals = [1, 2, 3];
$combine = array_combine($keys, $vals);
print_r($combine);  // [a => 1, b => 2, c => 3]

// Inverser clés/valeurs
$flip = array_flip($personne);
print_r($flip);  // [Alice => prenom, Dupont => nom, 25 => age]
?>
```

### Fonctions utiles diverses

```php
<?php
// Vérifier si c'est un tableau
$var = [1, 2, 3];
var_dump(is_array($var));  // true

// Compter les occurrences
$lettres = ["a", "b", "a", "c", "a", "b"];
$compteur = array_count_values($lettres);
print_r($compteur);  // [a => 3, b => 2, c => 1]

// Valeurs uniques
$nombres = [1, 2, 2, 3, 3, 3, 4];
$uniques = array_unique($nombres);
print_r($uniques);  // [1, 2, 3, 4]

// Remplir un tableau
$zeros = array_fill(0, 5, 0);
print_r($zeros);  // [0, 0, 0, 0, 0]

// Mélanger aléatoirement
$cartes = [1, 2, 3, 4, 5];
shuffle($cartes);
print_r($cartes);  // Ordre aléatoire

// Inverser l'ordre
$nombres = [1, 2, 3, 4, 5];
$inverse = array_reverse($nombres);
print_r($inverse);  // [5, 4, 3, 2, 1]
?>
```

---

## Fonctions avancées avec callbacks

### array_map : transformer

```php
<?php
$nombres = [1, 2, 3, 4, 5];

// Doubler chaque nombre
$doubles = array_map(function($n) {
    return $n * 2;
}, $nombres);
print_r($doubles);  // [2, 4, 6, 8, 10]

// Avec plusieurs tableaux
$prenoms = ["Alice", "Bob"];
$noms = ["Dupont", "Martin"];
$complets = array_map(function($p, $n) {
    return "$p $n";
}, $prenoms, $noms);
print_r($complets);  // [Alice Dupont, Bob Martin]
?>
```

### array_filter : filtrer

```php
<?php
$nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Garder seulement les pairs
$pairs = array_filter($nombres, function($n) {
    return $n % 2 == 0;
});
print_r($pairs);  // [2, 4, 6, 8, 10]

// Garder les > 5
$grands = array_filter($nombres, function($n) {
    return $n > 5;
});
print_r($grands);  // [6, 7, 8, 9, 10]
?>
```

### array_reduce : réduire

```php
<?php
$nombres = [1, 2, 3, 4, 5];

// Somme
$somme = array_reduce($nombres, function($total, $n) {
    return $total + $n;
}, 0);  // 0 est la valeur initiale
echo $somme;  // 15

// Produit
$produit = array_reduce($nombres, function($total, $n) {
    return $total * $n;
}, 1);  // 1 est la valeur initiale
echo $produit;  // 120

// Concaténer des strings
$mots = ["Bonjour", "le", "monde"];
$phrase = array_reduce($mots, function($acc, $mot) {
    return $acc . " " . $mot;
}, "");
echo trim($phrase);  // Bonjour le monde
?>
```

---

## Tableaux et références

```php
<?php
$original = [1, 2, 3];

// Copie normale (par valeur)
$copie = $original;
$copie[0] = 99;
print_r($original);  // [1, 2, 3] (inchangé)
print_r($copie);     // [99, 2, 3]

// Par référence
$reference = &$original;
$reference[0] = 99;
print_r($original);   // [99, 2, 3] (modifié)
print_r($reference);  // [99, 2, 3]

// Dans foreach
$nombres = [1, 2, 3];
foreach ($nombres as &$n) {
    $n = $n * 2;  // Modifie le tableau original
}
unset($n);  // Important : détruire la référence après
print_r($nombres);  // [2, 4, 6]
?>
```

---

## Cas pratiques

### Panier d'achat

```php
<?php
$panier = [
    ["nom" => "Pomme", "prix" => 2.50, "quantite" => 3],
    ["nom" => "Banane", "prix" => 1.80, "quantite" => 5],
    ["nom" => "Orange", "prix" => 3.00, "quantite" => 2]
];

$total = 0;
foreach ($panier as $article) {
    $sous_total = $article["prix"] * $article["quantite"];
    $total += $sous_total;
    echo "{$article['nom']} : {$article['quantite']} × {$article['prix']}€ = {$sous_total}€\n";
}
echo "Total : {$total}€";
?>
```

### Statistiques sur des notes

```php
<?php
$notes = [12, 15, 8, 18, 14, 10, 16];

$moyenne = array_sum($notes) / count($notes);
$min = min($notes);
$max = max($notes);

sort($notes);
$mediane = $notes[floor(count($notes) / 2)];

echo "Moyenne : $moyenne\n";
echo "Min : $min\n";
echo "Max : $max\n";
echo "Médiane : $mediane\n";
?>
```

### Grouper des données

```php
<?php
$etudiants = [
    ["nom" => "Alice", "classe" => "A"],
    ["nom" => "Bob", "classe" => "B"],
    ["nom" => "Charlie", "classe" => "A"],
    ["nom" => "David", "classe" => "B"],
    ["nom" => "Eve", "classe" => "A"]
];

$par_classe = [];
foreach ($etudiants as $etudiant) {
    $classe = $etudiant["classe"];
    $par_classe[$classe][] = $etudiant["nom"];
}

print_r($par_classe);
// [A => [Alice, Charlie, Eve], B => [Bob, David]]
?>
```

---

## Pièges courants

### 1. Modification pendant foreach sans référence

```php
<?php
$nombres = [1, 2, 3];

// ❌ Ne modifie pas le tableau original
foreach ($nombres as $n) {
    $n = $n * 2;
}
print_r($nombres);  // [1, 2, 3] (inchangé)

// ✅ Avec référence
foreach ($nombres as &$n) {
    $n = $n * 2;
}
unset($n);
print_r($nombres);  // [2, 4, 6]
?>
```

### 2. Confusion entre isset et array_key_exists

```php
<?php
$tab = ["a" => null, "b" => 0];

var_dump(isset($tab["a"]));              // false (car null)
var_dump(array_key_exists("a", $tab));   // true (la clé existe)

var_dump(isset($tab["b"]));              // false (car 0 = falsy)
var_dump(array_key_exists("b", $tab));   // true
?>
```

### 3. Utiliser [] sur null

```php
<?php
$var = null;

// ❌ Erreur en PHP 7.4+
// $var[] = "test";

// ✅ Initialiser d'abord
$var = [];
$var[] = "test";
?>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ Les tableaux indexés et associatifs
- ✅ Les tableaux multidimensionnels
- ✅ L'ajout, suppression, modification d'éléments
- ✅ Le tri et la recherche
- ✅ Les fonctions de manipulation (map, filter, reduce)
- ✅ Le parcours avec foreach

Les tableaux sont omniprésents en PHP. Tu les utiliseras pour stocker des listes, gérer des données de formulaires, traiter des résultats de bases de données, et bien plus !

---

## 🚀 Prochaine étape

**Chapitre 6 : Fonctions**

Maintenant que tu sais manipuler des données complexes, on va apprendre à organiser ton code ! Les fonctions permettent de créer des blocs réutilisables, de structurer ton programme, et d'éviter la répétition.