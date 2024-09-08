// import React, { useEffect, useState } from "react";
// import useFetch from "../hooks/UseFetch";
// import useDebounce from "../hooks/useDebounce";
// import Search from "../assets/search.svg"
// import Loader from "../assets/loader.gif"
// import { useNavigate } from "react-router-dom";
// function home() {
//   const [data, setData] = useState([])
//   const [searchTerm, setSearchTerm] = useState('');
//   const debouncedSearchTerm = useDebounce(searchTerm, 300);
//   const [region, setRegion] = useState("")
//   const navigate = useNavigate("")
//   const {
//     data: Data,
//     loading,
//     error,
//   } = useFetch("https://frontend-mentor-apis-6efy.onrender.com/countries");
//   if (loading) return <div className="ml-[687px] mt-52"><img width={100} height={100} src={Loader} alt="" /></div>;
//   if (error) return <p>Xatolik yuz berdi: {error}</p>;
//   useEffect(() => {
//     if (debouncedSearchTerm) {
//       console.log('Debounced qidiruv:', debouncedSearchTerm);
//       // Bu yerda API chaqiruvi yoki boshqa ishlarni amalga oshiring
//       // Misol uchun:
//       fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?search=${debouncedSearchTerm}`)
//         .then(response => response.json())
//         .then(data => setData(data));
//         console.log(data);
//     }
//     setData(Data);
//   }, [debouncedSearchTerm,region]);
// //   const {
// //   data: Data,
// //   loading,
// //   error,
// // } = useFetch("https://frontend-mentor-apis-6efy.onrender.com/countries");
// // if (loading) return <div className="ml-[687px] mt-52"><img width={100} height={100} src={Loader} alt="" /></div>;
// // if (error) return <p>Xatolik yuz berdi: {error}</p>;
//   // console.log(Data.data[0].name.nativeName);
  
//   function handleRegion(e){
//   setRegion(e);
//   }
//   function handleToDetails(e){
//   // console.log(e);
//   navigate(`/details/${e}`)
//   }
//   console.log(region);
//   return (
//     <div className="container max-w-[1280px] mx-auto">
//       <div className="head flex justify-between mb-12">
//       <input
//       className="w-[480px] h-14 mt-12 shadow rounded-lg p-3"
//         type="text"
//         placeholder=" Search for a country…"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)} // Input qiymatini yangilash
//       />
//         <select onChange={()=>{handleRegion(event.target.value)}} className="select w-full max-w-52 h-14 mt-12 border border-gray-600 text-sm font-normal">
//           <option className="mt-3">
//           Filter by Region
//           </option>
//           <option>Africa</option>
//           <option>America</option>
//           <option>Asia</option>
//           <option>Europe</option>
//           <option>Oceania</option>
//         </select>
//       </div>
//       <div className="wrapper flex flex-wrap justify-between  mx-auto max-w-7xl">
//         {Data.data &&
//           Data.data.map((el, index) => {
//             return (
//               <div
//                 onClick={()=>{handleToDetails(el.name.slug)}}
//                 key={index}
//                 className="card bg-base-100 max-w-[264px] mb-[75px] h-80 shadow-xl rounded-none"
//               >
//                 <figure className="min-h-40 max-h-40 min-w-[264px]">
//                   <img
//                     className="min-h-40 max-h-40 min-w-full"
//                     src={el.flags.png}
//                     alt="Shoes"
//                   />
//                 </figure>
//                 <div className="mt-6 ml-6">
//                   <h2 className=" font-extrabold text-18px">
//                     {el.name.common}
//                   </h2>
//                   <div className="flex flex-col mt-4">
//                     <p className="font-semibold text-sm mb-1">Population: <span className="font-light">{el.population}</span></p>
//                     <p className="font-semibold text-sm mb-1">Region: <span className="font-light">{el.region}</span></p>
//                     <p className="font-semibold text-sm">Capital: <span className="font-light">{el.capital}</span></p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default home;
// {
//   /* <div className="card bg-base-100 w-64 h-80 shadow-xl rounded-none">
//         <figure className="h-40">
//           <img
//             className="h-40"
//             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//             alt="Shoes"
//           />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">Shoes!</h2>
//           <p>If a dog chews shoes whose shoes does he choose?</p>
//         </div>
//       </div>  */
// }


import React, { useEffect, useState } from "react";
import useFetch from "../hooks/UseFetch";
import useDebounce from "../hooks/useDebounce";
import Search from "../assets/search.svg";
import Loader from "../assets/loader.gif";
import { useNavigate } from "react-router-dom";
import "../App.css"
function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 1500);
  const [region, setRegion] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${debouncedSearchTerm}`;
      if (region) {
        `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${region}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [debouncedSearchTerm, region]);

  const { data: Data, loading, error } = useFetch("https://frontend-mentor-apis-6efy.onrender.com/countries");

  if (loading) return <div className="ml-[687px] mt-52"><img width={100} height={100} src={Loader} alt="" /></div>;
  if (error) return <p>Xatolik yuz berdi: {error}</p>;

  function handleRegion(event) {
    setRegion(event.target.value);
    console.log(event.target.value);
  }

  function handleToDetails(e) {
    navigate(`/details/${e}`);
  }
 
  return (
    <div className="container max-w-[1280px] mx-auto">
      <div className="head flex justify-between mb-12 ">
        <input
          className="w-[480px] h-14 mt-12 shadow rounded-lg p-3"
          type="text"
          placeholder="Search for a country…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Input qiymatini yangilash
        />
        <select onChange={handleRegion} className="select w-full max-w-52 h-14 mt-12 border border-gray-600 text-sm font-normal">
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
      <div className="wrapper flex flex-wrap justify-between mx-auto max-w-7xl gap-4">
  {data.data &&
    data.data.map((el, index) => (
      <div
        onClick={() => handleToDetails(el.name.slug)}
        key={index}
        className="card bg-base-100 max-w-[264px] mb-6 h-80 shadow-xl rounded-none flex flex-col"
      >
         <figure className="min-h-40 max-h-40 min-w-[264px] max-w-[264px]">
                <img
                  className="min-h-40 max-h-40 min-w-full"
                  src={el.flags.png}
                  alt={el.name.common}
                />
              </figure>
        <div className="flex-1 p-4">
          <h2 className="font-extrabold text-lg truncate">{el.name.common}</h2>
          <div className="flex flex-col mt-4">
            <p className="font-semibold text-sm mb-1">
              Population: <span className="font-light">{el.population.toLocaleString()}</span>
            </p>
            <p className="font-semibold text-sm mb-1">
              Region: <span className="font-light">{el.region}</span>
            </p>
            <p className="font-semibold text-sm">
              Capital: <span className="font-light">{el.capital}</span>
            </p>
          </div>
        </div>
      </div>
    ))}
</div>

    </div>
  );
}

export default Home;
