"use client";
import Modal from "@/components/modal";
import { handleGeneralModal } from "@/redux/reducers/layout";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  addGeneralMaster,
  fetchGeneralMasters,
} from "@/redux/reducers/generalReducer";
import { useEffect } from "react";

const formSchema = z.object({
  generalName: z.string().min(2, "Name is required"),
  description: z.string().optional(),
  secondLanguageName: z.string().optional(),
  generalMstId: z.string().optional(),
});

const AddGeneral = () => {
  const dispatch: AppDispatch = useDispatch();
  const { openGeneralModal } = useSelector((state: RootState) => state.layout);
  const { generalMasters } = useSelector((state: RootState) => state.general);

  useEffect(() => {
    dispatch(fetchGeneralMasters());
  }, []);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      generalName: "",
      description: "",
      secondLanguageName: "",
      generalMstId: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(addGeneralMaster(data));
    form.reset();
  };

  return (
    <>
      <div>
        <Modal
          open={openGeneralModal}
          setOpen={handleGeneralModal}
          title="Add General"
          className="lg:max-w-7xl md:max-w-5xl overflow-y-auto max-h-screen"
          footer={<></>}
        >
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <FormField
                control={form.control}
                name="generalName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>General Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="secondLanguageName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Second Language Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter second language name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="generalMstId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service Needed</FormLabel>
                    <FormControl className="w-full">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent className="w-full">
                          {generalMasters &&
                            generalMasters.map((e) => (
                              <>
                                <SelectItem value={e?._id}>
                                  {e?.generalName}
                                </SelectItem>
                              </>
                            ))}
                          <SelectItem value="baby care">Baby Care</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-full flex justify-end">
                <Button type="submit" className="">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default AddGeneral;
