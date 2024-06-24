# eapQuote

## Description

eapQuote est une application web permettant d'afficher des citations aléatoires en utilisant un serveur Node.js et une interface web simple.

## Structure du projet

eapV2/
├── eapBack
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── eapDoc
│   ├── README.md
│   ├── eap.md
│   └── exemples-eap.md
└── eapFront
├── index.html
├── script.js
└── styles.css

## Prérequis

- Node.js installé
- PostgreSQL installé et configuré

## Installation

1. Clonez le dépôt:

   ```sh
   git clone https://github.com/manda9988/eapV2
   cd eapV2
   ```

2. Installez les dépendances pour le back-end:

   ```sh
   cd eapBack
   npm install
   ```

3. Configurez les variables d'environnement:
   Créez un fichier `.env` dans le répertoire `eapBack` avec les informations suivantes:

   ```env
   DB_USER=your_db_user
   DB_HOST=your_db_host
   DB_NAME=your_db_name
   DB_PASSWORD=your_db_password
   DB_PORT=your_db_port
   ```

4. Démarrez le serveur:
   ```sh
   node server.js
   ```

## Utilisation

1. Ouvrez `index.html` dans votre navigateur ou servez-le via un serveur web.

2. Cliquez sur le bouton "Quote" pour obtenir une citation aléatoire.

## Développement

### Back-end

Le serveur est un simple serveur Node.js utilisant Express pour gérer les requêtes HTTP et PostgreSQL pour stocker les citations.

Fichier principal: `eapBack/server.js`

### Front-end

L'interface utilisateur est construite en HTML, CSS et JavaScript.

- `index.html`: structure de la page
- `styles.css`: styles de la page
- `script.js`: logique de l'application pour récupérer et afficher les citations

## Tests

Pour l'instant, il n'y a pas de tests automatisés configurés. Vous pouvez tester manuellement les fonctionnalités en suivant les étapes d'installation et d'utilisation.

## Déploiement

Pour déployer cette application, vous pouvez utiliser un service comme Heroku, AWS, ou tout autre fournisseur de services cloud. Assurez-vous de configurer correctement les variables d'environnement sur votre plateforme de déploiement.

## Contribution

Les contributions sont les bienvenues. Veuillez créer une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

## Licence

Ce projet est sous licence MIT.
