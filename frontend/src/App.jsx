import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './components/FileUpload';
import Loader from './components/Loader';
import Header from './components/Header';
import Features from './components/Features';
import Footer from './components/Footer';

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
      const blob = new Blob([response.data], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      });
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      setError('Erreur lors de la génération');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="hero">
          <h1>Générez vos documents professionnels en 2 minutes</h1>
          <p className="tagline">
            Téléchargez votre cahier des charges et laissez l\'IA faire le reste.
          </p>
          <a href="#generator" className="cta-btn">Commencer</a>
        </section>
        <Features />
        <section id="generator" className="generator">
          <h2>Importez votre cahier des charges</h2>
          <p>Formats acceptés : .txt, .docx ou .pdf</p>
          <FileUpload onFileSelected={setFile} />
          {error && <p className="error">{error}</p>}
          <button className="generate-btn" onClick={handleGenerate} disabled={loading}>
            Générer le document
          </button>
          {loading && <Loader />}
          {downloadUrl && (
            <a href={downloadUrl} download="document.docx" className="download-btn">
              Télécharger le document généré
            </a>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
