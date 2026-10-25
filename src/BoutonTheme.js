import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function BoutonTheme() {
  const { theme, basculerTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <button onClick={basculerTheme}>
        Passer en mode {theme === 'clair' ? 'sombre' : 'clair'}
      </button>
    </div>
  );
}

export default BoutonTheme;
