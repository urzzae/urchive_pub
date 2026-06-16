import styles from "./Contact.module.scss";
import { motion } from "framer-motion";

function Contact() {
  const contactLetters = ["T", "h", "a", "n", "k", " ", "Y", "o", "u", "!"];

  return (
    <div className={`${styles.contact} flex-center`}>
      <div className={`${styles.inner} flex-center-v`}>
        <motion.div className={styles.txt}>UR</motion.div>
        <div className={styles.title}>
          <div className={styles.animation}>
            {contactLetters.map((letter, index) => (
              <motion.strong
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration: 1,
                  delay: index * 0.05,
                }}
              >
                {letter}
              </motion.strong>
            ))}
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className={styles.mail}
        >
          ur_zzae@naver.com
        </motion.p>
      </div>
    </div>
  );
}

export default Contact;
