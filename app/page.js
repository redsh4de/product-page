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
            <a href="#research"><div>Research</div></a>
            <a href="#about"><div>About</div></a>
          </div>
        </div>
      </nav>
      <div className={styles.container}>
        <section className={styles.cardOne}>
          <img src="/images/landing.png"/>
          <div className={styles.introtext}>
            <span className={styles.title}>ZenBand Bracelet</span><br/>
            <span className={styles.subtitle}>For daylight vigilance and nightime calm.</span>
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
          <p>ZenBand is designed to solve two polar ends of the same coin - it can both keep you awake, and promote faster sleep - all through the power of vibrotactile stimulation. The motors are gentle yet effective, providing a subtle nudge to help you stay awake and engaged.</p>
        </section>
        <section className={styles.cardSix} id="research">
          <div style={{flex: "1"}}>
            <h2>Research</h2>
            <p>Our team conducted a two-day investigation into the potential application of vibrational stimuli, exploring its efficacy in fostering heightened alertness as well as employing milder vibrations to soothe the mind and facilitate improved sleep quality. The empirical evidence supporting both the viability of our product and the problems that it solves is delineated in the references provided on the side.</p>
          </div>
          <div style={{flex: "1"}}>
            <ul>
              <li><a href="https://www.hindawi.com/journals/sd/2020/7846914/" target="_blank">An fMRI Study of the Effects of Vibroacoustic Stimulation on Functional Connectivity in Patients with Insomnia</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Rumble_strip" target="_blank">Effects of vibrations caused by rumble strips</a></li>
              <li><a href="https://www.frontiersin.org/articles/10.3389/fnhum.2020.576082/full" target="_blank">Evoked and Induced MEG Responses to High-Frequency Vibrotactile Stimuli on the Index Finger of Dominant and Non-dominant Hand</a></li>
              <li><a href="https://www.christiecampus.com/stay-informed/blog/september-2021/sleep-deprivation-and-college-students-statistics#:~:text=While%20students%20might%20view%20being,everyone%20is%20different%2C%20on" target="_blank">Sleep Deprivation and College Students—Statistics, Symptoms, and Solutions</a></li>
              <li><a href="https://www.thinkmind.org/download.php?articleid=smart_2014_1_30_40083" target="_blank">Towards Tactile Alarms Systems for Increased Awareness in Smart Environments</a></li>
              <li><a href="https://www.sciencedirect.com/science/article/pii/0022399996001274" target="_blank">Determinants of sleepiness in automobile drivers</a></li>
            </ul>
          </div>
        </section>
        <section className={styles.cardFive} id="about">
          <h2>About</h2>
          <p>We are three university students united by a passion for wearable technology aimed at enhancing everyday life.</p>
          <p>Our project, ZenBand, is a conceptual research-based project created at The Raccoons Hackathon 2023, designed to foster alertness during demanding tasks and aid a smooth transition to rest.</p>
          <p>Through ZenBand, we aspire to harmonize productivity and relaxation, showcasing the potential of wearable technology in navigating todays fast-paced world.</p>
          <p>During the hackathon, we have accomplished the following:</p>
          <ul>
            <li>Came up with the concept of a device that would help us stay alert during studies</li>
            <li>While researching the viability, we found out the inverse can be possible using the same technology</li>
            <li>Researched existing competitors and found areas we can improve upon to have a market breakthrough</li>
            <li>Created our product landing page and pitch deck</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

/* balts, melns, zaļs */
