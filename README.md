# Bienvenue sur l'application mobile localchat-hn2 👋

Ce projet est une application mobile développée avec [Expo](https://expo.dev) grâce à l'outil [`create-expo-app`](https://www.npmjs.com/package/create-expo-app). Le but de cette application est de [ajouter ici une brève description des fonctionnalités de l'application, par exemple "faciliter la communication locale"].

## Comment démarrer

### 1. Installer les dépendances

Avant de commencer, assurez-vous d'avoir **Node.js** installé sur votre PC. Si ce n'est pas le cas, téléchargez-le depuis [Node.js](https://nodejs.org/).

Ensuite, une fois que vous avez cloné le dépôt sur votre machine, ouvrez un terminal à la racine du projet et exécutez la commande suivante pour installer les dépendances nécessaires :

```bash
npm install
```

### 2. Lancer l'application

Après avoir installé les dépendances, vous pouvez démarrer l'application en exécutant la commande suivante :

```bash
npx expo start
```

Vous verrez plusieurs options dans le terminal pour ouvrir l'application sur différents supports :

- **Déploiement de développement** : [build de développement](https://docs.expo.dev/develop/development-builds/introduction/)
- **Émulateur Android** : Si vous avez Android Studio, vous pouvez utiliser l'[émulateur Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- **Simulateur iOS** : Si vous êtes sur macOS, vous pouvez utiliser le [simulateur iOS](https://docs.expo.dev/workflow/ios-simulator/)
- **Expo Go** : Vous pouvez aussi utiliser [Expo Go](https://expo.dev/go), une sandbox limitée pour tester votre application sur des appareils physiques.

### 3. Développement

Pour commencer à développer, vous pouvez modifier les fichiers situés dans le dossier **app**. Ce projet utilise un système de [routing basé sur les fichiers](https://docs.expo.dev/router/introduction), ce qui signifie que chaque fichier correspond à une route dans l'application.

### 4. Réinitialiser le projet

Si vous voulez repartir de zéro avec un projet vierge, exécutez la commande suivante :

```bash
npm run reset-project
```

Cela déplacera le code de base dans un dossier appelé **app-example** et créera un nouveau dossier **app** vide où vous pourrez commencer votre développement.

Avec cette version, tout étudiant devrait pouvoir cloner, installer les dépendances, et lancer l'application sans problème.
