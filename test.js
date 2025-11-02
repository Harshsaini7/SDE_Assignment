const timeRangeModule = require('./mergeTimeRanges.js');

console.log('Example 1:');
const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold1 = 200;
console.log('Input:', ranges1, 'Threshold:', threshold1);
console.log('Output:', timeRangeModule.mergeTimeRanges(ranges1, threshold1));
console.log('Expected: [[1000, 2000], [2500, 4100], [8000, 9500]]');
console.log('');

console.log('Example 2:');
const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
const threshold2 = 4;
console.log('Input:', ranges2, 'Threshold:', threshold2);
console.log('Output:', timeRangeModule.mergeTimeRanges(ranges2, threshold2));
console.log('Expected: [[0, 10], [15, 20], [25, 30]]');
console.log('');

console.log('Example 3:');
const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
const threshold3 = 3;
console.log('Input:', ranges3, 'Threshold:', threshold3);
console.log('Output:', timeRangeModule.mergeTimeRanges(ranges3, threshold3));
console.log('Expected: [[0, 35]]');
