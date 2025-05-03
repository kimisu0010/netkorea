import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex justify-between items-center px-6 py-4 shadow-md">
      <div className="text-xl font-bold tracking-wide">NetKorea</div>
      <div className="space-x-6 text-sm">
        <a href="#" className="hover:underline">
          정책보기
        </a>
        <a href="#" className="hover:underline">
          DAO 참여
        </a>
        <a href="#" className="hover:underline">
          소개
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
