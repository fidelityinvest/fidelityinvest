"use client";

import React from "react";
import useTheme from "./hooks/useTheme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useCompany from "./hooks/useCompany";

interface LogoProps {
  home?: boolean;
  onClick?: () => void;
}

const Logo = (props: LogoProps) => {
  const { home, onClick } = props;
  const { mode } = useTheme();
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  const { company } = useCompany();

  return (
    <>
      {!home && (
        <div
          onClick={onClick || goHome}
          className="flex w-fit sm:cursor-pointer"
        >
          <div className="max-w-[150px] min-w-[50px] w-full h-auto  flex justify-center items-center">
          {/* src={company?.logo?.url || ""} */}
            <Image
              src="/fidelityInvest.png"
              alt={"desktop"}
              width={20}
              height={5}
              
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {home && (
        <div onClick={onClick} className="flex w-fit sm:cursor-pointer">
          <div className="max-w-[100px] min-w-[50px] w-full h-auto  flex justify-center items-center">
          {/* src={company?.logo?.url || ""} */}
            <Image
              src="/fidelityInvest.png"
              alt={"desktop"}
              width={10}
              height={2}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Logo;
