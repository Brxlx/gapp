import { UniqueObjectId } from './unique-object-id';

describe('ObjectId Test', () => {
  it('should be able to create a new ObjectId', async () => {
    const newObjectId = new UniqueObjectId();
    // console.log(newObjectId);

    const newObjectId2 = new UniqueObjectId();
    // console.log(newObjectId2);

    const newObjectId3 = new UniqueObjectId()._unsafeGenerateObjectId();
    // console.log(newObjectId3);

    expect(newObjectId).toBeInstanceOf(UniqueObjectId);
    expect(newObjectId.toString().length).toEqual(24);
    expect(newObjectId.isValid()).toBeTruthy();
    expect(newObjectId2.isValid()).toBeTruthy();
    expect(new UniqueObjectId(newObjectId3).isValid()).toBeTruthy();
  });

  it('should not be able to create a new ObjectId from invalid string length', async () => {
    const newObjectId = new UniqueObjectId('23223dqwede3122222222222');
    // console.log(newObjectId);

    expect(new UniqueObjectId(newObjectId.toValue()).isValid()).toBeFalsy();
  });
});
