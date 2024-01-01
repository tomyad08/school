import { useEffect, useState } from "react";
import { Endpoints } from "../utils/endpoint";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);
  const [DataSiswa, setDataSiswa] = useState("");
  const [verif, setVerif] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  useEffect(() => {
    fetch(Endpoints.login, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setDataSiswa(data))
      .catch(() => {
        setVerif(true);
        setMessage(
          "Mohon maap, koneksi sedang buruk.  Silahkan refresh kembali.  Terima kasih."
        );
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    DataSiswa.map((value) => {
      if (
        value.nama_lengkap.toLowerCase() !== inputs.nama_lengkap.toLowerCase()
      ) {
        setVerif(true);
        setMessage("Silahkan periksa kembali input nama lengkap anda.");
        return;
      } else if (value.password !== inputs.password) {
        setVerif(true);
        setMessage("Silahkan periksa kembali input password anda.");
        return;
      } else {
        const selectLink = DataSiswa.find(function (value) {
          return (
            value.nama_lengkap.toLowerCase() ===
            inputs.nama_lengkap.toLowerCase()
          );
        });
        const select = {
          nama_lengkap: selectLink.nama_lengkap,
          kelas: selectLink.kelas,
          status: selectLink.status,
          jenis: selectLink.jenis,
        };
        navigate("/menu", {
          state: select,
        });
      }
    });
  };
  return (
    <div className="w-screen h-screen bg-amber-100 flex justify-center items-center relative overflow-hidden">
      <div className="w-32 h-32 rounded-full bg-amber-500 absolute -right-10 top-0 "></div>
      <div className="w-96 h-96 rounded-full bg-amber-500 absolute -left-10 bottom-0 "></div>
      <div>
        <div className="flex justify-center">
          {verif && (
            <p className="text-center p-1 bg-red-500 mb-2 text-sm text-white rounded-lg w-10/12">
              {message}
            </p>
          )}
        </div>
        <div className="w-full p-5 bg-red-600 rounded-lg drop-shadow-xl relative">
          <div className="w-24 h-24 rounded-full bg-amber-500 absolute right-0 -z-10"></div>
          <div className="w-10 h-10 rounded-full bg-amber-500 absolute right-24"></div>
          <div className="w-32 h-32 rounded-full bg-amber-500 absolute bottom-10 -z-10"></div>
          <img src="./logokui.png" alt=" " className="w-16 mb-5" />
          <h1 className="text-2xl font-bold text-white border-b-2 border-white pb-1">
            Login
          </h1>
          <p className="text-sm text-white mb-5">
            Silahkan input data username dan password.
          </p>
          <form>
            <label htmlFor="username">
              <p className="text-sm text-white pb-1">username:</p>
            </label>
            <input
              className="w-full p-2 bg-white rounded-lg focus:font-semibold focus:outline-none mb-2"
              type="text"
              name="nama_lengkap"
              value={inputs.nama_lengkap || ""}
              id="username"
              onChange={handleChange}
            />
            <label htmlFor="password">
              <p className="text-sm text-white pb-1">password:</p>
            </label>
            <input
              className="w-full p-2 bg-white focus:font-semibold rounded-lg focus:outline-none"
              name="password"
              type="password"
              value={inputs.password || ""}
              id="password"
              onChange={handleChange}
            />
            <button
              className="text-center p-2 w-full bg-yellow-200 rounded-lg mt-5 font-bold"
              onClick={handleClick}
            >
              {loading ? (
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-arrow-clockwise animate-spin"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                    />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                  </svg>
                  <h1 className="mx-1">Loading</h1>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
