const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700;800&display=swap');
  * { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --bg: #ffffff; --bg2: #f9f8f6; --bg3: #f0ede8;
    --accent: #5b4fcf; --accent2: #7c6af7; --accent3: #0ea5e9;
    --text: #1a1a1a; --text2: #555555; --border: #e0ddd8;
  }
  body { background: var(--bg); color: var(--text); font-family: 'Times New Roman', Times, serif; }
  .port { max-width: 900px; margin: 0 auto; padding: 0 24px 80px; }
  nav { display: flex; justify-content: space-between; align-items: center; padding: 28px 0; border-bottom: 1px solid var(--border); margin-bottom: 80px; }
  .logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 20px; color: var(--text); }
  .logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 32px; }
  .nav-links a { color: var(--text2); font-size: 15px; text-decoration: none; font-family: 'Times New Roman', Times, serif; }
  .nav-links a:hover { color: var(--accent); }
  .hero { padding: 40px 0 80px; }
  .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(91,79,207,0.08); border: 1px solid rgba(91,79,207,0.25); border-radius: 100px; padding: 6px 16px; font-size: 12px; color: var(--accent); margin-bottom: 28px; font-family: 'Times New Roman', Times, serif; letter-spacing: 0.5px; }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
  h1 { font-family: 'Times New Roman', Times, serif; font-size: clamp(38px,6vw,66px); font-weight: 700; line-height: 1.1; letter-spacing: -1.5px; margin-bottom: 20px; }
  .name { color: var(--accent); }
  .role { color: var(--text2); font-weight: 400; display: block; font-size: 0.6em; letter-spacing: -0.5px; margin-top: 8px; font-style: italic; }
  .hero p { color: var(--text2); max-width: 520px; font-size: 17px; line-height: 1.9; margin-bottom: 36px; font-family: 'Times New Roman', Times, serif; }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-primary { background: var(--accent); color: #fff; border: none; padding: 12px 28px; border-radius: 8px; font-size: 15px; cursor: pointer; text-decoration: none; display: inline-block; font-family: 'Times New Roman', Times, serif; }
  .btn-primary:hover { background: var(--accent2); }
  .btn-outline { background: transparent; color: var(--text2); border: 1px solid var(--border); padding: 12px 28px; border-radius: 8px; font-size: 15px; cursor: pointer; text-decoration: none; display: inline-block; font-family: 'Times New Roman', Times, serif; }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); }
  .stats { display: flex; gap: 40px; margin-top: 52px; padding-top: 40px; border-top: 1px solid var(--border); }
  .stat-val { font-family: 'Times New Roman', Times, serif; font-size: 30px; font-weight: 700; color: var(--accent); }
  .stat-label { font-size: 13px; color: var(--text2); margin-top: 2px; font-family: 'Times New Roman', Times, serif; }
  section { margin-bottom: 80px; }
  .sec-header { display: flex; align-items: center; gap: 12px; margin-bottom: 36px; }
  .sec-num { font-family: 'Times New Roman', Times, serif; font-size: 12px; color: var(--accent); font-weight: 700; letter-spacing: 2px; font-style: italic; }
  .sec-title { font-family: 'Times New Roman', Times, serif; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; }
  .sec-line { flex: 1; height: 1px; background: var(--border); }
  .skills-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap: 16px; }
  .skill-cat { background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
  .skill-cat-title { font-family: 'Times New Roman', Times, serif; font-size: 12px; letter-spacing: 2px; color: var(--accent); font-weight: 700; margin-bottom: 14px; text-transform: uppercase; font-style: italic; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
  .tag { background: var(--bg3); border: 1px solid var(--border); color: var(--text2); font-size: 13px; padding: 4px 12px; border-radius: 6px; font-family: 'Times New Roman', Times, serif; }
  .projects-grid { display: grid; gap: 20px; }
  .proj-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 14px; padding: 28px; border-left: 3px solid var(--accent); }
  .proj-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 12px; }
  .proj-title { font-family: 'Times New Roman', Times, serif; font-size: 18px; font-weight: 700; color: var(--text); }
  .proj-date { font-size: 12px; color: var(--text2); background: var(--bg3); border: 1px solid var(--border); padding: 3px 10px; border-radius: 100px; white-space: nowrap; font-family: 'Times New Roman', Times, serif; font-style: italic; }
  .proj-desc { color: var(--text2); font-size: 15px; line-height: 1.8; font-family: 'Times New Roman', Times, serif; }
  .certs-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(180px,1fr)); gap: 14px; }
  .cert-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 12px; padding: 18px 20px; }
  .cert-card:hover { border-color: var(--accent); }
  .cert-org { font-size: 11px; color: var(--accent); font-family: 'Times New Roman', Times, serif; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 8px; font-style: italic; }
  .cert-name { font-size: 14px; color: var(--text); line-height: 1.4; font-family: 'Times New Roman', Times, serif; }
  .intern-list { display: grid; gap: 20px; }
  .intern-card { background: var(--bg2); border: 1px solid var(--border); border-left: 3px solid var(--accent); border-radius: 0 14px 14px 0; padding: 24px; }
  .intern-top { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 8px; }
  .intern-company { font-family: 'Times New Roman', Times, serif; font-size: 17px; font-weight: 700; }
  .intern-role { font-size: 14px; color: var(--accent); margin-bottom: 12px; font-family: 'Times New Roman', Times, serif; font-style: italic; }
  .intern-date { font-size: 12px; color: var(--text2); background: var(--bg3); border: 1px solid var(--border); padding: 3px 10px; border-radius: 100px; font-family: 'Times New Roman', Times, serif; }
  .intern-desc { color: var(--text2); font-size: 14px; line-height: 1.8; padding-left: 18px; font-family: 'Times New Roman', Times, serif; }
  .intern-desc li { margin-bottom: 6px; }
  .contact-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(220px,1fr)); gap: 14px; }
  .contact-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 14px; padding: 20px; display: flex; align-items: center; gap: 14px; text-decoration: none; }
  .contact-card:hover { border-color: var(--accent); }
  .contact-icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(91,79,207,0.1); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
  .contact-label { font-size: 11px; color: var(--text2); text-transform: uppercase; letter-spacing: 1px; font-family: 'Times New Roman', Times, serif; font-style: italic; }
  .contact-val { font-size: 13px; color: var(--text); margin-top: 2px; word-break: break-all; font-family: 'Times New Roman', Times, serif; }
  footer { border-top: 1px solid var(--border); padding-top: 32px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
  .footer-text { font-size: 13px; color: var(--text2); font-family: 'Times New Roman', Times, serif; font-style: italic; }
`;

export default function App() {
  return (
    <>
      <style>{styles}</style>
      <div className="port">

        {/* NAV */}
        <nav>
          <div className="logo">SJS<span>.</span></div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <div className="hero" id="about">
          <div className="hero-badge"><span className="dot"></span> Available for opportunities</div>
          <h1>
            <span className="name">Salomon Jeba Singh L</span>
            <span className="role">Software Developer & ML Enthusiast</span>
          </h1>
          <p>A dedicated full-stack developer with a strong foundation in machine learning and IoT-based systems. B.Tech student at Kamaraj College of Engineering and Technology, CGPA 7.6.</p>
          <div className="hero-btns">
            <a href="mailto:salomonjebasingh29@gmail.com" className="btn-primary">Get in Touch</a>
            <a href="https://github.com" className="btn-outline">View GitHub →</a>
          </div>
          <div className="stats">
            <div><div className="stat-val">4+</div><div className="stat-label">Projects Built</div></div>
            <div><div className="stat-val">2</div><div className="stat-label">Internships</div></div>
            <div><div className="stat-val">10+</div><div className="stat-label">Certificates</div></div>
          </div>
        </div>

        {/* SKILLS */}
        <section id="skills">
          <div className="sec-header">
            <span className="sec-num">01</span>
            <span className="sec-title">Skills</span>
            <div className="sec-line"></div>
          </div>
          <div className="skills-grid">
            {[
              { title: "Languages", tags: ["C", "Java", "JavaScript"] },
              { title: "Web", tags: ["HTML", "CSS", "Bootstrap"] },
              { title: "ML / Data", tags: ["Machine Learning", "Tableau"] },
              { title: "Tools", tags: ["Figma", "Canva", "Excel"] },
            ].map(cat => (
              <div className="skill-cat" key={cat.title}>
                <div className="skill-cat-title">{cat.title}</div>
                <div className="skill-tags">
                  {cat.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="sec-header">
            <span className="sec-num">02</span>
            <span className="sec-title">Projects</span>
            <div className="sec-line"></div>
          </div>
          <div className="projects-grid">
            {[
              { title: "Heart Disease Prediction using CNN & NGBoost", date: "Jan 2026", desc: "Built a heart disease prediction model combining CNN for feature extraction and NGBoost for classifying cardiac risk levels. Evaluated with accuracy, F1-score, and ROC-AUC curve." },
              { title: "House Price Prediction Neural Network", date: "Jan 2025", desc: "Designed a multi-layer Neural Network in Python using TensorFlow/Keras to predict residential property prices. Applied feature engineering, evaluated with RMSE and MAE metrics." },
              { title: "Driver Alcohol Sensing Alert with Engine Locking", date: "Aug 2024", desc: "Built an IoT-based safety system using MQ-3 alcohol sensor and Arduino that detects alcohol levels and automatically cuts engine ignition with buzzer feedback." },
              { title: "Student Performance Prediction using ANN", date: "Jan 2024", desc: "Developed an ANN model using Python and Scikit-learn to predict student academic outcomes. Improved accuracy through hyperparameter tuning and cross-validation." },
            ].map(p => (
              <div className="proj-card" key={p.title}>
                <div className="proj-top">
                  <span className="proj-title">{p.title}</span>
                  <span className="proj-date">{p.date}</span>
                </div>
                <p className="proj-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates">
          <div className="sec-header">
            <span className="sec-num">03</span>
            <span className="sec-title">Certificates</span>
            <div className="sec-line"></div>
          </div>
          <div className="certs-grid">
            {[
              { org: "Oracle", name: "Java" },
              { org: "Google", name: "Cloud Digital Leader Track" },
              { org: "Cisco", name: "Intro to Packet Tracer" },
              { org: "Cisco", name: "Network Essentials" },
              { org: "Simplilearn", name: "C Programming" },
              { org: "Infosys", name: "AI Fundamentals" },
              { org: "Infosys", name: "Java Fundamentals" },
              { org: "Infosys", name: "Machine Learning" },
              { org: "Infosys", name: "Big Data 301" },
              { org: "Infosys", name: "Advanced UI/UX & Design Thinking" },
            ].map((c, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-org">{c.org}</div>
                <div className="cert-name">{c.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERNSHIPS */}
        <section id="internships">
          <div className="sec-header">
            <span className="sec-num">04</span>
            <span className="sec-title">Internships</span>
            <div className="sec-line"></div>
          </div>
          <div className="intern-list">
            <div className="intern-card">
              <div className="intern-top">
                <span className="intern-company">XploCode Private Limited</span>
                <span className="intern-date">Dec 2024 · Madurai</span>
              </div>
              <div className="intern-role">C Language Intern · 15 Days</div>
              <ul className="intern-desc">
                <li>Developed utility programs in C covering file handling, pointer manipulation, and dynamic memory allocation.</li>
                <li>Completed data structure assignments (linked lists, stacks) using GCC in a Linux environment.</li>
              </ul>
            </div>
            <div className="intern-card">
              <div className="intern-top">
                <span className="intern-company">Cogni Tech</span>
                <span className="intern-date">May–Jun 2024 · Coimbatore</span>
              </div>
              <div className="intern-role">Internet of Things Intern · 1 Month</div>
              <ul className="intern-desc">
                <li>Built a temperature & humidity monitoring system using Arduino and DHT11 sensor via MQTT protocol.</li>
                <li>Gained hands-on experience with ESP8266, sensor wiring, and AWS IoT Core for cloud integration.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="sec-header">
            <span className="sec-num">05</span>
            <span className="sec-title">Contact</span>
            <div className="sec-line"></div>
          </div>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:salomonjebasingh29@gmail.com">
              <div className="contact-icon">✉️</div>
              <div><div className="contact-label">Email</div><div className="contact-val">salomonjebasingh29@gmail.com</div></div>
            </a>
            <a className="contact-card" href="tel:+919087926732">
              <div className="contact-icon">📱</div>
              <div><div className="contact-label">Phone</div><div className="contact-val">+91 9087926732</div></div>
            </a>
            <a className="contact-card"  href="https://www.linkedin.com/in/salomonjebasingh" target="_blank" rel="noreferrer">
              <div className="contact-icon">💼</div>
              <div><div className="contact-label">LinkedIn</div><div className="contact-val">View Profile →</div></div>
            </a>
            <a className="contact-card" href="https://github.com/SalomonJebaSingh" target="_blank" rel="noreferrer">
              <div className="contact-icon">🐙</div>
              <div><div className="contact-label">GitHub</div><div className="contact-val">View Repos →</div></div>
            </a>
          </div>
        </section>

        <footer>
          <div className="footer-text">© 2025 Salomon Jeba Singh L · Built with React</div>
          <div className="footer-text">Sivakasi, Tamil Nadu</div>
        </footer>

      </div>
    </>
  );
}