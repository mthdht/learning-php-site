---
prev: 
    text: 'Chapitre 7: Chaine de caractères.'
    link: '/module-1/chapitres/chapitre-1-premiers-pas-avec-php'

next:
  text: 'Chapitre 8: Gestion des fichiers'
  link: '/module-1/chapitres/chapitre-8-gestion-des-fichiers'
---

# Exercices - Chapitre 7: Chaînes de caractères

## 📝 Manipulation de base

### Exercice 7.1 : Inversion de chaîne
```php
<?php
$texte = "Bonjour";

// Inverse la chaîne sans utiliser strrev()
// Résultat : "ruojnoB"
?>
```

---

### Exercice 7.2 : Compter les voyelles
```php
<?php
$texte = "Bonjour le monde";

// Compte le nombre de voyelles (a, e, i, o, u, y)
// Insensible à la casse
?>
```

---

### Exercice 7.3 : Premier et dernier caractère
```php
<?php
$mot = "Hello";

// Affiche le premier et le dernier caractère
// Résultat : "H" et "o"
?>
```

---

### Exercice 7.4 : Palindrome
```php
<?php
$mot = "radar";

// Vérifie si le mot est un palindrome
// (se lit pareil dans les deux sens)
// Teste avec : "radar", "kayak", "hello"
?>
```

---

## 📝 Recherche et extraction

### Exercice 7.5 : Extraire le domaine d'un email
```php
<?php
$email = "user@example.com";

// Extrait le domaine (tout après le @)
// Résultat : "example.com"
?>
```

---

### Exercice 7.6 : Compter les occurrences
```php
<?php
$texte = "le chat mange le poisson et le chat dort";
$mot = "le";

// Compte combien de fois "le" apparaît
// Sans utiliser substr_count()
?>
```

---

### Exercice 7.7 : Trouver le mot le plus long
```php
<?php
$phrase = "PHP est un langage fantastique";

// Trouve et affiche le mot le plus long
?>
```

---

### Exercice 7.8 : Extraire les chiffres
```php
<?php
$texte = "J'ai 25 ans et j'habite au 123 rue de la Paix";

// Extrait tous les chiffres
// Résultat : "25123"
?>
```

---

## 📝 Formatage et nettoyage

### Exercice 7.9 : Formater un nom complet
```php
<?php
$nom = "  alice   DUPONT  ";

// Nettoie et formate : "Alice Dupont"
// (trim, première lettre de chaque mot en majuscule)
?>
```

---

### Exercice 7.10 : Formater un numéro de téléphone
```php
<?php
$telephone = "0612345678";

// Formate : "06 12 34 56 78"
?>
```

---

### Exercice 7.11 : Censurer des mots
```php
<?php
$texte = "Ce texte contient des mots interdits comme spam et hack";
$interdits = ["spam", "hack"];

// Remplace les mots interdits par "***"
// Résultat : "Ce texte contient des mots interdits comme *** et ***"
?>
```

---

### Exercice 7.12 : Supprimer les espaces multiples
```php
<?php
$texte = "Bonjour    le     monde";

// Remplace les espaces multiples par un seul espace
// Résultat : "Bonjour le monde"
?>
```

---

## 📝 Conversion et transformation

### Exercice 7.13 : Alternance majuscules/minuscules
```php
<?php
$texte = "hello";

// Alterne maj/min : "HeLlO"
?>
```

---

### Exercice 7.14 : Camel Case vers Snake Case
```php
<?php
$camelCase = "monSuperNomDeVariable";

// Convertit en snake_case : "mon_super_nom_de_variable"
?>
```

---

### Exercice 7.15 : Snake Case vers Camel Case
```php
<?php
$snake_case = "mon_super_nom_de_variable";

// Convertit en camelCase : "monSuperNomDeVariable"
?>
```

---

### Exercice 7.16 : ROT13
```php
<?php
$texte = "Hello World";

// Applique le chiffrement ROT13
// (chaque lettre est remplacée par la 13ème suivante)
// Utilise str_rot13()
?>
```

---

## 📝 Validation avec Regex

### Exercice 7.17 : Valider un email
```php
<?php
$email = "user@example.com";

// Valide l'email avec une regex
// Teste : "user@example.com", "invalid.email", "test@test"
?>
```

---

### Exercice 7.18 : Valider un téléphone français
```php
<?php
$telephone = "0612345678";

// Valide un numéro français (10 chiffres, commence par 0)
// Teste : "0612345678", "06 12 34 56 78", "123"
?>
```

---

### Exercice 7.19 : Valider un mot de passe fort
```php
<?php
$password = "MonPass123";

// Valide qu'il contient :
// - Au moins 8 caractères
// - Au moins une majuscule
// - Au moins une minuscule
// - Au moins un chiffre
?>
```

---

### Exercice 7.20 : Valider un code postal français
```php
<?php
$code_postal = "75001";

// Valide un code postal (5 chiffres)
?>
```

---

## 📝 Extraction avec Regex

### Exercice 7.21 : Extraire tous les emails
```php
<?php
$texte = "Contactez-nous : contact@example.com ou support@example.com";

// Extrait tous les emails
// Résultat : ["contact@example.com", "support@example.com"]
?>
```

---

### Exercice 7.22 : Extraire les hashtags
```php
<?php
$tweet = "J'adore #PHP et #coding ! #webdev";

// Extrait tous les hashtags
// Résultat : ["PHP", "coding", "webdev"]
?>
```

---

### Exercice 7.23 : Extraire les URLs
```php
<?php
$texte = "Visitez https://example.com et http://test.org pour plus d'infos";

// Extrait toutes les URLs
?>
```

---

### Exercice 7.24 : Extraire une date
```php
<?php
$texte = "Rendez-vous le 2024-12-25 à 14h30";

// Extrait la date au format YYYY-MM-DD
// Résultat : "2024-12-25"
?>
```

---

## 📝 Remplacement avec Regex

### Exercice 7.25 : Masquer les numéros de carte
```php
<?php
$carte = "1234 5678 9012 3456";

// Masque les 12 premiers chiffres
// Résultat : "**** **** **** 3456"
?>
```

---

### Exercice 7.26 : Formater les prix
```php
<?php
$texte = "Le produit coûte 1234.56 euros et celui-ci 78.9 euros";

// Ajoute le symbole €
// Résultat : "Le produit coûte 1234.56€ et celui-ci 78.9€"
?>
```

---

### Exercice 7.27 : Convertir Markdown en HTML
```php
<?php
$markdown = "Ceci est **gras** et ceci est *italique*";

// Convertit :
// **texte** → <strong>texte</strong>
// *texte* → <em>texte</em>
?>
```

---

## 📝 Cas pratiques

### Exercice 7.28 : Générateur de slug
```php
<?php
$titre = "Mon Super Article 2024 !";

// Crée un slug : "mon-super-article-2024"
// - Minuscules
// - Remplace espaces par tirets
// - Supprime caractères spéciaux
// - Pas de tirets multiples
?>
```

---

### Exercice 7.29 : Tronquer avec ellipse
```php
<?php
$texte = "Ceci est un très long texte qui doit être tronqué intelligemment";
$longueur = 30;

// Tronque à 30 caractères sans couper un mot
// Ajoute "..." à la fin
// Résultat : "Ceci est un très long..."
?>
```

---

### Exercice 7.30 : Générer des initiales
```php
<?php
$nom_complet = "Jean-Pierre Dupont";

// Génère les initiales : "JPD"
?>
```

---

### Exercice 7.31 : Colorer la syntaxe
```php
<?php
$code = "function hello() { return 'world'; }";

// Entoure les mots-clés de balises HTML
// function → <span class="keyword">function</span>
// return → <span class="keyword">return</span>
// Mots-clés : function, return, if, else, for, while
?>
```

---

### Exercice 7.32 : Parser une chaîne de requête
```php
<?php
$query = "nom=Alice&age=25&ville=Paris";

// Parse en tableau associatif
// Sans utiliser parse_str()
// Résultat : ["nom" => "Alice", "age" => "25", "ville" => "Paris"]
?>
```

---

## 🎯 Exercices bonus (difficiles)

### Bonus 1 : Détection de langue
```php
<?php
$texte = "Bonjour, comment allez-vous ?";

// Détecte la langue (français, anglais, espagnol)
// En comptant les mots caractéristiques
// Mots français : "le", "la", "de", "et", "est"
// Mots anglais : "the", "is", "and", "of", "to"
// Mots espagnols : "el", "la", "de", "y", "es"
?>
```

---

### Bonus 2 : Calculatrice en chaîne
```php
<?php
$expression = "5 + 3 * 2 - 4 / 2";

// Évalue l'expression mathématique
// Sans utiliser eval()
// Résultat : 9 (5 + 6 - 2)
?>
```

---

### Bonus 3 : Compression RLE
```php
<?php
$texte = "aaabbbccccaa";

// Compression Run-Length Encoding
// Résultat : "3a3b4c2a"

// Aussi, crée la fonction de décompression
?>
```

---

### Bonus 4 : Diff de texte
```php
<?php
$texte1 = "Bonjour le monde";
$texte2 = "Bonjour le PHP";

// Affiche les différences mot par mot
// Résultat :
// - "monde"
// + "PHP"
?>
```

---

### Bonus 5 : Convertisseur de nombres en lettres
```php
<?php
$nombre = 1234;

// Convertit en lettres : "mille deux cent trente-quatre"
// Jusqu'à 9999
?>
```

---

### Bonus 6 : Parser CSV manuellement
```php
<?php
$csv = 'nom,age,ville
"Dupont, Alice",25,"Paris"
"Martin, Bob",30,"Lyon"';

// Parse le CSV en tableau
// Gère les guillemets et virgules dans les valeurs
// Sans utiliser str_getcsv()
?>
```

---

### Bonus 7 : BBCode vers HTML
```php
<?php
$bbcode = "Ceci est [b]gras[/b] et ceci est [url=https://example.com]un lien[/url]";

// Convertit en HTML :
// [b]texte[/b] → <strong>texte</strong>
// [i]texte[/i] → <em>texte</em>
// [url=X]Y[/url] → <a href="X">Y</a>
?>
```

---

### Bonus 8 : Détection de plagiat simple
```php
<?php
$texte1 = "PHP est un langage de programmation";
$texte2 = "PHP est un super langage de programmation";

// Calcule le pourcentage de similarité
// En comptant les mots communs
?>
```

---

### Bonus 9 : Générateur de mots de passe pronononçables
```php
<?php
// Génère un mot de passe de 8-12 caractères
// Alternant consonnes et voyelles pour être prononçable
// Exemple : "kifetulo" au lieu de "k7f$tL9o"
?>
```

---

### Bonus 10 : Analyse de sentiment
```php
<?php
$texte = "J'adore ce produit ! Il est génial et fantastique.";

// Analyse le sentiment (positif, négatif, neutre)
// En comptant les mots positifs/négatifs
// Positifs : adore, génial, fantastique, super, excellent
// Négatifs : nul, horrible, mauvais, déteste
?>
```

---

## 💡 Conseils

- Les regex sont puissantes mais peuvent être complexes : teste-les sur regex101.com
- Attention aux encodages (UTF-8) pour les caractères accentués
- Toujours échapper les données utilisateur avec htmlspecialchars()
- Les fonctions natives sont optimisées : utilise-les quand possible
- Pour les validations, filter_var() est souvent meilleur que les regex
- N'oublie pas que les strings sont immuables en PHP