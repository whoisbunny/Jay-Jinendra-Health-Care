import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
interface ModalProps {
  className?: string;
  description?: string;
  title?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
const Modal = ({
  className,
  open,
  setOpen,
  description,
  title,
  footer,
  children,
}: ModalProps) => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Dialog open={open} onOpenChange={(isOpen) => dispatch(setOpen(isOpen))}>
      <DialogContent className={` ${className}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
