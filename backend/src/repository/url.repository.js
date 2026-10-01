import { UrlModel } from "../model/url.model.js";

const urlModel = UrlModel;

export const urlRepository = () => {
  //todo: short url
  const shortUrl = async (data) => {
    return await urlModel.create(data);
  };

  //todo: find short url
  const findShortUrl = async (shortUrl) => {
    return await urlModel.findOne({ shortUrl });
  };

  //todo: inc click count
  const incClickCount = async (shortUrl) => {
    return await urlModel.findOneAndUpdate(
      { shortUrl },
      { $inc: { clickCount: 1 } },
    );
  };

  return {
    shortUrl,
    findShortUrl,
    incClickCount,
  };
};
