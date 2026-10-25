import { useRef } from 'react';

function FormulaireNonControle() {
  const nomRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = nomRef.current.value;
    const email = emailRef.current.value;
    alert(`Nom : ${nom}, Email : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nomRef} placeholder="Nom" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default FormulaireNonControle;
