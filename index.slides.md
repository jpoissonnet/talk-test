---
author:
author-twitter:
author-company:
event: Snowcamp
city: Grenoble
date: 23 janvier 2025
---

# Tester c'est tricher

## blank black
> @00:00:00@
> #JP# Dis voir Antoine, tu devrais peut-être leur expliquer pourquoi tu te trimbale avec un parapluie alors qu'il ne pleut pas ici.
> $AC$ tu sais, on est jamais trop prudent, imagine il pleut et bien tu ferais pas le malin.
> #JP# T'as pensé à porter un Kway dessous histoire d'être sur ?
> $AC$ Malin j'y avais pas trop pensé...
> Bon aller, on est pas la pour ça.

## poster fade-from main
Tester c'est tricher
==========
Antoine Caron _Engineering Manager @Scaleway_ !
xxxxxxxxxx
xxxxxxxxxx
xxxx
xxxxxxxxxx
xxxxxxxx
==========
xxxxxxxxxx
xxxxxx
------
Jules Poissonnet _Frontend Dev @Bedrock&nbsp;Streaming_
xxxxxxxxxx
xxxxxxxxxx
==========
xxxxxxxxxx
<img src="src/img/grenoble.png"/>
xxxxxxxxxx
xxxxxxxxx
==========
> $AC$ Bonjour à toutes et tous, j'espère que vous allez bien et que cette journée se déroule comme vous l'espériez.
> Je m'appelle Antoine Caron et je suis Engineering manager Frontend chez Scaleway, vous m'avez peut-être vu l'année passée vous parler de Gzip.
> #JP# Et moi c'est Jules Poissonet, Frontend Dev chez Bedrock Streaming.
> Si l'autre malin avec son parapluie et moi-même sommes ici aujourd'hui, c'est pour vous parler de tests.
> C'est un sujet qui nous intéresse beaucoup et qu'on trouve souvent mal abordé.
> $AC$ On espère avec cette présentation ouvrir un peu vos chakras sur la notion de testing.
> Souvent abordé de manière dogmatique, on va essayer une approche plus pragmatique
> #JP# Que vous fassiez du frontend, du backend, du mobile ou de l'embarqué, des "tests" ou pas, on souhaite vous proposer quelques réfléxions / conseils et approches qui pourraient être utiles et concrètes.

## blank white 
> $AC$ ...Bon, plongeons nous dans un univers qui n'est pas le dévelopment pour voir ce qu'on peut en tirer
> Il nous faudrait un objet, par exemple.
> #JP# Un parapluie tient, au moins il sera utile.

## media fade-from contain
<img src="src/img/parapluie-ouvert.jpg"/>

> $AC$ Super idée, j'adore les parapluies, c'est tellement pratique.
> Mais attends, on est dev front, j'ai aucune idée des techno de test de parapluie.
> #JP# La première chose que tu te demande c'est "Quelles sont les techno ?"
> Perso, je préfère me demander...

## text fade-from
🤔 Comment on teste un parapluie ? 
> $AC$ C'est pas bête ça, on pourrait même se poser la question de ...
> #JP# Et même aller plus loin

## text
Qu'est-ce qu'on teste ?
> $AC$ Déjà, il nous faut une matière imperméable, sinon c'est pas très utile.

## media fade-from contain
<img src="src/img/toile.png"/>

> #JP# Déjà il nous faut donc un procédé qui nous permet de tester unitairement la toile du parapluie.
> $AC$ Ah oui je vois où tu veux en venir, un genre de test unitaire où on s'occupe uniquement de la toile.
> Ça nous permettrait d'éviter de fabriquer un parapluie qui nous protège pas du tout de la pluie.

## text white
<strong>Test unitaire</strong> de la toile
> $AC$ Clairement ce serait déjà bien, mais toi comme moi, on sait que le principale souci des parapluies...
> #JP# C'est que le mécanisme est souvent fragile et fini par casser, le rendant inutilisable.
> Il nous faudrait un procédé pour tester la robustesse du mécanisme.

## media fade-from contain
<img src="src/img/mechanisme.png"/>

> Il nous faudrait ouvrir et fermer le mécanisme un grand nombre de fois pour s'assurer qu'il ne casse pas.
> $AC$ Un peu comme un test d'intégration, on vérifie qu'un ensemble des pièces fonctionnent bien ensemble.

## text white
<strong>Test d'intégration</strong> du mécanisme
> #JP# Oui completement, ce serait déjà pas mal, mais on sait tous que le vent est l'ennemi numéro 1 des parapluies.
> $AC$ Mais comment on fait pour tester ça ? On va pas arreter la production tant qu'il n'y a pas de vent.
> #JP# On peut surement faire passer les parapluies en soufflerie, pour s'assurer qu'il tiennent le coup.
> $AC$ Ah oui, la soufflerie, ce serait comme un test avec des mocks.

## text white
On <strong>mock</strong> le vent avec la soufflerie
> #JP# Tout ça, ça nous donne un parapluie hydrophobe, robuste et résistant au vent.
> Mais ça nous assure toujours pas qu'on soit à l'abris de la pluie.

## media fade-from logo
<iframe src="https://giphy.com/embed/BmQPKjwhScjdK" frameBorder="0" allowFullScreen></iframe>
> $AC$ Pour ça, il nous faudrait un test end-to-end, un test qui nous assure que le parapluie remplit bien sa fonction première.
> On pourrait simuler de la pluie pour vérifier que le parapluie nous protège bien.

## text white
De <strong>bout en bout (e2e)</strong> l'usage du parapluie
> #JP# Ok, maintenant qu'on est là, il se peut qu'on arrive à cette situation.

## text
🤔
> $AC$ Premièrement, déjà "Pourquoi ces deux là me parlent de parapluie ?"
> #JP# Et deuxièmement, il est possible que les définition qu'on vient de donner ne vous vont pas.
> En effet, on constate qu'il existe souvent des grandes différences entre les définitions de tests unitaires, d'intégration et d'end-to-end, de mock etc.
> $AC$ On ne cherche pas ici à donner des définitions universelles, mais plutôt à vous donner une vision pragmatique de ce que ces tests peuvent être.
> Clairement, si vous les appelez autrement, il y a pas de soucis, l'important c'est de comprendre ce qu'ils apportent.

## blank white
> $AC$ Maintenant voyons un peu ce qui se passe dans le monde du dev et qui diffère de l'exercice de pensée précédent.
> En général quand je demande à quelqu'un comment cette personne teste, j'obtiens les réponses suivantes.

## text todo
_"Nous on teste pas, on a pas le temps"_

## text todo
_"On fait du Jest/Testing Library/Cypress/..."_

## text todo
_"Nous on teste absolument tout, coverage à 100%"_

## text todo
_"On teste que cette partie là, le reste c'est pas important"_


## poster main
Merci beaucoup !
==========
Oubliez pas de donner du feedback !
xxxxxxxxxx
xxxxxxxxxx
xxxx
xxxxxxxxxx
xxxxxxxxxx
xxxxxxxx
==========
xxxxxxxxxx
xxxxxx
xxxxxxxxxx
xxxxxxxxxx
xxxxxxxxxx
xxxxxxxxxx
xxxxxxxxxx
xxxxx
==========
<img class="contain" src="src/img/qrcode.png"/>
==========
> @00:45:00@

## credits

Références :

* Dépôt de la présentation : https://github.com/jpoissonet/talk-test/

Liens :


Images :


Polices :

* Yanone Kaffeesatz : https://fonts.google.com/specimen/Yanone+Kaffeesatz
* Just Another Hand : https://fonts.google.com/specimen/Just+Another+Hand
* Boogaloo : https://fonts.google.com/specimen/Boogaloo
* Interstate : https://fonts.adobe.com/fonts/interstate
* Sufler : https://www.dafontfree.io/sufler-font/
* OperatorMono : https://www.typography.com/blog/introducing-operator

Remerciements :

* Hubert Sablonnière: pour lui même et ses outils hyper pratiques pour les slides
* Jules : pour sa patience et sa persévérance malgrés ses cours en parallèle
