import React, { useState } from "react";

export default function Tour({ id, image, info, name, price, deleteTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <li
      key={id}
      className="card hover:shadow-lg h-min rounded-lg transition duration-150 ease-in-out flex flex-col w-full md:w-full lg:max-w-[352px] bg-white"
    >
      <div className="image-wrapper relative">
        <img
          src={image}
          alt={name}
          className="object-cover lg:h-[320px] lg:w-[352px] w-full rounded-t-md	"
        />
        <span className="rounded-tr-lg absolute bg-[#10B981] text-white py-1 px-2 top-0 right-0">
          ${price}
        </span>
      </div>
      <div className="px-7 py-8">
        <h3 className="text-2xl text-center mb-4">{name}</h3>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          className="text-emerald-400 font-bold"
          onClick={() => setReadMore(!readMore)}
        >
          {readMore ? "show less" : "  read more"}
        </button>
        {
          <button
            onClick={() => deleteTour(id)}
            className="not-btn mt-[23px] shadow border-2 text-emerald-400 rounded-sm border-emerald-400 block w-full pt-1 pb-1 transition duration-300 hover:bg-emerald-400 hover:text-white"
          >
            Not Interested
          </button>
        }
      </div>
    </li>
  );
}
