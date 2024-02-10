import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/logo.jpg";
import { BsBrightnessHigh  }  from "react-icons/bs";
import { BsBrightnessHighFill } from "react-icons/bs";

export default function Header(){
  const [cityName, setCityName] = useState("");
  const [getHist, setHist] = useState<String[]>([]);
  const [seaHist, setSeaHis] = useState("hidden");
  const [handleLight,setLight]= useState<String>("Light");

  function getSearchValue(e:React.ChangeEvent<HTMLInputElement>) {
    var city = e.target.value;
    setCityName(city);
    console.log(city);
  }
  function getCityInfo() {
    if (getHist.length >= 5) {
      getHist.splice(0, 1);
    }
    setHist((arr) => [...arr, cityName]);
    setCityName("");
  }
  function histroyClick() {
    console.log("item");
  }

  return (
  <>
    <header className="border-b-2 border-gray-200 border-[1px] ">
      <div className="flex flex-row justify-between items-center my-2 mx-4 text-[20px]">
        <div className="">
          <img src={logo} className="h-[50px] w-[50px]"  />
        </div>
        <div
          className={`w-[60%] relative mx-4 rounded-full border-black border-[1px]`}
        >
          <span
            className={`flex   ml-2 my-[4px]  py-[2px]   flex-row items-center`}
          >
            <CiSearch
              onClick={getCityInfo}
              className=" ml-2 h-[20px] w-[20px]"
            />
            <input
              id="searchValue"
              onBlur={() => setSeaHis("hidden")}
              onFocus={() => setSeaHis("")}
              value={cityName}
              onChange={getSearchValue}
              className="w-[100%]  mr-4 ml-2"
            />
          </span>
          <ul
            className={`${
              getHist.length == 0 ? "" : "border-black border-[1px]"
            } w-full mt-2  ${seaHist} absolute bg-white `}
          >
            {getHist?.map((item, key) => {
              if (key == 5) {
                return "";
              }
              return <li className="text-2xl hover:bg-gray-200">{item}</li>;
            })}
          </ul>
        </div>
        <BsBrightnessHigh  onClick={()=>setLight("Dark")} className={`w-[35px] h-[35px] ${handleLight==="Light"?"":"hidden"}`}/>
        <BsBrightnessHighFill onClick={()=>setLight("Light")} className={`w-[35px] h-[35px] ${handleLight==="Dark"?"":"hidden"}`}/>
      </div>
    </header>
    </>
  );
}
