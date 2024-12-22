const { sum } = require('./app');

test('hello world!', () => {
	expect(sum(1, 2)).toBe(3);
});