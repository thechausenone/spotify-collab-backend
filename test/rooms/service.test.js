const sinon = require('sinon');
const sut = require('../../src/rooms/service');
const mockRoomsDB = require('../../src/rooms/db');

const sandbox = sinon.sandbox.create();

beforeEach(() => {
  sandbox.stub(mockRoomsDB);
});

afterEach(() => {
  sandbox.restore();
});

const validRoom = {
  _id: 'abc123',
  name: 'valid room #1',
  description: 'test description',
  users: [],
  creator: 'me'
};

describe('createRoom', () => {
  test('passes correct argument to the db', async () => {
    // Arrange
    const expectedUpdate = {
      name: validRoom.name,
      description: validRoom.description,
      creator: validRoom.creator
    };

    mockRoomsDB.createRoom = jest.fn(() => {});

    // Act
    await sut.createRoom(validRoom);

    // Assert
    expect(mockRoomsDB.createRoom).toHaveBeenCalledWith(expectedUpdate);
  });

  test('returns the created room', async () => {
    // Arrange
    const expectedResult = validRoom;

    mockRoomsDB.createRoom = jest.fn(() => validRoom);

    // Act
    const actual = await sut.createRoom({
      name: validRoom.name,
      description: validRoom.description,
      creator: validRoom.creator
    });

    // Assert
    expect(actual).toEqual(expectedResult);
  });
});

describe('findAllRooms', () => {
  test('returns all available rooms', async () => {
    // Arrange
    const expectedResult = [validRoom];

    mockRoomsDB.findAllRooms = jest.fn(() => [validRoom]);

    // Act
    const actual = await sut.findAllRooms();

    // Assert
    expect(actual).toEqual(expectedResult);
  });
});
