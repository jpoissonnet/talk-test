# This document aims to provide the steps to run before the presentation to have everything ready.

1. Lance le server
```shell
pnpm start
```
2. Lance le serveur de la démo et l'onglet
```shell
pnpm demo
open -a firefox -g http://localhost:3000/
```

3. Lance le presenter
```shell
pnpm presenter
open -a firefox -g http://localhost:4320/pages/console/?slide-deck-url=http://localhost:8080/
```

4. Ouvre le viewer
```shell
open -a firefox -g http://localhost:4320/pages/viewer/
```


Run all at once in a terminal
```shell
pnpm start & pnpm demo & pnpm presenter & open -a firefox -g http://localhost:3000/ & open -a firefox -g http://localhost:4320/pages/console/?slide-deck-url=http://localhost:8080/ & open -a firefox -g http://localhost:4320/pages/viewer/
```

## Dans Webstorm

1. Ouvre dans Webstorm, le dossier de la présentation `talk-test/demo/playwright-tests`
2. Ouvre dans cet ordre `package.json`, `tests/simple.spec.ts`, `tests/button.spec.ts`
3. Passe en thème clair "Theme > Light"
4. Passe en mode présentateur "Enter presentation mode" ⚠️ça fait passer en fullscreen