const isHoliday = require('./isHoliday');
const isWeekend = require('./isWeekend');

module.exports = async function(date){
    return !isWeekend(date) && !await isHoliday(date)
}