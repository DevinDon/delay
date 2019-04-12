import { delay } from '../main';

// tslint:disable: no-console

async function awaitUsageWithDelayOnly() {
  console.debug(`Before awaitUsageWithDelayOnly`);
  await delay(1000);
  console.debug(`delay awaitUsageWithDelayOnly`);
}

async function awaitUsageWithDelayAndFunction() {
  console.debug(`Before awaitUsageWithDelayAndFunction`);
  console.log(await delay(1000, () => 'Hello, world!'));
  console.debug(`delay awaitUsageWithDelayAndFunction`);
}

async function promiseUsageWithDelayOnly() {
  console.debug(`Before promiseUsageWithDelayOnly`);
  delay(1000)
    .then(() => {
      console.debug('delay promiseUsageWithDelayOnly');
    });
}

async function promiseUsageWithDelayAndFunction() {
  console.debug(`Before promiseUsageWithDelayAndFunction`);
  delay(1000, () => 'Hello, world!')
    .then(v => {
      console.log(v);
      console.debug('delay promiseUsageWithDelayAndFunction');
    });
}

awaitUsageWithDelayOnly();
awaitUsageWithDelayAndFunction();
promiseUsageWithDelayOnly();
promiseUsageWithDelayAndFunction();
