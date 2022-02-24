# Exercices Session 2

## Créer un petit player

1. Créer une interface avec un bouton et un paragraph
2. Créer un état "isPlaying" qui est égale à `false`
3. Lors du clique sur le bouton, change l'état de isPlaying et afficher "Je joue de la musique". Si l'état est `false` Afficher "Je ne joue pas de musique"

## Afficher les infos d'un utilisateur

1. Créer une interface avec un h1, un p et 2 inputs (un pour le nom et l'autre pour l'age)
2. Si le nom est vide, afficher dans le h1 "Je ne vous connais pas"
3. Si le nom est remplie afficher dans le h1 "Bonjour {nom}"
4. Si un age est spécifié, afficher dans la balise p "Vous avez {age} ans"

## Créer un compteur

1. Créer un interface avec deux boutons (plus et moins) et un paragraphe qui affiche "Le compteur est a {nombre}".
2. Si on appuie sur "plus" alors on augmente le nombre du compteur
3. Si on appuie sur "moins" alors on diminue le nombre du compteur

## Formulaire de recherche

Avec le tableaux suivant :

```tsx
const names = [
  'john',
  'jack',
  'jane',
  'jule',
  'jenny',
  'eric',
  'jessy',
  'marie',
  'michel',
  'fanie',
  'dimitri',
  'damien',
  'dorian',
]
```

1. Creer un interface avec un input type text (pour la recherche) et une liste à puce.
2. Si l'input est vide, alors la liste à puce doit être vide aussi
3. Si je rentre au moins 2 caractères dans l'input, alors je dois voir sur la liste à puce tout les prénoms contenant les 2 caractères

Vous pouvez utiliser [`Array.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) et [`Array.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) afin de faire votre recherche

## Un répertoire de contact

1. Sur une interface ajout un input type text pour rentrer un nom, un input type text aussi pour rentrer un numéro de téléphone. Ajouter aussi un bouton "valider"
2. Lors du clique sur "Valider", ajouter à la suite du formulaire le contact dans une balise paragraph avec le contenue suivant : `<p>{nom} ({telephone})</p>`
3. À chaque fois que je clique sur valider, un nouveau contact doit être rajouté

## Créer une ToDoList

En vous inspirant de la [todo list suivante](https://www.rapidtables.com/tools/todo-list.html). Essayer de reproduire le même comportement.
