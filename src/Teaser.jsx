import logoUrl from "./img/dw.png";
import NewsletterForm from "./NewsletterForm";

const Teaser = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center self-center">
      <div className="flex w-40">
        <img src={logoUrl} alt="DW FTIMS Event Logo" />
      </div>
      <h1 className="mb-10 pb-4 text-center text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl">
        Coming Soon
      </h1>
      <div
        style={{ color: "#8a8f98" }}
        className="flex w-9/12 max-w-2xl flex-col items-center justify-center gap-8"
      >
        <p className="text-center text-lg font-normal lg:text-xl">
          Prace nad wydarzeniem trwają - jeżeli chcesz być na bieżąco, zostaw
          nam swój adres e-mail, a powiadomimy Cię jak tylko uruchomimy stronę z
          programem Dnia Wydziału WFTIMS 2023
        </p>
        <div className="w-3/4 rounded-md bg-stone-900 p-2 sm:w-full">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default Teaser;
