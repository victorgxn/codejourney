'use client';

import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

import { Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  createCourse,
  publishCourse,
  createAsset,
  publishAsset,
} from '@/app/_microservices';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string({
    required_error: 'Introduzca un nombre.',
  }),
  description: z.string().trim().optional(),
  tags: z
    .array(z.string())
    .nonempty({ message: 'Elija al menos una categoria' }),
  totalChapters: z
    .number({
      required_error: 'Introduzca un numero.',
    })
    .min(1, {
      message: 'El numero de capitulos debe ser mayor o igual a 1.',
    })
    .max(10, {
      message: 'El numero de capitulos debe ser menor o igual a 10.',
    }),
  free: z.boolean({
    required_error: 'Elija una opcion.',
  }),
  author: z.string().trim().optional(),
  banner: z.string({
    required_error: 'Introduzca la URL de la imagen',
  }),
  chapters: z.array(
    z.object({
      name: z
        .string({
          required_error: 'Introduzca un nombre.',
        })
        .min(1, {
          message: 'Introduzca un nombre.',
        }),
      chapterNumber: z.number(),
      youtubeUrl: z
        .string({
          required_error: 'Introduzca la URL del video',
        })
        .min(1, {
          message: 'Introduzca la URL del video',
        }),
    })
  ),
});

interface FilterOption {
  id: number;
  label: string;
  value: string;
}

const categories: FilterOption[] = [
  {
    id: 3,
    label: 'React',
    value: 'react',
  },
  {
    id: 4,
    label: 'Tailwind',
    value: 'tailwind',
  },
  {
    id: 5,
    label: 'Astro',
    value: 'astro',
  },
  {
    id: 6,
    label: 'MySQL',
    value: 'mysql',
  },
  {
    id: 7,
    label: 'Laravel',
    value: 'laravel',
  },
  {
    id: 8,
    label: 'Java',
    value: 'java',
  },
  {
    id: 9,
    label: 'NextJs',
    value: 'nextjs',
  },
];

export const CourseForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [capitulos, setCapitulos] = useState<number>(0);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tags: [],
      chapters: [],
    },
  });

  useEffect(() => {
    const existingChapters = form.getValues('chapters');
    const newChapters = Array.from({ length: capitulos }, (_, index) => ({
      chapterNumber: index + 1,
      name: existingChapters[index]?.name || '',
      youtubeUrl: existingChapters[index]?.youtubeUrl || '',
    }));
    form.setValue('chapters', newChapters);
  }, [capitulos, form]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      setLoading(true);
      const createAssetResp: any = await createAsset(data.banner);
      const assetId = createAssetResp.createAsset.id;
      await new Promise(resolve => setTimeout(resolve, 5000));
      const publishAssetResp: any = await publishAsset(assetId);
      const bannerId = publishAssetResp.publishAsset.id;
      const createCourseResp: any = await createCourse(
        data.name,
        data.tags,
        Number(data.totalChapters),
        data.free,
        bannerId,
        data.chapters.map((chapter: any) => ({
          name: chapter.name,
          chapterNumber: chapter.chapterNumber,
          youtubeUrl: chapter.youtubeUrl,
        })),
        data.description,
        data.author
      );
      const courseId = createCourseResp.createCourseList.id;
      await new Promise(resolve => setTimeout(resolve, 2500));
      const response = await publishCourse(courseId);
      if (response) {
        toast({
          title: 'Curso creado con éxito',
          description: 'El curso ha sido creado con éxito!',
        });
      } else {
        toast({
          title: 'Algo ha salido mal',
          description:
            'Ha habido un error al crear el curso. Inténtelo de nuevo.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Algo ha salido mal',
        description:
          'Ha habido un error al crear el curso. Inténtelo de nuevo.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <div className="grid py-5">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-900">
                    Nombre <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      defaultValue={field.value}
                      className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-5">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      onChange={field.onChange}
                      defaultValue={field.value}
                      className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Descripcion"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-5">
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Etiquetas <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onChange={values => {
                        const arr = values.map((item: any) => item.value);
                        field.onChange(arr);
                      }}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                      options={categories}
                      className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-5">
            <FormField
              control={form.control}
              name="totalChapters"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Total de Capitulos <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      onChange={e => {
                        const value = e.target.value;
                        if (Number(value) <= 10) {
                          setCapitulos(Number(value));
                        }
                        field.onChange(Number(value));
                      }}
                      defaultValue={field.value}
                      className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Total de capitulos"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-5 grid grid-cols-2">
            <FormField
              control={form.control}
              name="free"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Opciones de Pago <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={value => {
                        const free = value === 'true';
                        field.onChange(free);
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="true" id="gratis" />
                        <Label htmlFor="gratis">Gratis</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="false" id="pago" />
                        <Label htmlFor="pago">De Pago</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Autor
                  </FormLabel>
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      defaultValue={field.value}
                      className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Autor"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-5">
            <FormField
              control={form.control}
              name="banner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-900">
                    Banner <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      onChange={field.onChange}
                      defaultValue={field.value}
                      className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Image URL"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-5">
            {capitulos > 0 && (
              <div className="mb-5">
                <FormLabel className="block mb-2 text-lg font-medium text-gray-900">
                  Capitulos
                </FormLabel>
                {[...Array(capitulos)].map((_, index) => (
                  <div
                    key={index}
                    className="mb-5 border-gray-500 p-5 border-2 rounded-lg"
                  >
                    <FormLabel>Capitulo {index + 1} </FormLabel>
                    <FormField
                      control={form.control}
                      name={
                        `chapters[${index}].name` as `chapters.${number}.name`
                      }
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block mb-2 text-sm font-medium text-gray-900">
                            Nombre <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              onChange={field.onChange}
                              defaultValue={field.value}
                              className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                              placeholder="Nombre"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={
                        `chapters[${index}].youtubeUrl` as `chapters.${number}.youtubeUrl`
                      }
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block mb-2 text-sm font-medium text-gray-900">
                            Video <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              onChange={field.onChange}
                              defaultValue={field.value}
                              className="block w-full p-3 text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                              placeholder="Video URL"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300   disabled:bg-gray-200
                                        disabled:pointer-events-none
                                        disabled:border-none"
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? 'Creando...' : 'Crear Curso'}
          </Button>
        </form>
      </div>
    </Form>
  );
};
