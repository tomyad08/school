import { useNavigate } from "react-router-dom";

const Ujian = ({ inputs }) => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "SMP",
      kode: "ALL",
      pict: "./exam.png",
    },
    {
      id: 2,
      name: "SMA-IPA",
      kode: "IPA",
      pict: "./exam.png",
    },
    {
      id: 3,
      name: "SMA-IPS",
      kode: "IPS",
      pict: "./exam.png",
    },
  ];
  const handleClick = (value) => {
    const data = {
      nama_lengkap: inputs,
      kode: value,
    };
    navigate("/info", {
      state: data,
    });
  };
  return (
    <div className="mx-5">
      <h1 className="text-sm font-bold text-amber-700 mb-2 pt-5">Ujian</h1>
      <div className="flex justify-center w-full bg-white rounded-xl p-5">
        {data.map((value) => (
          <div
            className="w-96"
            key={value.id}
            onClick={() => handleClick(value.kode)}
          >
            <div className="flex justify-center">
              <img src={value.pict} alt="" className="w-14" />
            </div>
            <h1 className=" text-center pt-2" style={{ fontSize: "12px" }}>
              {value.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Ujian;
