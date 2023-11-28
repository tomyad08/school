import { useEffect, useState } from "react";
import Navigasi from "../Components/MenuUtama/Navigasi";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const Subjek = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState("");
  const [select, setSelect] = useState("");

  const FilterFunction = (data) => {
    const list = data.filter((value) => {
      if (value.kode_subjek === location.state.kode_subjek) {
        return value;
      }
    });
    setMenu(list);
    setSelect(list[5]);
  };

  useEffect(() => {
    fetch(location.state.video, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => FilterFunction(data));
  }, []);

  const handleClick = (data) => {
    navigate("/test", {
      state: data,
    });
  };

  return (
    <div>
      <div className="p-2 bg-amber-400 m-2 rounded-lg">
        <Navigasi inputs={location.state} />
      </div>

      <div className="p-2">
        {select ? (
          <>
            <div className="flex justify-center rounded-xl overflow-hidden">
              <ReactPlayer url={select.video} width="370px" height="190px" />
            </div>
            <h1 className="font-semibold mt-4">{select.topik}</h1>
            <p className="text-sm py-1">Keywords: {select.keyword}</p>
            <p className="text-sm mb-2">{select.desc}</p>
            <div
              className="text-sm font-semibold bg-red-600 p-1 mb-5 text-center rounded-xl w-full text-white"
              onClick={() => handleClick(select.kode_topik)}
            >
              Latihan Soal
            </div>
            <p className="text-sm font-semibold">List Materi</p>
          </>
        ) : (
          ""
        )}
      </div>
      {menu ? (
        <div className="columns-1 justify-around mx-2 p-2">
          {menu.map((value) => (
            <div
              className="border mb-1 rounded-lg hover:bg-amber-400 flex"
              key={value.id}
              onClick={() => setSelect(value)}
            >
              <img src="./slide1.png" alt="" className="w-32 p-2 rounded-xl" />
              <div className="p-1">
                <h1 className="text-sm font-bold">{value.topik}</h1>
                <h1 className=" text-sm">{value.keyword}</h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-11/12">
            <div className="w-full h-24 mb-1 bg-slate-200 rounded-lg animate-pulse"></div>
            <div className="w-full h-24 mb-2 bg-slate-200 rounded-lg animate-pulse"></div>
            <div className="w-full h-10 mb-3 bg-slate-200 rounded-lg animate-pulse"></div>
            <div className="w-full h-52 bg-slate-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subjek;
