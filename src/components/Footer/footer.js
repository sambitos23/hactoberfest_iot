import React from "react";
import IotFooter from "./IotFooter";

function Footer() {
  return (
    <div className="bg-secondary-default px-10 md:px-6 lg:px-24 pt-16 text-secondary-200 font-medium">
      <div className="grid grid-cols-1 md:grid-cols-5 pb-8">
        <div className="col-span-1 md:col-span-3 flex flex-col items-center text-center md:text-left md:items-start space-y-3">
          <h2 className="text-xl text-dorange uppercase font-bold tracking-widest">
            Giving
          </h2>
          <div className="launch-desc text-sm">
            Participate by giving to a Hacktoberfest '21 Project today
          </div>
          <div className="subscribe-form lg:w-1/2">
            <a
              href="https://gdsc.community.dev/events/details/developer-student-clubs-kalinga-institute-of-industrial-technology-bhubaneswar-presents-hacken-fest-2021/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary-50 py-2 px-8 rounded-full text-white shadow-sm text-center hover:shadow-2xl duration-300"
            >
              Register Now
            </a>
          </div>
        </div>{" "}
        <div className="col-span-1 legal flex flex-col items-center md:items-start space-y-2 text-left md:ml-28">
          <h2 className="text-sm md:text-base text-dorange uppercase font-bold mt-10 md:mt-0">
            Share
          </h2>{" "}
          <a
            href="http://twitter.com/share?url=http://hacktoberfest.digitalocean.com"
            rel="noreferrer"
            target="_blank"
            className="block text-xs hover:text-dorange duration-300"
          >
            Twitter
          </a>{" "}
          <a
            rel="noreferrer"
            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhacktoberfest.digitalocean.com%2F&amp;src=sdkpreparse"
            target="_blank"
            className="block text-xs hover:text-dorange duration-300"
          >
            Facebook
          </a>{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fhacktoberfest.digitalocean.com"
            target="_blank"
            className="block text-xs hover:text-dorange duration-300"
          >
            LinkedIn
          </a>
        </div>{" "}
        <div className="col-span-1 legal flex flex-col items-center md:items-start md:ml-28 space-y-2 text-left">
          <h2 className="text-sm md:text-base text-dorange uppercase font-bold mt-10 md:mt-0">
            Legal
          </h2>{" "}
          <a
            rel="noreferrer"
            href="https://www.digitalocean.com/legal/terms-of-service-agreement/"
            target="_blank"
            className="block text-xs hover:text-dorange duration-300"
          >
            Terms
          </a>{" "}
          <a
            rel="noreferrer"
            href="https://www.digitalocean.com/legal/privacy-policy/"
            target="_blank"
            className="block text-xs hover:text-dorange duration-300"
          >
            Privacy
          </a>{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://hacktoberfest.digitalocean.com/brandguidelines"
            className="block text-xs hover:text-dorange duration-300"
          >
            Brand Guidelines
          </a>
        </div>
      </div>
      <IotFooter />
    </div>
  );
}

export default Footer;
