import { useEffect, useState } from "react";
import { Endpoints } from "../../utils/endpoint";
import { useNavigate } from "react-router-dom";

const Menu = ({ inputs }) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("");

  const FilterMenu = (data) => {
    const DataSelect = data
      .filter((value) => {
        if (value.kelas === inputs.kelas) {
          return value;
        }
      })
      .filter((value) => {
        if (value.jenis === inputs.jenis) {
          return value;
        }
      });
    setMenu(DataSelect);
  };

  useEffect(() => {
    fetch(Endpoints.menu, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => FilterMenu(data));
  }, []);

  const data = [
    {
      id: 1,
      nama: "Mat",
    },
    {
      id: 2,
      nama: "Fis",
    },
    {
      id: 3,
      nama: "Kim",
    },
    {
      id: 4,
      nama: "Bio",
    },
    {
      id: 5,
      nama: "Geo",
    },
    {
      id: 6,
      nama: "B.Ing",
    },
    {
      id: 7,
      nama: "Eko",
    },
    {
      id: 8,
      nama: "Sej",
    },
    {
      id: 9,
      nama: "Sos",
    },
    {
      id: 10,
      nama: "B.Ind",
    },
  ];

  const handleMenu = (kode_subjek) => {
    const data = {
      kode_subjek: kode_subjek,
      nama_lengkap: inputs.nama_lengkap,
      status: inputs.status,
      video: menu[0].video,
    };
    navigate("/subjek", {
      state: data,
    });
  };
  return (
    <div className="flex justify-center mx-5 mb-5">
      {menu ? (
        <div className="columns-4 justify-around">
          {menu.map((value) => (
            <div
              key={value.kode_subjek}
              onClick={() => handleMenu(value.kode_subjek)}
            >
              <div className="w-14 h-14 md:w-32 md:h-32 bg-amber-400 rounded-full flex justify-center items-center">
                <img src={value.icon} alt="" className="w-10 md:w-10" />
              </div>
              <p className="text-sm text-center mb-2">{value.subjek}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="columns-5 justify-around">
          {data.map((value) => (
            <div key={value.id}>
              <div className="w-14 h-14 md:w-32 md:h-32 bg-amber-400 rounded-lg flex justify-center items-center animate-pulse"></div>
              <p className="text-sm text-center mb-2 animate-pulse">
                {value.nama}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Menu;
