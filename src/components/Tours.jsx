import Tour from "./Tour";

function Tours({ tours }) {
  return (
    <ul className="grid md:grid-cols-2 h-auto lg:grid-cols-3 gap-7">
      {tours.map((tour) => {
        const { id, name, info, image, price } = tour;
        return (
          <li
            className="flex flex-col max-w-[352px] bg-white"
          >
            <div className="image-wrapper relative">
              <img
                src={image}
                alt={name}
                width="352"
                height="320"
              />
              <span className="absolute bg-[#10B981] text-white py-1 px-2 top-0 right-0">
                ${price}
              </span>
            </div>
            <div className="px-6 py-8">
              <h3 className="text-2xl text-center mb-4">{name}</h3>
              <p>{info.substring(0, 100)}...</p>
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
      })}
    </ul>
  );
}

export default Tours;
