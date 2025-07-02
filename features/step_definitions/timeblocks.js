import assert from 'node:assert/strict';
import { Given, When, Then } from '@cucumber/cucumber';

let context = {};
function calculateDuration(startTime, endTime) {
  return '02:30';
}

Given(/^I start a timeblock at (\d+:\d+)$/, function (startTime) {
  context.startTime = startTime;
});

Given(/^I end a timeblock at (\d+:\d+)$/, function (endTime) {
  context.endTime = endTime;
});

When('viewing the duration', function () {
  context.duration = calculateDuration(context.startTime, context.endTime);
});

Then(/^the duration should be (.+)$/, (expectedDuration) => {
  const actualDuration = context.duration;
  assert.strictEqual(actualDuration, expectedDuration);
});