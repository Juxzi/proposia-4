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

      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      setError('Erreur lors de la génération');
    } finally {
      setLoading(false);
    }
  };

  return (

  );
}
