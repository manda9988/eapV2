# projetTest

## Description

eapQuote est une application web permettant d'afficher des citations aléatoires en utilisant un serveur Node.js et une interface web simple.

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

## Configuration PostgreSQL

1. **Accédez à PostgreSQL**:

   ```sh
   psql -U vincentachy -W quotes_db
   ```

2. **Accordez les permissions nécessaires**:

   ```sql
   GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE quotes TO postgres;
   ```

3. **Vérifiez les données**:
   ```sql
   SELECT * FROM quotes;
   ```

### Création et configuration de la base de données PostgreSQL

1. **Créer l'utilisateur PostgreSQL**:

   ```sql
   CREATE USER vincentachy WITH PASSWORD 'your_password';
   ```

2. **Créer la base de données**:

   ```sql
   CREATE DATABASE quotes_db;
   ```

3. **Connecter l'utilisateur à la base de données**:

   ```sql
   GRANT ALL PRIVILEGES ON DATABASE quotes_db TO vincentachy;
   ```

4. **Créer la table pour les citations**:

   ```sql
   CREATE TABLE quotes (
       id SERIAL PRIMARY KEY,
       text TEXT NOT NULL
   );
   ```

5. **Insérer des données initiales**:
   ```sql
   INSERT INTO quotes (text) VALUES
   ('Le voyage de mille lieues commence par un pas.'),
   ('Chaque matin est une nouvelle chance.'),
   ('Le calme est la clé pour trouver la paix intérieure.');
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
