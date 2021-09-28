import {JWT} from '../src';

describe('JWT', () => {
  const secret = 'secret';
  const hello = {hi: 'world'};
  const token = JWT.sign({payload: {hello}, expiresIn: 10, secret});
  const verified = JWT.verify({token, secret});

  it('should sign an object', () => {
    expect(typeof token).toEqual('string');
  });

  it('should return object when verified', () => {
    expect(verified.hello).toEqual(hello);
  });
});
