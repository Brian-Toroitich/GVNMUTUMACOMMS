import { useState } from "react"

const landscape =
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1800&q=88"

const healthGallery = [
  {
    src: "/health-centre-commissioning.jpg",
    alt: "H.E. Rev. Mutuma M’Ethingia with Health Cabinet Secretary Hon. Aden Duale",
  },
  {
    src: "/uruku-maternity-exterior.jpg",
    alt: "The newly constructed maternity wing at Uruku Health Center",
  },
  {
    src: "/uruku-maternity-ward.jpg",
    alt: "New patient beds inside the Uruku Health Center maternity wing",
  },
]

const communityGallery = [
  {
    src: "/community-tour-1.jpg",
    alt: "Residents welcoming the Governor during the community tour",
  },
  {
    src: "/community-tour-2.jpg",
    alt: "The Governor engaging with a local produce trader",
  },
  {
    src: "/community-tour-3.jpg",
    alt: "The Governor supporting a local produce business during the tour",
  },
  {
    src: "/community-tour-4.jpg",
    alt: "The Governor joining residents in a traditional board game during the community tour",
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

const priorities = [
  {
    number: "01",
    title: "Prosperous livelihoods",
    text: "Supporting farmers, traders and entrepreneurs to create opportunity across every ward.",
  },
  {
    number: "02",
    title: "Services that deliver",
    text: "Strengthening healthcare, water access and responsive public services for every resident.",
  },
  {
    number: "03",
    title: "A connected county",
    text: "Opening up communities through better roads, digital access and modern infrastructure.",
  },
]

const achievements = [
  {
    number: "01",
    area: "Agriculture",
    title: "Backing farmers and food security",
    text: "Improving access to extension support, stronger value chains and better routes to market for Meru’s producers.",
  },
  {
    number: "02",
    area: "County roads",
    title: "Opening up every ward",
    text: "Prioritising road grading, drainage and maintenance to connect communities, farms, markets and public services.",
  },
  {
    number: "03",
    area: "Water & environment",
    title: "Building resilient communities",
    text: "Advancing reliable water access while protecting the natural resources that sustain homes and livelihoods.",
  },
  {
    number: "04",
    area: "Trade & enterprise",
    title: "Creating room for business",
    text: "Supporting local traders, cooperatives and small enterprises as engines of jobs and county prosperity.",
  },
  {
    number: "05",
    area: "Public service",
    title: "Restoring responsive government",
    text: "Strengthening accountability, community engagement and a culture of service across the county administration.",
  },
]

const updates = [
  {
    date: "22 OCT 2026",
    category: "Health",
    title:
      "H.E Rev. Mutuma M'Ethingia together with the Health Cabinet Secretary, Hon. Aden Duale during the commisioning of a newly constructed Martenity Wing at Uruku Health Center in Nkuene Ward, Imenti South",
  },
  {
    date: "COUNTY UPDATE",
    category: "Development",
    title: "Putting accountable leadership at the heart of county delivery",
  },
  {
    date: "MEET & GREET TOUR",
    category: "Community",
    title: "Engaging residents and supporting local businesses in Ruiri and Kithoka",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [currentCommunityPhoto, setCurrentCommunityPhoto] = useState(0)

  const closeMenu = () => setMenuOpen(false)
  const showPreviousPhoto = () =>
    setCurrentPhoto((current) => (current - 1 + healthGallery.length) % healthGallery.length)
  const showNextPhoto = () =>
    setCurrentPhoto((current) => (current + 1) % healthGallery.length)
  const showPreviousCommunityPhoto = () =>
    setCurrentCommunityPhoto((current) => (current - 1 + communityGallery.length) % communityGallery.length)
  const showNextCommunityPhoto = () =>
    setCurrentCommunityPhoto((current) => (current + 1) % communityGallery.length)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Mutuma M'Ethingia Communications Limited home" onClick={closeMenu}>
          <img className="brand-logo" src="/mutuma-logo.png" alt="" />
          <span className="brand-copy">
            <strong>Mutuma M’Ethingia</strong>
            <small>Communications Limited</small>
          </span>
        </a>

        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#priorities" onClick={closeMenu}>Priorities</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#updates" onClick={closeMenu}>Updates</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a className="header-cta" href="#updates">
          Latest updates
          <ArrowIcon />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <section className="hero" id="home">
        <img src="/hero-community.jpg" alt="Governor Mutuma M’Ethingia engaging with members of the community" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">Leadership • Service • Progress</p>
          <h1>
            Building a
            <br />
            <em>prosperous Meru.</em>
          </h1>
          <p className="hero-intro">
            H.E. Rev. Isaac Mutuma M’Ethingia
            <span>Fourth Governor of Meru County</span>
          </p>
          <a className="primary-button" href="#about">
            Meet the Governor
            <ArrowIcon />
          </a>
        </div>
        <div className="inauguration-note">
          <span>Sworn into office</span>
          <strong>17 March 2025</strong>
        </div>
      </section>

      <section className="statement" id="about">
        <div className="statement-label">
          <span>04</span>
          <p>Fourth Governor<br />of Meru County</p>
        </div>
        <div className="statement-copy">
          <p className="eyebrow">A message of service</p>
          <blockquote>
            “Ours is a calling to serve — with integrity, courage and an unwavering belief in the people of Meru.”
          </blockquote>
          <div className="signature">
            <span />
            <p>
              H.E. Rev. Isaac Mutuma M’Ethingia
              <small>Governor, Meru County</small>
            </p>
          </div>
        </div>
      </section>

      <section className="priorities" id="priorities">
        <div className="section-heading">
          <div>
            <p className="eyebrow light">The agenda</p>
            <h2>People first.<br /><em>Progress always.</em></h2>
          </div>
          <p>
            A practical, inclusive agenda focused on improving everyday life and creating lasting opportunity.
          </p>
        </div>
        <div className="priority-grid">
          {priorities.map((priority) => (
            <article className="priority-card" key={priority.number}>
              <span>{priority.number}</span>
              <div>
                <h3>{priority.title}</h3>
                <p>{priority.text}</p>
              </div>
              <ArrowIcon />
            </article>
          ))}
        </div>
      </section>

      <section className="achievements" id="achievements">
        <div className="achievements-intro">
          <p className="eyebrow">Since taking office</p>
          <h2>Progress you can<br /><em>see and feel.</em></h2>
          <p className="achievements-summary">
            Building a healthier, more connected and more prosperous Meru through practical delivery across every sector.
          </p>
        </div>

        <article className="achievement-feature">
          <div className="achievement-feature-image">
            <img src="/uruku-maternity-exterior.jpg" alt="The newly constructed maternity wing at Uruku Health Center" />
            <span>Health</span>
          </div>
          <div className="achievement-feature-copy">
            <p className="achievement-number">Flagship milestone</p>
            <h3>A stronger future for maternal care</h3>
            <p>
              The newly constructed and equipped maternity wing at Uruku Health Center in Nkuene Ward expands access to
              dignified maternal and newborn care for families in Imenti South.
            </p>
            <a href="#updates">View the commissioning <ArrowIcon /></a>
          </div>
        </article>

        <div className="achievement-list">
          {achievements.map((achievement) => (
            <article className="achievement-row" key={achievement.number}>
              <span className="achievement-number">{achievement.number}</span>
              <p>{achievement.area}</p>
              <div>
                <h3>{achievement.title}</h3>
                <p>{achievement.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="updates" id="updates">
        <div className="updates-heading">
          <div>
            <p className="eyebrow">From the office</p>
            <h2>Latest updates</h2>
          </div>
          <a href="#contact">View all communications <ArrowIcon /></a>
        </div>
        <div className="updates-grid">
          {updates.map((update, index) => (
            <article
              className={index === 0 ? "update-card featured" : index === 2 ? "update-card community-gallery" : "update-card"}
              key={update.title}
            >
              {index === 0 && (
                <div className="update-image">
                  <img
                    key={healthGallery[currentPhoto].src}
                    src={healthGallery[currentPhoto].src}
                    alt={healthGallery[currentPhoto].alt}
                  />
                  <div className="gallery-controls">
                    <button
                      className="gallery-arrow previous"
                      type="button"
                      onClick={showPreviousPhoto}
                      aria-label="Show previous photo"
                    >
                      <ArrowIcon />
                    </button>
                    <div className="gallery-dots" aria-label={`Photo ${currentPhoto + 1} of ${healthGallery.length}`}>
                      {healthGallery.map((photo, photoIndex) => (
                        <button
                          className={photoIndex === currentPhoto ? "active" : ""}
                          type="button"
                          key={photo.src}
                          onClick={() => setCurrentPhoto(photoIndex)}
                          aria-label={`Show photo ${photoIndex + 1}`}
                          aria-current={photoIndex === currentPhoto ? "true" : undefined}
                        />
                      ))}
                    </div>
                    <button
                      className="gallery-arrow"
                      type="button"
                      onClick={showNextPhoto}
                      aria-label="Show next photo"
                    >
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="update-image">
                  <img
                    key={communityGallery[currentCommunityPhoto].src}
                    src={communityGallery[currentCommunityPhoto].src}
                    alt={communityGallery[currentCommunityPhoto].alt}
                  />
                  <div className="gallery-controls">
                    <button
                      className="gallery-arrow previous"
                      type="button"
                      onClick={showPreviousCommunityPhoto}
                      aria-label="Show previous community tour photo"
                    >
                      <ArrowIcon />
                    </button>
                    <div
                      className="gallery-dots"
                      aria-label={`Community tour photo ${currentCommunityPhoto + 1} of ${communityGallery.length}`}
                    >
                      {communityGallery.map((photo, photoIndex) => (
                        <button
                          className={photoIndex === currentCommunityPhoto ? "active" : ""}
                          type="button"
                          key={photo.src}
                          onClick={() => setCurrentCommunityPhoto(photoIndex)}
                          aria-label={`Show community tour photo ${photoIndex + 1}`}
                          aria-current={photoIndex === currentCommunityPhoto ? "true" : undefined}
                        />
                      ))}
                    </div>
                    <button
                      className="gallery-arrow"
                      type="button"
                      onClick={showNextCommunityPhoto}
                      aria-label="Show next community tour photo"
                    >
                      <ArrowIcon />
                    </button>
                  </div>
                </div>
              )}
              <div className="update-content">
                <p className="update-meta"><span>{update.category}</span>{update.date}</p>
                <h3>{update.title}</h3>
                {index === 2 && (
                  <p className="update-description">
                    A meet-and-greet tour focused on listening to residents’ grievances and championing the local
                    businesses that keep Meru’s communities moving.
                  </p>
                )}
                <a href="#contact" aria-label={`Read: ${update.title}`}>
                  Read statement <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow light">Stay connected</p>
          <h2>Let’s stay<br /><em>connected.</em></h2>
        </div>
        <div className="contact-details">
          <div>
            <span>Call us</span>
            <a href="tel:+254142444555">+254 142 444 555</a>
            <a href="tel:+254142555444">+254 142 555 444</a>
          </div>
          <div>
            <span>Email</span>
            <a href="https://mutumadigital.co.ke" target="_blank" rel="noreferrer">mutumadigital.co.ke</a>
          </div>
          <div>
            <span>Visit us</span>
            <address>
              5th Floor, Top Plaza, Kindaruma Rd, Nairobi<br />
              P.O. Box 23799-00100 Nairobi, Kenya
            </address>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <img className="brand-logo" src="/mutuma-logo.png" alt="" />
          <p><strong>Mutuma M’Ethingia</strong><small>Communications Limited</small></p>
        </div>
        <p>Official communications platform</p>
        <p>© 2026 Mutuma M’Ethingia Communications Limited</p>
      </footer>
    </main>
  )
}
