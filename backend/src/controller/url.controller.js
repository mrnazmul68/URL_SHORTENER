import { urlService } from "../service/url.service.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const service = urlService();

//todo: short url
export const shortUrl = asyncHandler(async (req, res) => {
  const { fullUrl } = req.body;
  const response = await service.shortUrlWithoutUser(fullUrl);
  response.shortUrl = `${process.env.BACKEND_URL}/${response.shortUrl}`;

  return new ApiResponse(200, response, "Url shorted successfully").send(res);
});

//todo: redirect to main url
export const redirectToFullUrl = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await service.incClickCount(id);
  const url = await service.findShortUrl(id);
  res.redirect(url.fullUrl);
});
