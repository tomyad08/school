import { useState } from "react";

const Test = () => {
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
  return (
    <div className="flex justify-center items-center h-screen bg-amber-100 relative">
      <div className="columns-1 w-10/12 bg-red-600 border border-4 border-white p-5 rounded-lg">
        <div className="absolute w-32 h-32 rounded-full bg-amber-400 top-5 right-5"></div>
        <div className="absolute w-20 h-20 rounded-full bg-amber-400 top-32 right-32"></div>
        <div className="absolute w-60 h-60 rounded-full bg-amber-400 bottom-5 left-5 z-5"></div>
        {cond && (
          <p className="text-sm text-center mb-5 bg-amber-100 rounded-lg p-1 relative z-10">
            {verif}
          </p>
        )}
        <img
          src="./logo.png"
          alt=""
          className="w-14 mb-2 rounded-lg bg-amber-200 p-2"
        />
        {data.map((value) => (
          <div key={value.id} className="text-white relative z-10">
            <p className="pb-4 text-sm text-justify">{value.soal}</p>
            <div
              className="py-1 text-sm  hover:text-white hover:font-semibold rounded-xl"
              onClick={() => handleClick("A")}
            >
              {value.pilihan_a}
            </div>
            <div
              className="py-1 text-sm  hover:text-white hover:font-semibold rounded-xl"
              onClick={() => handleClick("B")}
            >
              {value.pilihan_b}
            </div>
            <div
              className="py-1 text-sm  hover:text-white hover:font-semibold rounded-xl"
              onClick={() => handleClick("C")}
            >
              {value.pilihan_c}
            </div>
            <div
              className="py-1 text-sm  hover:text-white hover:font-semibold rounded-xl"
              onClick={() => handleClick("D")}
            >
              {value.pilihan_d}
            </div>
            <div
              className="py-1 text-sm  hover:text-white hover:font-semibold rounded-xl"
              onClick={() => handleClick("E")}
            >
              {value.pilihan_e}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Test;
