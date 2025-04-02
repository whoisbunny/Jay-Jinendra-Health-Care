import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/DataTable";
import { payments } from "@/constants/constants";

const ClientList = () => {
  return (
    <div >
      <DataTable columns={columns} data={payments} title="All Clients" />
    </div>
  );
};

export default ClientList;

// "use client";

// import { useEffect, useState } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
//   getPaginationRowModel,
// } from "@tanstack/react-table";
// import { Card } from "@/components/ui/card";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export default function DynamicTable() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [pageIndex, setPageIndex] = useState(0);
//   const pageSize = 10;

//   const fetchData = () => {
//     setLoading(true);
//     fetch(
//       `https://dummyjson.com/posts?limit=${pageSize}&skip=${
//         pageIndex * pageSize
//       }&search=${globalFilter}`
//     )
//       .then((response) => response.json())
//       .then((json) => {
//         setData(json.posts || []);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, [pageIndex, globalFilter]);

//   const columns = data.length
//     ? Object.keys(data[0]).map((key) => ({
//         accessorKey: key,
//         header: key.charAt(0).toUpperCase() + key.slice(1),
//       }))
//     : [];

//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     state: {
//       pagination: { pageIndex, pageSize },
//     },
//   });

//   return (
//     <Card className="p-4 ">
//       <div className="flex justify-between mb-4">
//         <Input
//           placeholder="Search..."
//           value={globalFilter}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           className="w-1/3"
//         />
//       </div>
//       <Table>
//         <TableHeader>
//           {loading ? (
//             <TableRow>
//               <TableHead>Loading...</TableHead>
//             </TableRow>
//           ) : (
//             <TableRow>
//               {table
//                 .getHeaderGroups()
//                 .map((headerGroup) =>
//                   headerGroup.headers.map((header) => (
//                     <TableHead key={header.id}>
//                       {flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                     </TableHead>
//                   ))
//                 )}
//             </TableRow>
//           )}
//         </TableHeader>
//         <TableBody>
//           {loading
//             ? Array.from({ length: 5 }).map((_, index) => (
//                 <TableRow key={index}>
//                   <TableCell colSpan={columns.length || 1}>
//                     <Skeleton className="h-4 w-full" />
//                   </TableCell>
//                 </TableRow>
//               ))
//             : table.getRowModel().rows.map((row) => (
//                 <TableRow key={row.id}>
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))}
//         </TableBody>
//       </Table>
//       <div className="flex justify-between mt-4">
//         <Button
//           onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
//           disabled={pageIndex === 0}
//         >
//           Previous
//         </Button>
//         <span>Page {pageIndex + 1}</span>
//         <Button onClick={() => setPageIndex((prev) => prev + 1)}>Next</Button>
//       </div>
//     </Card>
//   );
// }