'use client';

import { useState, useEffect } from 'react';
import { useUser, useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Por favor, elija un correo.',
    })
    .email(),
    username: z.string(),
});

export function EmailForm() {
  const { user } = useUser();
  const { toast } = useToast();
  const { openUserProfile }: any = useClerk();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: 'user',
    },
  });

  useEffect(() => {
    if (user?.firstName) {
      form.setValue('username', user.firstName);
    }
  }, [user, form]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const response = await fetch('../../../api/sendNewsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast({
          title: 'Correo enviado con éxito',
          description: (
            <p>
              Correo enviado a{' '}
              <Link
                href={`mailto:${data.email}`}
                className="bold text-blue-500"
              >
                {data.email}
              </Link>
              . Revise su bandeja de entrada.
            </p>
          ),
        });
      } else {
        toast({
          title: 'Algo ha salido mal',
          description:
            'Ha habido un error al enviar el correo. Inténtelo de nuevo.',
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      toast({
        title: 'Algo ha salido mal',
        description:
          'Ha habido un error al enviar el correo. Inténtelo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        <SelectValue placeholder="Elija un correo electrónico" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {user?.emailAddresses.map((email: any) => (
                        <SelectItem key={email.id} value={email.emailAddress}>
                          {email.emailAddress}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-200
                                        disabled:pointer-events-none
                                        disabled:border-none"
                  >
                    {loading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {loading ? 'Enviando...' : 'Suscribirse'}
                  </Button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-htmlForm-footer dark:text-gray-300">
                <FormDescription>
                  Puede administrar sus correos electrónicos en{' '}
                  <Link
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                    href="#"
                    onClick={openUserProfile}
                  >
                    los ajustes de usuario
                  </Link>
                  .
                </FormDescription>
                Nos preocupa tu privacidad.{' '}
                <Link
                  href="/privacidad-generico"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Lee nuestra politica de privacidad
                </Link>
                .
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
