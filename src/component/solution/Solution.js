import React from "react";
import styles from "./Solution.module.css";
const Solution = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>
          Your Complete Business Solution: Everything You Need to Succeed
        </h1>

        <div>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2 className={styles.heading}>
                Turn Reviews into Conversations with ChatGPT
              </h2>
              <p className={styles.description}>
                Leverage the power of AI to understand your customers and going
                beyond static responses, ChatGPT analyzes customer reviews and
                generates personalized replies that foster two-way
                communication. Imagine having thoughtful conversations sparked
                by reviews, leading to a deeper understanding of your customers
                and their needs.
              </p>
            </div>
            <img
              className={styles.chatgpt}
              src="Images/solutions/Chatgpt.png"
              alt="ChatGptImage"
            />
          </div>

          <div className={styles.box}>
            <img
              className={styles.sentimental}
              src="Images/solutions/Sentimental.png"
              alt="SentimentalImage"
            />
            <div className={styles.content}>
              <h2 className={styles.heading}>
                From Opinions to Insights Review Categorization Made Simple
              </h2>
              <p className={styles.description}>
                Categorizing customer feedback adds playfulness to review
                management, guiding through the review jungle. It brings order
                to feedback chaos, revealing insights like a review Sherlock
                solving customer feedback mysteries.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2 className={styles.heading}>
                The World is Listening: Speak Their Language with Multi-lingual
                Support
              </h2>
              <p className={styles.description}>
                Manage all your customer interactions in one place, regardless
                of language. Our multi-lingual support streamlines your
                operations and provides a unified experience for your customers.
              </p>
            </div>

            <img
              className={styles.chatgpt}
              src="Images/solutions/language.png"
              alt="LanguageImage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Solution;
