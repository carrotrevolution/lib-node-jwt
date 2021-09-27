import {JWT} from '.';

describe('JWT', () => {
  const jwtSecret = 'secret';
  const data = {hello: 'world'};
  const token = JWT.sign({data, expiresInSeconds: 10, jwtSecret});
  const verified = JWT.verify({token, jwtSecret});

  it('should sign an object', () => {
    expect(typeof token).toEqual('string');
  });

  it('should return object when verified', () => {
    expect(verified.data).toEqual(data);
  });
});
