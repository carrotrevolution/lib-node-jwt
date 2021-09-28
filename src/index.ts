/* eslint-disable @typescript-eslint/no-explicit-any */
import {sign, verify} from 'jsonwebtoken';

export abstract class JWT {
  static sign({
    payload,
    expiresIn,
    secret,
  }: {
    payload: any;
    expiresIn: number;
    secret: string;
  }): string {
    return sign(payload, secret, {
      expiresIn,
    });
  }

  static verify({token, secret}: {token: string; secret: string}): any {
    return verify(token, secret);
  }

  static fromBearer({bearer, secret}: {bearer: string; secret: string}) {
    try {
      const token = typeof bearer === 'string' && bearer.split('Bearer ')[1];
      const data = token && this.verify({token, secret});
      return data;
    } catch (err) {
      return undefined;
    }
  }
}
