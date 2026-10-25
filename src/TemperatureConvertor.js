import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

const arrondir = (n) => Math.round(n * 100) / 100;

function TemperatureConvertor() {
  const [saisie, setSaisie] = useState({ valeur: '', echelle: 'c' });

  let celsius = '';
  let fahrenheit = '';

  if (saisie.valeur !== '') {
    const nombre = Number(saisie.valeur);
    if (saisie.echelle === 'c') {
      celsius = saisie.valeur;
      fahrenheit = arrondir((nombre * 9) / 5 + 32);
    } else {
      fahrenheit = saisie.valeur;
      celsius = arrondir(((nombre - 32) * 5) / 9);
    }
  }

  return (
    <div>
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={(valeur) => setSaisie({ valeur, echelle: 'c' })}
        placeholder="Température °C"
      />
      <TemperatureInput
        temperature={fahrenheit}
        onTemperatureChange={(valeur) => setSaisie({ valeur, echelle: 'f' })}
        placeholder="Température °F"
      />
      <p>
        {celsius !== ''
          ? `Température saisie : ${celsius} °C = ${fahrenheit} °F`
          : 'Aucune température saisie'}
      </p>
    </div>
  );
}

export default TemperatureConvertor;
