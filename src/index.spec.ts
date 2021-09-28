import {JWT} from '.';

describe('JWT', () => {
  const jwtSecret = 'secret';
  const hello = {hi: 'world'};
  const token = JWT.sign({data: {hello}, expiresInSeconds: 10, jwtSecret});
  const verified = JWT.verify({token, jwtSecret});

  it('should sign an object', () => {
    expect(typeof token).toEqual('string');
  });

  it('should return object when verified', () => {
    expect(verified.hello).toEqual(hello);
  });
});
