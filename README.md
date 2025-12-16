# Tester c'est tricher

Dépôt de travail pour notre talk de 2024 sur les tests par Antoine Caron et Jules Poissonnet

## Prérequis

- [Node.js](https://nodejs.org/) version 22.21 ou supérieure
- [pnpm](https://pnpm.io/) version 9.15 ou supérieure

## Installation

Cloner le projet et installer les dépendances :

```bash
git clone <url-du-repo>
cd talk-test
pnpm install
```

## Lancer le projet en mode développement

### Présentation principale

Pour lancer la présentation :

```bash
pnpm start
```

Cela démarre un serveur de développement. Ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:8000`).

### Mode watch

Pour relancer automatiquement le serveur à chaque modification des slides :

```bash
pnpm start:watch
```

### Mode présentateur

Pour lancer le mode présentateur avec notes et aperçu :

```bash
pnpm presenter
```

### Application de démo

Pour lancer l'application de démonstration :

```bash
pnpm demo
```
