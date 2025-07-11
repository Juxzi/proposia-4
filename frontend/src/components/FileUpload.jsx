import React, { useRef, useState } from 'react';

export default function FileUpload({ onFileSelected }) {
  const inputRef = useRef();
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileSelected(file);
    }
  };

  return (
    <div className="upload-container" onClick={() => inputRef.current?.click()}>
      <input
        id="file-upload"
        type="file"
        accept=".txt,.pdf,.docx"
        ref={inputRef}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="file-upload" className="upload-label">
        {fileName || 'Choisir un fichier'}
      </label>
    </div>
  );
}
