import { ExitButtonProp } from "../types/types";

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
