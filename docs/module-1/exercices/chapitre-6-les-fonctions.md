---
prev: 
    text: 'Chapitre 6: Les fonctions.'
    link: '/module-1/chapitres/chapitre-6-les-fonctions'

next:
  text: 'Chapitre 7: Chaines de caractères.'
  link: '/module-1/chapitres/chapitre-7-chaines-de-caracteres'
---

# Exercices - Chapitre 6 : Fonctions

## 📝 Fonctions de base

### Exercice 6.1 : Ma première fonction
```php
<?php
// Crée une fonction afficher_info() qui affiche :
// "Nom : [ton nom]"
// "Âge : [ton âge]"
// Puis appelle-la
?>
```

---

### Exercice 6.2 : Calcul simple
```php
<?php
// Crée une fonction multiplier($a, $b)
// qui retourne le produit de deux nombres
// Teste avec plusieurs valeurs
?>
```

---

### Exercice 6.3 : Aire d'un rectangle
```php
<?php
// Crée une fonction calculer_aire($longueur, $largeur)
// qui retourne l'aire du rectangle
// Par défaut, largeur = longueur (pour un carré)
?>
```

---

### Exercice 6.4 : Température
```php
<?php
// Crée deux fonctions :
// - celsius_vers_fahrenheit($celsius)
// - fahrenheit_vers_celsius($fahrenheit)
// Formules : F = C × 9/5 + 32, C = (F - 32) × 5/9
?>
```

---

## 📝 Paramètres et retours

### Exercice 6.5 : Salutation personnalisée
```php
<?php
// Crée une fonction saluer($nom, $moment = "journée")
// qui retourne "Bonne $moment, $nom !"
// Teste avec et sans le paramètre $moment
?>
```

---

### Exercice 6.6 : Nombre pair ou impair
```php
<?php
// Crée une fonction est_pair($nombre): bool
// qui retourne true si pair, false sinon
?>
```

---

### Exercice 6.7 : Plus grand de trois nombres
```php
<?php
// Crée une fonction max_trois($a, $b, $c)
// qui retourne le plus grand des trois nombres
// Sans utiliser max()
?>
```

---

### Exercice 6.8 : Calcul de moyenne
```php
<?php
// Crée une fonction moyenne($notes): array
// qui retourne ['moyenne' => X, 'mention' => Y]
// Mention : >= 16 "TB", >= 14 "B", >= 12 "AB", >= 10 "P", < 10 "I"
?>
```

---

## 📝 Tableaux et fonctions

### Exercice 6.9 : Somme d'un tableau
```php
<?php
// Crée une fonction somme_tableau(array $nombres): float
// qui calcule la somme sans utiliser array_sum()
?>
```

---

### Exercice 6.10 : Filtrer les négatifs
```php
<?php
// Crée une fonction filtrer_positifs(array $nombres): array
// qui retourne seulement les nombres positifs
// Sans utiliser array_filter()
?>
```

---

### Exercice 6.11 : Inverser un tableau
```php
<?php
// Crée une fonction inverser(array $tab): array
// qui inverse l'ordre des éléments
// Sans utiliser array_reverse()
?>
```

---

### Exercice 6.12 : Chercher dans un tableau
```php
<?php
// Crée une fonction chercher($tableau, $valeur): int|bool
// qui retourne l'index si trouvé, false sinon
// Sans utiliser array_search()
?>
```

---

## 📝 Fonctions avancées

### Exercice 6.13 : Générateur de mot de passe
```php
<?php
// Crée une fonction generer_password($longueur = 8): string
// qui génère un mot de passe aléatoire
// Utilise des lettres majuscules, minuscules et chiffres
?>
```

---

### Exercice 6.14 : Slugifier
```php
<?php
// Crée une fonction slugify($texte): string
// "Mon Super Article !" → "mon-super-article"
// Remplace les espaces par des tirets
// Supprime les caractères spéciaux
// Met en minuscules
?>
```

---

### Exercice 6.15 : Calculatrice
```php
<?php
// Crée une fonction calculer($a, $b, $operation): float|string
// $operation peut être '+', '-', '*', '/'
// Retourne le résultat ou un message d'erreur
?>
```

---

### Exercice 6.16 : Vérifier email
```php
<?php
// Crée une fonction est_email_valide($email): bool
// qui vérifie si l'email est valide
// Utilise filter_var()
?>
```

---

## 📝 Scope et références

### Exercice 6.17 : Compteur persistant
```php
<?php
// Crée une fonction compteur_appels()
// qui affiche combien de fois elle a été appelée
// Utilise une variable statique
?>
```

---

### Exercice 6.18 : Échanger deux variables
```php
<?php
// Crée une fonction echanger(&$a, &$b)
// qui échange les valeurs de deux variables
// Utilise le passage par référence
?>
```

---

### Exercice 6.19 : Incrémenter tableau
```php
<?php
// Crée une fonction incrementer_tous(array &$nombres)
// qui ajoute 1 à chaque élément du tableau original
// Utilise le passage par référence
?>
```

---

## 📝 Fonctions variadiques

### Exercice 6.20 : Somme variable
```php
<?php
// Crée une fonction somme(...$nombres): float
// qui accepte un nombre variable d'arguments
// et retourne leur somme
// Exemple : somme(1, 2, 3, 4, 5) → 15
?>
```

---

### Exercice 6.21 : Concaténation variable
```php
<?php
// Crée une fonction concatener($separateur, ...$mots): string
// qui concatène tous les mots avec le séparateur
// Exemple : concatener(" - ", "A", "B", "C") → "A - B - C"
?>
```

---

## 📝 Fonctions anonymes

### Exercice 6.22 : Fonction anonyme simple
```php
<?php
// Crée une fonction anonyme stockée dans $carre
// qui retourne le carré d'un nombre
// Teste-la avec plusieurs valeurs
?>
```

---

### Exercice 6.23 : Transformation de tableau
```php
<?php
$nombres = [1, 2, 3, 4, 5];

// Utilise array_map avec une fonction anonyme
// pour tripler chaque nombre
?>
```

---

### Exercice 6.24 : Arrow function
```php
<?php
$prix = [10.50, 25.00, 15.75, 8.90];

// Utilise array_map avec une arrow function
// pour ajouter 20% de TVA à chaque prix
?>
```

---

### Exercice 6.25 : Filtre personnalisé
```php
<?php
$mots = ["chat", "éléphant", "rat", "hippopotame", "souris"];

// Utilise array_filter avec une fonction anonyme
// pour garder seulement les mots de plus de 5 lettres
?>
```

---

## 📝 Récursivité

### Exercice 6.26 : Factorielle
```php
<?php
// Crée une fonction factorielle($n): int
// qui calcule n! de manière récursive
// 5! = 5 × 4 × 3 × 2 × 1 = 120
?>
```

---

### Exercice 6.27 : Puissance
```php
<?php
// Crée une fonction puissance($base, $exposant): int
// qui calcule base^exposant de manière récursive
// Exemple : puissance(2, 3) = 8
?>
```

---

### Exercice 6.28 : Somme des chiffres
```php
<?php
// Crée une fonction somme_chiffres($nombre): int
// qui additionne tous les chiffres d'un nombre
// Exemple : somme_chiffres(1234) = 10
// Utilise la récursivité
?>
```

---

### Exercice 6.29 : Compter éléments multidimensionnel
```php
<?php
$data = [1, 2, [3, 4, [5, 6]], 7, [8, [9, 10]]];

// Crée une fonction compter_elements($array): int
// qui compte TOUS les éléments (y compris dans les sous-tableaux)
// Utilise la récursivité
// Résultat attendu : 10
?>
```

---

## 📝 Cas pratiques

### Exercice 6.30 : Validation de formulaire
```php
<?php
// Crée les fonctions :
// - valider_nom($nom): bool (min 2 caractères)
// - valider_email($email): bool
// - valider_age($age): bool (entre 18 et 100)
// - valider_formulaire($data): array qui retourne les erreurs
?>
```

---

### Exercice 6.31 : Calculateur de prix
```php
<?php
// Crée les fonctions :
// - calculer_ht_depuis_ttc($prix_ttc, $tva = 0.20): float
// - calculer_ttc_depuis_ht($prix_ht, $tva = 0.20): float
// - appliquer_remise($prix, $remise_pct): float
// - prix_final($prix_ht, $remise_pct = 0, $tva = 0.20): float
?>
```

---

### Exercice 6.32 : Formateur de texte
```php
<?php
// Crée les fonctions :
// - tronquer($texte, $longueur = 50): string (ajoute "...")
// - extraire_initiales($nom_complet): string ("Jean Dupont" → "JD")
// - compter_mots($texte): int
// - mettre_en_titre($texte): string ("bonjour le monde" → "Bonjour Le Monde")
?>
```

---

### Exercice 6.33 : Gestionnaire de panier
```php
<?php
// Crée les fonctions :
// - ajouter_article(&$panier, $article): void
// - calculer_total($panier): float
// - appliquer_code_promo($total, $code): float
//   (codes : "PROMO10" = -10%, "PROMO20" = -20%)
// - afficher_panier($panier): void

// Structure article : ['nom' => 'X', 'prix' => Y, 'quantite' => Z]
?>
```

---

## 🎯 Exercices bonus (difficiles)

### Bonus 1 : Fibonacci avec mémoïsation
```php
<?php
// Crée une fonction fibonacci($n) récursive
// mais optimisée avec mémoïsation (cache des résultats)
// Compare les performances avec/sans cache
?>
```

---

### Bonus 2 : Currying
```php
<?php
// Crée une fonction curry qui transforme une fonction
// à plusieurs paramètres en une série de fonctions à un paramètre
// Exemple :
// $add = function($a, $b) { return $a + $b; };
// $curriedAdd = curry($add);
// echo $curriedAdd(5)(3); // 8
?>
```

---

### Bonus 3 : Compose
```php
<?php
// Crée une fonction compose(...$functions)
// qui combine plusieurs fonctions
// Exemple :
// $double = fn($x) => $x * 2;
// $increment = fn($x) => $x + 1;
// $doubleAndIncrement = compose($increment, $double);
// echo $doubleAndIncrement(5); // 11 (5*2 + 1)
?>
```

---

### Bonus 4 : Pipeline
```php
<?php
// Crée une fonction pipeline($valeur, ...$functions)
// qui passe une valeur à travers une série de fonctions
// Exemple :
// $result = pipeline(5,
//     fn($x) => $x * 2,
//     fn($x) => $x + 1,
//     fn($x) => $x * 3
// );
// echo $result; // 33 ((5*2 + 1) * 3)
?>
```

---

### Bonus 5 : Memoize générique
```php
<?php
// Crée une fonction memoize($function)
// qui retourne une version mémoïsée de n'importe quelle fonction
// Exemple :
// $fibonacci = memoize(function($n) use (&$fibonacci) {
//     if ($n <= 1) return $n;
//     return $fibonacci($n-1) + $fibonacci($n-2);
// });
?>
```

---

### Bonus 6 : Générateur de validateurs
```php
<?php
// Crée une fonction creer_validateur($type, $options = [])
// qui retourne une fonction de validation
// Types : 'email', 'age', 'longueur', 'pattern'
// Exemple :
// $validEmail = creer_validateur('email');
// $validAge = creer_validateur('age', ['min' => 18, 'max' => 100]);
// var_dump($validEmail('test@example.com')); // true
// var_dump($validAge(25)); // true
?>
```

---

### Bonus 7 : Retry avec backoff
```php
<?php
// Crée une fonction retry($fonction, $max_tentatives = 3, $delai = 1)
// qui réessaye une fonction en cas d'échec
// Le délai double à chaque tentative (exponential backoff)
// Exemple :
// $result = retry(function() {
//     // Simule un appel API qui peut échouer
//     if (rand(0, 1) === 0) throw new Exception("Échec");
//     return "Succès";
// }, 5, 1);
?>
```

---

### Bonus 8 : Partial application
```php
<?php
// Crée une fonction partial($function, ...$args)
// qui fixe certains arguments d'une fonction
// Exemple :
// $multiply = function($a, $b, $c) {
//     return $a * $b * $c;
// };
// $multiplyBy2And3 = partial($multiply, 2, 3);
// echo $multiplyBy2And3(4); // 24 (2 * 3 * 4)
?>
```

---

### Bonus 9 : Throttle/Debounce
```php
<?php
// Crée une fonction throttle($fonction, $delai_ms)
// qui limite l'exécution d'une fonction
// (ne peut être appelée qu'une fois par période)
// Utile pour limiter les appels API, événements, etc.
?>
```

---

### Bonus 10 : Cache avec TTL
```php
<?php
// Crée une fonction avec_cache($fonction, $ttl = 3600)
// qui retourne une version cachée d'une fonction
// Les résultats sont mis en cache avec un Time To Live
// Structure du cache : ['valeur' => X, 'expire' => timestamp]
?>
```

---

## 💡 Conseils

- Les fonctions doivent faire UNE seule chose et la faire bien
- Utilise des noms descriptifs qui expliquent ce que fait la fonction
- Évite les effets de bord (modifications de variables globales)
- Documente les paramètres et types de retour
- Teste chaque fonction indépendamment
- Les fonctions pures (même entrée = même sortie) sont plus faciles à tester
- Les exercices bonus sont excellents pour comprendre la programmation fonctionnelle
