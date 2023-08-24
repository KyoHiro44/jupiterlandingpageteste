import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const HomePage: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Nome:', name);
    console.log('WhatsApp:', whatsapp);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.contactInfo}>
          <p>Contate-nos: (11) 1234-5678</p>
          <p>Email: contato@jupiterinternet.com</p>
        </div>
        <a href="https://www.jupiterinternet.com.br/" className={styles.logo}>
          <img
            src="https://jupiter.com.br/portal/wp-content/themes/imperatriz/images/footer-logo.webp"
            alt="Logo da Jupiter Internet"
            className={styles.logoImage}
          />
        </a>
      </header>
      <main>
        <div className={styles.banner}>
          <a href="https://www.jupiterinternet.com.br/">
            <img
              src="https://jupiter.com.br/artes/2023/site/julho/imperatriz.webp"
              alt="Banner de Promoção"
              className={styles.bannerImage}
            />
          </a>
        </div>
        <h1 className={styles.title}>Jupiter Internet</h1>
        <p className={styles.subtitle}>Sua conexão de alta velocidade!</p>
        <div className={styles.packages}>
          <div className={styles.package}>
            <h2>Pacote Básico</h2>
            <p>Velocidade: 50 Mbps</p>
            <p>Preço: R$79,99/mês</p>
          </div>
          <div className={styles.package}>
            <h2>Pacote Padrão</h2>
            <p>Velocidade: 100 Mbps</p>
            <p>Preço: R$99,99/mês</p>
          </div>
          <div className={styles.package}>
            <h2>Pacote Premium</h2>
            <p>Velocidade: 300 Mbps</p>
            <p>Preço: R$149,99/mês</p>
          </div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Seu WhatsApp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2023 Jupiter Internet</p>
      </footer>
    </div>
  );
};

export default HomePage;
