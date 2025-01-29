import React from "react";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";

export const DeleteBlog = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Trash2 size={16} className="text-[#2B5F44]" />
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[343px] rounded-[12px] px-[16px] py-[30px] md:w-[400px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-[18px] font-semibold text-[#101828]">
            <p>Please confirm if you wish to</p>
            <p>delete the post</p>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <p className=" text-center text-[14px] text-[#5B5B5B]">
          Are you sure you want to delete the post? Once deleted, it cannot be
          recovered.
        </p>
        <div className=" mt-[24px] flex flex-col items-stretch gap-[12px] md:flex-row-reverse">
          <Button className="w-full" variant="destructive">
            Delete
          </Button>
          <Button className="w-full" variant="outline">
            Cancel
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
