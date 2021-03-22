const Contact = ({ setContact }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact__wrapper">
      <div className="contact__backdrop" onClick={(e) => setContact(false)} />
      <div className="contact__box">
        <form onSubmit={handleSubmit}>
          <h1>Coordonnées & Map</h1>
          <p>
            Hey! Pour toute informations ou suggestions, Merci de remplir le
            formulaire suivant
          </p>
          <input type="text" placeholder="Nom & Prènom" />
          <input type="email" placeholder="E-mail" />
          <label htmlFor="contactMessage">Message</label>
          <textarea id="contactMessage" cols="30" rows="10" />
          <div onClick={(e) => setContact(false)}>
            <span>ENVOYEZ</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
