import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import Loader from './components/Loader';

export default function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleGenerate = async () => {
    if (!file) {
      setError('Aucun fichier sélectionné');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post('/api/generate', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        responseType: 'blob'
      });
      const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      setError('Erreur lors de la génération');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <img src="/proposia.png" alt="Proposia logo" className="logo" />
      </header>
      <h1>Générez automatiquement vos documents professionnels</h1>
      <p>Déposez votre cahier des charges au format .txt, .docx ou .pdf puis cliquez sur Générer</p>
      <FileUpload onFileSelected={setFile} />
      {error && <p className="error">{error}</p>}
      <button className="generate-btn" onClick={handleGenerate}>Générer le document</button>
      {loading && <Loader />}
      {downloadUrl && (
        <a href={downloadUrl} download="document.docx" className="download-btn">
          Télécharger le document généré
        </a>
      )}
      <footer>
        &copy; {new Date().getFullYear()} Proposia
      </footer>
    </div>
  );
}
