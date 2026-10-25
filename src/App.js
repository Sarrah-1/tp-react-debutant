import './App.css';
import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import { ThemeContext } from './ThemeContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import FormulaireInscription from './FormulaireInscription';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import BoutonTheme from './BoutonTheme';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Sarrah',
    connecte: true
  });
  const [theme, setTheme] = useState('clair');

  const basculerTheme = () => {
    setTheme((prev) => (prev === 'clair' ? 'sombre' : 'clair'));
  };

  return (
    <ThemeContext.Provider value={{ theme, basculerTheme }}>
      <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
        <div className={`page page-${theme}`}>
          <div className="contenu">
            <h1>TP React débutant</h1>
            <section>
              <h2>Formulaire Contrôlé</h2>
              <FormulaireControle />
            </section>
            <section>
              <h2>Formulaire Non-Contrôlé</h2>
              <FormulaireNonControle />
            </section>
            <section>
              <h2>Lifting State Up</h2>
              <TemperatureConvertor />
            </section>
            <section>
              <h2>Profil Utilisateur</h2>
              <Profil />
            </section>
            <section>
              <h2>Formulaire d'inscription</h2>
              <FormulaireInscription />
            </section>
            <section>
              <h2>Mon thème (contexte personnel)</h2>
              <BoutonTheme />
            </section>
          </div>
        </div>
      </UtilisateurContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
