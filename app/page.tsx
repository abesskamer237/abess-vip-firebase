const services = [
  { name: "Console Web", status: "Disponible", detail: "Application Next.js prévue pour Firebase App Hosting" },
  { name: "API / statut Xray", status: "Non connecté", detail: "À relier à une API HTTPS sécurisée hébergée séparément" },
  { name: "Moteur VPN Xray", status: "Hébergement séparé", detail: "Le conteneur Xray d'origine n'est pas exécuté par cette console" }
];

export default function Home() {
  return (
    <main className="shell">
      <nav className="nav">
        <div className="brandMark">A</div>
        <div><strong>ABESS VIP</strong><span>WEB CONSOLE</span></div>
        <span className="pill">Firebase App Hosting ready</span>
      </nav>
      <section className="hero">
        <p className="eyebrow">ABESS PROJECT · WEB LAYER</p>
        <h1>Une console claire.<br/><em>Des services séparés.</em></h1>
        <p className="intro">Cette application Next.js est le point de départ pour Firebase App Hosting. Le moteur VPN Xray reste indépendant sur un hôte adapté au trafic VPN.</p>
        <div className="actions">
          <a className="primary" href="#services">Voir les composants <span>↘</span></a>
          <a className="secondary" href="https://firebase.google.com/docs/app-hosting" target="_blank" rel="noreferrer">Guide de déploiement ↗</a>
        </div>
      </section>
      <section id="services" className="services">
        <div className="sectionHeading"><div><p className="eyebrow">ARCHITECTURE</p><h2>État des composants</h2></div><span className="count">03 composants</span></div>
        <div className="cards">
          {services.map((service, i) => (
            <article className="card" key={service.name}>
              <div className="cardTop"><span className="number">0{i + 1}</span><span className={i === 0 ? "dot green" : "dot amber"} /></div>
              <h3>{service.name}</h3><p>{service.detail}</p><div className="status">{service.status}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="notice">
        <div className="noticeIcon">i</div>
        <div><strong>Important — aucun serveur VPN n'est lancé ici.</strong><p>Cette interface ne contient ni identifiants ni configuration privée. Avant d'afficher un état réel, crée une API de statut authentifiée et configure son URL côté serveur.</p></div>
      </section>
      <footer><span>ABESS VIP</span><span>Web UI · Next.js · Firebase App Hosting</span></footer>
    </main>
  );
}
