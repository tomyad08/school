import { useState } from "react";
import Navigasi from "../Components/MenuUtama/Navigasi";
import { useLocation } from "react-router-dom";

const Test = () => {
  const location = useLocation();
  const [cond, setCond] = useState(false);
  const [verif, setVerif] = useState(true);
  const data = [
    {
      id: 1,
      soal: "Suatu kawat dialiri listrik sebesar 0,002 A dengan voltase 10 V.  Perkiraan nilai hambatan yang paling mendekati benar adalah ...",
      pilihan_a: "A. 5000 ohm",
      pilihan_b: "B. 2000 ohm",
      pilihan_c: "C. 200 ohm",
      pilihan_d: "D. 0,05 ohm",
      pilihan_e: "E. 0,02 ohm",
      jawaban: "A",
    },
  ];
  const handleClick = (select) => {
    if (select === data[0].jawaban) {
      setCond(true);
      setVerif("Yeah, kamu benar.");
    } else {
      setCond(true);
      setVerif("Yah, belum benar jawaban kamu.");
    }
  };
  const datas = {
    nama_lengkap: location.state.nama_lengkap,
    status: location.state.status,
  };
  return (
    <div className="h-screen overflow-y-hidden bg-amber-100">
      <div className="bg-amber-400 p-4">
        <Navigasi inputs={datas} />
      </div>
      <div className="flex justify-center items-center h-3/4 relative">
        <div className="columns-1 w-10/12 p-5">
          <div className="absolute w-32 h-32 rounded-full bg-amber-400 top-5 right-5"></div>
          <div className="absolute w-20 h-20 rounded-full bg-amber-400 top-32 right-32"></div>
          <div className="absolute w-60 h-60 rounded-full bg-amber-400 bottom-5 left-5 z-5"></div>
          {cond && (
            <p className="text-sm text-center mb-5 bg-red-600 text-white rounded-lg p-1 relative z-10">
              {verif}
            </p>
          )}
          <div className="bg-red-600 p-2 w-20 mb-4 text-white font-semibold text-center rounded-lg">
            Level 2
          </div>
          {data.map((value) => (
            <div key={value.id} className="text-black relative z-10">
              <p className="pb-4 text-sm text-justify">{value.soal}</p>
              <div
                className="p-1 text-sm hover:bg-amber-400 hover:font-semibold rounded-lg outline-dashed mb-2"
                onClick={() => handleClick("A")}
              >
                {value.pilihan_a}
              </div>
              <div
                className="p-1 outline-dashed mb-2 text-sm hover:bg-amber-400 hover:font-semibold rounded-lg"
                onClick={() => handleClick("B")}
              >
                {value.pilihan_b}
              </div>
              <div
                className="p-1 outline-dashed mb-2 text-sm hover:bg-amber-400 hover:font-semibold rounded-lg"
                onClick={() => handleClick("C")}
              >
                {value.pilihan_c}
              </div>
              <div
                className="p-1 outline-dashed mb-2 text-sm hover:bg-amber-400 hover:font-semibold rounded-lg"
                onClick={() => handleClick("D")}
              >
                {value.pilihan_d}
              </div>
              <div
                className="p-1 outline-dashed mb-2 text-sm hover:bg-amber-400 hover:font-semibold rounded-lg"
                onClick={() => handleClick("E")}
              >
                {value.pilihan_e}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-center">
        <p className="text-center font-semibold absolute bottom-2 text-sm">
          @ Copyright Laskar UI
        </p>
      </div>
    </div>
  );
};
export default Test;
