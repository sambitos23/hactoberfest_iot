import React from "react";

function About() {
  return (
    <section className="text-gray-600 body-font bg-primary-100 -mt-40 lg:-mt-0">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <a href="https://hacktoberfest.digitalocean.com?wvideo=amutdkejlv">
            <img
              src="https://embedwistia-a.akamaihd.net/deliveries/215b02624cf322bc1be8efd3317b5dce.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=1e71e7e0"
              width="720"
              height="600"
              alt="hacktoberfest_thumbnail"
            />
          </a>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 text-white lg:flex-grow -mt-8 lg:mt-0 lg:pt-8 lg:pl-12 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="text-lg lg:text-2xl mb-4 font-bold">
            Support open source and pick a limited edition T-shirt or plant a
            tree.
          </h1>
          <p className="mb-8 text-sm md:text-base text-primary-default">
            Hacktoberfest is open to everyone in our global community. Whether
            you’re new to development, a student, long-time contributor, event
            host, or company of any size, you can help drive growth of open
            source and make positive contributions to an ever-growing community.
            chunk of them.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
