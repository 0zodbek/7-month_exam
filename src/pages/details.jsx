import React from "react";
import useFetch from "../hooks/UseFetch";
import Loader from "../assets/loader.gif";
import { useNavigate, useParams } from "react-router-dom";
function details() {
  const navigate = useNavigate("");
  const { slug } = useParams();
  const {
    data: Data,
    loading,
    error,
  } = useFetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries/${slug}`
  );
  if (loading)
    return (
      <div className="ml-[687px] mt-52">
        <img width={100} height={100} src={Loader} alt="" />
      </div>
    );
  if (error) return <p>Xatolik yuz berdi: {error}</p>;
  console.log(Data);
  function handleToDetails(e) {
    // console.log(e);
    navigate(`/details/${e}`);
  }
  return (
    <div className="wrapper overflow-x-hidden">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="flex items-center gap-2 text-lg ml-40 mt-14 mb-14"
      >
        <i className="fa-solid fa-arrow-left-long"></i> Back
      </button>

      <div className="flex flex-col md:flex-row rounded-lg p-6 max-w-[1278px] mx-auto">
        <div className="md:w-1/3 w-full max-h-[400px] min-h-[400px] p-0 m-0 flex justify-center">
          <img
            className="w-full max-w-[560px] rounded-lg"
            src={Data.flags.png}
            alt={Data.flags.alt}
          />
        </div>

        <div className="md:w-2/3 w-full md:ml-6 mt-6 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Belgium</h1>
          <div className="flex flex-col md:flex-row">
            <ul className="text-lg space-y-2 mb-6 md:mb-0 md:mr-8">
              <li>
                <strong>Native Name:</strong> {Data.name.nativeName}
              </li>
              <li>
                <strong>Population:</strong> {Data.population.toLocaleString()}
              </li>
              <li>
                <strong>Region:</strong> {Data.region}
              </li>
              <li>
                <strong>Sub Region:</strong> {Data.subregion}
              </li>
              <li>
                <strong>Capital:</strong> {Data.capital}
              </li>
            </ul>
            <ul className="text-lg space-y-2">
              <li>
                <strong>Top Level Domain:</strong> .be
              </li>
              <li>
                <strong>Currencies:</strong> {Data.currencies}
              </li>
              <li>
                <strong>Languages:</strong> {Data.languages.toLocaleString()}
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <strong>Border Countries:</strong>
            <div className="flex flex-wrap space-x-3 mt-3">
              {Data &&
                Data.borders.map((el, index) => (
                  <button
                    onClick={() => {
                      handleToDetails(el.slug);
                    }}
                    key={index}
                    className="bg-transparent shadov px-4 py-2 rounded-lg mb-3 hover:shadov-md transition"
                  >
                    {el.slug}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default details;
