'use client';
import { DataTableDemo } from './DataTable';
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const response = await fetch('/api/getUsers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export const UserTable = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto">
      <DataTableDemo data={data} />
    </div>
  );
};
