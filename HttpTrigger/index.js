const isTradingDay = require('../src/isTradingDay')
const dayjs = require('dayjs');
module.exports = async function(context, req) {
  let date = dayjs(req.query.date);
  if (req.query.date && date.isValid()) {  
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: { isTradingDay: await isTradingDay(date)}
    };
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a date on the query string yyyy-mm-dd'
    };
  }
};