# Proposia Document Generator

Cette application ultra-simple permet de générer un document professionnel à partir d'un cahier des charges téléchargé par l'utilisateur. Elle se compose d'un frontend React et d'un backend Express servant d'interface avec un workflow n8n.

## Arborescence
```
frontend/
  index.html
  public/
    proposia.png
  src/
    components/
      FileUpload.jsx
      Loader.jsx
    App.jsx
    index.jsx
    styles.css
  package.json
  vite.config.js
backend/
  index.js
  package.json
```

## Lancer le projet

Frontend (compatible Netlify)
```bash
cd frontend
npm install
npm run dev
```

Backend
```bash
cd backend
npm install
node index.js
```

Le backend attend l'URL du webhook n8n dans la variable d'environnement `N8N_WEBHOOK_URL`.
