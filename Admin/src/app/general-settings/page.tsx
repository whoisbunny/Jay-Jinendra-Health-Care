"use client";

import AddGeneral from "@/components/services/AddService";
import { Button } from "@/components/ui/button";
import { handleGeneralModal } from "@/redux/reducers/layout";
import { AppDispatch } from "@/redux/store";
import { PlusIcon } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";

const GeneralSettings = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen p-4 md:py-8 md:px-6 gap-4 flex flex-col">
        <div className="flex flex-row  justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 flex items-center">
            General Settings
          </h1>
          {/* <div className="">
            <Button
              className="flex items-center  bg-gray-800 text-white px-4 py-6 rounded hover:bg-gray-700"
            >
              <PlusIcon className="h-5 w-5" />
              <span>Add Client</span>
            </Button>
          </div> */}
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold mb-4 flex items-center">
              Company Services
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Manage your general settings here.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              variant={"outline"}
              className="flex items-center  bg-gray-800 text-white p-4  rounded-md hover:bg-gray-700"
              onClick={() => dispatch(handleGeneralModal(true))}
            >
              <PlusIcon className="h-5 w-5" />
              <span>Add Service</span>
            </Button>
          </div>
        </div>
        {/* <ClientList /> */}
        <AddGeneral />
      </div>
    </>
  );
};

export default GeneralSettings;
