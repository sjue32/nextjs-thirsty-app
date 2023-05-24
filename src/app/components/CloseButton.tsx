import styles from '../page.module.css';

export default function CloseButton () {

  return(
    <div className={styles.wrapper}>
      <div className={styles.arrow}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};