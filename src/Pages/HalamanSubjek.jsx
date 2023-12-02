import { useEffect, useState } from "react";
import Navigasi from "../Components/MenuUtama/Navigasi";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import HalamanVideo from "./Video";

const Subjek = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState("");
  const [select, setSelect] = useState("");
  const [play, setplay] = useState(false);

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

  const handleSelect = (data) => {
    setSelect(data);
  };

  const handleClick = (data) => {
    const selectData = {
      kode_topik: data,
      nama_lengkap: location.state.nama_lengkap,
      status: location.state.status,
    };
    navigate("/test", {
      state: selectData,
    });
  };
  const handlePlay = () => {
    setplay(!play);
  };
  return (
    <div className="bg-amber-100">
      <div className="bg-amber-100 pb-2">
        {select ? (
          <>
            <div className="flex w-full justify-center">
              <ReactPlayer
                light={play ? false : <img src={select.thumbnail} alt="" />}
                playing={play}
                url={select.video}
                width="420px"
                height="210px"
              />
            </div>
            <div className="w-full p-2 bg-amber-300 flex justify-center">
              <div
                className="text-white p-1 rounded-full bg-red-500 border border-4 border-white drop-shadow-xl"
                onClick={handlePlay}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-play-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 m-3">
              <h1 className="font-semibold">{select.topik}</h1>
              <p className="text-sm pt-1 pb-4">
                <strong>Keywords:</strong> {select.keyword}
              </p>
              <p className="text-sm mb-2">{select.desc}</p>
              <div className="flex justify-center">
                <button
                  className="text-sm font-semibold bg-red-600 p-2 text-center rounded-xl w-4/5 text-white flex justify-center"
                  onClick={() => handleClick(select.kode_topik)}
                >
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-card-list"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                      <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                    </svg>
                  </div>
                  <div>Latihan Soal</div>
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {/* <HalamanVideo select={select} /> */}
      {menu ? (
        <div className="columns-1 justify-around mx-2 p-2">
          <h1 className="text-sm text-amber-800 font-bold p-2">List Video:</h1>
          {menu.map((value) => (
            <div
              className="border-l-4 border-amber-400 hover:bg-red-600 hover:text-white flex relative"
              key={value.id}
              onClick={() => handleSelect(value)}
            >
              <div className="absolute -left-2 top-9 w-3 h-3 rounded-full bg-amber-600"></div>
              <img
                src={value.thumbnail}
                alt=""
                width="100"
                height="50"
                className="w-32 p-2 rounded-xl"
              />
              <div className="p-1 border-b-2 border-amber-400 w-full">
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
            <div className="w-full h-24 mb-1 bg-slate-200 rounded-lg animate-pulse"></div>
            <div className="w-full h-24 mb-2 bg-slate-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subjek;
