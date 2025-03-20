import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { handleModal } from "@/redux/layout-reducer";
import { AppDispatch, RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddClient = () => {
  const { openEditModal } = useSelector((state: RootState) => state.layout);
    const [name, setName] = useState("Pedro Duarte");
    const [username, setUsername] = useState("@peduarte");
    const dispatch: AppDispatch = useDispatch();
  return (
    <div>
      <Modal
        open={openEditModal}
        setOpen={handleModal}
        title="Add Client"
        footer={<Button type="submit">Save changes</Button>}
      >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddClient;
