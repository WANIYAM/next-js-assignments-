import Nav from "./components/nav";
import React from "react";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-center text-6xl p-6 text-red-600 font-serif font-semibold">
          {" "}
          Welcome to my Next.js
        </h1>
        <h1 className="text-center text-3xl py-2 px-10 rounded-3xl mb-2">
          Application with Dynamic Route
        </h1>
      </div>
    </div>
  );
}
