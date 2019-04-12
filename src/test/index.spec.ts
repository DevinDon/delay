import { delay } from '../main';

describe('Hello, world!', () => {

  let fn: () => string;

  beforeAll(done => {
    fn = () => 'Hello, world!';
    done();
  });

  it('should say `Hello, world!`', async done => {
    expect(await delay(100, fn)).toEqual('Hello, world!');
    done();
  });

});
