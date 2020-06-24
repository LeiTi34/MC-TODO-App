import { JwtStrategy } from './jwt.strategy';

describe('JwtStartegy', () => {
  it('should be defined', () => {
    expect(new JwtStrategy()).toBeDefined();
  });
});
