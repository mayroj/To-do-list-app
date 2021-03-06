# To-do List App

To-do List App est une application Web qui permet aux utilisateurs de créer et  personnaliser une liste base de tâches.

Un utilisateur peut modifier, supprimer ou ajouter des éléments dans sa liste créée.

L’application est construite en __VanillaJS__ (JavaScript) orienté objet, testée avec le framework de développement __Jasmine__ et optimisé à l’aide de tâches __gulp-uglify__ et l'outil __Lighthouse Audit__ depuis la __console du Google Chrome__.

L'application est basée sur la structure __MVC__ (Modèle-Vue-Contrôleur).

L'application To-do List utilise le stockage local de l'utilisateur pour que tous les éléments soient enregistrés, même après une actualisation.

Par conséquent, la liste restera disponible et évoluera naturellement au fur et à mesure que l'utilisateur ajoute ou supprime un élément.

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/doc_todo.PNG)

+ __app.js__ C’est le fichier fondamentale qui rassemble toutes les autre fichiers de l'app (store, model, template, view, helpers et controller)
+ __controller.js__ Utilise les éléments Model et View et contrôle leurs interactions, comme supprimer, modification ou ajout d'un nouvel élément la liste
+ __helpers.js__ C'est une collection d’aides pour les manipulations de la DOM
+ __model.js__ Considère les modèles comme des instances du code, contrôlés par controller lorsqu'ils sont utilisés avec le script de view.js
+ __store.js__ Gère le script de stockage des donneés
+ __template.js__ Tous les éléments représentés visuellement dans le navigateur de l'utilisateur
+ __View.js__ Interagit avec model.js via controller.js. Ceci est composé d'objets concernant les éléments plus précisément.

## 1. Ajout d'éléments
Ajouter des éléments en les tapant dans l'input du form visible

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/doc_creer_todo.PNG)

Appuyez sur Enter, cliquez en dehors du formulaire ou cliquez sur la flèche vers le bas à gauche et l'élément sera automatiquement affiché dans la liste.

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/doc_premier_todo.PNG)

Plusieurs éléments sont apparus :
+ un icône à gauche de « what needs to be done ? »
+ une indication du nombre de todos, ici _1 item left_
+ un onglet __all__
+ un onglet __active__
+ un onglet __completed__

## 2. Modifier un élément

Pour éditer un élément déjà dans la liste double-cliquez sur l'élément.

Pour marquer un élément comme «terminé», cliquez sur le cercle vide à gauche un check verte apparaît et représente le nouveau statut de l'élément.

Une fois fait le todo est barré et un bouton __Clear completed__ apparaît en bas à droite. 

Ce bouton sert à effacer le todo que l’on a indiqué comme terminé.

## 3. Supprimer un ou plusieurs éléments

Survolez l'élément que vous souhaitez supprimer et cliquez sur le «X».

Pour effacer les éléments terminés, cliquez sur __Clear completed__ en bas à droite de la liste que vous avez créée. (cette option ne s'affichera pas s'il n'y a aucun élément dans la liste).

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/doc_supprimer_todo.PNG)

## 4. Voir le status de les éléments

Un élément terminé est affiché à l'aide d'une coche verte et l'élément est barré.

Les éléments __Active__ sont des éléments en attente d'achèvement. 

Les utilisateurs peuvent basculer leur affichage entre __All__, __Active__ ou __Completed__ pour mieux répondre à leurs besoins.

### Mise à jour de la version

#### FIXES

Bug qui empêchait l'ajout d'éléments.

#### AMÉLIORATIONS

Amélioration de l'affectation des identifiants, de sorte que chaque identifiant soit désormais unique à 100%.

Refactorisé et ajouté plus de test à l'application pour améliorer les performances.

Thème de couleur de l'interface utilisateur ajusté pour répondre aux normes Web d'accessibilité du W3C.

Performance globale optimisée.
