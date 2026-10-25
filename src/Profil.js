import { useContext, useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);
  const [nomSaisi, setNomSaisi] = useState('');

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false });
  };

  const connexion = (e) => {
    e.preventDefault();
    if (!nomSaisi.trim()) return;
    setUtilisateur({ nom: nomSaisi.trim(), connecte: true });
    setNomSaisi('');
  };

  return (
    <div>
      {utilisateur.connecte ? (
        <>
          <p>Bienvenue, {utilisateur.nom}</p>
          <button onClick={deconnexion}>Se déconnecter</button>
        </>
      ) : (
        <>
          <p>Veuillez vous connecter.</p>
          <form onSubmit={connexion}>
            <input
              type="text"
              value={nomSaisi}
              onChange={(e) => setNomSaisi(e.target.value)}
              placeholder="Votre nom"
            />
            <button type="submit">Se reconnecter</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Profil;
