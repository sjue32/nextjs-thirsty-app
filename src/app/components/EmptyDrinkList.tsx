import styles from '../page.module.css';
import EmptyDrinkListCell from "./EmptyDrinkListCell";

export default function EmptyDrinkList() {

  const emptyCellArray = Array(12).fill(true);
  return (
    <section className={styles.drinkList}>
      { emptyCellArray.map((elem, idx) => {
        return (
          <EmptyDrinkListCell key={`${idx}empty`} />
        )
      }) }
    </section>
  );
}