const Contact = () => {
  return (
    <section className="contact container">
      <h2>Contáctanos</h2>
      <article>
        <div>
          <img src="https://funko.com/on/demandware.static/-/Sites-funko-master-catalog/default/dwb7d4f8f7/images/funko/upload/73408_Starwars_C3P0_Facet_POP_GLAM-WEB.png" width="70%" />
        </div>

        <div>
          <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <textarea cols="50" rows="10" placeholder="Mensaje....."></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Contact;