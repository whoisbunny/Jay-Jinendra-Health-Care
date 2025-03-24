"use client";
import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#1ca39c]"></div>
    </div>
  );
};

export default Loading;
