const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
const axios = require("axios");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = async function(date) {
  let queryDate = dayjs(date);
  let url = "https://www.twse.com.tw/holidaySchedule/holidaySchedule";
  const res = await axios.get(url, {
    params: {
      response: "html",
      queryYear: queryDate.year() - 1911
    }
  });
  const dom = new JSDOM(res.data);
  let td = dom.window.document.querySelectorAll(
    "table > tbody > tr > td:nth-child(2)"
  );
  let holidays = []
    .concat(...[...td].map(e => e.innerHTML.split("<br>")))
    .map(e => new dayjs(`${queryDate.year()}年${e}`, "YYYY年M月D日"));
  return !!holidays.find(e => e.isSame(queryDate));
};
