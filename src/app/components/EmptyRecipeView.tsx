import styles from '../page.module.css';

export default function EmptyRecipeView() {

  return(
      <section className={`${styles.empty_recipe_view} ${styles.shadow4}`}>
      <div className={styles.recipe_view_top}>
        <p>Recipe Data</p>
      </div>
    </section>
  );
}