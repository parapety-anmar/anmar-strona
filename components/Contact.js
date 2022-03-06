import Image from "next/image";

import PhoneIcon from "../utils/PhoneIcon";
import MailIcon from "../utils/MailIcon";
import PinIcon from "../utils/PinIcon";

export default function Contact() {
  return (
    <section className="h-[500px] sm:h-[350px]" id="contact">
      <div className="container max-w-xs md:max-w-2xl lg:max-w-6xl mx-auto flex items-center justify-between h-full">
        <div className="relative h-[350px] sm:h-[225px] w-full bg-white shadow-lg rounded-lg">
          <div className="absolute -top-8 left-0 bg-white p-4 text-red-600 shadow-md rounded-lg flex items-center">
            <Image
              src="/icons/kontakt.jpg"
              alt="Opinions Icon"
              width={32}
              height={32}
            />
            <span className="ml-2 text-2xl text-red-600">Kontakt</span>
          </div>
          <div className="flex h-full flex-col sm:flex-row">
            <div className="basis-2/5 flex items-center justify-center">
              <div className="flex flex-col pt-10 sm:py-0">
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">
                    <PhoneIcon />
                  </span>
                  <span>514 736 809</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">
                    <MailIcon />
                  </span>
                  <span>parapety-anmar@wp.pl</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">
                    <PinIcon />
                  </span>
                  <span>Mierki 15, 11-015 Olsztynek</span>
                </div>
              </div>
            </div>

            <div className="relative basis-3/5 p-2">
              <Image src="/mapa.png" alt="Location Map" layout="fill" />
            </div>
          </div>

          <a
            href="https://goo.gl/maps/dt5eMabCYqTBtqQ46"
            className="absolute -bottom-4 left-[50%] translate-x-[-50%] sm:left-[30%] bg-red-600 hover:bg-red-500 uppercase px-8 py-3 text-white font-medium whitespace-nowrap"
          >
            Jak Dojechać &#187;
          </a>
        </div>
      </div>
    </section>
  );
}
