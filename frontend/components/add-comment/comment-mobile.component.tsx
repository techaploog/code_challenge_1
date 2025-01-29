import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const CommentMobile = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="border-[#49A569] text-[#49A569] hover:bg-[#D8E9E4] hover:text-[#49A569] md:hidden"
        >
          Add Comments
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[343px] rounded-[12px] px-[16px] py-[30px]">
        <DialogHeader>
          <DialogTitle className="text-start text-[20px] font-normal text-[#111927]">
            Add Comments
          </DialogTitle>
        </DialogHeader>
        <div className="mt-[20px] flex w-full flex-col gap-[10px]">
          <Textarea
            className="no-active no-focus"
            placeholder="What’s on your mind..."
          />

          <div className="mt-[30px] flex flex-col gap-[10px]">
            <Button
              variant="outline"
              className="border-[#49A569] text-[#49A569] hover:bg-[#D8E9E4] hover:text-[#49A569]"
            >
              Cancel
            </Button>

            <Button className="border-[#49A569] bg-[#49A569] text-white hover:bg-[#49A569] hover:text-[#49A569]">
              Post
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
