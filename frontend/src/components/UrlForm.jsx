import { useState } from "react";
import { shortUrl } from "../service/url.service.js";
import { getApiErrorMessage } from "../utils/error.js";

const UrlForm = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const formHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = await shortUrl(input);
      setResult(data);
      setInput("");
      setCopied(false);
    } catch (error) {
      setError(getApiErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result?.data?.shortUrl) return;

    await navigator.clipboard.writeText(result.data.shortUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="mx-auto w-full max-w-3xl text-[#f3f2ee]">
      {error && <h1 className="text-red-500 font-bold">{error}</h1>}
      <form onSubmit={formHandler} className="flex flex-col gap-3.5">
        {/* main input bar */}
        <div className="group flex flex-wrap items-center gap-2.5 rounded-2xl border border-[#23232c] bg-[#0c0c10] p-3 transition focus-within:border-[#8f7bff] focus-within:shadow-[0_0_0_4px_rgba(143,123,255,0.16),0_20px_60px_-20px_rgba(143,123,255,0.45)] sm:flex-nowrap sm:py-2 sm:pl-4.5 sm:pr-2">
          <input
            type="url"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            required
            placeholder="Paste your long link here"
            aria-label="Long URL"
            className="min-w-0 flex-1 basis-[calc(100%-40px)] bg-transparent px-1 py-3.5 text-[1.05rem] text-[#f3f2ee] outline-none placeholder:text-[#5d5d69] sm:basis-auto"
          />

          <button
            type="submit"
            className="w-full flex-none cursor-pointer rounded-xl bg-linear-to-br from-[#8f7bff] to-[#5ec8ff] px-6 py-3.5 text-[0.98rem] font-semibold text-[#07070b] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white active:scale-[0.97] sm:w-auto"
          >
            {loading ? " Shortening link..." : " Shorten link"}
          </button>
        </div>
      </form>

      {/* result */}
      {result && (
        <div
          role="status"
          className="mt-6 flex flex-col gap-4 rounded-[14px] border border-l-[3px] border-[#23232c] border-l-[#8f7bff] bg-[#0c0c10] px-5 py-4.5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex min-w-0 flex-col gap-1 text-left">
            <span
              title={result.data.fullUrl}
              className="truncate text-[0.85rem] text-[#8b8b97] line-through decoration-[#4a4a55]"
            >
              {result.data.fullUrl}
            </span>
            <span className="bg-linear-to-br from-[#8f7bff] to-[#5ec8ff] bg-clip-text text-[1.35rem] font-semibold tracking-tight text-transparent">
              {result.data.shortUrl}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className={`flex-none cursor-pointer rounded-[10px] border px-5 py-2.75 text-[0.92rem] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white ${
              copied
                ? "border-[#5ec8ff] text-[#5ec8ff]"
                : "border-[#23232c] text-[#f3f2ee] hover:border-[#8f7bff] hover:bg-[#8f7bff]/10"
            }`}
          >
            {copied ? "Copied" : "Copy link"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
