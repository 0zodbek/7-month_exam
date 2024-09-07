import React, { useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";
import useDebounce from "../hooks/useDebounce";
import Search from "../assets/search.svg"
import Loader from "../assets/loader.gif"
function home() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [region, setRegion] = useState("")
  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Debounced qidiruv:', debouncedSearchTerm);
      // Bu yerda API chaqiruvi yoki boshqa ishlarni amalga oshiring
      // Misol uchun:
      fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?search=${debouncedSearchTerm}`)
        .then(response => response.json())
        .then(data => setData(data));
        console.log(data);
    }
  }, [debouncedSearchTerm,region]);
  const {
    data: Data,
    loading,
    error,
  } = useFetch("https://frontend-mentor-apis-6efy.onrender.com/countries");
  if (loading) return <div className="ml-[687px] mt-52"><img width={100} height={100} src={Loader} alt="" /></div>;
  if (error) return <p>Xatolik yuz berdi: {error}</p>;
  // console.log(Data.data[0].name.nativeName);
  console.log(Data.data);
  function handleRegion(e){
  setRegion(e);
  
  }
  console.log(region);
  return (
    <div className="container max-w-[1280px] mx-auto">
      <div className="head flex justify-between mb-12">
      <input
      className="w-[480px] h-14 mt-12 shadow rounded-lg p-3"
        type="text"
        placeholder=" Search for a country…"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Input qiymatini yangilash
      />
        <select onChange={()=>{handleRegion(event.target.value)}} className="select w-full max-w-52 h-14 mt-12 border border-gray-600 text-sm font-normal">
          <option className="mt-3">
          Filter by Region
          </option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
      <div className="wrapper flex flex-wrap justify-between  mx-auto max-w-7xl">
        {Data.data &&
          Data.data.map((el, index) => {
            return (
              <div
                key={index}
                className="card bg-base-100 max-w-[264px] mb-[75px] h-80 shadow-xl rounded-none"
              >
                <figure className="min-h-40 max-h-40 min-w-[264px]">
                  <img
                    className="min-h-40 max-h-40 min-w-full"
                    src={el.flags.png}
                    alt="Shoes"
                  />
                </figure>
                <div className="mt-6 ml-6">
                  <h2 className=" font-extrabold text-18px">
                    {el.name.common}
                  </h2>
                  <div className="flex flex-col mt-4">
                    <p className="font-semibold text-sm mt-2">Population: <span className="font-light">{el.population}</span></p>
                    <p className="font-semibold text-sm mt-2">Region: <span className="font-light">{el.region}</span></p>
                    <p className="font-semibold text-sm">Capital: <span className="font-light">{el.capital}</span></p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default home;
{
  /* <div className="card bg-base-100 w-64 h-80 shadow-xl rounded-none">
        <figure className="h-40">
          <img
            className="h-40"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>  */
}
