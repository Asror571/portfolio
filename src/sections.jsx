export function Header({ t, language, menu, menuText, navigation, locale, quickTrigger, progress }) {
  return (
    <header>
      <div className="wrap nav">
        <a className="logo" href="#" aria-label={t("Asror Qurbonazarov home")}>
          asror
          <i>.</i>
        </a>
        <button className="menu" aria-controls="navigation" {...menu}>{menuText}</button>
        <nav id="navigation" aria-label={t("Main navigation")} {...navigation}>
          <a href="#about">{t("About")}</a>
          <a href="#results">{t("Results")}</a>
          <a href="#experience">{t("Experience")}</a>
          <a href="#skills">{t("Skills")}</a>
          <a className="navcta" href="#contact">
            {t("Let’s talk ")}
            <span>↗</span>
          </a>
        </nav>
        <div className="nav-tools">
          <nav className="locale" aria-label={t("Site language")} {...locale}>
            <a href="/" hrefLang="en" lang="en" aria-label="English" aria-current={language === "en" ? "page" : undefined}>EN</a>
            <a href="/uz/" hrefLang="uz" lang="uz" aria-label="O‘zbekcha" aria-current={language === "uz" ? "page" : undefined}>UZ</a>
            <a href="/ru/" hrefLang="ru" lang="ru" aria-label="Русский" aria-current={language === "ru" ? "page" : undefined}>RU</a>
          </nav>
          <button className="quick-trigger" type="button" aria-label={t("Quick navigation")} title={t("Quick navigation")} {...quickTrigger}>⌘ K</button>
        </div>
      </div>
      <div className="reading-progress" aria-hidden="true" {...progress} />
    </header>
  );
}

function Hero({ t }) {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-top">
        <div className="eyebrow">
          <i className="dot" aria-hidden="true" />
          {t(" Asror Qurbonazarov")}
        </div>
        <div className="location">{t("SAMARKAND, UZBEKISTAN")}</div>
      </div>
      <div className="hero-grid">
        <div className="hero-content">
          <p className="professional-title">{t("SALES MANAGER / BUSINESS DEVELOPMENT / CUSTOMER RELATIONS")}</p>
          <h1 id="hero-title">
            {t("Turning")}
            <br />
            {t("Conversations")}
            <br />
            <em>{t("Into Customers.")}</em>
          </h1>
          <p className="hero-text">{t("I’m Asror Qurbonazarov — a Sales Manager passionate about customer relationships, business development, and creating value through effective sales.")}</p>
          <div className="actions">
            <a className="primary" href="#contact">
              {t("Let’s Work Together ")}
              <span>↗</span>
            </a>
            <a className="textlink" href="#experience">{t("View My Experience ↗")}</a>
          </div>
        </div>
        <div className="art" role="img" aria-label={t("AQ personal monogram: people, trust and value")}>
          <div className="motion-grid" aria-hidden="true" />
          <div className="monogram">aq</div>
          <div className="asterisk">✳</div>
          <div className="artlabel a">
            <span>↗</span>
            {t(" Conversations create opportunities.")}
          </div>
          <div className="artlabel b">
            <span>◎</span>
            {t(" People. Trust. Value.")}
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="specialties">
          <span>{t("EDUCATIONAL SALES")}</span>
          <span>{t("CUSTOMER RELATIONS")}</span>
          <span>{t("FMCG DISTRIBUTION")}</span>
        </div>
        <a className="scroll" href="#about">{t("GET TO KNOW ME ↓")}</a>
      </div>
    </section>
  );
}

function About({ t }) {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-kicker">
              <b>01 /</b>
              {t(" ABOUT ME")}
            </div>
            <h2>
              {t("Good sales start with")}
              <br />
              <em>{t("understanding people.")}</em>
            </h2>
          </div>
          <p className="section-note">{t("A customer-focused approach, grounded in practical sales experience.")}</p>
        </div>
        <div className="about-grid">
          <p className="about-intro">
            {t("I help businesses turn potential customers into real customers through effective communication, customer understanding, ")}
            <span>{t("and structured sales processes.")}</span>
          </p>
          <div>
            <p className="about-copy">{t("I’m a Sales Manager based in Samarkand, with practical experience in educational sales, customer relationship management, and FMCG distribution. My work involves understanding customer needs, presenting products and services, handling objections, and closing sales.")}</p>
            <p className="about-copy">{t("At BLITZ, I sold German language courses. At Excellent Academy, I developed my experience in education sales. Working in FMCG distribution also gave me a practical understanding of retail customers and B2B sales.")}</p>
            <p className="about-copy">{t("I’m interested in business development, sales strategies, CRM systems, and using technology to make business processes more effective.")}</p>
            <div className="tags">
              <span className="tag">{t("Customer understanding")}</span>
              <span className="tag">{t("Clear communication")}</span>
              <span className="tag">{t("Trust & value")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results({ t }) {
  return (
    <section className="section performance" id="results">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-kicker">
              <b>02 /</b>
              {t(" SALES PERFORMANCE")}
            </div>
            <h2>{t("Real conversations.")}<br />{t("Measurable results.")}</h2>
          </div>
          <p className="section-note">{t("Customer sales from my work selling German language courses at BLITZ.")}</p>
        </div>
        <div className="results-grid">
          {[
            { period: "BLITZ / SEPTEMBER 2026", count: 78, title: "September Sales", description: "German course sales in September." },
            { period: "BLITZ / OCTOBER 2026", count: 89, title: "October Sales", description: "German course sales in October." },
            { period: "BLITZ / SEPTEMBER–OCTOBER 2026", count: 167, title: "Two-Month Total", description: "Combined German course sales in September and October." },
          ].map(({ period, count, title, description }) => (
            <article className="result" key={period}>
              <div className="result-label">{t(period)}</div>
              <div className="result-top">
                <div className="number" data-count={count} aria-label={count}>{count}</div>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{t(title)}</h3>
              <p>{t(description)}</p>
            </article>
          ))}
        </div>
        <div className="performance-foot">
          <span>{t("PRODUCT / GERMAN LANGUAGE COURSES")}</span>
          <span>{t("From understanding learning goals to handling questions and closing sales.")}</span>
        </div>
      </div>
    </section>
  );
}

function Experience({ t }) {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-kicker">
              <b>03 /</b>
              {t(" PROFESSIONAL EXPERIENCE")}
            </div>
            <h2>
              {t("Sales experience.")}
              <br />
              <em>{t("Across real business settings.")}</em>
            </h2>
          </div>
          <p className="section-note">{t("Education, retail distribution, and marketplace operations — with a consistent focus on customer needs.")}</p>
        </div>
        <div className="job-list">
          <article className="job">
            <div className="job-date">{t("AUG — NOV 2026")}</div>
            <div>
              <h3>BLITZ</h3>
              <p className="job-role">{t("Sales Manager")}</p>
              <p className="industry">{t("Education / German Language Courses")}</p>
            </div>
            <ul>
              <li>{t("Communicated with potential customers and identified their needs and expectations.")}</li>
              <li>{t("Presented German language courses, explaining benefits and learning opportunities.")}</li>
              <li>{t("Handled customer questions and objections throughout the sales process.")}</li>
              <li>{t("Converted leads into paying customers and closed sales.")}</li>
            </ul>
          </article>
          <article className="job">
            <div className="job-date">{t("JUN — JUL 2026")}</div>
            <div>
              <h3>Krem Slivki</h3>
              <p className="job-role">{t("Marketplace Administrator")}</p>
              <p className="industry">{t("Marketplace Operations")}</p>
            </div>
            <ul>
              <li>{t("Managed product listings and supported product management.")}</li>
              <li>{t("Worked on marketplace administration and daily operations.")}</li>
              <li>{t("Handled administrative tasks supporting marketplace workflows.")}</li>
            </ul>
          </article>
          <p className="undated">{t("ADDITIONAL EXPERIENCE / DATES NOT SPECIFIED")}</p>
          <article className="job">
            <div className="job-date">{t("5 MONTHS")}</div>
            <div>
              <h3>Excellent Academy</h3>
              <p className="job-role">{t("Sales Manager")}</p>
              <p className="industry">{t("Education")}</p>
            </div>
            <ul>
              <li>{t("Communicated with customers and understood their requirements.")}</li>
              <li>{t("Presented educational products and services.")}</li>
              <li>{t("Supported the sales process and built customer relationships.")}</li>
            </ul>
          </article>
          <article className="job">
            <div className="job-date">{t("APPROX. 4 MONTHS")}</div>
            <div>
              <h3>{t("FMCG Distribution")}</h3>
              <p className="job-role">{t("Sales Agent")}</p>
              <p className="industry">{t("FMCG / B2B Sales")}</p>
            </div>
            <ul>
              <li>{t("Worked with retail stores and presented products to shop owners.")}</li>
              <li>{t("Communicated with buyers and understood retail customer needs.")}</li>
              <li>{t("Developed practical B2B sales experience and learned distribution operations.")}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

function Skills({ t }) {
  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-kicker">
              <b>04 /</b>
              {t(" SALES SKILLS")}
            </div>
            <h2>
              {t("From the first question")}
              <br />
              <em>{t("to the next customer.")}</em>
            </h2>
          </div>
          <p className="section-note">{t("Practical capabilities that support a clear, customer-focused sales process.")}</p>
        </div>
        <div className="skills">
          <article className="skill">
            <div className="skillnum">/ 01</div>
            <div className="skill-icon">◎</div>
            <h3>{t("Understand & connect")}</h3>
            <ul>
              <li>{t("Customer Needs Analysis")}</li>
              <li>{t("Client Communication")}</li>
              <li>{t("Customer Relationship Management")}</li>
              <li>{t("Lead Generation")}</li>
              <li>{t("Product Presentation")}</li>
            </ul>
          </article>
          <article className="skill">
            <div className="skillnum">/ 02</div>
            <div className="skill-icon">↗</div>
            <h3>{t("Convert & close")}</h3>
            <ul>
              <li>{t("Lead Conversion")}</li>
              <li>{t("Objection Handling")}</li>
              <li>{t("Negotiation")}</li>
              <li>{t("Closing Sales")}</li>
              <li>{t("Sales Process Management")}</li>
            </ul>
          </article>
          <article className="skill">
            <div className="skillnum">/ 03</div>
            <div className="skill-icon">⊞</div>
            <h3>{t("Markets & business")}</h3>
            <ul>
              <li>{t("B2C Sales")}</li>
              <li>{t("B2B Sales")}</li>
              <li>{t("Educational Sales")}</li>
              <li>{t("FMCG Sales")}</li>
              <li>{t("Business Development")}</li>
              <li>{t("Marketplace Operations")}</li>
            </ul>
          </article>
        </div>
        <div className="approach">
          <span>{t("01 / LISTEN WITH INTENT")}</span>
          <span>{t("02 / COMMUNICATE VALUE")}</span>
          <span>{t("03 / BUILD TRUST")}</span>
          <span>{t("04 / FOLLOW THROUGH")}</span>
        </div>
      </div>
    </section>
  );
}

function Education({ t }) {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-kicker">
              <b>05 /</b>
              {t(" EDUCATION & COURSES")}
            </div>
            <h2>
              {t("Business perspective.")}
              <br />
              <em>{t("Technology awareness.")}</em>
            </h2>
          </div>
          <p className="section-note">{t("Continuing my education while connecting business needs with digital tools.")}</p>
        </div>
        <div className="education-grid">
          <article className="edu">
            <div className="section-kicker">{t("CURRENT / FIRST-YEAR STUDENT")}</div>
            <h3>{t("Samarkand Institute of")}<br />{t("Economics and Service")}</h3>
            <p className="program">{t("SamISI · Finance and Financial Technologies")}</p>
            <p>{t("Distance Learning")}</p>
          </article>
          <article className="edu">
            <div className="section-kicker">{t("COMPLETED / PRACTICAL EDUCATION")}</div>
            <h3>Najot Ta’lim</h3>
            <p className="program">{t("Full-Stack Web Development Course")}</p>
            <p>{t("Practical frontend and backend development with React and Node.js.")}</p>
          </article>
        </div>
        <section className="technical" aria-labelledby="technical-title">
          <div>
            <div className="section-kicker">{t("ADDITIONAL TECHNICAL SKILLS")}</div>
            <h3 id="technical-title">{t("A sales professional")}<br />{t("who understands technology.")}</h3>
          </div>
          <div>
            <p>{t("My development background helps me understand CRM systems, business automation, and technology-driven sales processes. It complements my work in sales and customer relations.")}</p>
            <div className="tech-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

function Languages({ t }) {
  return (
    <section className="section" id="languages">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="section-kicker">
              <b>06 /</b>
              {t(" LANGUAGES")}
            </div>
            <h2>
              {t("Communication,")}
              <br />
              <em>{t("with room to grow.")}</em>
            </h2>
          </div>
        </div>
        <div className="language-grid">
          <article className="language">
            <div>
              <h3>{t("Uzbek")}</h3>
              <p>{t("Native")}</p>
            </div>
            <span aria-hidden="true">UZ</span>
          </article>
          <article className="language">
            <div>
              <h3>{t("English")}</h3>
              <p>B1</p>
            </div>
            <span aria-hidden="true">EN</span>
          </article>
          <article className="language">
            <div>
              <h3>{t("German")}</h3>
              <p>{t("Beginner")}</p>
            </div>
            <span aria-hidden="true">DE</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Contact({ t, copy, copyText }) {
  return (
    <section className="contact sales-contact" id="contact">
      <div className="wrap">
        <div className="section-kicker">{t("07 / LET’S WORK TOGETHER")}</div>
        <div className="contact-grid">
          <div>
            <h2>
              {t("Your next conversation")}
              <br />
              <em>{t("could start here.")}</em>
            </h2>
            <p>{t("Looking for a Sales Manager with practical education sales experience and a customer-focused approach? Let’s talk about your team.")}</p>
          </div>
          <a className="contact-arrow" href="mailto:asrorqurbonazarov@gmail.com" aria-label={t("Email Asror")}>↗</a>
        </div>
        <div className="contact-links">
          <a href="mailto:asrorqurbonazarov@gmail.com">asrorqurbonazarov@gmail.com ↗</a>
          <a href="tel:+998775271508">+998 77 527 15 08 ↗</a>
          <a href="https://t.me/asror_nazar" target="_blank" rel="noopener noreferrer" aria-label={t("Message Asror on Telegram")}>Telegram · @asror_nazar ↗</a>
          <button className="copy" type="button" aria-live="polite" {...copy}>{copyText ?? t("Copy email ⧉")}</button>
        </div>
        <p className="contact-location">{t("Samarkand, Uzbekistan")}</p>
        <footer className="footer">
          <a className="logo" href="#">asror.</a>
          <span>{t("© 2026 ASROR QURBONAZAROV · SALES MANAGER")}</span>
          <a href="#">{t("Back to top ↑")}</a>
        </footer>
      </div>
    </section>
  );
}

export function QuickNavigation({ t, dialog, closeQuick }) {
  return (
    <dialog className="quick" aria-labelledby="quick-title" {...dialog}>
      <div className="quick-head">
        <h2 id="quick-title">{t("Quick navigation")}</h2>
        <form method="dialog">
          <button aria-label={t("Close")}>×</button>
        </form>
      </div>
      <a href="#about" onClick={closeQuick}>
        <span>{t("About")}</span>
        <span aria-hidden="true">↗</span>
      </a>
      <a href="#results" onClick={closeQuick}>
        <span>{t("Results")}</span>
        <span aria-hidden="true">↗</span>
      </a>
      <a href="#experience" onClick={closeQuick}>
        <span>{t("Experience")}</span>
        <span aria-hidden="true">↗</span>
      </a>
      <a href="#skills" onClick={closeQuick}>
        <span>{t("Skills")}</span>
        <span aria-hidden="true">↗</span>
      </a>
      <a href="#contact" onClick={closeQuick}>
        <span>{t("Contact")}</span>
        <span aria-hidden="true">↗</span>
      </a>
    </dialog>
  );
}

export function Main({ t, copy, copyText }) {
  return (
    <main id="main">
      <Hero t={t} />
      <About t={t} />
      <Results t={t} />
      <Experience t={t} />
      <Skills t={t} />
      <Education t={t} />
      <Languages t={t} />
      <Contact t={t} copy={copy} copyText={copyText} />
    </main>
  );
}
