export default function GetInTouch() {
  return (
    <>
      <section className="max-w-xs md:max-w-2xl lg:max-w-6xl mx-auto flex flex-col items-center justify-between bg-white rounded-lg p-2 shadow-lg w-96 py-8 mt-5">
        <h2 className="ml-2 text-2xl text-red-600">Napisz do nas</h2>

        <form
          className="mt-7 flex flex-col gap-y-3"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>

          <div className="flex flex-col gap-y-1 ">
            <label htmlFor="name" className="ml-1.5">
              Imię
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Twoje imię *"
              required
              className="border-2 p-1 rounded border-gray-200 text-sm"
            />
          </div>

          <div className="flex flex-col gap-y-1 ">
            <label htmlFor="email" className="ml-1.5">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Twój email *"
              required
              className="border-2 p-1 rounded border-gray-200 text-sm"
            />
          </div>

          <div className="flex flex-col gap-y-1 relative">
            <label htmlFor="phone" className="ml-1.5">
              Telefon
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Twój numer kontaktowy"
              className="border-2 p-1 rounded border-gray-200 text-sm"
            />
            <div className="absolute text-sm  text-blue-600 top-2 right-0">
              opcjonalne
            </div>
          </div>

          <div className="flex flex-col gap-y-1 ">
            <label htmlFor="subject" className="ml-1.5">
              Temat
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Temat *"
              required
              className="border-2 p-1 rounded border-gray-200 text-sm"
            />
          </div>

          <div className="flex flex-col gap-y-1 w-72 ">
            <label htmlFor="message" className="ml-1.5">
              Wiadomość
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="8"
              required
              placeholder="Twoja wiadomość *"
              className="border-2 p-1 rounded border-gray-200 text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="duration-150 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-900 mt-4 text-white rounded-md shadow-md"
          >
            Wyślij wiadomość
          </button>
        </form>
      </section>
      <div className="h-[100px]"></div>
    </>
  );
}
