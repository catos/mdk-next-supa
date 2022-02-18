import { GetStaticProps } from "next"
import Card from "../../components/recipe/card"
import { supabase } from "../../db/supabase-client"

export type RecipeType = {
  id: number
  created_at: string
  type: number
  time: number
  name: string
  image: string
}

type RecipesProps = {
  recipes: RecipeType[]
}

export default function Recipes({ recipes }: RecipesProps) {
  return (
    <div className="container mx-auto">
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {recipes.map(recipe =>
          <Card key={recipe.id} recipe={recipe} />
        )}
      </div>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase.from("recipes").select()
  console.log("getData", data);

  return {
    props: {
      recipes: data
    }
  }
}