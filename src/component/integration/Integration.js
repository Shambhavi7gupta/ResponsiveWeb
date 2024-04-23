import React from "react";
import styles from "./Integration.module.css";
const Integration = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.header}>
          Expand Your Horizons: Explore Seamless Integrations
        </h2>

        <div className={styles.content}>
          <div className={styles.subcontent}>
            <div className={styles.box}>
              <img
                className={styles.image2}
                src="Images/integrations/OpenAI.png"
                alt="EmailImage"
              />
              <p>Open AI</p>
            </div>
          </div>
          <div className={styles.subcontent}>
            <div className={styles.box}>
              <img
                className={styles.image1}
                src="Images/integrations/GoogleB.png"
                alt="EmailImage"
              />
              <div className={styles.description}>
                <p>Google Business</p>
              </div>
            </div>
          </div>
          <div className={styles.subcontent}>
            <div className={styles.box}>
              <img
                className={styles.image}
                src="Images/integrations/ML.png"
                alt="EmailImage"
              />
              <div className={styles.description}>
                <p>Machine Learning</p>
              </div>
            </div>
          </div>
          <div className={styles.subcontent}>
            <div className={styles.box}>
              <img
                className={styles.image}
                src="Images/integrations/Zapier.png"
                alt="EmailImage"
              />
              <div>
                <p>Zapier</p>
              </div>
            </div>
          </div>
          <div className={styles.subcontent}>
            <div className={styles.box}>
              <img
                className={styles.image}
                src="Images/integrations/Email.png"
                alt="EmailImage"
              />
              <div className={styles.description1}>
                <p>Mail Champ</p>
              </div>
            </div>
          </div>
          <div className={styles.subcontent}>
            <div className={styles.box}>
              <img
                className={styles.image}
                src="Images/integrations/SEO.png"
                alt="EmailImage"
              />
              <div>
                <p>SEO</p>
              </div>
            </div>
          </div>
          <div className={styles.subcontent}>
            <div className={styles.box}>
              <img
                className={styles.image}
                src="Images/integrations/Slack.png"
                alt="EmailImage"
              />
              <div>
                <p>Slack</p>
              </div>
            </div>
          </div>
          <div className={styles.subcontent}>
            <div className={styles.box}>
              <img
                className={styles.image}
                src="Images/integrations/Monkey.png"
                alt="EmailImage"
              />
              <div className={styles.description}>
                <p>SurveyMonkey</p>
              </div>
            </div>
          </div>
          <div className={styles.subcontent}>
            <div className={styles.box}>
              <img
                className={styles.image}
                src="Images/integrations/GA.png"
                alt="EmailImage"
              />
              <div className={styles.description}>
                <p>Google Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Integration;
