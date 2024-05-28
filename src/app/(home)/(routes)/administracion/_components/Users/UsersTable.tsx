import { DataTableDemo } from './DataTable';
import { auth } from '@clerk/nextjs/server';

export async function getUsers() {
  const { userId } = auth();
  const response = await fetch(`${process.env.URL}/api/getUsers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId }),
  });
  const data = await response.json();
  return data;
}

export const UserTable = async () => {
  const data = await getUsers();

  return (
    <div className="container mx-auto">
      <DataTableDemo data={data} />
    </div>
  );
};
