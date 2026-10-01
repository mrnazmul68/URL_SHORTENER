import { urlRepository } from "../repository/url.repository.js";
import { ApiError } from "../utils/apiError.js";
import { randomeString } from "../utils/shortUrl.js";

const repo = urlRepository();

export const urlService = () => {
  //todo: short url without users
  const shortUrlWithoutUser = async (data) => {
    if (!data) {
      throw new ApiError(400, "Url not found");
    }
    const shortUrl = randomeString();
    return await repo.shortUrl({
      fullUrl: data,
      shortUrl: shortUrl,
    });
  };

  //todo: short url with users
  const shortUrlWithUser = async (data) => {
    if (!data) {
      throw new ApiError(400, "Url not found");
    }
    const shortUrl = randomeString();
    return await repo.shortUrl({
      fullUrl: data,
      shortUrl: shortUrl,
    });
  };

  //todo: find short url
  const findShortUrl = async (shortUrl) => {
    if (!shortUrl) {
      throw new ApiError(400, "Url not found");
    }

    const dbShortUrl = await repo.findShortUrl(shortUrl);
    if (!dbShortUrl) {
      throw new ApiError(400, "Url not found");
    }
    return dbShortUrl;
  };

  //todo: inc click count
  const incClickCount = async (shortUrl) => {
    if (!shortUrl) {
      throw new ApiError(400, "Url not found");
    }
    return await repo.incClickCount(shortUrl);
  };

  return {
    shortUrlWithoutUser,
    shortUrlWithUser,
    findShortUrl,
    incClickCount,
  };
};
