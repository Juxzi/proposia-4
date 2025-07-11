# Proposia Document Generator

Cette application génère automatiquement des documents professionnels à partir d'un cahier des charges fourni par l'utilisateur. Le frontend React est optimisé pour Netlify et communique avec un backend Express relié à un workflow n8n.

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
      Header.jsx
      Features.jsx
      Footer.jsx
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

### Frontend (Netlify compatible)
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
node index.js
```

Le backend attend l'URL du webhook n8n dans la variable d'environnement `N8N_WEBHOOK_URL`.
