import React from "react";

import { IMG_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { data } = resData[0];
  const { success } = data;
  const { cards } = success;
  const { gridWidget } = cards[4];
  const { gridElements } = gridWidget;
  const { infoWithStyle } = gridElements;
  const { restaurants } = infoWithStyle;
  console.log(restaurants);
  return (
    <>
      <div className="p-12">
        <button onClick={()=>{
            
        }} className="border p-4 rounded-3xl bg-lime-400">Top Rated</button>
      </div>
      <div className="p-12  flex flex-wrap md:justify-between lg:justify-between">
        
        {restaurants.map((items, index) => {
          return (
            <div className={`border rounded-3xl  w-full lg:w-1/4 mb-8 lg:mb-0 lg:mr-8 lg:last:mr-0 mt-10 md:w-1/4  md:mb-0 md:mr-8 md:last:mr-0`}>
              <div className="rounded-tl-3xl rounded-tr-3xl h-60  overflow-hidden">
                <img className= "object-cover" src={IMG_URL + items.info.cloudinaryImageId} alt="" />
              </div>
              <div className="p-2 mt-5">
                <ul className="flex flex-col gap-4">
                  <div className="flex justify-between ">
                  <li>{items.info.name}</li>
                  <li>{items.info.costForTwo}</li>
                  </div>
                  <li>{items.info.cuisines.join(", ")}</li>
                  
                  <div className="flex justify-between pb-4">
                  <li>{items.info.sla.deliveryTime + " min"}</li>
                  <li>{items.info.avgRating + " Stars"}</li>
                  </div>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestaurantCard;
