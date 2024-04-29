import Link from "next/link"

function Success (){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4 md:px-6">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-md p-6 md:p-8">
                <div className="flex flex-col items-center space-y-6">
                    <CheckCircleIcon className="text-green-500 h-16 w-16" />
                    <div className="space-y-2 text-center">
                        <h1 className="text-2xl font-bold">Compra completada</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                          Gracias por la compra! Te hemos enviado un correo con la información de tu compra.
                        </p>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="text-lg font-medium">Acme Pro Plan</h2>
                                <p className="text-gray-500 dark:text-gray-400">1 year subscription</p>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold">$99</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">Billed annually</p>
                            </div>
                        </div>
                    </div>
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="/"
                    >
                        Ir a mis cursos
                    </Link>
                </div>
            </div>
        </div>
    )


}

export default Success;




function CheckCircleIcon(props : any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}