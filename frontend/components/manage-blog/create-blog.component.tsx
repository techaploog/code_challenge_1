"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useGeneralContext } from "@/context";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateBlogPostSchema } from "@/lib/validations/blog.validation";
import { Form, FormField, FormMessage } from "../ui/form";
import { createBlogPost } from "@/lib/actions/blog.action";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

const INIT_DATA = {
  com_id: undefined,
  title: "",
  details: "",
};

export const CreateBlogDialog = () => {
  const pathname = usePathname();
  const { categoryList } = useGeneralContext();
  const [open, setOpen] = useState(false);

  const addForm = useForm<z.infer<typeof CreateBlogPostSchema>>({
    resolver: zodResolver(CreateBlogPostSchema),
    defaultValues: INIT_DATA,
  });

  async function onSubmit(values: z.infer<typeof CreateBlogPostSchema>) {
    try {
      await createBlogPost(values, pathname);
      toast.success("A blog created.");
      setOpen(false);
    } catch (err: any) {
      console.error("[ERROR]", err.message);
      toast.error("Create blog failed.");
    }
  }

  useEffect(() => {
    if (open) {
      addForm.reset();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={(o) => setOpen(o)}>
      <DialogTrigger asChild>
        <Button className="h-[40px] bg-[#49A569] text-xs hover:bg-[#49A569]">
          Create +
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[343px] gap-[30px] rounded-[12px] px-[16px] py-[30px] md:w-[685px]">
        <DialogHeader className="">
          <DialogTitle className="text-start">Create Post</DialogTitle>
        </DialogHeader>
        <Form {...addForm}>
          <form
            className="space-y-[30px]"
            onSubmit={addForm.handleSubmit(onSubmit)}
          >
            <div className="space-y-[14px]">
              {/* Category */}
              <FormField
                control={addForm.control}
                name="com_id"
                render={({ field }) => (
                  <div className="space-y-1.5">
                    <Select
                      value={field.value?.toString()}
                      onValueChange={(val) => field.onChange(Number(val))}
                    >
                      <SelectTrigger className="border-[#49A569] text-[#49A569] hover:bg-[#D8E9E4] hover:text-[#49A569] focus:ring-0 focus:ring-offset-0 md:max-w-[195px]">
                        <div className="w-full text-center">
                          <SelectValue
                            className="text-[#49A569]"
                            placeholder="Choose a community"
                          >
                            {categoryList.find(
                              (c) => c.id === field.value?.toString()
                            )?.value || "Select Community"}
                          </SelectValue>
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {categoryList.map((category) => (
                          <SelectItem
                            key={category.id}
                            value={category.id}
                            className="data-[state=checked]:bg-[#D8E9E4]"
                          >
                            {category.value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs text-red-500 px-3" />
                  </div>
                )}
              />

              {/* Title */}
              <FormField
                control={addForm.control}
                name="title"
                render={({ field }) => (
                  <div className="space-y-1.5">
                    <Input
                      placeholder="Title"
                      {...field}
                      className="no-focus no-active"
                    />
                    <FormMessage className="text-xs text-red-500 px-3" />
                  </div>
                )}
              />

              {/* Details */}
              <FormField
                control={addForm.control}
                name="details"
                render={({ field }) => (
                  <div className="space-y-1.5">
                    <Textarea
                      placeholder="What’s on your mind..."
                      {...field}
                      className="no-focus no-active"
                    />
                    <FormMessage className="text-xs text-red-500 px-3" />
                  </div>
                )}
              />
            </div>

            <div className="flex w-full flex-col gap-[10px] md:flex-row md:justify-end">
              <DialogClose asChild>
                <Button
                  type="reset"
                  variant="outline"
                  className="w-full border-[#49A569] text-[#49A569] hover:bg-[#D8E9E4] hover:text-[#49A569] md:w-[105px]"
                >
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type="submit"
                className="w-full border-[#49A569] bg-[#49A569] text-white hover:text-white hover:bg-[#49A569] md:w-[105px]"
              >
                Post
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
