# Projet 1 : Pierre Feuille Ciseaux

> Author : Abir Bezzazi

- [Introduction](#introduction)
- [Comment récupérer le Projet](#comment-récupérer-le-projet)
- [Comment lancer le serveur](#comment-lancer-le-serveur)
- [Comment jouer](#comment-jouer)
- [Demo](#demo)


# Introduction

Ce projet est la réalisation du jeu pierre feuille ciseaux. Le jeu nécessitant deux joueurs, on gére ceci grâce aux sockets. Chaque connection, c-a-d chaque utilisateur est lié à une socket, donc à un id unique à lui. Il suffit de lier les sockets avec les évenements liés aux actions faites par le public et réaliser le jeu.

# Comment récupérer le projet

- Dans un terminal tapez la commande :

```
 git clone https://gitlab-etu.fil.univ-lille.fr/abir.bezzazi.etu/racine.git
```
 pour cloner le dépôt et l'avoir sur votre pc en locale.

- Dans le dossier `TP1` on a le TP sur un serveur minimal
- Dans le dossier `TP2` on a le TP sur les sockets.io
- Dans le dossier `pfc` on a :
  - Le dossier `server`, dans lequel on a les dossier `controllers`, `pages` et `responseBuilder` qui servent à la gestion des routes et requêtes
  - Le dossier `public`, dedans dans lequel se trouvent les fichiers necéssaires pour l'affichage côté client
  - Le fichier `index.js` qui lance le serveur http sur node
  - Le fichier `index.js` qui crée le serveur http.

# Comment lancer le serveur :
- Placez-vous à la racine du projet (soit le dossier `/pfc`).
- Lancez la commande `npm install`. Cette commande nstallera les modules Node
- Lancez la commande `npm install socket.io --save`. Cette commande ajoutera la dépendance de socket.io dans package.json, nécessaire pour ce projet.
- Lancez la commande `npm run start`. Cette commande exectura le point d'entrée appelé dans le fichier package.json qui est le fichier `index.js`
- Ensuite dans un navigateur ouvrir la page `http://localhost:8080/` pour aller à la page d'accueil.

# Comment jouer

Ce jeu peut être joué avec deux joueurs maximum. Dans un navigateur ouvrir la page `http://localhost:8080/` pour aller à la page d'accueil. Ensuite clicker sur le lien `Le jeu PFC`. Ce lien vous dirige vers la route pfc, cette route enregistre votre connexion. Pour que deux joeurs soient connectés il faut logiquement ouvrir cette route (/pfc) sur deux pages différentes dans un navigateur. Ensuite, il faut cliquer sur un des trois bouttons proposées pour jouer un coup. Le jeu pierre feuille 

## Demo :
[Demo](/pfcDemo.mov)