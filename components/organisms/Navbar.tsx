import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-red-300 p-5 w-full flex gap-5 ">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/contact"}>contact</Link>
    </div>
  );
}

export default Navbar;
