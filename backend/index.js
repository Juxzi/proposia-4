import express from 'express';
import multer from 'multer';
import axios from 'axios';
import htmlDocx from 'html-docx-js';

const upload = multer({ storage: multer.memoryStorage() });
const app = express();
const PORT = process.env.PORT || 3001;


  if (!req.file) {
    return res.status(400).send('No file');
  }
  try {
    // Forward the file to n8n workflow
    const response = await axios.post(process.env.N8N_WEBHOOK_URL, req.file.buffer, {
      headers: { 'Content-Type': req.file.mimetype }
    });

    // Assuming n8n returns { html: '<html>...</html>' }
    const html = response.data.html;
    const docxBuffer = htmlDocx.asBlob(html);
    res.set({
      'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'Content-Disposition': 'attachment; filename="document.docx"'
    });
    res.send(docxBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send('Generation error');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
