import { useEffect, useState } from "react";
import { Endpoints } from "../../utils/endpoint";
import { useLocation } from "react-router-dom";
import { Subjek } from "../../DataStatics/Subjek";

const Info = () => {
  const [Data, setData] = useState("");
  const [kode, setKode] = useState("");
  const [target, setTarget] = useState("");
  const location = useLocation();
  const SelectSubjek = Subjek.filter((value) => {
    if (value.kode === location.state) {
      return value;
    }
  });
  console.log(location.state);
  useEffect(() => {
    fetch(Endpoints.test, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const handleSubmit = () => {
    Data.filter((value) => {
      if (value.password === kode) {
        console.log(value.password);
      }
    });
  };
  return (
    <div className="bg-amber-500 h-screen flex justify-center items-center">
      <div className="w-3/4 bg-white rounded-xl p-3">
        <p className="text-center font-semibold">
          Silahkan masukkan kode test di bawah ini:
        </p>
        <input
          className="p-2 rounded-lg outline-none bg-amber-200 w-full mt-5 mb-2"
          placeholder="kode test"
          onChange={(e) => setKode(e.target.value)}
        />
        <select
          className="p-2 rounded-lg outline-none bg-amber-200 w-full mb-5"
          onChange={(e) => setTarget(e.target.value)}
        >
          <option>Silahkan pilih mapel</option>
          {SelectSubjek.map((value) => (
            <option value={value.name}>{value.name}</option>
          ))}
        </select>
        {Data ? (
          <button
            className="bg-red-500 font-semibold text-white rounded-lg w-full p-2"
            onClick={handleSubmit}
          >
            Let's Go!
          </button>
        ) : (
          <>
            <button className="bg-red-500 font-semibold text-white rounded-lg w-full p-2 animate-pulse">
              Loading ...
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Info;
