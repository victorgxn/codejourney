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
  FormLabel,
} from '@/components/ui/form';

import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

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
  subject: z.string({
    required_error: 'Por favor, indique el asunto de su mensaje.',
  }),
  message: z
    .string({
      required_error: 'Por favor, deje su mensaje.',
    })
    .min(10, {
      message: 'Su mensaje debe tener al menos 10 caracteres.',
    })
    .max(250, {
      message: 'Su mensaje no debe tener más de 250 caracteres.',
    }),
});

export function ContactForm() {
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
      form.setValue('username', user.username || 'user');
    }
  }, [user, form]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const response = await fetch('../../../api/sendContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        showToast(
          'Correo enviado con éxito',
          'Su correo ha sido enviado con éxito! Lo revisaremos cuanto antes.'
        );
      } else {
        showToast(
          'Algo ha salido mal',
          'Ha habido un error al enviar el correo. Inténtelo de nuevo.',
          'destructive'
        );
      }
    } catch (error: any) {
      showToast(
        'Algo ha salido mal',
        'Ha habido un error al enviar el correo. Inténtelo de nuevo.',
        'destructive'
      );
    } finally {
      setLoading(false);
    }
  };

  const showToast = (title: string, description: string, variant?: any) => {
    toast({
      title: title,
      description: description,
      variant: variant ?? undefined,
    });
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                Correo Electrónico
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Asunto
              </FormLabel>
              <FormControl>
                <Input
                  onChange={field.onChange}
                  defaultValue={field.value}
                  className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Indica el asunto de tu mensaje..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Déjanos aquí tu mensaje
                </FormLabel>
                <FormControl>
                  <Textarea
                    onChange={field.onChange}
                    defaultValue={field.value}
                    className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Puedes dejar aquí tu mensaje..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-gray-200
                                        disabled:pointer-events-none
                                        disabled:border-none"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? 'Enviando...' : 'Enviar'}
        </Button>
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
        </div>
        <FormMessage />
      </form>
    </Form>
  );
}
