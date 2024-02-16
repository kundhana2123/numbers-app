const { getNumbers, subtractNumbers } = require('../arithmetica.js');

test('2+5', () => {
    expect(getNumbers("2", "5")).toBe(7);
});

test('5+5', () => {
    expect(getNumbers("5", "5")).toBe(10);
});

test('2+9', () => {
    expect(getNumbers("2", "9")).toBe(11);
});

test('2+20', () => {
    expect(getNumbers("2", "20")).toBe(22);
});

test('2+15', () => {
    expect(getNumbers("2", "15")).toBe(17);
});

test('2-5', () => {
    expect(subtractNumbers("2", "5")).toBe(-3);
});

test('5-5', () => {
    expect(subtractNumbers("5", "5")).toBe(0);
});

test('2-9', () => {
    expect(subtractNumbers("2", "9")).toBe(-7);
});
