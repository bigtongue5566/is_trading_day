import test from 'ava'
import isWeekend from '../src/isWeekend'
import isHoliday from '../src/isHoliday'
import isTradingday from '../src/isTradingDay'


test('is weekend test', t => {
    t.false(isWeekend('2019-9-12'));
    t.false(isWeekend('2019-9-13'));
    t.true(isWeekend('2019-9-14'));
    t.true(isWeekend('2019-9-15'));
    t.false(isWeekend('2019-10-10'));
    t.false(isWeekend('2019-10-11'));
});

test('is holiday test', async t =>{
    t.false(await isHoliday('2019-9-12'));
    t.true(await isHoliday('2019-9-13'));
    t.false(await isHoliday('2019-9-14'));
    t.false(await isHoliday('2019-9-15'));
    t.true(await isHoliday('2019-10-10'));
    t.true(await isHoliday('2019-10-11'));
})

test('is trading day test', async t =>{
    t.true(await isTradingday('2019-9-12'));
    t.false(await isTradingday('2019-9-13'));
    t.false(await isTradingday('2019-9-14'));
    t.false(await isTradingday('2019-9-15'));
    t.false(await isTradingday('2019-10-10'));
    t.false(await isTradingday('2019-10-11'));
})