import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main} id="home">
      <nav className={styles.nav}>
        <div className={styles.navButtons}>
          <div>Shop</div>
          <a href="#home"><div>Home</div></a>
        </div>
        <div className={styles.siteTitle}>
          <img src="/images/logo-color.png" width="auto" height="40em"/>
        </div>
        <div>
          <div className={styles.navButtons}>
            <div>Technology</div>
            <div>Research</div>
            <a href="#about"><div>About</div></a>
          </div>
        </div>
      </nav>
      <div className={styles.container}>
        <section className={styles.cardOne}>
          <img src="/images/landing.png"/>
          <div className={styles.introtext}>
            <p className={styles.title}>ZenBand Bracelet</p>
            <p className={styles.subtitle}>For daylight vigilance and nightime calm.</p>
          </div>
        </section>
        <section className={styles.cardTwo}>
          <div style={{display: "flex", backgroundColor: "lightgreen", borderRadius: "25px", padding: "2em", width: "100%", justifyContent: "space-between"}}>
            <div className={styles.cardTwoItem}>
              <h1>Manage your stress levels</h1>
              <p>The bracelet uses gentle vibrations to calm you down and reduce cortisol levels.</p>
            </div>
            <div className={styles.cardTwoItem}>
              <h1>Enhances the quality of your sleep</h1>
              <p>The bracelet tracks your pulse and uses vibrations to slow down your heartbeat, making it easier to fall asleep.</p>
            </div>
            <div className={styles.cardTwoItem}>
              <h1>Maintains your alertness</h1>
              <p>The bracelet functions as both a tactile alarm clock and an alertness device, delivering shock-like vibrations to the arm whenever a out of place heartbeat slowdown is detected.</p>
            </div>
          </div>
        </section>
        <section className={styles.cardThree}>
          <div>
            <h1>Unparalleled versatility.</h1>
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "space-between", gap: "3em", minWidth: "20%"}}>
            <ul>
              <li>Intelligent sensors</li>
              <li>Advanced vibromotors</li>
              <li>Bluetooth 5.0</li>
              <li>Wireless charging</li>
              <li>Waterproof design</li>
              <li>Customizable effects</li>
            </ul>
          </div>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src="/images/nightstand.png" width={"80%"} height="auto" style={{borderRadius: "25px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)"}}/>
          </div>
        </section>
        <section className={styles.cardFour}>
          <p>Are you tired of feeling groggy and unproductive after a long drive or a boring lecture? Do you want to wake up feeling refreshed and energized? Look no further than ZenBand!</p>
          <br/>
          <p>ZenBand is designed to solve two polar ends of the same coin - it can both keep you awake, and promote faster sleep - all through the power of vibrotactile stimulation. The motors are gentle yet effective, providing a subtle nudge to help you stay awake and engaged.</p>
        </section>
        <section className={styles.cardFive} id="about">
          <h2>About</h2>
        </section>
      </div>
    </main>
  )
}

/* balts, melns, zaļs */
