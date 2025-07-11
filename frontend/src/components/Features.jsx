import React from 'react';

const features = [
  {
    title: 'Bibliothèque de modèles',
    description:
      'Commencez avec des templates prêts à l\'emploi pour accélérer la production de vos documents.'
  },
  {
    title: 'Génération IA',
    description:
      'Notre moteur analyse votre cahier des charges pour créer un contenu structuré et professionnel.'
  },
  {
    title: 'Export PDF/DOCX',
    description:
      'Récupérez vos documents finalisés aux formats les plus utilisés en entreprise.'
  }
];

export default function Features() {
  return (
    <section className="features">
      {features.map((f) => (
        <div className="feature-card" key={f.title}>
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </section>
  );
}
