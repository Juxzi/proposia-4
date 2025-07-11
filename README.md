# Proposia Document Generator



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


```bash
cd frontend
npm install
npm run dev
```


```bash
cd backend
npm install
node index.js
```

Le backend attend l'URL du webhook n8n dans la variable d'environnement `N8N_WEBHOOK_URL`.
