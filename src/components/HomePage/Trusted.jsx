const Trusted = () => {
  return (
    <section className="py-16 bg-gray-100 mx-[3rem] rounded-2xl">
      <div className="container mx-auto">
        <h3 className="text-center text-2xl font-bold capitalize text-gray-800 mb-8">
          Trusted By 1000+ Companies
        </h3>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className="flex justify-center items-center">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                  alt="trusted-brands"
                  className="min-w-[6rem] md:min-w-24 h-[6rem] md:h-24"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                  alt="trusted-brands"
                  className="min-w-[6rem] md:min-w-24 h-[6rem] md:h-24"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                  alt="trusted-brands"
                  className="min-w-[6rem] md:min-w-24 h-[6rem] md:h-24"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
                  alt="trusted-brands"
                  className="min-w-[6rem] md:min-w-24 h-[6rem] md:h-24"
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                  alt="trusted-brands"
                  className="min-w-[6rem] md:min-w-24 h-[6rem] md:h-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
