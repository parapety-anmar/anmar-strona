import Image from "next/image";
import FacebookLogo from "../utils/FacebookLogo";

export default function Hero() {
  return (
    <>
      <section>
        <header className="relative lg:h-[750px] bg-red-600 lg:bg-transparent lg:bg-[url('/bg.png')] bg-cover bg-no-repeat bg-center">
          <div className="container max-w-xs md:max-w-2xl lg:max-w-5xl mx-auto flex justify-between items-center">
            <div>
              <Image src="/logo.png" alt="Logo" width={200} height={100} />
            </div>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-10">
                <li className="uppercase text-white hover:border-t-2 hover:border-red-600">
                  <a href="#home">Strona główna</a>
                </li>
                <li className="uppercase text-white hover:border-t-2 hover:border-red-600">
                  <a href="#realizations">Realizacje</a>
                </li>
                <li className="uppercase text-white hover:border-t-2 hover:border-red-600">
                  <a href="#testimonials">Opinie</a>
                </li>
                <li className="uppercase text-white hover:border-t-2 hover:border-red-600">
                  <a href="#contact">Kontakt</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="container max-w-xs md:max-w-2xl lg:max-w-6xl mx-auto mt-5 lg:-mt-48">
          <h3 className="text-red-500 text-xl font-semibold">
            Oferta Firmy An-Mar skierowana jest do:
          </h3>
          <p className="lg:w-2/5 mt-2 text-gray-500">
            firm budowlanych, hurtowni, firm zajmujących się sprzedażą i
            produkcją okien, jak i również dla klienta indywidualnego
          </p>
          <h4 className="my-2 text-lg text-gray-500 font-semibold">
            W ramach współpracy zapewniamy Państwu:
          </h4>
          <ul className="list-inside list-disc marker:text-gray-500 text-gray-500">
            <li>dbałość o najwyższą jakość oferowanych produktów i usług,</li>
            <li>terminowe dostawy zgodnie z harmonogramem,</li>
            <li>
              elastyczne podejście do klienta oraz profesjonalną obsługę i
              doradztwo w sprawach technicznych
            </li>
            <li>rabaty dla stałych klientów</li>
          </ul>
          <div className="mt-2 flex items-center text-gray-500">
            Nasze social media:
            <a
              href="https://www.facebook.com/An-Mar-Parapety-112282037955184/?ref=pages_you_manage"
              aria-label="Facebook"
            >
              <FacebookLogo />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
