# documenthubbuilder

Ce dépôt est prêt à utiliser Claude via l'API Anthropic.

## 1) Installer les dépendances

```bash
npm install
```

## 2) Configurer la clé API

Créez un fichier `.env` basé sur `.env.example` :

```bash
cp .env.example .env
```

Puis ajoutez votre clé Anthropic :

```bash
ANTHROPIC_API_KEY=votre_cle_ici
```

## 3) Tester la connexion

```bash
npm start -- "Rédige une courte introduction pour un document sur l'intelligence artificielle."
```

Si la clé est correcte, Claude répondra dans le terminal.
