const {getNumbers} = require('../arithmetica')
test('2+5', ()=>{expect(getNumbers("2","5")).toBe(7)});
test('5+5', ()=>{expect(getNumbers("5","5")).toBe(10)});
test('2+9', ()=>{expect(getNumbers("2","9")).toBe(11)});
test('2+20', ()=>{expect(getNumbers("2","20")).toBe(22)});
test('2+15', ()=>{expect(getNumbers("2","15")).toBe(17)});