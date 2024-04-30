import {UserButton} from "@clerk/nextjs";

const TopBar = () => {
    return (
        <div className="h-[80px] lg:pl-80 fixed inset-y-0 w-full z-50">
            <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
                <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r1a:"
                        data-state="closed" className="lg:hidden pr-4 hover:opacity-75 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-menu ">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </button>
                <div className="flex items-center gap-x-2 ml-auto"><a
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                    href="/dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="lucide lucide-log-out h-4 w-4 mr-2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" x2="9" y1="12" y2="12"></line>
                    </svg>
                    Volver a lista de cursos</a>
                    <UserButton/>
                </div>
            </div>
        </div>
    );
};

export default TopBar;