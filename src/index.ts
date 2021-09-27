/* eslint-disable @typescript-eslint/no-explicit-any */
import {sign, verify} from 'jsonwebtoken';

export abstract class JWT {
  static sign({
    data,
    expiresInSeconds,
    jwtSecret,
  }: {
    data: any;
    expiresInSeconds: number;
    jwtSecret: string;
  }): string {
    return sign(data, jwtSecret, {
      expiresIn: expiresInSeconds,
    });
  }

  static verify({token, jwtSecret}: {token: string; jwtSecret: string}): any {
    return verify(token, jwtSecret);
  }

  static fromBearer({
    authorization,
    jwtSecret,
  }: {
    authorization: string;
    jwtSecret: string;
  }) {
    try {
      const token =
        typeof authorization === 'string' && authorization.split('Bearer ')[1];
      const data = token && this.verify({token, jwtSecret});
      return data;
    } catch (err) {
      return undefined;
    }
  }
}
