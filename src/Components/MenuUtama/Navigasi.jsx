import { useState } from "react";

const Navigasi = ({ inputs }) => {
  const [condition, setCondition] = useState(false);
  return (
    <div>
      <div className="flex justify-between rounded-xl">
        <img src="./logokui.png" alt=" " className="w-20 my-1" />

        <div
          className="flex justify-end"
          onClick={() => setCondition(!condition)}
        >
          <div className="pe-1">
            <h1 className="font-semibold text-lg text-end">
              Hi, {inputs.nama_lengkap}.
            </h1>
            <p style={{ fontSize: "12px" }}>{inputs.status} 🥳</p>
          </div>

          <img
            src="./tomy.jpg"
            alt=" "
            className="w-10 h-10 rounded-full drop-shadow-xl mt-1 border border-2 border-red-500"
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
