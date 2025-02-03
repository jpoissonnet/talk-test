# CFP

## Abstract (3 Paragraphes)

Dans le monde du développement logiciel, la pyramide des tests est un modèle souvent pris pour acquis. 
Pourtant, est-elle vraiment la clé pour garantir une couverture de tests optimale et une maintenance efficace ?
Ce talk propose de questionner ce modèle en montrant que "tester, c'est tricher" si l'on se limite à une vision traditionnelle des tests.

À travers des exemples concrets et des démonstrations en live, nous explorerons les limites de la pyramide des tests. 
Nous verrons pourquoi il est essentiel de revoir la place des tests end-to-end (E2E) et comment une bonne stratégie de test repose sur la compréhension des comportements plutôt que sur une approche quantitative.
Le tout avec une approche pragmatique qui met l'accent sur la valeur ajoutée des tests et leur impact à long terme.

Nous proposerons des réponses aux questions souvent évoquées:
- "Est-ce que tester avec des mocks c'est moins bien que sans ?"
- "Est-ce compliqué de setup une stack de tests E2E en 2025 ?"
- "Est-ce que le test coverage est une metric intéressante ?"
- "Quels outils on recommande dans un stack de test en 2025 ?"

Ce talk s'adresse aux développeurs, testeurs et architectes qui souhaitent repenser leur manière d'aborder les tests, tout en optimisant le temps de développement et la qualité du produit.
L'objectif est de leur fournir des clés pour construire une stratégie de test adaptée à leurs besoins, afin de maximiser la valeur de leurs tests tout en minimisant les coûts et les efforts de maintenance.

## Version courte (140 caractères)

Déconstruisons la pyramide des tests pour mieux comprendre la valeur des tests et optimiser leur impact à long terme sur le produit.

## Message pour le comité 

Nous échangeons depuis plusieurs mois sur la thématique des tests et, forts de nos expériences respectives, nous souhaitons partager notre retour d'expérience et nos conseils. Nous proposons une présentation dynamique, avec des slides interactifs, des démos en direct, et des exemples concrets.

Une personne qui suit cette présentation repartira avec :

- Une compréhension approfondie des différents types de tests (unitaires, intégration, E2E) et de leurs véritables rôles.
- Des clés pour évaluer la pertinence de chaque type de test dans leur contexte.
- Des stratégies concrètes pour intégrer les tests end-to-end (E2E) sans sacrifier la vélocité de développement.
- Des conseils sur comment optimiser leur stratégie de test pour maximiser la valeur ajoutée tout en minimisant la maintenance.
- Une vision critique sur la nécessité de s’affranchir de la pyramide traditionnelle pour adopter une approche plus flexible et adaptée.

Cette présentation s'adresse à un public technique ou QA/testeur, qu'ils soient novices ou experts. 
Chacun y trouvera des pistes pour repenser leur approche des tests et renforcer la qualité de leurs projets à long terme.

## Plan théorique de la présentation


Intro + Slide de titre + présentation de chacun
"à la fin de ce talk vous aurez la meilleures manière de concevoir une stratégie de tests pour vos applications"

1) Test dans l'industrie, exemple du parapluie

- besoin d'une matière imperméable
- test unitaires
- besoin d'un mécanisme robuste
- tests intégration
- besoin qu'il ne s'explose pas avec le vent
- besoin de mock
- besoin d'être à l'abris de la pluie
- tests e2e

2) Du coup comment on test quand on travaille dans le dev

- on jete des outils dans une stack et on est content.
- on se met des seuil de coverage et est content
- on teste nos outils au lieu de tester notre produit / documenter notre métier
- le code de nos tests ne respecte pas nos principe de code Testbase < codebase (test fido)
- on se préoccupe peu dans la conception de ce qu'on veut tester et comment on va le faire => BDD / Acceptance driven development
- test smells:
  - non observation
  - on écrit des tests très long
  - on test notre mock
- on run tous nos tests tout le temps
- Problématique de stabilité
- problématique de performance
- Le cap de "j'ai trop de tests, ma CI est trop lente"
- pyramide des tests
  - dérive du modèle
  - Modèle de base référence à Mike Cohn

3) Pour quoi on fait des tests

- conformité "est-ce que ce que le code fait c'est ce qu'on souhaite"
- stabilité "est-ce que ça casse quelque chose"
- documenté "que'est ça fait bordel"
- intégrité "est-ce qu'on est confiant sur le fonctionnement"
- reproductibilité

- => Itérer accelerer

4) nos conseils

- Ne mesurer pas le coverage, obter plutot pour des stratégies de mutation testing testing
- Ta test base fait partie de la codebase "how you do one thing is how you do everything"
  - s'imposer des règles et les automatisés (lint)
  - Se reposer sur analyse statique / compilation
- Tester avec le diff avec une architecture découpé
  - jest / vitest le fond
  - nx affected
  - Sharding
  - catéoriser et prioriser les tests
- Dans le monde JS, préférer des outils comme Vitest (référence l'article de Younes)
  - expliquer rapidement pourquoi
- Setup une stack E2E est facile 2025 et les tests mettent beaucoup de temps qu'à une époque Selenium
- Dans des tests d'interface web, un truc qui prend le plus de temps c'est l'http.
  - faire du mock avec des outils comme SuperAgentMock / Mirage / MSW 
  - en plus ça débloque la possibilité de tester des comportement à la marge (latence / erreur)
- ...
- rationaliser sa quantité de test -> pour un freelance c'est pas nécessaire de tester parce que pas gain https://xkcd.com/1205/


## TODO

- [x] Référencer un contenu sur Cucumber / playwright-bdd
- [x] Référencer l'ami Mathieu Mure sur Playwright
- [x] Ajouter le lien Github dans la présentation
- [x] Ajouter le livre de l'Afnor en référence
- [ ] Donner l'impression que la 3 eme est partie est plus longue


