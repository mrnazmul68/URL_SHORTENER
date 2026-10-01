import UrlForm from "../components/UrlForm";


const display = "font-['Bricolage_Grotesque',sans-serif]";

const Home = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-black px-6 font-['Instrument_Sans',system-ui,sans-serif] text-[#f3f2ee]">
      {/* one quiet glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-55 left-1/2 h-150 w-255 -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(143,123,255,0.22),rgba(94,200,255,0.07)_55%,transparent_75%)]"
      />

      {/* nav */}
      {/* <header className="relative z-10 mx-auto flex w-full max-w-270 items-center justify-between py-7">
        <a
          href="/"
          className={`${display} inline-flex items-center gap-2.5 text-2xl font-extrabold tracking-tighter`}
        >
          <span
            aria-hidden="true"
            className="h-5.5 w-5.5 rounded-[7px_7px_7px_2px] bg-linear-to-br from-[#8f7bff] to-[#5ec8ff]"
          />
          snip
        </a>
        <nav className="flex gap-5 text-[0.95rem] font-medium sm:gap-7">
          <a
            href="/"
            className="text-[#8b8b97] transition hover:text-[#f3f2ee] focus-visible:text-[#f3f2ee]"
          >
            My links
          </a>
          <a
            href="/"
            className="text-[#8b8b97] transition hover:text-[#f3f2ee] focus-visible:text-[#f3f2ee]"
          >
            Sign in
          </a>
        </nav>
      </header> */}

      {/* hero */}
      <main className="relative z-10 mx-auto w-full max-w-270 flex-1 pb-24 pt-10 text-center sm:pt-18 sm:pb-24">
        <h1
          className={`${display} mb-5 text-[clamp(2.8rem,8vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.045em]`}
        >
          Long links in.
          <br />
          Short links out.
        </h1>
        <p className="mx-auto mb-12 max-w-115 text-lg leading-relaxed text-[#8b8b97]">
          Paste any URL and get a clean link you can share anywhere.
        </p>

        <UrlForm />

      </main>

      {/* footer */}
      {/* <footer className="relative z-10 mx-auto flex w-full max-w-270 flex-wrap justify-between gap-3 border-t border-[#1a1a21] py-7 text-sm text-[#5d5d69]">
        <span>© {new Date().getFullYear()} snip</span>
        <span>Made for sharing, not tracking.</span>
      </footer> */}
    </div>
  );
};

export default Home;
