import React from "react"
import Button from "../components/ui/button"
import Input from "../components/ui/input"
import Link from "../components/ui/link"
import useForm from "../lib/use-form"

type LoginFormType = {
  username: string
  password: string
}

const initialForm = {
  username: "",
  password: "",
}

export default function Login() {
  const loading = false
    // const { login, isAuthenticated } = useAuth()
  // const { notify } = useNotify()

  const { values, handleSubmit, handleChange } = useForm<LoginFormType>(
    initialForm,
    (values: LoginFormType) => {
      // TODO: login
      // login(values.username, values.password)
      //   .then(() => {
      //     // history.push("/")
      //     console.log("redirect to prev-url || /");

      //   })
      //   .catch((error: any) => {
      //     const wrongUsernameOrPassword = [
      //       "auth/user-not-found",
      //       "auth/wrong-password",
      //     ]
      //     if (wrongUsernameOrPassword.includes(error.code)) {
      //       // notify("Wrong username or password")
      //       console.log("Wrong username or password");

      //     } else {
      //       // notify(`Error: ${error.message}`)
      //       console.log(`Error: ${error.message}`);

      //     }
      //   })
    }
  )

  if (!values) {
    return null
  }

  return (
    <div className="container mx-auto max-w-md mb-64">
      <div className="flex flex-col items-center">
        {/* <Logo className="mt-8 mb-4 w-16 h-16" /> */}
        <h1 className="h1">Logg inn</h1>
        <p className="text-gray-500 pt-2 pb-4 text-center">
          Eller{" "}
          <Link className="font-semibold" href="/registrer">
            registrer ny bruker
          </Link>{" "}
          for å kunne ta i bruke alle funksjoner
        </p>
      </div>
      <form method="post" className="flex flex-col gap-8 p-10 bg-white rounded-lg sm:shadow-md">
        <Input name="username" label="E-post" type="email" />
        <Input name="password" label="Passord" type="password" />

        <Button color="primary" type="submit">
          {loading ? "Logger inn..." : "Logg inn"}
        </Button>
      </form>
    </div>
  )
}