# Audit de performance du site
## http://todolistme.net/

### 1- Vue d'ensemble

Cet audit portera principalement sur les performances de l'application "to-do" de __todolistme.net__ utilisant l’outil d'audit Lighthouse tool de google. 
L'application fonctione pour permettre à un utilisateur de créer des catégories de liste de tâches à effectuer, enregistrer, éditer et supprimer éléments sur une liste.

### 2- Utilisation des outils du navigateur Chrome
L’ audit à été réalisé avec les outils fournis par la console de notre navigateur, dans ce cas Chrome Version 72.0.3626.109 (Build officiel) (64 bits) de Google.

#### 2-2- Outil « audit »

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/audit_todolistme.PNG)

##### 2-2-1- Performance

Todolistme affiche un score de 82 sur 100 pour la performance. 
Les métriques de performance sont des estimations pouvant varier, mais elles constituent néanmoins une bonne indication du fonctionnement du site.
L'outil Audit affiche la gravité de ce score en couleur. 
Todolistme est dans la gamme orange, ce qui n’est pas terrible mais peut encore être amélioré.
À l'aide de l'outil, nous allons répartir le score de performance en examinant les métriques, opportunités et diagnostics fournis.

> __Metrics__

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/audit_perfomance_metrics.PNG)

La plupart de ces scores de métrique sont satisfaisants, mais les scores de __First CPU Idle__ et __Time to Interactive__ ne sont pas intéressants.
Les visuels de la page se chargent rapidement, mais il faut beaucoup de temps avant que la page soit prête pour gérer la saisie initiale.
Une fois que cette entrée peut être traitée et acceptée, la réponse est ensuite rapide.

> __Opportunities__

Lighthouse fournit des conseils pour aider à optimiser les scores qui ne sont pas idéaux.
Ces opportunités fournissent également des __économies estimées__(Estimated Savings).

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/audit_perfomance_opportunites.PNG)

Les ressources sur lesquelles le site s'appuie prennent du temps à se charger.
Plus précisément, Todolistme.net utilise une version non-minified de jquery; le simple fait de passer à la version optimisée aiderait la charge du site plus rapide, avec d'autres ressources CSS (polices et styles).
Une fois que tous les CSS et JS ont été minifiés, le site doit également __Différer les CSS non utilisés__ en soulignant ce qui est considéré comme critique(CSS minimum nécessaire pour charger la page).
Il faut ajouter des indicateurs de ressources preconnect ou dns-prefetch pour établir des connexions vers des tierces origines importantes.
L’établissement de connexions nécessite souvent beaucoup de temps sur des réseaux lents, en particulier en ce qui concerne les connexions sécurisées, car cela peut impliquer des recherches DNS, des redirections et plusieurs allers-retours vers le serveur final qui traite la demande de l’utilisateur.
Il existe une image texture.png qui retarde le temps de réponse pendant le chargement. 
En changeant le format de l'image au format JPEG 200 ou WebP le site pourrait considérablement réduire ce délai. 
Cependant, pas tous les navigateurs sont compatibles avec ce choix de format. 
Si la compatibilité du navigateur est une priorité, alors une solution est de placer l'image dans un optimiseur tel que tinypng.com pour aider à réduire ce délai.

> __Diagnostics__

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/audit_perfomance_diagnostics.PNG)

__Todolistme.net__ utilise une police Web Google ("Architect’s Daughter") chargée via CSS.
Cette police donne une apparence manuscrite amusante pour l'application, mais constitue une ressource importante dans la charge initiale du site.
Pour éviter ce retard dans le temps de chargement, le site doit implémenter l'utilisation de la déclaration de la font-display.
Cela aidera à contrôler l’affichage visuel (et immédiat) d’une police sur le site pendant le téléchargement de la police.
De cette façon, un visiteur peut toujours commencer à voir du texte avant que la police réelle ne soit affichée.

En matière de cache, ce site n’est pas très efficace.
Toutes les polices, images, feuilles de style et scripts doivent être mis en cache et conservés longtemps.
En détail, le rapport identifie le fichier texture.png susmentionné sur __Cache TTL (durée de vie)__ comme __None__ parmi 36 autres ressources devant être mises en cache plus longtemps.

Les scripts JavaScript de __Todolistme.net__ ont un impact approximatif sur les temps de chargement des scores de __Minimize main-thread work__ et __Reduce JavaScript execution time__. Les fichiers JavaScript de longue durée doivent être retiré du thread principal. L'utilisation d'un outil Web aidera à contrôler le moment où le code JavaScript est utilisé et chargé au lieu de le regrouper avec tout le reste du site qui tente de se charger, ce qui entraînera des images manquantes.

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/audit_perfomance_diagnostics_path.PNG)

Le plus grand chemin critique de __Todolistme.net__ est l’utilisation de la publicité. Ces publicités provoquent une latence de 440 ms par elles-mêmes. Les sources de ce diagramme doivent être éliminées si elles ne sont pas nécessaires ou différées.
En réduisant le fichier jQuery et en supprimant Google Ad Service, les performances seraient considérablement améliorées.

### 3- Comparaison avec l'application to-do list

L'application de notre concurrent __todolistme.net__ est lente et pas optimisé, elle n'est pas orienté __PWA__ (Progressive Web App), l'accessibilité est correcte, le design est discutable, quelques fonctionnalités sont interessantes. Par contre notre application to-do list est rapide, optimisé et perfomante, les PWA sont améliorable, axe d'amélioration évident, l'application a une bonne accessibilité. 

l'option d'inscription au site __todolistme.net__, qui permet la sauvegarde des listes sur un serveur et non en local afin de synchroniser les listes entre plusieurs appareils et la présence d'un bouton pour imprimer la liste.

### 4- Possibilités d'amélioration de notre application basées sur les performances du site

#### 4-1. Amélioration possible du PWA

* simple comme `meta name= «theme-color »`
* gestion du offline avec un splashscreen...

#### 4-2. Performance 

![alt text](https://github.com/mayroj/To-do-list-app/blob/master/documentation/perfomance_todolistapp.PNG)

OK

#### 4-3. Accessibilité

* label : `input class="new-todo" placeholder="What needs to be done?" autofocus`
* amélioration du contraste entre le 1er plan et le fond d’ écran

### 5- Scalling

En vue d'un éventuel scaling de l'application, plusieurs points seront à travailler.
Dans un premier temps, il faudra rester vigilants sur l'accessibilité mobile. En effet, l'application doit être responsive afin de proposer une expérience utilisateur optimale sur tous les appareils.
Il faudra également envisager la possibilité de créer un compte utilisateur afin de sauvegarder les listes et les synchroniser selon les appareils utilisés. Passer aux requêtes sécurisées serait un atout en matière de sécurité des données. 

Fonctionnalité que l’on pourrait éventuellement intégrer à notre application :
* temporalité
* catégories de liste
* Requêtes sécurisées
