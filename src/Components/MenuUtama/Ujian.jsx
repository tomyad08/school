const Ujian = () => {
  const data = [
    {
      id: 1,
      name: "Ulangan Harian",
      pict: "./exam.png",
    },
    {
      id: 2,
      name: "Ujian Tengah Semester",
      pict: "./exam.png",
    },
    {
      id: 3,
      name: "Ujian Akhir Semester",
      pict: "./exam.png",
    },
  ];
  return (
    <div className="mx-5">
      <h1 className="text-sm font-bold text-amber-700 mb-2 pt-5">Ujian</h1>
      <div className="flex justify-center w-full bg-white rounded-xl p-5">
        {data.map((value) => (
          <div className="w-96" key={value.id}>
            <div className="flex justify-center">
              <img src={value.pict} alt="" className="w-14" />
            </div>
            <h1 className="text-sm text-center pt-2">{value.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Ujian;
