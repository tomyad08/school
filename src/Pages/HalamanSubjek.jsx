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
      <div className="p-2 bg-amber-400  rounded-lg">
        <Navigasi inputs={location.state} />
      </div>

      <div className="p-2 relative z-10">
        {select ? (
          <>
            <div className="flex w-full justify-center rounded-xl overflow-hidden">
              <ReactPlayer url={select.video} width="420px" height="210px" />
            </div>

            <div className="bg-white rounded-xl p-5 my-3">
              <h1 className="font-semibold">{select.topik}</h1>
              <p className="text-sm pt-1 pb-4">
                <strong>Keywords:</strong> {select.keyword}
              </p>
              <p className="text-sm mb-2">{select.desc}</p>
              <div
                className="text-sm font-semibold bg-red-600 p-1 text-center rounded-xl w-full text-white"
                onClick={() => handleClick(select.kode_topik)}
              >
                Latihan Soal
              </div>
            </div>

            <h1 className="text-sm font-bold text-amber-700"> List Materi</h1>
          </>
        ) : (
          ""
        )}
      </div>
      {menu ? (
        <div className="columns-1 justify-around mx-2 p-2">
          {menu.map((value) => (
            <div
              className="border mb-1 rounded-lg bg-white hover:bg-amber-400 flex"
              key={value.id}
              onClick={() => setSelect(value)}
            >
              <img
                src={value.thumbnail}
                alt=""
                width="100"
                height="50"
                className="w-32 p-2 rounded-xl"
              />
              <div className="p-1">
                <h1 className="text-sm font-bold">{value.topik}</h1>
                <h1 className=" text-sm">{value.keyword}</h1>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center h-screen">
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
