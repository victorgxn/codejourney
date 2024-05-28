import { DataTableDemo } from './DataTable';

export async function getUsers() {
  const response = await fetch(`${process.env.URL}/api/getUsers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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
