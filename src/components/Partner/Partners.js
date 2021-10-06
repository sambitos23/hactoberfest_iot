const Partners = () => {
  return (
    <section className="text-gray-600 body-font mt-20 relative z-20 bg-secondary-300 rounded-lg py-6">
      <div className="w-full flex flex-wrap justify-center">
        <img
          src="./assets/hactoberfest.svg"
          alt="hactoberfest"
          className="w-4/12"
        />
      </div>
      <p className="font-bold text-xl text-secondary-100 text-center mt-4">
        Presented by
      </p>
      <div className="w-8/12 flex flex-wrap justify-around pt-6 mx-auto">
        <img
          src="./assets/partners/digitalocan.svg"
          alt="hactoberfest"
          className="w-2/12"
        />
        <img
          src="./assets/partners/apprightgr.svg"
          alt="hactoberfest"
          className="w-2/12"
        />
        <img
          src="./assets/partners/intel.svg"
          alt="hactoberfest"
          className="w-1/12"
        />
        <img
          src="./assets/partners/deepsource.svg"
          alt="hactoberfest"
          className="w-2/12"
        />
      </div>
      <div className="px-5 mx-auto py-6">
        <h1 className="text-center text-2xl font-bold text-secondary-100 ">
          Partners
        </h1>
        <div className="flex flex-col sm:flex-row">
          <div className="p-4 sm:w-1/2">
            <div className="h-full flex flex-col items-center justify-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 w-2/12 object-cover object-center"
                src="/assets/partners/iot.webp"
              />
            </div>
          </div>
          <div className="p-4 sm:w-1/2">
            <div className="h-full flex flex-col items-center justify-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 w-8/12 object-cover object-center"
                src="/assets/partners/dsc.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-secondary-100 mb-4 px-12 md:text-lg font-bold">Support open source throughout October!</p>
      <p className="text-center text-secondary-100 px-12 text-xs md:text-base md:px-28 font-semibold">Hacktoberfest encourages participation in the open source community, which grows bigger every year. Complete the 2021 challenge and earn a limited edition T-shirt.</p>
    </section>
  );
};

export default Partners;
