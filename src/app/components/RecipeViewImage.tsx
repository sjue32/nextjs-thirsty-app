import Image from "next/image"

type RecipeViewImageProp = {
  className: string;
  src: string;
}

export default function RecipeViewImage({ className, src }: RecipeViewImageProp) {

  return(
    <Image 
      className={className}
      src={src}
      alt=''
      width={150}
      height={150}
      priority={true}
    />
  );
}