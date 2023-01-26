const { default: axios } = require("axios");
require("dotenv").config();

const ClientId = process.env.ClientId;
const ClientSecret = process.env.ClientSecret;
const URL = "https://openapi.naver.com/v1/search/book?query=";

const getBookData = async (start, display, searchBook) => {
  let data;
  await axios
    .get(`${URL}${searchBook}&start=${start}&display=${display}`, {
      headers: {
        "X-Naver-Client-Id": `${ClientId}`,
        "X-Naver-Client-Secret": `${ClientSecret}`,
      },
    })
    .then((res) => {
      data = res.data;
    });
  return data;
};
const book = async (req, res) => {
  const { start, display, searchBook } = req.params;
  try {
    const data = await getBookData(start, display, searchBook);

    res.status(200).json({
      data,
    });
  } catch (err) {
    res.status(400).json({
      message: "에러",
    });
  }
};

module.exports = {
  book,
};
