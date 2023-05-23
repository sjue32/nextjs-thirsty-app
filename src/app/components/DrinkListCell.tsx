
import Image from "next/image";
import styles from '../page.module.css'

type DrinkListCellProp = {
  drinkThumbnail: string;
  drinkName: string;
}

function handleClick() {

  // parse raw data for drink
  // setRecipeData using parsed data


}

const DrinkListCellLeft = (props: { thumbnailSmall: string, drinkName: string}) => {

  const { thumbnailSmall, drinkName } = props;

  return ( 
    <div className={styles.drinkListCellLeft}>
      <Image 
        src={thumbnailSmall}
        className={styles.drinkThumbnail}
        alt=''
        width={65}
        height={60} 
      />
      <p>
        {drinkName}
      </p>
    </div>
    
  );
};

const DrinkListCell = ({ drinkName, drinkThumbnail }: DrinkListCellProp) => {
  const thumbnailSmall = drinkThumbnail + '/preview';

  return (
    <button className={styles.drinkCellOuter}>
      <DrinkListCellLeft thumbnailSmall={thumbnailSmall} drinkName={drinkName} />
      <h2>{'>'}</h2>
    </button>
  );
};

export { DrinkListCell };