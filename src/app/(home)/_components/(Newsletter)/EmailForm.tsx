'use client';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export function EmailForm() {
  const { user } = useUser();
  const { toast } = useToast();

  const [data, setData] = useState<any>({
    email: undefined,
    userFirstName: undefined,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
      userFirstName: user?.firstName,
    }));
  };

  const sendEmail = async () => {
    const { email } = data;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      toast({
        title: 'Por favor, introduce tu correo electrónico',
        variant: 'destructive',
      });
      return;
    }
    if (!emailRegex.test(email)) {
      toast({
        title: 'Por favor, introduce un correo electrónico válido',
        variant: 'destructive',
      });
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('../../../api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      toastPopup(response.ok);
    } catch (error: any) {
      toastPopup(false);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const toastPopup = (ok: boolean) => {
    toast({
      title: ok ? 'Correo enviado con éxito' : 'Algo ha salido mal',
      description: ok ? 'Revise su bandeja de entrada' : 'Inténtelo de nuevo',
      variant: ok ? null : 'destructive',
    });
  };
  return (
    <form action="#">
      <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
        <div className="relative w-full">
          <label
            htmlFor="email"
            className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Dirección de correo
          </label>
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Introduce tu correo electrónico"
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button
            onClick={sendEmail}
            disabled={loading}
            className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-200
                                        disabled:pointer-events-none
                                        disabled:border-none"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? 'Enviando...' : 'Suscribirse'}
          </Button>
        </div>
      </div>
      <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-htmlForm-footer dark:text-gray-300">
        Nos preocupa tu privacidad.{' '}
        <Link
          href="/privacidad-generico"
          className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
        >
          Lee nuestra politica de privacidad
        </Link>
        .
      </div>
    </form>
  );
}
