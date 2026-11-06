import { useState } from "react"

const landscape =
  "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1800&q=88"

const healthGallery = [
  {
    src: "/health-centre-commissioning.jpg",
    alt: "H.E. Rev. Mutuma M’Ethingia with Health Cabinet Secretary Hon. Aden Duale during the commissioning of a newly constructed maternity wing at Uruku Health Center",
  },
  {
    src: "/HealthFacility.jpeg",
    alt: "The newly completed Uruku Health Center and health facility in Nkuene Ward",
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
    src: "/HonouringourHeros.jpeg",
    alt: "The Governor meeting with residents during a community visit",
  },
  {
    src: "/gvnwithlocals.jpeg",
    alt: "The Governor meeting with residents at a local gathering",
  },
  {
    src: "/GvnWithLocal.jpeg",
    alt: "The Governor speaking with residents during a community visit",
  },
  {
    src: "/MeruCulturalDay.jpeg",
    alt: "The Governor celebrating Meru culture with community members",
  },
]

const developmentGallery = [
  {
    src: "/Dev1.jpeg",
    alt: "The Governor speaking with residents during a development site visit",
  },
  {
    src: "/Dev2.jpeg",
    alt: "The Governor meeting with staff inside a health facility",
  },
  {
    src: "/Dev3.jpeg",
    alt: "Community members gathered at a local development project",
  },
  {
    src: "/Dev4.jpeg",
    alt: "Residents receiving support during a community visit",
  },
  {
    src: "/Dev5.jpeg",
    alt: "A multi-storey development project",
  },
  {
    src: "/Dev6.jpeg",
    alt: "A completed community facility",
  },
  {
    src: "/Dev7.jpeg",
    alt: "County officials inspecting a development project",
  },
]

const agricultureGallery = [
  {
    src: "/KopiaPotatos.jpeg",
    alt: "Potato field under the Kopia model village initiative",
    message: "A strong agricultural partnership is supporting farmers through improved potato growing methods, advisory support and better food security outcomes.",
  },
  {
    src: "/KopiaPotatos1.jpeg",
    alt: "Farmers gathering around a potato demonstration field",
    message: "The county is helping farmers adopt productive, climate-smart approaches while building confidence in modern crop production.",
  },
  {
    src: "/KopiaPotatos2.jpeg",
    alt: "Farmers reviewing a potato crop in the field",
    message: "From training and demonstration to practical farm support, the focus remains on growing yields and resilient livelihoods.",
  },
  {
    src: "/seedDistribution.jpeg",
    alt: "Seed distribution event supporting local farmers",
    message: "Farmers are receiving the inputs they need to strengthen planting, increase productivity and improve household resilience.",
  },
  {
    src: "/SeedDistribution3.png",
    alt: "Agricultural support and seed distribution to community members",
    message: "Seeding the future means putting practical support and tools directly into the hands of the people doing the work on the ground.",
  },
]

const waterEnvironmentGallery = [
  {
    src: "/Environment.jpeg",
    alt: "Environmental rehabilitation and landscape restoration effort in the county",
    message: "Restoring landscapes and improving community resilience is part of a wider effort to protect the environment and secure long-term water sustainability.",
  },
  {
    src: "/WaterTank.jpeg",
    alt: "A newly installed elevated water tank improving water storage and access for the community",
    message: "Reliable water storage is critical to improving household access, community resilience and long-term service continuity across Meru County.H.E the Governor commisioned the county government borehole at Kiburine in Nyaki East Ward. Expanding access to clean and reliable water remains a top priority for governor Mutuma's administration. ",
  },
  {
    src: "/TreeSeedlings..png",
    alt: "Tree seedlings packed for environmental restoration and reforestation",
    message: "The county is investing in tree planting and landscape restoration to strengthen eco-systems, water retention and long-term climate resilience.",
  },
  {
    src: "/NyambaneWaterP.png",
    alt: "Officials and community members participating in a water and environmental initiative",
    message: "By bringing communities together around water and environment initiatives, the county is making climate-smart protection and access a shared priority.Meru county is set to benefit largely from the Kes. 26 Billion World Bank-Funded Nyambane Watershed Project  ",
  },
]

const vocationalTrainingGallery = [
  {
    src: "/VocationalTraining1.jpeg",
    alt: "Governor Mutuma M’Ethingia unveiling the official plaque at Kirindine Vocational Training Centre",
    message: "The Governor commissioned a workshop and ablution block at Kirindine Vocational Training Centre, creating a stronger foundation for technical learning and community development.",
  },
  {
    src: "/VocationalStudents.jpeg",
    alt: "Young trainees cheering and celebrating at the vocational training centre launch",
    message: "The launch created excitement among the youth, who are eager to acquire practical skills that open doors to employment and enterprise.",
  },
  {
    src: "/VocationalStudents1.jpeg",
    alt: "Youth trainees gathered in a celebratory moment at the training centre",
    message: "Skills training is helping young people build confidence, explore livelihoods and prepare for a future rooted in productivity and self-reliance.",
  },
  {
    src: "/BusinessSupportEquipments.jpeg",
    alt: "Beauty and therapy equipment distributed to support vocational training at the centre",
    message: "The county distributed beauty and therapy equipment to help kickstart training and equip learners with hands-on tools needed for real jobs.",
  },
  {
    src: "/BusinessSupportEquipments1.jpeg",
    alt: "Support equipment displayed during the Kirindine vocational training launch event",
    message: "With practical support and modern equipment, the county is turning skills training into a direct pathway to better livelihoods for Meru’s young people.",
  },
]

const countyRoadsGallery = [
  {
    src: "/Bridge.jpeg",
    alt: "Bridge construction improving movement and access for rural communities in Meru County",
    message: "The county is increasing connectivity across rural areas by building bridges that make movement easier, faster and safer for the people of Meru. The construction of the Bonoko bridge in Mwangathia ward, Imenti Central bringing an end to the dangerous wooden bridge.",
  },
  {
    src: "/OpeningUpRemote.jpeg",
    alt: "Road works opening up remote rural areas in the county",
    message: "From remote access roads to critical crossings, the county is opening up underserved areas and connecting households, farms and markets.Kiegoi is opening up, the construction of the Silver Inn - Kimurani - Kuuru road in Antubochiu ward.",
  },
  {
    src: "/roads.jpeg",
    alt: "Road construction and drainage works improving access in a rural area",
    message: "Better road access is helping communities reach services, schools, businesses and markets while improving everyday mobility across the county.",
  },
  {
    src: "/InspectionofRoads2.jpeg",
    alt: "Governor Mutuma M’Ethingia inspecting ongoing road construction works in Muthara, Tigania East",
    message: "The Governor inspected ongoing road works in Muthara, Tigania East, reinforcing the county’s commitment to opening up remote rural areas and improving access for the people of Meru.",
  },
]

const tradeEnterpriseGallery = [
  {
    src: "/MOU.jpeg",
    alt: "Governor Mutuma M’Ethingia signing strategic partnership documents with a foreign investor",
    message: "Under H.E. the Governor's leadership, Meru County is forging strategic partnerships and signing MOUs that open new overseas and regional markets for local farm products.",
  },
  {
    src: "/StrategicPartnerships.jpeg",
    alt: "Officials and partners in a strategic partnership meeting focused on agricultural value chains and export opportunities",
    message: "The county is building direct partnerships that connect farmers to better markets, stronger supply chains and opportunities for shared growth.",
  },
  {
    src: "/Trade.jpeg",
    alt: "Trade and enterprise engagement highlighting Meru County products and opportunities",
    message: "This work is creating pathways for farmers to move beyond raw produce and into higher-value trade opportunities that support local enterprise and employment.",
  },
  {
    src: "/Trade1.jpeg",
    alt: "Meru County business and investment engagement focused on value addition and market access",
    message: "The county is intentionally connecting farmers with investment opportunities in processing and manufacturing so more value stays in Meru.",
  },
  {
    src: "/Trade2.jpeg",
    alt: "County trade and enterprise initiative showing product diversification and increased market readiness",
    message: "By encouraging value addition before markets, the county is helping farmers earn more from their crops and build resilient local enterprise.",
  },
  {
    src: "/ValueAddition.jpeg",
    alt: "Processed agricultural products displayed to highlight value addition and product development",
    message: "The push for value addition is shifting farming from raw commodity sales toward processing, branding and more rewarding market outcomes.",
  },
  {
    src: "/ValueAddition1.jpeg",
    alt: "Value-added Meru products and agricultural investment showcase",
    message: "From processing to manufacturing, Meru is creating a stronger local ecosystem where farmers can benefit from the full value of their work.",
  },
]

const publicServiceGallery = [
  {
    src: "/Gavana.jpeg",
    alt: "Governor Mutuma M’Ethingia addressing the public at a podium",
    message: "The Governor engages residents directly, sharing the county’s priorities and commitment to responsive public service. Meru county has been ",
  },
  {
    src: "/Gavana1.jpg",
    alt: "Governor Mutuma M’Ethingia chairing a meeting with county officials",
    message: "Regular coordination with county officials helps strengthen accountability and delivery across the county administration.",
  },
  {
    src: "/GavanaBeforeSenate.jpg",
    alt: "Governor Mutuma M’Ethingia speaking during a Senate session",
    message: "The Governor represents Meru’s interests and works with national leaders to advance services for county residents. The governor appearing before the Senate Budget and Appropriations Committee to defend the interests of the people of Meru following the National Treasury's proposal to halt the transfer of funds to the County Government over the Leopard Rock contingent liability.",
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
    text: "The county government is increasingly opening up rural areas by investing in roads, drainage and bridge works that improve access, ease movement and connect communities across Meru.",
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
    title: "Opening new markets and adding value",
    text: "The county government is pursuing strategic partnerships and investor engagement to open overseas markets for Meru products, attract processing and manufacturing investment close to farmers and turn raw produce into higher-value goods.",
  },
  {
    number: "05",
    area: "Public service",
    title: "Restoring responsive government",
    text: "Strengthening accountability, community engagement and a culture of service across the county administration.",
  },
  {
    number: "06",
    area: "Vocational training",
    title: "Vocational Training & Skill Development",
    text: "The county government of Meru is investing in practical skills training for young people so they can earn a living, build confidence and become self-reliant through accredited vocational learning.",
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
  const [currentDevelopmentPhoto, setCurrentDevelopmentPhoto] = useState(0)
  const [currentAgriculturePhoto, setCurrentAgriculturePhoto] = useState(0)
  const [currentWaterEnvironmentPhoto, setCurrentWaterEnvironmentPhoto] = useState(0)
  const [currentVocationalTrainingPhoto, setCurrentVocationalTrainingPhoto] = useState(0)
  const [currentCountyRoadsPhoto, setCurrentCountyRoadsPhoto] = useState(0)
  const [currentTradeEnterprisePhoto, setCurrentTradeEnterprisePhoto] = useState(0)
  const [currentPublicServicePhoto, setCurrentPublicServicePhoto] = useState(0)

  const closeMenu = () => setMenuOpen(false)
  const showPreviousPhoto = () =>
    setCurrentPhoto((current) => (current - 1 + healthGallery.length) % healthGallery.length)
  const showNextPhoto = () =>
    setCurrentPhoto((current) => (current + 1) % healthGallery.length)
  const showPreviousCommunityPhoto = () =>
    setCurrentCommunityPhoto((current) => (current - 1 + communityGallery.length) % communityGallery.length)
  const showNextCommunityPhoto = () =>
    setCurrentCommunityPhoto((current) => (current + 1) % communityGallery.length)
  const showPreviousDevelopmentPhoto = () =>
    setCurrentDevelopmentPhoto((current) => (current - 1 + developmentGallery.length) % developmentGallery.length)
  const showNextDevelopmentPhoto = () =>
    setCurrentDevelopmentPhoto((current) => (current + 1) % developmentGallery.length)
  const showPreviousAgriculturePhoto = () =>
    setCurrentAgriculturePhoto((current) => (current - 1 + agricultureGallery.length) % agricultureGallery.length)
  const showNextAgriculturePhoto = () =>
    setCurrentAgriculturePhoto((current) => (current + 1) % agricultureGallery.length)
  const showPreviousWaterEnvironmentPhoto = () =>
    setCurrentWaterEnvironmentPhoto((current) => (current - 1 + waterEnvironmentGallery.length) % waterEnvironmentGallery.length)
  const showNextWaterEnvironmentPhoto = () =>
    setCurrentWaterEnvironmentPhoto((current) => (current + 1) % waterEnvironmentGallery.length)
  const showPreviousVocationalTrainingPhoto = () =>
    setCurrentVocationalTrainingPhoto((current) => (current - 1 + vocationalTrainingGallery.length) % vocationalTrainingGallery.length)
  const showNextVocationalTrainingPhoto = () =>
    setCurrentVocationalTrainingPhoto((current) => (current + 1) % vocationalTrainingGallery.length)
  const showPreviousCountyRoadsPhoto = () =>
    setCurrentCountyRoadsPhoto((current) => (current - 1 + countyRoadsGallery.length) % countyRoadsGallery.length)
  const showNextCountyRoadsPhoto = () =>
    setCurrentCountyRoadsPhoto((current) => (current + 1) % countyRoadsGallery.length)
  const showPreviousTradeEnterprisePhoto = () =>
    setCurrentTradeEnterprisePhoto((current) => (current - 1 + tradeEnterpriseGallery.length) % tradeEnterpriseGallery.length)
  const showNextTradeEnterprisePhoto = () =>
    setCurrentTradeEnterprisePhoto((current) => (current + 1) % tradeEnterpriseGallery.length)
  const showPreviousPublicServicePhoto = () =>
    setCurrentPublicServicePhoto((current) => (current - 1 + publicServiceGallery.length) % publicServiceGallery.length)
  const showNextPublicServicePhoto = () =>
    setCurrentPublicServicePhoto((current) => (current + 1) % publicServiceGallery.length)

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
            Building 
            <br />
            <em>Meru Together.</em>
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
              dignified maternal and newborn care for families in South Imenti.
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

                {achievement.area === "Agriculture" && (
                  <div className="achievement-gallery">
                    <div className="achievement-gallery-image">
                      <img
                        key={agricultureGallery[currentAgriculturePhoto].src}
                        src={agricultureGallery[currentAgriculturePhoto].src}
                        alt={agricultureGallery[currentAgriculturePhoto].alt}
                      />
                      <div className="gallery-controls achievement-gallery-controls">
                        <button
                          className="gallery-arrow previous"
                          type="button"
                          onClick={showPreviousAgriculturePhoto}
                          aria-label="Show previous agriculture photo"
                        >
                          <ArrowIcon />
                        </button>
                        <div
                          className="gallery-dots"
                          aria-label={`Agriculture photo ${currentAgriculturePhoto + 1} of ${agricultureGallery.length}`}
                        >
                          {agricultureGallery.map((photo, photoIndex) => (
                            <button
                              className={photoIndex === currentAgriculturePhoto ? "active" : ""}
                              type="button"
                              key={photo.src}
                              onClick={() => setCurrentAgriculturePhoto(photoIndex)}
                              aria-label={`Show agriculture photo ${photoIndex + 1}`}
                              aria-current={photoIndex === currentAgriculturePhoto ? "true" : undefined}
                            />
                          ))}
                        </div>
                        <button
                          className="gallery-arrow"
                          type="button"
                          onClick={showNextAgriculturePhoto}
                          aria-label="Show next agriculture photo"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    </div>
                    <div className="achievement-gallery-message">
                      <p>{agricultureGallery[currentAgriculturePhoto].message}</p>
                    </div>
                  </div>
                )}

                {achievement.area === "County roads" && (
                  <div className="achievement-gallery">
                    <div className="achievement-gallery-image">
                      <img
                        key={countyRoadsGallery[currentCountyRoadsPhoto].src}
                        src={countyRoadsGallery[currentCountyRoadsPhoto].src}
                        alt={countyRoadsGallery[currentCountyRoadsPhoto].alt}
                      />
                      <div className="gallery-controls achievement-gallery-controls">
                        <button
                          className="gallery-arrow previous"
                          type="button"
                          onClick={showPreviousCountyRoadsPhoto}
                          aria-label="Show previous county roads photo"
                        >
                          <ArrowIcon />
                        </button>
                        <div
                          className="gallery-dots"
                          aria-label={`County roads photo ${currentCountyRoadsPhoto + 1} of ${countyRoadsGallery.length}`}
                        >
                          {countyRoadsGallery.map((photo, photoIndex) => (
                            <button
                              className={photoIndex === currentCountyRoadsPhoto ? "active" : ""}
                              type="button"
                              key={photo.src}
                              onClick={() => setCurrentCountyRoadsPhoto(photoIndex)}
                              aria-label={`Show county roads photo ${photoIndex + 1}`}
                              aria-current={photoIndex === currentCountyRoadsPhoto ? "true" : undefined}
                            />
                          ))}
                        </div>
                        <button
                          className="gallery-arrow"
                          type="button"
                          onClick={showNextCountyRoadsPhoto}
                          aria-label="Show next county roads photo"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    </div>
                    <div className="achievement-gallery-message">
                      <p>{countyRoadsGallery[currentCountyRoadsPhoto].message}</p>
                    </div>
                  </div>
                )}

                {achievement.area === "Water & environment" && (
                  <div className="achievement-gallery">
                    <div className="achievement-gallery-image">
                      <img
                        key={waterEnvironmentGallery[currentWaterEnvironmentPhoto].src}
                        src={waterEnvironmentGallery[currentWaterEnvironmentPhoto].src}
                        alt={waterEnvironmentGallery[currentWaterEnvironmentPhoto].alt}
                      />
                      <div className="gallery-controls achievement-gallery-controls">
                        <button
                          className="gallery-arrow previous"
                          type="button"
                          onClick={showPreviousWaterEnvironmentPhoto}
                          aria-label="Show previous water and environment photo"
                        >
                          <ArrowIcon />
                        </button>
                        <div
                          className="gallery-dots"
                          aria-label={`Water and environment photo ${currentWaterEnvironmentPhoto + 1} of ${waterEnvironmentGallery.length}`}
                        >
                          {waterEnvironmentGallery.map((photo, photoIndex) => (
                            <button
                              className={photoIndex === currentWaterEnvironmentPhoto ? "active" : ""}
                              type="button"
                              key={photo.src}
                              onClick={() => setCurrentWaterEnvironmentPhoto(photoIndex)}
                              aria-label={`Show water and environment photo ${photoIndex + 1}`}
                              aria-current={photoIndex === currentWaterEnvironmentPhoto ? "true" : undefined}
                            />
                          ))}
                        </div>
                        <button
                          className="gallery-arrow"
                          type="button"
                          onClick={showNextWaterEnvironmentPhoto}
                          aria-label="Show next water and environment photo"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    </div>
                    <div className="achievement-gallery-message">
                      <p>{waterEnvironmentGallery[currentWaterEnvironmentPhoto].message}</p>
                    </div>
                  </div>
                )}

                {achievement.area === "Vocational training" && (
                  <div className="achievement-gallery">
                    <div className="achievement-gallery-image">
                      <img
                        key={vocationalTrainingGallery[currentVocationalTrainingPhoto].src}
                        src={vocationalTrainingGallery[currentVocationalTrainingPhoto].src}
                        alt={vocationalTrainingGallery[currentVocationalTrainingPhoto].alt}
                      />
                      <div className="gallery-controls achievement-gallery-controls">
                        <button
                          className="gallery-arrow previous"
                          type="button"
                          onClick={showPreviousVocationalTrainingPhoto}
                          aria-label="Show previous vocational training photo"
                        >
                          <ArrowIcon />
                        </button>
                        <div
                          className="gallery-dots"
                          aria-label={`Vocational training photo ${currentVocationalTrainingPhoto + 1} of ${vocationalTrainingGallery.length}`}
                        >
                          {vocationalTrainingGallery.map((photo, photoIndex) => (
                            <button
                              className={photoIndex === currentVocationalTrainingPhoto ? "active" : ""}
                              type="button"
                              key={photo.src}
                              onClick={() => setCurrentVocationalTrainingPhoto(photoIndex)}
                              aria-label={`Show vocational training photo ${photoIndex + 1}`}
                              aria-current={photoIndex === currentVocationalTrainingPhoto ? "true" : undefined}
                            />
                          ))}
                        </div>
                        <button
                          className="gallery-arrow"
                          type="button"
                          onClick={showNextVocationalTrainingPhoto}
                          aria-label="Show next vocational training photo"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    </div>
                    <div className="achievement-gallery-message">
                      <p>{vocationalTrainingGallery[currentVocationalTrainingPhoto].message}</p>
                    </div>
                  </div>
                )}

                {achievement.area === "Trade & enterprise" && (
                  <div className="achievement-gallery">
                    <div className="achievement-gallery-image">
                      <img
                        key={tradeEnterpriseGallery[currentTradeEnterprisePhoto].src}
                        src={tradeEnterpriseGallery[currentTradeEnterprisePhoto].src}
                        alt={tradeEnterpriseGallery[currentTradeEnterprisePhoto].alt}
                      />
                      <div className="gallery-controls achievement-gallery-controls">
                        <button
                          className="gallery-arrow previous"
                          type="button"
                          onClick={showPreviousTradeEnterprisePhoto}
                          aria-label="Show previous trade and enterprise photo"
                        >
                          <ArrowIcon />
                        </button>
                        <div
                          className="gallery-dots"
                          aria-label={`Trade and enterprise photo ${currentTradeEnterprisePhoto + 1} of ${tradeEnterpriseGallery.length}`}
                        >
                          {tradeEnterpriseGallery.map((photo, photoIndex) => (
                            <button
                              className={photoIndex === currentTradeEnterprisePhoto ? "active" : ""}
                              type="button"
                              key={photo.src}
                              onClick={() => setCurrentTradeEnterprisePhoto(photoIndex)}
                              aria-label={`Show trade and enterprise photo ${photoIndex + 1}`}
                              aria-current={photoIndex === currentTradeEnterprisePhoto ? "true" : undefined}
                            />
                          ))}
                        </div>
                        <button
                          className="gallery-arrow"
                          type="button"
                          onClick={showNextTradeEnterprisePhoto}
                          aria-label="Show next trade and enterprise photo"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    </div>
                    <div className="achievement-gallery-message">
                      <p>{tradeEnterpriseGallery[currentTradeEnterprisePhoto].message}</p>
                    </div>
                  </div>
                )}

                {achievement.area === "Public service" && (
                  <div className="achievement-gallery">
                    <div className="achievement-gallery-image">
                      <img
                        key={publicServiceGallery[currentPublicServicePhoto].src}
                        src={publicServiceGallery[currentPublicServicePhoto].src}
                        alt={publicServiceGallery[currentPublicServicePhoto].alt}
                      />
                      <div className="gallery-controls achievement-gallery-controls">
                        <button
                          className="gallery-arrow previous"
                          type="button"
                          onClick={showPreviousPublicServicePhoto}
                          aria-label="Show previous public service photo"
                        >
                          <ArrowIcon />
                        </button>
                        <div
                          className="gallery-dots"
                          aria-label={`Public service photo ${currentPublicServicePhoto + 1} of ${publicServiceGallery.length}`}
                        >
                          {publicServiceGallery.map((photo, photoIndex) => (
                            <button
                              className={photoIndex === currentPublicServicePhoto ? "active" : ""}
                              type="button"
                              key={photo.src}
                              onClick={() => setCurrentPublicServicePhoto(photoIndex)}
                              aria-label={`Show public service photo ${photoIndex + 1}`}
                              aria-current={photoIndex === currentPublicServicePhoto ? "true" : undefined}
                            />
                          ))}
                        </div>
                        <button
                          className="gallery-arrow"
                          type="button"
                          onClick={showNextPublicServicePhoto}
                          aria-label="Show next public service photo"
                        >
                          <ArrowIcon />
                        </button>
                      </div>
                    </div>
                    <div className="achievement-gallery-message">
                      <p>{publicServiceGallery[currentPublicServicePhoto].message}</p>
                    </div>
                  </div>
                )}
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
              className={index === 0 ? "update-card featured" : index === 1 || index === 2 ? "update-card with-gallery" : "update-card"}
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
              {index === 1 && (
                <div className="update-image">
                  <img
                    key={developmentGallery[currentDevelopmentPhoto].src}
                    src={developmentGallery[currentDevelopmentPhoto].src}
                    alt={developmentGallery[currentDevelopmentPhoto].alt}
                  />
                  <div className="gallery-controls">
                    <button
                      className="gallery-arrow previous"
                      type="button"
                      onClick={showPreviousDevelopmentPhoto}
                      aria-label="Show previous development photo"
                    >
                      <ArrowIcon />
                    </button>
                    <div
                      className="gallery-dots"
                      aria-label={`Development photo ${currentDevelopmentPhoto + 1} of ${developmentGallery.length}`}
                    >
                      {developmentGallery.map((photo, photoIndex) => (
                        <button
                          className={photoIndex === currentDevelopmentPhoto ? "active" : ""}
                          type="button"
                          key={photo.src}
                          onClick={() => setCurrentDevelopmentPhoto(photoIndex)}
                          aria-label={`Show development photo ${photoIndex + 1}`}
                          aria-current={photoIndex === currentDevelopmentPhoto ? "true" : undefined}
                        />
                      ))}
                    </div>
                    <button
                      className="gallery-arrow"
                      type="button"
                      onClick={showNextDevelopmentPhoto}
                      aria-label="Show next development photo"
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
            <a href="mailto:info@mutumadigital.co.ke">info@mutumadigital.co.ke</a>
          </div>
          <div>
            <span>Visit us</span>
            
            <address>
              Top Plaza,5th Floor, Kindaruma Rd, off Ngong Rd <br />
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
