"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { handleModal } from "@/redux/reducers/layout";
import AddClient from "@/components/client/AddClient";
import ClientList from "@/components/client/ClientList";

const ClientPage = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen p-4 md:py-8 md:px-6 gap-4 flex flex-col">
      <div className="flex flex-row  justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 flex items-center">Clients</h1>
        <div className="">
          <Button
            className="flex items-center  bg-gray-800 text-white px-4 py-6 rounded hover:bg-gray-700"
            onClick={() => dispatch(handleModal(true))}
          >
            <PlusIcon className="h-5 w-5" />
            <span>Add Client</span>
          </Button>
        </div>
      </div>
      <ClientList />
      <AddClient />
    </div>
  );
};

export default ClientPage;
