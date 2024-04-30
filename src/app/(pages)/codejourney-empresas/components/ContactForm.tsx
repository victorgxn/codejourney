'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

import {
  Form,
  FormControl,
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
      required_error: 'Por favor, introduzca un correo electrónico válido.',
    })
    .email(),
  name_enterprise: z.string({
    required_error: 'Por favor, indique el nombre de empresa.',
  }),
  name_contact: z.string({
    required_error: 'Por favor, indique su nombre.',
  }),
  subject: z.string({
    required_error: 'Por favor, indique el asunto de su mensaje.',
  }),
  phone: z
    .string({
      required_error: 'Por favor, indique su número de teléfono.',
    })
    .min(9, {
      message: 'Por favor, introduzca un número de teléfono válido.',
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
  const { toast } = useToast();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

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
      <form
        className="flex flex-wrap -m-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="p-2 w-1/2">
          <div className="relative">
            <FormField
              control={form.control}
              name="name_enterprise"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="leading-7 text-sm text-gray-600">
                    Nombre de la Empresa
                  </FormLabel>
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      defaultValue={field.value}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Nombre de la Empresa"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <FormField
              control={form.control}
              name="name_contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="leading-7 text-sm text-gray-600">
                    Nombre del Contacto
                  </FormLabel>
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      defaultValue={field.value}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Nombre del Contacto"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="leading-7 text-sm text-gray-600">
                    Correo Electrónico
                  </FormLabel>
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      defaultValue={field.value}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Correo electrónico"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Teléfono
                  </FormLabel>
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      defaultValue={field.value}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Teléfono"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
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
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Indica el asunto de tu mensaje"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="leading-7 text-sm text-gray-600">
                    Mensaje
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      onChange={field.onChange}
                      defaultValue={field.value}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Mensaje"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <Button
            type="submit"
            disabled={loading}
            className="flex mx-auto text-white bg-primary-500 border-0 py-2 px-8 focus:outline-none hover:bg-primary-600 rounded text-lg disabled:bg-gray-200 disabled:pointer-events-none disabled:border-none"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? 'Enviando...' : 'Enviar'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
