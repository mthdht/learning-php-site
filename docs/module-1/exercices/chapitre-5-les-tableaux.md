---
prev: 
    text: 'Chapitre 5: Les tableaux.'
    link: '/module-1/chapitres/chapitre-5-les-tableaux'

next:
  text: 'Chapitre 6: Les fonctions.'
  link: '/module-1/chapitres/chapitre-6-les-fonctions'
---

# Exercices - Chapitre 5 : Tableaux en PHP

## 📝 Tableaux indexés

### Exercice 5.1 : Création et affichage
```php
<?php
// Crée un tableau avec 5 prénoms
// Affiche chaque prénom avec son index
?>
```

---

### Exercice 5.2 : Somme d'un tableau
```php
<?php
$nombres = [12, 45, 7, 23, 56, 89, 34];

// Calcule la somme de tous les nombres
// Sans utiliser array_sum()
?>
```

---

### Exercice 5.3 : Plus grand et plus petit
```php
<?php
$nombres = [34, 12, 89, 5, 67, 23, 91, 45];

// Trouve le plus grand et le plus petit nombre
// Sans utiliser min() et max()
?>
```

---

### Exercice 5.4 : Inverser un tableau
```php
<?php
$tableau = [1, 2, 3, 4, 5];

// Inverse l'ordre des éléments
// Sans utiliser array_reverse()
// Résultat : [5, 4, 3, 2, 1]
?>
```

---

## 📝 Tableaux associatifs

### Exercice 5.5 : Fiche d'identité
```php
<?php
// Crée un tableau associatif avec :
// prénom, nom, âge, ville, email
// Affiche chaque information au format "Clé : Valeur"
?>
```

---

### Exercice 5.6 : Prix TTC
```php
<?php
$produits = [
    "pain" => 1.20,
    "lait" => 0.90,
    "beurre" => 2.50,
    "fromage" => 5.80
];

// Ajoute 20% de TVA à chaque prix
// Affiche les nouveaux prix TTC
?>
```

---

### Exercice 5.7 : Traduction
```php
<?php
$traductions = [
    "hello" => "bonjour",
    "goodbye" => "au revoir",
    "thank you" => "merci",
    "please" => "s'il vous plaît"
];

$mot = "hello";

// Affiche la traduction du mot
// Ou "Traduction non trouvée" si le mot n'existe pas
?>
```

---

### Exercice 5.8 : Compteur de mots
```php
<?php
$phrase = "le chat mange le poisson le chat dort";

// Compte combien de fois chaque mot apparaît
// Résultat attendu : [le => 3, chat => 2, mange => 1, ...]
// Indice : explode() pour séparer, puis boucle
?>
```

---

## 📝 Tableaux multidimensionnels

### Exercice 5.9 : Catalogue de produits
```php
<?php
// Crée un tableau de 3 produits avec :
// nom, prix, stock, catégorie
// Affiche tous les produits formatés
?>
```

---

### Exercice 5.10 : Carnet de notes
```php
<?php
$notes = [
    "Alice" => [12, 15, 14, 16],
    "Bob" => [10, 11, 13, 12],
    "Charlie" => [16, 18, 17, 19]
];

// Calcule et affiche la moyenne de chaque étudiant
?>
```

---

### Exercice 5.11 : Matrice 3x3
```php
<?php
$matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Affiche la matrice formatée :
// 1 2 3
// 4 5 6
// 7 8 9
?>
```

---

### Exercice 5.12 : Somme par ligne et colonne
```php
<?php
$matrice = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Calcule :
// - La somme de chaque ligne
// - La somme de chaque colonne
?>
```

---

## 📝 Fonctions de manipulation

### Exercice 5.13 : Trier par valeur
```php
<?php
$ages = [
    "Alice" => 25,
    "Bob" => 30,
    "Charlie" => 20,
    "David" => 35
];

// Trie par âge croissant (en conservant les clés)
// Affiche le résultat
?>
```

---

### Exercice 5.14 : Fusionner des listes
```php
<?php
$liste1 = ["Pomme", "Banane"];
$liste2 = ["Orange", "Kiwi"];
$liste3 = ["Fraise", "Mangue"];

// Fusionne les 3 listes en une seule
// Affiche le résultat
?>
```

---

### Exercice 5.15 : Filtrer les nombres pairs
```php
<?php
$nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Garde seulement les nombres pairs
// Utilise array_filter()
?>
```

---

### Exercice 5.16 : Doubler les valeurs
```php
<?php
$nombres = [1, 2, 3, 4, 5];

// Multiplie chaque nombre par 2
// Utilise array_map()
?>
```

---

### Exercice 5.17 : Extraire une portion
```php
<?php
$alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];

// Extrait les éléments de l'index 2 à 5
// Utilise array_slice()
?>
```

---

### Exercice 5.18 : Recherche dans un tableau
```php
<?php
$fruits = ["Pomme", "Banane", "Orange", "Kiwi", "Mangue"];
$recherche = "Orange";

// Trouve la position de "Orange"
// Affiche "Trouvé à l'index X" ou "Non trouvé"
?>
```

---

## 📝 Exercices avancés

### Exercice 5.19 : Supprimer les doublons
```php
<?php
$nombres = [1, 2, 2, 3, 4, 4, 4, 5, 1, 3];

// Supprime les doublons et réindexe le tableau
// Sans utiliser array_unique()
?>
```

---

### Exercice 5.20 : Tableau de fréquences
```php
<?php
$notes = [12, 15, 12, 18, 15, 12, 10, 15, 18, 12];

// Compte combien de fois chaque note apparaît
// Affiche un tableau : [12 => 4, 15 => 3, 18 => 2, 10 => 1]
?>
```

---

### Exercice 5.21 : Rotation de tableau
```php
<?php
$tableau = [1, 2, 3, 4, 5];
$positions = 2;

// Déplace les éléments de 2 positions vers la droite
// Résultat : [4, 5, 1, 2, 3]
?>
```

---

### Exercice 5.22 : Aplatir un tableau
```php
<?php
$tableau = [[1, 2], [3, 4], [5, 6]];

// Transforme en tableau simple : [1, 2, 3, 4, 5, 6]
// Sans utiliser de fonction native spécifique
?>
```

---

### Exercice 5.23 : Filtrage par critères multiples
```php
<?php
$produits = [
    ["nom" => "Laptop", "prix" => 800, "stock" => 5],
    ["nom" => "Souris", "prix" => 20, "stock" => 0],
    ["nom" => "Clavier", "prix" => 50, "stock" => 10],
    ["nom" => "Écran", "prix" => 200, "stock" => 3]
];

// Affiche seulement les produits :
// - en stock (stock > 0)
// - dont le prix est < 500€
?>
```

---

### Exercice 5.24 : Tri personnalisé
```php
<?php
$etudiants = [
    ["nom" => "Alice", "note" => 15],
    ["nom" => "Bob", "note" => 12],
    ["nom" => "Charlie", "note" => 18],
    ["nom" => "David", "note" => 12]
];

// Trie par note décroissante
// Si même note, trie par nom alphabétique
// Utilise usort()
?>
```

---

### Exercice 5.25 : Panier d'achat
```php
<?php
$panier = [
    ["produit" => "Pomme", "prix" => 2.50, "quantite" => 3],
    ["produit" => "Banane", "prix" => 1.80, "quantite" => 5],
    ["produit" => "Orange", "prix" => 3.00, "quantite" => 2]
];

// Calcule :
// - Le sous-total de chaque ligne (prix × quantité)
// - Le total général du panier
// - Applique une réduction de 10% si total > 20€
// Affiche un récapitulatif complet
?>
```

---

## 🎯 Exercices bonus (difficiles)

### Bonus 1 : Intersection de tableaux
```php
<?php
$tab1 = [1, 2, 3, 4, 5];
$tab2 = [4, 5, 6, 7, 8];

// Trouve les éléments présents dans les DEUX tableaux
// Sans utiliser array_intersect()
// Résultat : [4, 5]
?>
```

---

### Bonus 2 : Différence symétrique
```php
<?php
$tab1 = [1, 2, 3, 4];
$tab2 = [3, 4, 5, 6];

// Trouve les éléments présents dans UN SEUL des deux tableaux
// Résultat : [1, 2, 5, 6]
?>
```

---

### Bonus 3 : Transposer une matrice
```php
<?php
$matrice = [
    [1, 2, 3],
    [4, 5, 6]
];

// Transpose la matrice (lignes deviennent colonnes)
// Résultat :
// [1, 4]
// [2, 5]
// [3, 6]
?>
```

---

### Bonus 4 : Grouper par critère
```php
<?php
$personnes = [
    ["nom" => "Alice", "age" => 25, "ville" => "Paris"],
    ["nom" => "Bob", "age" => 30, "ville" => "Lyon"],
    ["nom" => "Charlie", "age" => 25, "ville" => "Paris"],
    ["nom" => "David", "age" => 30, "ville" => "Paris"]
];

// Groupe les personnes par ville
// Résultat attendu :
// [
//   "Paris" => [Alice, Charlie, David],
//   "Lyon" => [Bob]
// ]
?>
```

---

### Bonus 5 : Algorithme de tri (Bubble Sort)
```php
<?php
$nombres = [64, 34, 25, 12, 22, 11, 90];

// Implémente l'algorithme du tri à bulles
// Sans utiliser sort() ou autres fonctions natives
// Compare chaque paire d'éléments adjacents et les échange si nécessaire
?>
```

---

### Bonus 6 : Produit cartésien
```php
<?php
$couleurs = ["Rouge", "Vert", "Bleu"];
$tailles = ["S", "M", "L"];

// Génère toutes les combinaisons possibles
// Résultat : [
//   [Rouge, S], [Rouge, M], [Rouge, L],
//   [Vert, S], [Vert, M], [Vert, L],
//   [Bleu, S], [Bleu, M], [Bleu, L]
// ]
?>
```

---

### Bonus 7 : Recherche binaire
```php
<?php
$nombres = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78];
$recherche = 23;

// Implémente une recherche binaire
// (le tableau est déjà trié)
// Affiche la position ou "Non trouvé"
// Plus efficace que la recherche linéaire
?>
```

---

### Bonus 8 : Pagination
```php
<?php
$articles = [];
for ($i = 1; $i <= 47; $i++) {
    $articles[] = "Article $i";
}

$page_actuelle = 2;
$par_page = 10;

// Affiche seulement les articles de la page 2
// (articles 11 à 20)
// Calcule aussi le nombre total de pages
?>
```

---

### Bonus 9 : Anagrammes
```php
<?php
$mots = ["chien", "niche", "chat", "tach", "arbre"];

// Groupe les mots qui sont des anagrammes
// Résultat :
// [
//   [chien, niche],
//   [chat, tach],
//   [arbre]
// ]
// Indice : trier les lettres de chaque mot
?>
```

---

### Bonus 10 : Moyenne mobile
```php
<?php
$valeurs = [10, 20, 30, 40, 50, 60, 70];
$fenetre = 3;

// Calcule la moyenne mobile sur 3 valeurs
// Résultat : [20, 30, 40, 50, 60]
// (10+20+30)/3 = 20, (20+30+40)/3 = 30, etc.
?>
```

---

## 💡 Conseils

- Les tableaux sont fondamentaux en PHP, prends le temps de bien les maîtriser
- Utilise `print_r()` ou `var_dump()` pour visualiser tes tableaux
- N'hésite pas à dessiner la structure des tableaux multidimensionnels
- Les fonctions natives (array_*) sont optimisées, mais comprendre comment les recoder est très formateur
- Les exercices bonus sont excellents pour l'algorithmique
