---
prev: 
    text: 'Chapitre 3: Opérateurs et expressions.'
    link: '/module-1/chapitres/chapitre-3-operateurs-et-expressions'

next:
  text: 'Chapitre 4: Structures de contrôle.'
  link: '/module-1/chapitres/chapitre-4-structures-de-controle'
---

# Exercices - Chapitre 3 : Opérateurs et expressions

## Exercice 3.1 : Calculs
```php
<?php
$a = 25;
$b = 7;

// Calcule et affiche :
// - La somme
// - La différence
// - Le produit
// - Le quotient (division)
// - Le reste (modulo)
// - La puissance ($a^$b)
?>
```

---

## Exercice 3.2 : Comparaisons
```php
<?php
$x = 10;
$y = "10";

// Affiche avec var_dump :
// - $x == $y
// - $x === $y
// - $x != $y
// - $x !== $y
// Explique les différences en commentaire
?>
```

---

## Exercice 3.3 : Année bissextile
```php
<?php
$annee = 2024;

// Une année est bissextile si :
// - divisible par 4 ET (non divisible par 100 OU divisible par 400)
// Utilise les opérateurs logiques et affiche le résultat
// Teste avec : 2024, 2023, 2000, 1900
?>
```

---

## Exercice 3.4 : Note finale
```php
<?php
$note = 85;

// Avec le ternaire ou if/else, assigne une mention :
// >= 90 : "Excellent"
// >= 80 : "Très bien"
// >= 70 : "Bien"
// >= 60 : "Assez bien"
// < 60  : "Insuffisant"
?>
```

---

## Exercice 3.5 : Prix TTC
```php
<?php
$prix_ht = 100;
$est_membre = true;

// Si membre : -15% sur le prix HT
// Puis ajoute TVA 20%
// Calcule et affiche le prix final
?>
```

---

## 🎯 Exercices bonus (plus difficiles)

## Bonus 1 : Convertisseur de température
```php
<?php
// Convertis 25°C en Fahrenheit
// Formule : F = (C × 9/5) + 32
// Affiche : "25°C = X°F"
?>
```

---

## Bonus 2 : Calculateur d'IMC
```php
<?php
$poids = 70;  // en kg
$taille = 1.75;  // en mètres

// Calcule l'IMC : poids / (taille²)
// Affiche l'IMC et une interprétation :
// < 18.5 : Insuffisant
// 18.5-25 : Normal
// 25-30 : Surpoids
// > 30 : Obésité
?>
```

---

## Bonus 3 : FizzBuzz simplifié
```php
<?php
$nombre = 15;

// Si divisible par 3 : affiche "Fizz"
// Si divisible par 5 : affiche "Buzz"
// Si divisible par 3 ET 5 : affiche "FizzBuzz"
// Sinon : affiche le nombre
?>
```

---

## 💡 Conseils

- Teste chaque exercice dans un fichier séparé
- Utilise `var_dump()` pour déboguer
- N'hésite pas à consulter la documentation PHP
- Compare tes solutions avec d'autres approches
- Les exercices bonus sont facultatifs mais recommandés !