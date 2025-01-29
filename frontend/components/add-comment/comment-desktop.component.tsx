"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

export const CommentDesktop = () => {
  const [open, setOpen] = useState(false);
  return open ? (
    <div className="w-full space-y-[10px]">
      <Textarea
        className="no-focus no-active"
        placeholder="What’s on your mind..."
      />
      <div className="flex items-center justify-end gap-[12px]">
        <Button
          variant="outline"
          className="w-[105px] border-[#49A569] text-[#49A569] hover:bg-[#D8E9E4] hover:text-[#49A569]"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>

        <Button className="w-[105px] border-[#49A569] bg-[#49A569] text-white hover:bg-[#49A569] hover:text-[#49A569]">
          Post
        </Button>
      </div>
    </div>
  ) : (
    <div className="max-sm:hidden">
      <Button
        variant="outline"
        className="border-[#49A569] text-[#49A569] hover:bg-[#D8E9E4] hover:text-[#49A569]"
        onClick={() => setOpen(true)}
      >
        Add Comments desktop
      </Button>
    </div>
  );
};
