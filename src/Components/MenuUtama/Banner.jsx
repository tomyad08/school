const Banner = () => {
  const picture = [
    {
      id: 1,
      pict: "./banner1.jpg",
    },
    {
      id: 2,
      pict: "./banner.jpg",
    },
  ];

  return (
    <div className="mt-5">
      <div className=" h-32 md:h-96 text-white rounded-lg flex w-full overflow-x-scroll">
        <img src="./banner.png" alt=" " className="w-96 rounded-lg me-1" />
      </div>
    </div>
  );
};
export default Banner;
