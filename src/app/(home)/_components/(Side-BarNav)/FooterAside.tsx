import { SquareArrowOutUpRight, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import Link from 'next/link';

export const FooterAside = () => {
  return (
    <footer className="p-4 w-full bg-white border-t flex items-center justify-between">
      <div className="text-xs text-muted-foreground py-2 px-4 lg:flex-1">
        Copyright © 2024 codejourney.es todos los derechos reservados.
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-more-vertical text-muted-foreground h-4 w-4"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <Link href="/contacto" className="cursor-pointer">
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Contacto</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/terminos-y-condiciones">
              <DropdownMenuItem>
                <SquareArrowOutUpRight className="mr-2 h-4 w-4" />
                <span>Terminos y servicios</span>
              </DropdownMenuItem>
            </Link>
            <Link href="/privacidad-generico">
              <DropdownMenuItem>
                <SquareArrowOutUpRight className="mr-2 h-4 w-4" />
                <span>Politica de privacidad</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </footer>
  );
};
