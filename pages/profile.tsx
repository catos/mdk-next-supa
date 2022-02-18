import { GetServerSideProps } from "next"
import { supabase } from "../db/supabase-client"

export default function Profile() {
  return (
    <div className="min-h-screen min-w-screen bg-slate-300 flex flex-col gap-4 justify-center items-center">
      Profile page is protected!
    </div>
  )
}

export const getServerSideProps: GetServerSideProps  = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req)

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: '/', permanent: false } }
  }

  // If there is a user, return it.
  return { props: { user } }
}