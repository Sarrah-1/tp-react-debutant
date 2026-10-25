function TemperatureInput({ temperature, onTemperatureChange, placeholder = 'Température °C' }) {
  return (
    <input
      type="number"
      value={temperature}
      onChange={(e) => onTemperatureChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

export default TemperatureInput;
