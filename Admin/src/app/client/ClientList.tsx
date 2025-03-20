import { columns } from "@/components/data-table/columns";
import { DataTable } from "@/components/data-table/DataTable";
import { payments } from "@/constants/constants";
import React from "react";

const ClientList = () => {
  return (
    <div >
      <DataTable columns={columns} data={payments} title="All Clients" />
    </div>
  );
};

export default ClientList;
