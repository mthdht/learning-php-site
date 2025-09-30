---
prev: 
    text: 'Exercices: Opérateurs et expressions'
    link: '/module-1/exercices/chapitre-3-operateurs-et-expressions'

next:
  text: 'Exercices: Les tableaux'
  link: '/module-1/exercices/chapitre-5-les-tableaux'
---

# Chapitre 4: Structures de contrôle.

## 📋 Prérequis
- Maîtriser les variables et types de données (Chapitre 2)
- Comprendre les opérateurs de comparaison et logiques (Chapitre 3)
- Savoir utiliser les booléens

## 🎯 Objectif
À la fin de ce chapitre, tu sauras :
- Prendre des décisions avec if, else, elseif
- Utiliser switch pour des choix multiples
- Répéter des actions avec les boucles (while, for, foreach)
- Contrôler le flux avec break et continue

---

## Introduction

Les structures de contrôle permettent de diriger le flux d'exécution du programme. Au lieu d'exécuter le code ligne par ligne, on peut :
- **Prendre des décisions** : "Si l'utilisateur a plus de 18 ans..."
- **Répéter des actions** : "Pour chaque produit dans le panier..."
- **Sauter des étapes** : "Continue si le prix est négatif..."

C'est ce qui rend un programme intelligent et dynamique.

---

## Conditions : if, else, elseif

### if simple

```php
<?php
$age = 20;

if ($age >= 18) {
    echo "Vous êtes majeur";
}
// Le code continue ici dans tous les cas
?>
```

### if...else

```php
<?php
$age = 15;

if ($age >= 18) {
    echo "Majeur";
} else {
    echo "Mineur";
}
?>
```

### if...elseif...else

```php
<?php
$note = 85;

if ($note >= 90) {
    echo "Excellent";
} elseif ($note >= 80) {
    echo "Très bien";
} elseif ($note >= 70) {
    echo "Bien";
} elseif ($note >= 60) {
    echo "Assez bien";
} else {
    echo "Insuffisant";
}
?>
```

**Important :** Dès qu'une condition est vraie, les autres ne sont pas testées.

### Conditions imbriquées

```php
<?php
$age = 25;
$permis = true;

if ($age >= 18) {
    if ($permis) {
        echo "Vous pouvez conduire";
    } else {
        echo "Vous devez passer le permis";
    }
} else {
    echo "Trop jeune pour conduire";
}
?>
```

### Syntaxe alternative (pour templates)

```php
<?php $est_connecte = true; ?>

<?php if ($est_connecte): ?>
    <p>Bienvenue !</p>
    <a href="logout.php">Déconnexion</a>
<?php else: ?>
    <p>Veuillez vous connecter</p>
    <a href="login.php">Connexion</a>
<?php endif; ?>
```

Utile quand on mélange beaucoup de HTML et PHP.

---

## Switch

Quand on a beaucoup de conditions sur la même variable, `switch` est plus lisible.

### Syntaxe de base

```php
<?php
$jour = 3;

switch ($jour) {
    case 1:
        echo "Lundi";
        break;
    case 2:
        echo "Mardi";
        break;
    case 3:
        echo "Mercredi";
        break;
    case 4:
        echo "Jeudi";
        break;
    case 5:
        echo "Vendredi";
        break;
    case 6:
    case 7:
        echo "Weekend !";
        break;
    default:
        echo "Jour invalide";
}
?>
```

**⚠️ N'oublie pas les `break` !** Sinon le code continue dans les cases suivantes.

### Switch sans break (fall-through)

```php
<?php
$mois = 2;

switch ($mois) {
    case 12:
    case 1:
    case 2:
        $saison = "Hiver";
        break;
    case 3:
    case 4:
    case 5:
        $saison = "Printemps";
        break;
    case 6:
    case 7:
    case 8:
        $saison = "Été";
        break;
    case 9:
    case 10:
    case 11:
        $saison = "Automne";
        break;
    default:
        $saison = "Inconnu";
}

echo $saison;  // Hiver
?>
```

### Match (PHP 8+) - version moderne

```php
<?php
$jour = 3;

$nom_jour = match ($jour) {
    1 => "Lundi",
    2 => "Mardi",
    3 => "Mercredi",
    4 => "Jeudi",
    5 => "Vendredi",
    6, 7 => "Weekend",
    default => "Invalide"
};

echo $nom_jour;  // Mercredi

// Match est plus strict (===) et retourne une valeur
// Pas besoin de break, pas de fall-through accidentel
?>
```

---

## Boucles : while

Répète tant qu'une condition est vraie.

### while basique

```php
<?php
$i = 1;

while ($i <= 5) {
    echo "Tour $i\n";
    $i++;
}
// Affiche : Tour 1, Tour 2, Tour 3, Tour 4, Tour 5
?>
```

### Attention aux boucles infinies

```php
<?php
$i = 1;

// ❌ Boucle infinie (i ne change jamais)
// while ($i <= 5) {
//     echo "Tour $i\n";
// }

// ✅ Avec incrémentation
while ($i <= 5) {
    echo "Tour $i\n";
    $i++;
}
?>
```

### do...while

Exécute au moins une fois, puis teste la condition.

```php
<?php
$i = 10;

do {
    echo "Tour $i\n";
    $i++;
} while ($i <= 5);

// Affiche : Tour 10
// Même si la condition est fausse, s'exécute une fois
?>
```

**Différence :**
- `while` : teste **avant** d'exécuter
- `do...while` : teste **après** avoir exécuté

---

## Boucles : for

Quand on connaît le nombre d'itérations.

### Syntaxe classique

```php
<?php
// for (initialisation; condition; incrémentation)
for ($i = 0; $i < 5; $i++) {
    echo "Tour $i\n";
}
// Affiche : Tour 0, Tour 1, Tour 2, Tour 3, Tour 4
?>
```

### Décorticage de for

```php
<?php
// Équivalent en while :
$i = 0;              // Initialisation
while ($i < 5) {     // Condition
    echo "Tour $i\n";
    $i++;            // Incrémentation
}
?>
```

### Variations de for

```php
<?php
// Compter à rebours
for ($i = 10; $i >= 0; $i--) {
    echo "$i... ";
}
echo "Décollage !\n";

// Pas de 2
for ($i = 0; $i <= 10; $i += 2) {
    echo "$i ";  // 0 2 4 6 8 10
}

// Plusieurs variables
for ($i = 0, $j = 10; $i < $j; $i++, $j--) {
    echo "i=$i, j=$j\n";
}
?>
```

### for avec syntaxe alternative

```php
<?php for ($i = 1; $i <= 5; $i++): ?>
    <p>Paragraphe numéro <?php echo $i; ?></p>
<?php endfor; ?>
```

---

## Boucles : foreach (pour les tableaux)

On verra les tableaux en détail au Chapitre 5, mais voici un aperçu.

### Tableau indexé

```php
<?php
$fruits = ["Pomme", "Banane", "Orange"];

foreach ($fruits as $fruit) {
    echo "J'aime les $fruit\n";
}
// J'aime les Pomme
// J'aime les Banane
// J'aime les Orange
?>
```

### Tableau associatif

```php
<?php
$ages = [
    "Alice" => 25,
    "Bob" => 30,
    "Charlie" => 35
];

foreach ($ages as $nom => $age) {
    echo "$nom a $age ans\n";
}
?>
```

### Avec index

```php
<?php
$fruits = ["Pomme", "Banane", "Orange"];

foreach ($fruits as $index => $fruit) {
    echo "$index : $fruit\n";
}
// 0 : Pomme
// 1 : Banane
// 2 : Orange
?>
```

---

## Break et continue

### break : sortir d'une boucle

```php
<?php
// Chercher un nombre
for ($i = 1; $i <= 100; $i++) {
    if ($i == 50) {
        echo "Trouvé : $i\n";
        break;  // Sort de la boucle
    }
}
echo "Fin";

// Affiche : Trouvé : 50, puis Fin
?>
```

### continue : passer à l'itération suivante

```php
<?php
// Afficher seulement les nombres pairs
for ($i = 1; $i <= 10; $i++) {
    if ($i % 2 != 0) {
        continue;  // Saute les impairs
    }
    echo "$i ";
}
// Affiche : 2 4 6 8 10
?>
```

### break avec niveau (boucles imbriquées)

```php
<?php
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= 3; $j++) {
        if ($i == 2 && $j == 2) {
            break 2;  // Sort des 2 boucles
        }
        echo "i=$i, j=$j\n";
    }
}
// S'arrête à i=2, j=2
?>
```

---

## Cas pratiques

### Validation de formulaire

```php
<?php
$email = "user@example.com";
$password = "12345";

if (empty($email)) {
    echo "L'email est requis";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Email invalide";
} elseif (strlen($password) < 8) {
    echo "Mot de passe trop court";
} else {
    echo "Formulaire valide";
}
?>
```

### Menu de navigation

```php
<?php
$page = "contact";

switch ($page) {
    case "accueil":
        $titre = "Bienvenue";
        $contenu = "Page d'accueil";
        break;
    case "apropos":
        $titre = "À propos";
        $contenu = "Qui sommes-nous ?";
        break;
    case "contact":
        $titre = "Contact";
        $contenu = "Contactez-nous";
        break;
    default:
        $titre = "Erreur 404";
        $contenu = "Page non trouvée";
}

echo "<h1>$titre</h1>";
echo "<p>$contenu</p>";
?>
```

### Table de multiplication

```php
<?php
$nombre = 7;

for ($i = 1; $i <= 10; $i++) {
    $resultat = $nombre * $i;
    echo "$nombre x $i = $resultat\n";
}
?>
```

### Compter les voyelles

```php
<?php
$texte = "Bonjour le monde";
$voyelles = ["a", "e", "i", "o", "u", "y"];
$compteur = 0;

for ($i = 0; $i < strlen($texte); $i++) {
    $lettre = strtolower($texte[$i]);
    
    foreach ($voyelles as $voyelle) {
        if ($lettre == $voyelle) {
            $compteur++;
            break;  // Pas besoin de tester les autres voyelles
        }
    }
}

echo "Il y a $compteur voyelles";
?>
```

### Trouver le plus grand nombre

```php
<?php
$nombres = [45, 12, 89, 34, 67, 23];
$max = $nombres[0];

foreach ($nombres as $nombre) {
    if ($nombre > $max) {
        $max = $nombre;
    }
}

echo "Le plus grand nombre est : $max";  // 89
?>
```

---

## Bonnes pratiques

### 1. Éviter les conditions trop complexes

```php
<?php
// ❌ Difficile à lire
if ($age >= 18 && $age < 65 && ($permis == true || $examen_reussi == true) && $casier_vierge == true) {
    // ...
}

// ✅ Plus clair
$est_adulte = $age >= 18 && $age < 65;
$peut_conduire = $permis || $examen_reussi;
$est_eligible = $est_adulte && $peut_conduire && $casier_vierge;

if ($est_eligible) {
    // ...
}
?>
```

### 2. Inverser les conditions (early return)

```php
<?php
// ❌ Beaucoup d'indentation
function traiter($data) {
    if (isset($data)) {
        if (!empty($data)) {
            if (is_array($data)) {
                // Traitement
                return true;
            }
        }
    }
    return false;
}

// ✅ Plus lisible
function traiter($data) {
    if (!isset($data)) return false;
    if (empty($data)) return false;
    if (!is_array($data)) return false;
    
    // Traitement
    return true;
}
?>
```

### 3. Limiter les boucles imbriquées

```php
<?php
// ❌ Trop profond
for ($i = 0; $i < 10; $i++) {
    for ($j = 0; $j < 10; $j++) {
        for ($k = 0; $k < 10; $k++) {
            // Code complexe
        }
    }
}

// ✅ Extraire dans des fonctions
function traiterLigne($i) {
    for ($j = 0; $j < 10; $j++) {
        traiterColonne($i, $j);
    }
}
?>
```

---

## Conclusion

Tu maîtrises maintenant :
- ✅ Les conditions (if, else, elseif, switch, match)
- ✅ Les boucles while et do...while
- ✅ Les boucles for et foreach
- ✅ Le contrôle de flux (break, continue)
- ✅ Les bonnes pratiques de lisibilité

Les structures de contrôle sont le cœur de la logique d'un programme. Tu peux maintenant créer des algorithmes complexes !

---

## 🚀 Prochaine étape

**Chapitre 5 : Tableaux en PHP**

Maintenant que tu sais répéter des actions, on va apprendre à manipuler des collections de données ! Les tableaux sont essentiels pour stocker et traiter plusieurs valeurs : listes de produits, utilisateurs, résultats de requêtes, etc.