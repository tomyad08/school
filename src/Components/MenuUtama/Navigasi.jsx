import { useState } from "react";

const Navigasi = ({ inputs }) => {
  const [condition, setCondition] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <div className="rounded-lg bg-red-600 p-2 rounded-lg">
          <img src="./logo.png" alt=" " className="md:w-28 w-14" />
        </div>
        <div
          className="flex justify-end"
          onClick={() => setCondition(!condition)}
        >
          <div className="pe-1">
            <h1 className="font-semibold text-lg text-end">
              Hi, {inputs.nama_lengkap}.
            </h1>
            <p className="text-sm">{inputs.status} 🥳</p>
          </div>

          <img
            src="./tomy.jpg"
            alt=" "
            className="w-10 h-10 rounded-full drop-shadow-xl mt-1"
          />
        </div>
      </div>
      {condition && (
        <div className=" flex justify-end mt-2">
          <div className="py-2 px-5 text-white rounded-lg w-24 text-sm bg-amber-800">
            Log Out
          </div>
        </div>
      )}
    </div>
  );
};
export default Navigasi;
