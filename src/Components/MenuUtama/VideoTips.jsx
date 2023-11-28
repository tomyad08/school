const VideoTips = () => {
  const data = [
    {
      id: 1,
      nama: "Cara Belajar Efektif",
      foto: "./draf.jpg",
    },
    {
      id: 2,
      nama: "Melatih Imajinasi",
      foto: "./draf1.jpg",
    },
    {
      id: 3,
      nama: "Design Thinking",
      foto: "./draf2.jpg",
    },
    {
      id: 4,
      nama: "Perguruan Tinggi",
      foto: "./draf.jpg",
    },
  ];
  return (
    <div className="columns-2 xl:columns-4 justify-center mx-1">
      {data.map((value) => (
        <div key={value.id} className=" bg-amber-400 rounded-lg">
          <div className="w-full xl:h-32 h-20 bg-amber-400 rounded-lg flex justify-center items-center overflow-hidden">
            <img src={value.foto} alt="" className="w-86" />
          </div>
          <p className="text-sm text-center mb-2 py-2">{value.nama}</p>
        </div>
      ))}
    </div>
  );
};
export default VideoTips;
