'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Accordion from './_components/accordion'

export default function Home() {
  return (
    <main className={styles.main} id="home">
      <nav className={styles.nav}>
        <div className={styles.navButtons}>
          
        </div>
        <div className={styles.siteTitle}>
          <img src="/images/logo-color.png" width="auto" height="40em"/>
        </div>
        <div>
          <div className={styles.navButtons}>
            <a href="#home"><div>Home</div></a>
            <a href="#"><div>Product</div></a>
            <a href="#audience"><div>Audience</div></a>
            <a href="#faq"><div>FAQ</div></a>
            <a href="#about"><div>About Us</div></a>
          </div>
        </div>
      </nav>
      <div className={styles.container}>
        <section className={styles.cardOne}>
          <img src="/images/landing.png"/>
          <div className={styles.introtext}>
            <span className={styles.title}>ZenBand Bracelet</span><br/>
            <span className={styles.subtitle}>For daylight vigilance and nightime calm.</span>
            <div className={styles.buyNowButton}>Buy Now</div>
          </div>
        </section>
        <section className={styles.cardFour}>
          <p>Are you tired of feeling groggy and unproductive after a long drive or a boring lecture? Do you want to wake up feeling refreshed and energized? Look no further than ZenBand!</p>
          <p>ZenBand is designed to solve two polar ends of the same coin - it can both keep you awake, and promote faster sleep - all through the power of vibrotactile stimulation. The motors are gentle yet effective, providing a subtle nudge to help you stay awake and engaged.</p>
        </section>
        <section className={styles.cardTwo}>
          <div style={{display: "flex", backgroundColor: "#a3b18a", borderRadius: "25px", padding: "2em", width: "100%", justifyContent: "space-between"}}>
            <div className={styles.cardTwoItem}>
              <h1>Manages your stress level</h1>
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
            <h1>Unparalleled versatility</h1>
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "space-between", gap: "3em", minWidth: "20%"}}>
            <ul>
              <li>Intelligent pulse sensors</li>
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
        <section className={styles.cardSeven} id="audience">
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <h1 style={{fontWeight: "400"}}>Who benefits from ZenBand?</h1>
          </div>
          <div className={styles.cSevenCardHolder}>
            <div className={styles.cSevenSubcard} style={{backgroundColor: "#588157"}}>
              <h3>Drivers</h3>
              <img src="/images/drowsydriver.jpeg" width="100%" style={{borderRadius: "25px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)"}}></img>
              <p>Aiding with temporary vigilance until rest is attainable at the closest opportunity.</p>
            </div>
            <div className={styles.cSevenSubcard} style={{backgroundColor: "#a3b18a"}}>
              <h3>Students</h3>
              <img src="/images/studentsleep.webp" width="100%" style={{borderRadius: "25px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)"}}></img>
              <p>Tackles alertness challenges, particularly during early morning lectures, as evidenced by prior statistics.</p>
            </div>
            <div className={styles.cSevenSubcard} style={{backgroundColor: "#588157"}}>
              <h3>Insomniacs</h3>
              <img src="/images/insomniac.jpeg" width="100%" style={{borderRadius: "25px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)"}}></img>
              <p style={{fontSize: "100% !important"}}>Aids in achieving restful sleep by inducing a lower heart rate rhythm, addressing mild insomnia issues.</p>
            </div>
            <div className={styles.cSevenSubcard} style={{backgroundColor: "#a3b18a"}}>
              <h3>Everyday users</h3>
              <img src="/images/crowd.jpeg" width="100%" style={{borderRadius: "25px", boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)"}}></img>
              <p>Those in search of an alarm solution that minimizes disturbance to others in close proximity may find ZenBand to be a viable option.</p>
            </div>
          </div>
        </section>
        <section className={styles.cardEight} id="faq">
          <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
            <h1 style={{fontWeight: "400"}}>FAQ</h1>
          </div>
          <div>
            <Accordion
              title="What is the primary purpose of ZenBand?"
              content="ZenBand is a wearable device designed to maintain alertness during demanding activities and assist in a smooth transition to sleep. It's ideal for various scenarios where traditional alarms are impractical, such as lectures or long drives."
            />
            <Accordion
              title="How does ZenBand work?"
              content="ZenBand is equipped with two powerful vibro motors that serve dual purposes. To keep you awake and alert, the bracelet sends strong blasts of tactile alarms through your arm, providing an effective yet non-disruptive alert mechanism during demanding activities. On the flip side, when it's time to wind down, ZenBand employs gentle variations of vibrotactile feedback to promote relaxation and ease the transition into a restful state. The contrasting alert and calming features are designed to seamlessly fit into your daily routine, aiding in both productivity and relaxation."
            />
            <Accordion
              title="What are the charging options for ZenBand?"
              content="ZenBand uses Qi Wireless Charging and comes with a charging dock. A full charge can last up to 24 hours."
            />
            <Accordion
              title="Is ZenBand sweat/water resistant?"
              content="Yes, since ZenBand can be charged only wirelessly, there are no ports or openings, providing the device with a high degree of sweat and water resistance."
            />
          </div>
        </section>
        <section className={styles.cardFive} id="about">
          <div style={{display: "flex", justifyContent: "left"}}>
            <h1 style={{fontWeight: "600"}}>About Us</h1>
          </div>
          <div style={{flex: "1"}}>
            <p>We are three university students united by a passion for wearable technology aimed at enhancing everyday life.</p>
            <p>ZenBand is a conceptual research-based project created at The Raccoons Hackathon 2023, designed to foster alertness during demanding tasks and aid a smooth transition to rest.</p>
            <p>Through ZenBand, we aspire to harmonize productivity and relaxation, showcasing the potential of wearable technology in navigating todays fast-paced world.</p>
            <p>During the hackathon, we have accomplished the following:</p>
            <ul>
              <li>Came up with the concept of a device that would help us stay alert during our early morning lectures</li>
              <li>While researching the viability, we found out that the same technology can be used to</li>
              <li>Researched existing competitors and found areas we can improve upon to have a market breakthrough</li>
              <li>Created our product landing page and pitch deck</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}

/* balts, melns, zaļs */
