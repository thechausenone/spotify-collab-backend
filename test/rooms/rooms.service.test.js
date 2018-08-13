const sut = require('../../src/rooms/rooms.service');

test('adds 1 + 2 to equal 3', () => {
  expect(sut.sum(1, 2)).toBe(3);
});
