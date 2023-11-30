const Community = () => {
  const Community = [
    {
      id: 1,
      name: "Mobile Legends",
      pict: "./mobile-legends.jpg",
    },
    {
      id: 2,
      name: "Futsal",
      pict: "./futsal.jpg",
    },
    {
      id: 3,
      name: "Drama K-pop",
      pict: "./korea.jpg",
    },
  ];
  return (
    <div className="p-5">
      <h1 className="text-sm font-bold text-amber-700 mb-2"> Komunitas</h1>
      <div className="h-32 md:h-96 text-white rounded-lg flex w-full overflow-x-scroll">
        {Community.map((value) => (
          <img
            src={value.pict}
            alt=" "
            className="w-96 rounded-lg me-1"
            key={value.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Community;
