// import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

const withPermission = (WrappedComponent, allowedRoles) => {
  return (props) => {
    // const { data: session, status } = useSession()

    // if (status === "loading") {
    //   return <div>Carregando...</div>
    // }

    // if (!session) {
    //   router.push("/auth/signin")  // Redirecionar para página de login se não estiver autenticado
    //   return null
    // }

    // Verifica se o usuário tem uma role permitida
    if (!allowedRoles.includes('Cozinheiro')) {
        redirect("/dashboard");  // Redireciona para a página inicial ou página de erro
    }

    return <WrappedComponent {...props} />
  }
}

export default withPermission
