import { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";

const columns = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

export default function DataTableTwo() {
  const [tableData, setTableData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const formattedData = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        age: Math.floor(Math.random() * 50) + 18, // Random age for demo
        email: user.email,
      }));
      setTableData(formattedData);
    });
  }, []);

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: { pageIndex, pageSize },
    },
    onPaginationChange: setPageIndex,
  });

  return (
    <Card className="p-4">
      <CardContent>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Modal Title</DialogTitle>
            </DialogHeader>
            <p>This is a modal content.</p>
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </DialogContent>
        </Dialog>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
            disabled={pageIndex === 0}
          >
            Previous
          </Button>
          <span>Page {pageIndex + 1}</span>
          <Button
            onClick={() => setPageIndex(pageIndex + 1)}
            disabled={(pageIndex + 1) * pageSize >= tableData.length}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
