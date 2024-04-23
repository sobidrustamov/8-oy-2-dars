"use client";
import React from "react";
// import Obuna from "./components/obuna";
import Link from "next/link";

const ProfileLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [active, setActive] = React.useState("");
  return (
    <div>
      <div className="py-3">
        <Link href="/" className="text-blue-500 font-medium">
          Bosh sahifa
        </Link>
        /<Link href="#">profile</Link>
      </div>
      <div className="flex">
        <div className="w-[288px] flex flex-col p-6 shadow-xl">
          <Link
            href="/profile/obuna"
            className={`${
              active === "obuna"
                ? "border-l-4 border-l-blue-600 text-blue-600 font-bold"
                : ""
            } p-3`}
            onClick={() => setActive("obuna")}
          >
            Obuna
          </Link>
          <Link
            href="/profile/e-xisob"
            className={`${
              active === "e-xisob"
                ? "border-l-4 border-l-blue-600 text-blue-600 font-bold"
                : ""
            } p-3`}
            onClick={() => setActive("e-xisob")}
          >
            E-Xisob
          </Link>
          <Link
            href="/profile/kitoblarim"
            className={`${
              active === "kitoblarim"
                ? "border-l-4 border-l-blue-600 text-blue-600 font-bold"
                : ""
            } p-3`}
            onClick={() => setActive("kitoblarim")}
          >
            Kitoblarim
          </Link>
          <Link
            href="/profile/saqlanganlar"
            className={`${
              active === "saqlanganlar"
                ? "border-l-4 border-l-blue-600 text-blue-600 font-bold"
                : ""
            } p-3`}
            onClick={() => setActive("saqlanganlar")}
          >
            Saqlanganlar
          </Link>
          <Link
            href="/profile/sozlamalar"
            className={`${
              active === "sozlamalar"
                ? "border-l-4 border-l-blue-600 text-blue-600 font-bold"
                : ""
            } p-3`}
            onClick={() => setActive("sozlamalar")}
          >
            Sozlamalar
          </Link>
        </div>
        <div className="p-6"><h2 className="text-4xl"> {children}</h2></div>
      </div>
    </div>
  );
};

export default ProfileLayout;
