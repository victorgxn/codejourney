import { currentUser } from '@clerk/nextjs/server';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toaster } from '@/components/ui/toaster';

import { UserTable } from './_components/Users/UsersTable';
import { CoursesTable } from './_components/Courses/CoursesTable';

export default async function Page() {
  const user = await currentUser();
  const admin =
    user?.privateMetadata?.role === 'admin' ||
    user?.privateMetadata?.role === 'owner';
  return (
    <div className="mx-20 my-5">
      {admin ? (
        <Tabs defaultValue="usuarios" className="flex gap-5">
          <TabsList className="grid">
            <TabsTrigger value="usuarios">Usuarios</TabsTrigger>
            <TabsTrigger value="cursos">Cursos</TabsTrigger>
          </TabsList>
          <TabsContent value="usuarios">
            <UserTable />
          </TabsContent>
          <TabsContent value="cursos">
            <CoursesTable />
          </TabsContent>
        </Tabs>
      ) : (
        <div>
          <h1>Acceso denegado</h1>
          <p>No tienes permisos para acceder a esta página</p>
        </div>
      )}
      <Toaster />
    </div>
  );
}
