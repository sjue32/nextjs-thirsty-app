import { EmptyDrinkListCell } from "./EmptyDrinkListCell";
import styles from '../page.module.css';

export default function EmptyDrinkList() {

  const emptyCellArray = Array(10).fill(true);
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