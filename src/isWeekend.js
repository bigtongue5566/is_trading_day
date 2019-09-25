const dayjs = require("dayjs");

module.exports = function isWeekend(date) {
  return dayjs(date).day() === 0 || dayjs(date).day() === 6;
};
