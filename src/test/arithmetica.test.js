import { getNumbers, subtractNumbers } from '../arithmetica.js';
// const {subtractNumbers} = require('../arithmetica')
test('2+5', ()=>{expect(getNumbers.method("2","5")).toBe(7)});
test('5+5', ()=>{expect(getNumbers.method("5","5")).toBe(10)});
test('2+9', ()=>{expect(getNumbers.method("2","9")).toBe(11)});
test('2+20', ()=>{expect(getNumbers.method("2","20")).toBe(22)});
test('2+15', ()=>{expect(getNumbers.method("2","15")).toBe(17)});



test('2-5', ()=>{expect(getNumbers.othermethod("2","5")).toBe(-3)});
test('5-5', ()=>{expect(getNumbers.othermethod("5","5")).toBe(0)});
test('2-9', ()=>{expect(getNumbers.othermethod("2","9")).toBe(-7)});
