import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center   bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen">
        <div className="mx-auto w-[50wh]">
          <h1 className="font-extrabold text-center mb-16 font-['Rubik'] text-4xl text-white">
            CONTACT
          </h1>
          <div className=" flex text-white w-[80vh] flex-col items-center  gap-5     ">
            <input className="py-4 px-2 border   border-zinc-500 w-full rounded-2xl" type="text" placeholder="Name" />
            <input className="py-4 px-2 border  border-zinc-500 w-full rounded-2xl" type="text" placeholder="Email"/>
            <textarea className="w-full p-4 h-60 border  border-zinc-500 rounded-2xl" type="text" placeholder="Message"/>
            <button className="p-3 uppercase font-[Roboto_Mono] hover:scale-120 hover:bg-green-500  m-3 text-md  bg-emerald-600 font-bold rounded-xl cursor-pointer">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
