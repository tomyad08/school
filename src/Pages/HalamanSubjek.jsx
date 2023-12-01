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
    console.log(data);
  };

  return (
    <div className="bg-amber-100">
      <HalamanVideo inputs={select} />
      {menu ? (
        <div className="columns-1 justify-around mx-2 p-2">
          <h1 className="text-sm text-amber-800 font-bold p-2">List Video:</h1>
          {menu.map((value) => (
            <div
              className="mb-1 rounded-lg hover:bg-red-600 hover:text-white flex"
              key={value.id}
              onClick={() => handleSelect(value)}
            >
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Subjek;
