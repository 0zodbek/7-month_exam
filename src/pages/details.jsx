import React from "react";

function details() {
  return (
    <div className="wrapper">
      <button className="ml-20 mt-20">back</button>
      <div className="flex flex-col md:flex-row  shadow-lg rounded-lg p-6 w-full h-[944px] ml-20 mt-20 mx-auto ">
      <div className="md:w-1/3 w-xl max-h-[400px] min-h-[400px] flex justify-center">
        <img
        className="mr-32 rounded-lg"
        width={560} height={400}
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
          alt="Belgium Flag"
        />
      </div>
      <div className=" mt-6 md:mt-0 md:ml-6">
        <h1 className="text-3xl font-bold mb-4">Belgium</h1>
       <div className="flex flex-col md:flex-row ">
       <ul className="text-lg space-y-2 mr-36">
          <li>
            <strong>Native Name:</strong> België
          </li>
          <li>
            <strong>Population:</strong> 11,319,511
          </li>
          <li>
            <strong>Region:</strong> Europe
          </li>
          <li>
            <strong>Sub Region:</strong> Western Europe
          </li>
          <li>
            <strong>Capital:</strong> Brussels
          </li>
        </ul>
        <ul className="text-lg space-y-2">
          <li>
            <strong>Top Level Domain:</strong> .be
          </li>
          <li>
            <strong>Currencies:</strong> Euro
          </li>
          <li>
            <strong>Languages:</strong> Dutch, French, German
          </li>
        </ul>
       </div>

        <div className="mt-6">
          <strong>Border Countries:</strong>
          <div className="flex space-x-3 mt-3">
            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              France
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              Germany
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
              Netherlands
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default details;
