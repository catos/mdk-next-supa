import Button from "../components/ui/button";
import Input from "../components/ui/input";
import Link from "../components/ui/link";

export default function Register() {
  const loading = false

  return (
    <div className="container mx-auto max-w-md mb-64">
      <div className="flex flex-col items-center">
        {/* <Logo className="mt-8 mb-4 w-16 h-16" /> */}
        <h1 className="h1">Registrer deg</h1>
        <p className="text-gray-500 pt-2 pb-4 text-center">
          Har du allerede en bruker ?{" "}
          <Link className="font-semibold" href="/logg-inn">
            logg inn
          </Link>{" "}
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