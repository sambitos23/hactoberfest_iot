import React from "react";
import CountDown from "../Countdown/CountDown";

function Header() {
  return (
    <section className="text-secondary-100 body-font font-semibold pt-12 lg:pt-0">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center h-screen">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="font-bold mb-4">#hacktoberfest &nbsp; #kiithacktoberfest</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-secondary-200">
            Celebrate a monthlong <br/>Open Source Fest
          </h1>
          <p className="mb-8 leading-relaxed">
            Open Source is changing the world
            <br />
            One Pull Request at a time
            <br />
            Meet new and interesting developers
            <br />
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-primary-50 font-bold py-2 px-6 hover:bg-gray-200 hover:text-primary-50 hover:border-primary-50 border-2 rounded-xl text-lg">
              REGISTER NOW
            </button>
            {/* <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Closing in → Registration Closed.
            </button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img src="./assets/hactoberfest.svg" alt="hactoberfest" />
          <CountDown/>
        </div>
      </div>
    </section>
  );
}

export default Header;
