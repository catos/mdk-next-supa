import React from 'react'
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://wtkqhfamhxkccqcupjtn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0a3FoZmFtaHhrY2NxY3VwanRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxMjg1NDgsImV4cCI6MTk2MDcwNDU0OH0.8fuVHKzMVUT4PnxxWBuvIW-IaYgQBcjbASvWyY4MklQ"
);

const initialState = {
  name: "",
  time: 15,
}

export default function Home() {
  const [state, setState] = React.useState(initialState)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | { name?: string; value: any }>) => {
    const { name, value } = event.target
    if (name && state) {
      setState({
        ...state,
        [name]: value,
      })
    }

  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    const { data, error } = await supabase
      .from("recipes")
      .insert([state]);

    error ? console.log(error) : console.log(data);
  };

  return (
    <div className="min-h-screen min-w-screen bg-slate-300 flex flex-col gap-4 justify-center items-center">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow rounded flex flex-col justify-center items-center">
        <input
          type="text"
          className="m-2 outline-none py-2 px-4 border-2 border-black-200 rounded focus:border-blue-400 text-black-300 text-xl"
          placeholder="Name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />

        <input
          type="text"
          className="m-2 outline-none py-2 px-4 border-2 border-black-200 rounded focus:border-blue-400 text-black-300 text-xl"
          placeholder="Time"
          name="time"
          value={state.time}
          onChange={handleChange}
        />

        <button className="mt-2 py-2 px-4 bg-slate-500 text-white font-medium text-xl grid place-items-center rounded-full">
          Submit
        </button>
      </form>

      <Recipes />
    </div>
  )
}


type RecipeType = {
  id: number
  created_at: string
  type: number
  time: number
  name: string
}

function Recipes() {
  const [recipes, setRecipes] = React.useState<RecipeType[]>([])

  React.useEffect(() => {
    async function getData() {
      const { data, error } = await supabase.from("recipes").select()
      console.log("getData");

      if (data) {
        setRecipes(data)
      }
    }
    getData()
  }, [])


  return (
    <ul>
      {recipes.map(recipe =>
        <li key={recipe.id}>{recipe.id} - {recipe.name} - {recipe.time}</li>
      )}
    </ul>
  )

}
