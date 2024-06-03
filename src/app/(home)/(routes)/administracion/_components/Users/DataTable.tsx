'use client';

import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@clerk/nextjs';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const setAdmin = async (id: string, role: string, adminChange: any) => {
  await fetch('../../../../api/userMetadata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: id, role: role }),
  });
  adminChange((prev: boolean) => !prev);
};

const deleteUser = async (id: string, adminChange: any) => {
  await fetch('../../../../../api/userMetadata', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: id }),
  });
  adminChange((prev: boolean) => !prev);
};

export type User = {
  id: string;
  username: string | null;
  emailAddresses: [] | any;
  privateMetadata: {
    role: string;
  };
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'username',
    header: 'Username',
    filterFn: 'includesString',
    size: 150,
    minSize: 150,
  },
  {
    accessorKey: 'emailAddresses',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => row?.original?.emailAddresses[0]?.emailAddress,
    size: 250,
    minSize: 250,
  },
  {
    accessorKey: 'privateMetadata',
    header: 'Rol',
    cell: ({ row }) => {
      return row.original.privateMetadata.role ?? 'miembro';
    },
    size: 100,
    minSize: 100,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row, table }) => {
      const { setAdminChange } = table?.options?.meta as {
        setAdminChange: () => void;
      };
      const user = table?.options?.meta as {
        user: {
          role: string;
          userId: string;
        };
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            {row.original.privateMetadata?.role !== 'admin' && (
              <DropdownMenuItem
                onClick={() =>
                  setAdmin(row.original.id, 'admin', setAdminChange)
                }
              >
                Dar administrador
              </DropdownMenuItem>
            )}
            {row.original.privateMetadata?.role === 'admin' &&
              user?.user?.role === 'owner' && (
                <DropdownMenuItem
                  className="text-red-500"
                  onClick={() =>
                    setAdmin(row.original.id, 'miembro', setAdminChange)
                  }
                >
                  Eliminar Administrador
                </DropdownMenuItem>
              )}
            <DropdownMenuSeparator />
            {(row.original.privateMetadata?.role !== 'admin' ||
              user?.user.role === 'owner') && (
              <DropdownMenuItem
                className="text-red-500"
                onClick={() => deleteUser(row.original.id, setAdminChange)}
              >
                Eliminar Usuario
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    size: 150,
    minSize: 150,
  },
];

export function DataTableDemo({ data }: any) {
  const [internalData, setInternalData] = useState(data);
  const initialRenderRef = useRef(true);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [adminChange, setAdminChange] = useState<boolean>(false);
  const { userId } = useAuth();
  const [user, setUser] = useState<any>({ userId });

  const setCurrentUser = () => {
    fetch('../../../../../api/getUserMetadata', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    })
      .then(res => res.json())
      .then(data => setUser((prev: any) => ({ ...prev, ...data })))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    setCurrentUser();
  }, [userId]);

  const table = useReactTable({
    data: internalData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    autoResetPageIndex: false,
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 9,
      },
    },
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    meta: { setAdminChange, user },
  });

  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false;
      return;
    }
    fetch('../../../../../api/getUsers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    })
      .then(res => res.json())
      .then(data => {
        setInternalData(data);
      })
      .catch(err => console.log(err));
  }, [adminChange]);

  return (
    <div className="w-full">
      <div className="flex items-center">
        <Input
          placeholder="Filtrar usuarios..."
          value={
            (table.getColumn('username')?.getFilterValue() as string) ?? ''
          }
          onChange={event =>
            table.getColumn('username')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(column => column.getCanHide())
              .map((column: any) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={value => column.toggleVisibility(!!value)}
                  >
                    {typeof column.columnDef.header === 'function'
                      ? 'Email'
                      : column.columnDef.header}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border mt-3">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, {
                        ...cell.getContext(),
                        table,
                      })}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Sin resultados
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Atrás
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  );
}
