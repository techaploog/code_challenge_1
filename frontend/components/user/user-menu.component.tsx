"use client";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { MOCK_USR_IMG } from "@/constants/mock.constant";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { LogOut, User2Icon } from "lucide-react";
// import { LogIn, LogOut, User2Icon } from "lucide-react";
// import Link from "next/link";

export const UserMenu = ({ mobile }: { mobile?: boolean }) => {
  const { data: session } = useSession();
  return (
    <div className={mobile ? "w-[280px]" : "w-[248px] md:w-[280px]"}>
      {session?.user ? (
        <Popover>
          <PopoverTrigger className="flex w-full items-center gap-[12px] bg-white/20 px-[12px] py-[8px]  shadow-md hover:bg-white/50">
            <Image
              src={session?.user.image || MOCK_USR_IMG}
              alt="user"
              width={35}
              height={35}
              className="rounded-full shadow-md"
            />
            <span>{session?.user.name || "-"}</span>
          </PopoverTrigger>
          <PopoverContent
            className="w-[248px] space-y-4"
            side="top"
            align={mobile ? "center" : "start"}
            alignOffset={mobile ? 0 : 20}
          >
            <Button
              variant="outline"
              className="flex w-full items-center justify-start gap-4"
              disabled
            >
              <User2Icon />
              Profile
            </Button>

            <Separator />

            <Button
              variant="link"
              className="w-full text-red-600"
              onClick={() => signOut()}
            >
              <LogOut />
              <span>Sign Out</span>
            </Button>
          </PopoverContent>
        </Popover>
      ) : null}
      {
        // ) : (
        //   <Link href="/sign-in" className="">
        //     <div className="dw-bg-success flex-center mx-auto w-[248px] gap-2 rounded-md py-2 text-white">
        //       <LogIn />
        //       <span>Sign In</span>
        //     </div>
        //   </Link>
        // )}
      }
    </div>
  );
};
