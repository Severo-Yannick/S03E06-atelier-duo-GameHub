# GameHub

Bon, on a quelques jeux qui traînent, c'est cool ! Mais c'est le bazar !

J'aimerais bien une belle plateforme pour centraliser toutes nos magnifiques créations vidéoludiques.

Pour ça, on va se créer un petit site internet _dynamique_.

## Étape 1 : mise en place

Commençons par initialiser le projet pour pouvoir y installer des dépendances.

Ensuite, installons les dépendances dont on a va avoir besoin :

- `express` pour générer un serveur web rapidement.
- `ejs` pour gérer des views dynamiquement.

Créons ensuite `index.js`, le point d'entrée pour notre application. Dans ce fichier, on doit "appeler" les dépendances nécessaires, instancier une application express et lancer l'application.

N'oublions pas les réglages habituels de Express, à savoir:

- Le moteur de rendu.
- Le dossier des views.
- Les fichiers du dossier `public` sont des fichiers _statiques_.

## Étape 2 : page d'accueil

Mettons en place une page d'accueil, sur la route '/'.

Une intégration est déjà fournie, mais elle n'est pas terminée. Il faut compléter la `nav` en ajoutant des liens vers les jeux "Dice Roller" et "Jeu de la Fourchette".

## Étape 3 : premières routes

Il est temps de commencer à intégrer nos jeux. On met en place 2 routes :

- `/game/fourchette` doit renvoyer la view `fourchette` déjà fournie.
- `/game/diceRoller` doit renvoyer la view `diceRoller` déjà fournie.

Au passage, il manque encore la nav dans ces views... Plutôt que de copier coller, soyons malins, et factorisons !

Attention pendant la factorisation, certains jeux (Dice Roller) nécessitent qu'un css spécifique soit inclus.

 <details>
 <summary>Un peu d'aide?</summary>

On va créer une view `header` qu'on va inclure au début de toutes nos views. Ce `header` contiendra tout le début de notre HTML, dont la balise `<head>`.

Or, c'est dans cette balise `<head>` qu'on doit include les css ! Pour pouvoir inclure le css spéficique au jeu "Dice Roller", il faut passer une variable à la view (cf [la doc](https://expressjs.com/fr/api.html#res.render)). Ensuite dans la view `header`, il faut tester la valeur (voir l'existence) de cette variable et inclure le fichier en conséquence.

 </details>

## Étape 4 : première couche de dynamisation

Dans le code, on nous a fourni un fichier `games.json`. Ce fichier contient le détail de chacun de nos jeux.

- Commençons par importer le contenu de ce fichier dans une variable, dans le fichier `index.js`.
<details>
<summary>Hein?</summary>

On peut directement require un json :wink: !

[C'est écrit dans la doc](https://nodejs.org/api/modules.html#modules_require_id)

 </details>

- Ensuite, il faut utiliser cette variable pour générer de manière dynamique les liens de la `nav` et ainsi remplacer le code en dur.

 <details>
 <summary>Indices</summary>

- Il faut passer la variable qui contient tous les jeux à toutes les views.
- Cette variable est un tableau, il faut utiliser une boucle pour le parcourir et générer un lien avec le contenu de chaque item.
</details>

## Étape 5: dynamisation, deuxième partie

Bon allez, ras le bol des routes en dur, on veut du vrai dynamique!

On va désactiver (commenter le code) les routes `/game/fourchette` et `/game/diceRoller`. On va les remplacer par une route paramétrée !

Cette route correspond au pattern `/game/:nomDuJeu`. Lorsqu'on accède à cette route, il faut :

- Retrouver le jeu dont le nom correspond à celui dans l'url
- Si on trouve le jeu, render la view correspondante.
- Sinon, renvoyer une page "404".

 <details>
 <summary>Encore des indices!</summary>

Tout ce dont on a besoin est [dans la doc](https://expressjs.com/fr/) !

Comment ça, c'est nul comme indice ? :smiling_imp:

 </details>

## Bonus :skull:

Rajoutons le jeu "Grunt" !

 <details>
 <summary>Les étapes</summary>

- Rapatrier les fichiers JS et CSS du jeu, les mettre au bon endroit et les renommer si nécessaire.
- Créer la view `Grunt`, y importer le HTML nécessaire.
- Rajouter les données du jeu dans `games.json`.
- :tada:

 </details>

<br>

# S03E07-gamehub-middelwares
## Premiers middlewares Express

Les middlewares, c'est la vie ! Ça sert à tout : gérer des routes ainsi que le cas où aucune route ne correspond, des assets, des erreurs, de la journalisation, de l'ajout de fonctionnalités aux objets I/O (les fameux `req` et `res`)... :heart_eyes:

En gros, Express n'est plus ou moins qu'un processeur de middlewares.

Vous commencez à voir en quoi va consister le challenge ? :smirk:

## Le principe

Dans l'exercice d'introduction aux middlewares, vous avez vu un processeur "pédagogique", qui ne servait qu'à illustrer le principe de middleware et son utilisation. Express possède les mêmes mécanismes mais les fonctions sont nommées différemment :
- la fonction `chain` (servant à enregistrer un nouveau middleware dans le processus) se nomme `use` dans une appli Express (vous l'avez donc déjà utilisée pour `express.static`)
- la fonction `process`... n'existe pas :woman_shrugging: celle-ci servait à déclencher _manuellement_ le processus, ce qui n'est pas nécessaire pour un serveur web, puisque ce sont les requêtes des clients qui vont déclencher le processus :wink:

## DRTFMY

![wait what ?](https://media.giphy.com/media/g0Qm6fYFmsVwMeKKbl/giphy.gif)

_Don't Read The Funky Manual Yet_ : vous êtes de très bons élèves, vous avez ~certainement~ forcément déjà acquis le réflexe d'aller lire de la doc quand vous coincez sur un sujet.

Ici, il va falloir faire une petite entorse à la règle :grin: La doc est très complète et très bien rédigée mais le problème, c'est que les deux exemples les plus utilisés pour illustrer la notion de middleware sont... la journalisation et la gestion de 404...

Voilà, maintenant vous savez où trouver le challenge tout fait, il n'y a plus qu'à copier/coller : on vous fait confiance pour essayer par vous-mêmes d'abord :wink:

## Bon mais qu'est-ce qu'on fait alors ?

Vous allez reprendre la correction du GameHub et y ajouter deux fonctionnalités.

:warning: **Il n'y a donc rien à coder sur ce repo, même pas besoin de le cloner** :warning:

### Gestion des 404

En partant des informations ci-dessus et du concept de middleware, codez, sans lire la doc dans un premier temps (cf. _DRTFMY_), un middleware affichant un petit message d'erreur simple lorsqu'aucune route n'a été trouvée pour le chemin demandé par le client.

:bulb: **Rappelez-vous que l'ordre des middlewares est important**

Et profitez-en pour être créatif(ve) parce qu'une page 404 avec juste un "oups" dessus, c'est nuuuul. On est au 21e siècle, aujourd'hui, les pages 404 sont [un véritable terrain de jeu pour exprimer sa créativité](https://www.bonjour404.fr/) :tada:

Bon, c'est pas une formation en infographie, on sait... mais créez au minimum une vue qui inclut l'interface (pour pouvoir continuer à naviguer, c'est important) et qui affiche une image sympa que vous aurez trouvée via votre meilleur ami :mag:

### Journalisation

Même principe, mais vous allez cette fois-ci coder un middleware qui logge quelques informations dans la console à chaque requête. Il faut _journaliser_ :
- la date précise de la requête
- l'IP du client
- et le chemin accédé

_Mais où trouver ces informations_ ? Dans la doc naturellement, ce n'est pas parce qu'on vous déconseille de lire la doc des middlewares que vous ne pouvez pas aller faire un tour du côté de celle de l'objet Request. Sinon, vous pouvez aussi essayer de `console.log` l'objet en lui-même pour le disséquer et trouver les infos qui vous intéressent.

## Bonus (parce qu'il en faut un)

Formattez les messages du journal pour qu'ils respectent ce format :
`[date-iso ip] path`