const arithmetica = require('../arithmetica.js');

test('2+5', () => {
    expect(arithmetica.method("2", "5")).toBe(7);
});

test('5+5', () => {
    expect(arithmetica.method("5", "5")).toBe(10);
});

test('2+9', () => {
    expect(arithmetica.method("2", "9")).toBe(11);
});

test('2+20', () => {
    expect(arithmetica.method("2", "20")).toBe(22);
});

test('2+15', () => {
    expect(arithmetica.method("2", "15")).toBe(17);
});

test('2-5', () => {
    expect(arithmetica.othermethod("2", "5")).toBe(-3);
});

test('5-5', () => {
    expect(arithmetica.othermethod("5", "5")).toBe(0);
});

test('2-9', () => {
    expect(arithmetica.othermethod("2", "9")).toBe(-7);
});
