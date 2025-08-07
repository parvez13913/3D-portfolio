import { clientReviews } from "@/constans";

const Client = () => {
  return (
    <section className="sm:px-10 px-5 my-20">
      <h3 className="text-xl font-semibold mb-2 text-white font-serif">
        Hear from my clients
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {clientReviews.map(({ id, img, review, name, position }) => (
          <div
            key={id}
            className="rounded-lg md:p-10 p-5 col-span-1 bg-black bg-opacity-50"
          >
            <div>
              <p className="text-white font-light font-serif">{review}</p>
              <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt="image"
                    className="w-12 h-12 rounded-full"
                  />

                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800 font-serif">
                      {name}
                    </p>
                    <p className="font-light text-white-500 md:text-base text-sm font-serif">
                      {position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
