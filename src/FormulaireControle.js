import { useState } from 'react';

function FormulaireControle() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom : ${nom}, Email : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Nom"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Envoyer</button>
      <p>Aperçu en direct : {nom || '...'} / {email || '...'}</p>
    </form>
  );
}

export default FormulaireControle;
