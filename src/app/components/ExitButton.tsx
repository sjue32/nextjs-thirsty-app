import styles from '../page.module.css';

type ExitButtonProp = {
  setMobileRecipeViewActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ExitButton({ setMobileRecipeViewActive }: ExitButtonProp) {

  function handleClick() {
    setMobileRecipeViewActive(false);
  }

  return(
    <button onClick={handleClick}>
      {'<'}   Thirsty
    </button>
  );
};
