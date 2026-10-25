import { useState } from 'react';

function FormulaireInscription() {
  const [formulaire, setFormulaire] = useState({
    nom: '',
    email: '',
    motDePasse: ''
  });
  const [erreurs, setErreurs] = useState({});
  const [inscrit, setInscrit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire((prev) => ({ ...prev, [name]: value }));
  };

  const valider = () => {
    const nouvellesErreurs = {};
    if (!formulaire.nom.trim()) nouvellesErreurs.nom = 'Le nom est obligatoire.';
    if (!formulaire.email.includes('@')) nouvellesErreurs.email = "L'email n'est pas valide.";
    if (formulaire.motDePasse.length < 6) {
      nouvellesErreurs.motDePasse = 'Le mot de passe doit contenir au moins 6 caractères.';
    }
    return nouvellesErreurs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouvellesErreurs = valider();
    setErreurs(nouvellesErreurs);
    if (Object.keys(nouvellesErreurs).length === 0) {
      setInscrit(true);
      setFormulaire({ nom: '', email: '', motDePasse: '' });
    } else {
      setInscrit(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="nom"
          value={formulaire.nom}
          onChange={handleChange}
          placeholder="Nom"
        />
        {erreurs.nom && <p className="erreur">{erreurs.nom}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formulaire.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {erreurs.email && <p className="erreur">{erreurs.email}</p>}
      </div>
      <div>
        <input
          type="password"
          name="motDePasse"
          value={formulaire.motDePasse}
          onChange={handleChange}
          placeholder="Mot de passe"
        />
        {erreurs.motDePasse && <p className="erreur">{erreurs.motDePasse}</p>}
      </div>
      <button type="submit">S'inscrire</button>
      {inscrit && <p className="succes">Inscription réussie !</p>}
    </form>
  );
}

export default FormulaireInscription;
