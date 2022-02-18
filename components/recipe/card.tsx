import Image from "next/image"
import { RecipeType } from "../../pages/recipes"
import Link from "../ui/link"

export default function Card({ recipe }: { recipe: RecipeType }) {
  return (
    <Link href={`/oppskrifter/${recipe.id}`} className="relative rounded-lg overflow-hidden shadow-md min-h-[256px] hover:shadow-lg">
      {/* {recipe.image.indexOf("firebasestorage.googleapis.com") > 0
        ? <Image
          className="w-full h-64 object-cover"
          src={recipe.image}
          alt={recipe.name}
          width={256}
          height={256}
        />
        : <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />
      } */}
      {recipe.image && <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute right-2 bottom-2 left-2 z-10 text-white uppercase text-center text-base">
        {recipe.name}
      </div>
    </Link>
  )
}