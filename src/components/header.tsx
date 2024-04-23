import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

const Header = () => {
  return (
    <div className="flex justify-between px-[75px]">
      <Link href="/">
        <Logo />
      </Link>
      <div className="flex gap-1 w-[740px]">
        <div className="border py-3 px-6 rounded-l-2xl">
          <select name="rukunlar" id="rukunlar">
            <option value="">Rukunlar</option>
          </select>
        </div>
        <div className="w-full border py-3 px-6 rounded-r-2xl">
          <input
            type="text"
            placeholder="Qidirish..."
            className="outline-none w-full"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="bg-blue-100 rounded-lg p-3 ">
          <select name="" id="" className="bg-transparent outline-none">
            <option value="uz">Uz</option>
          </select>
        </div>
        <button className="bg-blue-700 p-3 rounded-lg text-white">
          Kirish
        </button>
      </div>
    </div>
  );
};

export default Header;
