import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Empower Your Reputation, Elevate <br />
            Your Business with Reviews
          </h1>
          <div className={styles.description}>
            <p>
              Monitor reviews, engage with customers, <br />
              analyze performance metrics, and <br />
              unlock the power of AI assistance <br />
              to take your business to new heights.
            </p>
            <p>
              Start optimizing your reputation today <br />
              with Reviews Premier.
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <a href="https://www.youtube.com">
              <button className={styles.text}>Watch Demo</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
