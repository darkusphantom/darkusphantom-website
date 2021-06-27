import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <section className="section section__blog space-section">
      <h2 className="section__title blog__title">Pásate por mi Blog</h2>
      <div className="blog container-grid">
        <p className="text">
          Si quieres leer acerca de tecnología, programación, desarrollo web,
          criptomonedas; y todo lo referente a la misma, pásate por mi blog. De
          seguro encontrarás contenido de utilidad y valor.{" "}
        </p>
        <a
          href="https://darkusphantomblog.wordpress.com/"
          className="blog__btn btn btn-primary"
        >
          👉 Entra a mi blog aqui 👈
        </a>
        <div className="blog__image container-img">
          <img
            className="container-img-item"
            src="https://i.imgur.com/q3WbiFa.png"
            alt="Review de mi website mostrando un post"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
