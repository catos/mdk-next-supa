import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { RecipeType } from "."
// import ReactMarkdown from "react-markdown"
// import renderers from "../../lib/renderers"
import Link from "../../components/ui/link"

type RecipesProps = {
  recipe: RecipeType | null
}

export default function Recipes(props: RecipesProps) {
  const router = useRouter()

  const recipe = props.recipe

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  if (!recipe) {
    return null
  }

  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <div className="container mx-auto flex flex-col bg-white gap-4">
          <div className="relative">
            {/* TODO: only show for admins */}
            <Link href={`/admin/recipes/${recipe.id}`}            >
              {/* <PencilAltIcon className="w-5 h-5" /> */}
              <a className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full">
                Edit
              </a>
            </Link>
            {/* <RecipeMetrics recipe={recipe} /> */}
            {recipe.image && (
              <img
                className="object-cover w-full h-[33vh]"
                src={recipe.image}
                alt={recipe.name}
              />
            )}
            <div className="text-white absolute bottom-0 text-center w-full bg-black bg-opacity-50 py-4">
              <h1 className="text-white font-serif">{recipe.name}</h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-wrap justify-center gap-4 bg-white">
          <button
            aria-label="legg til som favoritt"
            className="button flex flex-row items-center"
          >
            {/* <BookmarkIcon className="w-5 h-5" /> */}
            <div className="pl-2 hidden lg:block">Lagre som favoritt</div>
          </button>

          <button
            aria-label="legg til meny"
            className="button flex flex-row items-center"
          >
            {/* <BookOpenIcon className="w-5 h-5" /> */}
            <div className="pl-2 hidden lg:block">Legg til meny</div>
          </button>

          <button
            aria-label="print"
            className="button flex flex-row items-center"
          >
            {/* <PrinterIcon className="w-5 h-5" /> */}
            <div className="pl-2 hidden lg:block">Print</div>
          </button>

          <button
            aria-label="last ned"
            className="button flex flex-row items-center"
          >
            {/* <SaveIcon className="w-5 h-5" /> */}
            <div className="pl-2 hidden lg:block">Lagre</div>
          </button>

          {/* {recipe.source ? (
            <a
              href={recipe.source}
              className="button flex flex-row items-center"
            >
              <div className="pl-2 hidden lg:block">Kilde</div>
            </a>
          ) : null} */}
        </div>
      </section>

      {/* {recipe.description ? (
        <section className="hidden lg:block container mx-auto text-center italic text-lg text-slate-500">
          <ReactMarkdown components={renderers}>{recipe.description}</ReactMarkdown>
        </section>
      ) : null} */}

      <section className="container mx-auto px-4 sm:px-0 bg-white flex flex-col sm:flex-row gap-4">

        <div className="sm:w-1/2 xl:w-5/12">
          <div className="p-2 text-lg uppercase bg-slate-100 text-slate-600">
            Ingredienser
          </div>
          {/* <ReactMarkdown components={renderers}>{recipe.ingredients}</ReactMarkdown> */}
        </div>

        <div className="sm:w-1/2 xl:w-7/12">
          <div className="p-2 text-lg uppercase bg-slate-100 text-slate-600">
            Fremgangsmåte
          </div>
          {/* <ReactMarkdown components={renderers}>{recipe.steps}</ReactMarkdown> */}
        </div>
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug
      ? Array.isArray(params.slug) ? params.slug.join("-") : params.slug
      : null

    // const recipe = slug ? await getRecipe(slug) : null
    const recipe = null

    return {
      props: {
        recipe,
        revalidate: 60 * 60
      }
    }
  } catch (error) {
    console.log(error);
    throw error
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}