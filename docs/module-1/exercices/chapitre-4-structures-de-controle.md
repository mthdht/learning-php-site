---
prev: 
    text: 'Chapitre 4: Structures de contrôle.'
    link: '/module-1/chapitres/chapitre-4-structures-de-controle'

next:
  text: 'Chapitre 5: Les tableaux.'
  link: '/module-1/chapitres/chapitre-5-les-tableaux'
---

# Exercices - Chapitre 4 : Structures de contrôle

## 📝 Exercices sur les conditions

### Exercice 4.1 : Majeur ou mineur
```php
<?php
$age = 17;

// Affiche "Majeur" si >= 18, sinon "Mineur"
?>
```

---

### Exercice 4.2 : Notes et mentions
```php
<?php
$note = 75;

// Affiche la mention selon la note :
// >= 16 : "Très bien"
// >= 14 : "Bien"
// >= 12 : "Assez bien"
// >= 10 : "Passable"
// < 10  : "Insuffisant"
?>
```

---

### Exercice 4.3 : Calculatrice avec switch
```php
<?php
$a = 15;
$b = 3;
$operation = "+";  // Peut être +, -, *, /

// Utilise switch pour effectuer l'opération
// Affiche le résultat ou un message d'erreur
?>
```

---

### Exercice 4.4 : Jour de la semaine
```php
<?php
$numero_jour = 3;  // 1 = Lundi, 7 = Dimanche

// Avec switch, affiche le nom du jour
// Indique aussi si c'est un jour de semaine ou weekend
?>
```

---

### Exercice 4.5 : Accès autorisé
```php
<?php
$age = 16;
$avec_parent = true;
$a_billet = true;

// Accès autorisé si :
// - age >= 18 OU (age >= 13 ET avec_parent)
// - ET a_billet est true
// Affiche "Accès autorisé" ou "Accès refusé"
?>
```

---

## 📝 Exercices sur les boucles while

### Exercice 4.6 : Compte à rebours
```php
<?php
$depart = 10;

// Affiche un compte à rebours de 10 à 0
// Puis affiche "Décollage !"
?>
```

---

### Exercice 4.7 : Somme jusqu'à N
```php
<?php
$n = 100;

// Calcule la somme de 1 + 2 + 3 + ... + 100
// Affiche le résultat
?>
```

---

### Exercice 4.8 : Deviner un nombre
```php
<?php
$nombre_secret = 42;
$tentative = 30;  // Change cette valeur pour tester

// Simule des tentatives (incrémente de 1 à chaque fois)
// Affiche "Trop petit" ou "Trop grand"
// S'arrête quand on trouve le nombre
// Affiche combien de tentatives ont été nécessaires
?>
```

---

## 📝 Exercices sur les boucles for

### Exercice 4.9 : Table de multiplication
```php
<?php
$nombre = 7;

// Affiche la table de multiplication de 7
// Format : "7 x 1 = 7"
// De 1 à 10
?>
```

---

### Exercice 4.10 : Nombres pairs
```php
<?php
// Affiche tous les nombres pairs de 0 à 50
// Utilise une boucle for
?>
```

---

### Exercice 4.11 : Pyramide d'étoiles
```php
<?php
$hauteur = 5;

// Affiche une pyramide comme ceci :
// *
// **
// ***
// ****
// *****
?>
```

---

### Exercice 4.12 : FizzBuzz
```php
<?php
// Pour les nombres de 1 à 100 :
// - Si divisible par 3 : affiche "Fizz"
// - Si divisible par 5 : affiche "Buzz"
// - Si divisible par 3 ET 5 : affiche "FizzBuzz"
// - Sinon : affiche le nombre
?>
```

---

## 📝 Exercices sur foreach

### Exercice 4.13 : Liste de courses
```php
<?php
$courses = ["Pain", "Lait", "Œufs", "Beurre", "Fromage"];

// Affiche chaque article avec un numéro :
// 1. Pain
// 2. Lait
// etc.
?>
```

---

### Exercice 4.14 : Prix total
```php
<?php
$prix = [12.50, 8.30, 15.00, 22.90, 5.60];

// Calcule et affiche le prix total
?>
```

---

### Exercice 4.15 : Annuaire
```php
<?php
$contacts = [
    "Alice" => "06 12 34 56 78",
    "Bob" => "06 98 76 54 32",
    "Charlie" => "06 11 22 33 44"
];

// Affiche chaque contact au format :
// Alice : 06 12 34 56 78
?>
```

---

## 📝 Exercices sur break et continue

### Exercice 4.16 : Chercher dans une liste
```php
<?php
$noms = ["Alice", "Bob", "Charlie", "David", "Eve"];
$recherche = "Charlie";

// Parcours le tableau
// Si tu trouves le nom, affiche "Trouvé à la position X" et arrête
// Sinon affiche "Non trouvé"
?>
```

---

### Exercice 4.17 : Nombres sans les multiples de 3
```php
<?php
// Affiche les nombres de 1 à 30
// Mais saute les multiples de 3
// Utilise continue
?>
```

---

### Exercice 4.18 : Somme limitée
```php
<?php
$nombres = [5, 10, 3, 8, 15, 20, 2, 7];

// Additionne les nombres jusqu'à ce que la somme dépasse 30
// Affiche combien de nombres ont été additionnés et la somme finale
?>
```

---

## 📝 Exercices combinés

### Exercice 4.19 : Nombres premiers
```php
<?php
$limite = 50;

// Affiche tous les nombres premiers de 2 à 50
// Un nombre premier n'est divisible que par 1 et lui-même
// Indice : utilise des boucles imbriquées
?>
```

---

### Exercice 4.20 : Menu interactif
```php
<?php
$choix = 2;  // Simule le choix de l'utilisateur

// Menu :
// 1. Afficher la date
// 2. Afficher l'heure
// 3. Afficher date et heure
// 4. Quitter
// Utilise switch pour traiter le choix
?>
```

---

### Exercice 4.21 : Validation de mot de passe
```php
<?php
$password = "Azerty123";

// Un mot de passe valide doit :
// - Avoir au moins 8 caractères
// - Contenir au moins une majuscule
// - Contenir au moins un chiffre
// Affiche "Valide" ou liste les problèmes
// Indice : utilise des boucles et conditions
?>
```

---

## 🎯 Exercices bonus (difficiles)

### Bonus 1 : Triangle de Pascal
```php
<?php
$lignes = 5;

// Affiche les 5 premières lignes du triangle de Pascal :
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
?>
```

---

### Bonus 2 : Jeu du plus ou moins
```php
<?php
$nombre_secret = 67;
$tentatives = [50, 75, 60, 65, 67];  // Simule les essais

// Pour chaque tentative, affiche :
// - "Trop petit" si < nombre_secret
// - "Trop grand" si > nombre_secret
// - "Gagné en X tentatives !" si trouvé
?>
```

---

### Bonus 3 : Pattern en étoiles
```php
<?php
$taille = 5;

// Affiche un losange d'étoiles :
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
?>
```

---

### Bonus 4 : Factorielle
```php
<?php
$n = 5;

// Calcule la factorielle de 5 (5! = 5 × 4 × 3 × 2 × 1 = 120)
// Utilise une boucle
?>
```

---

### Bonus 5 : Suite de Fibonacci
```php
<?php
$termes = 10;

// Affiche les 10 premiers termes de Fibonacci :
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// Règle : chaque terme = somme des 2 précédents
?>
```

---

## 💡 Conseils

- Teste chaque exercice séparément
- Utilise `echo` ou `var_dump()` pour déboguer
- N'hésite pas à faire des dessins pour les exercices complexes
- Les exercices bonus sont optionnels mais excellents pour progresser
- Compare différentes approches pour le même problème

**Solutions disponibles après avoir essayé par toi-même !**