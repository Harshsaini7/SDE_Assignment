# Merge Time Ranges

A simple Node.js module to merge overlapping or close time ranges based on a configurable threshold.

## What it does

This module takes an array of time ranges and merges them together when they overlap or are separated by a gap smaller than a specified threshold. It's useful for consolidating periods of activity, uptime tracking, or any scenario where you need to combine time intervals.

## Installation

No external dependencies required. Just make sure you have Node.js installed on your system.

## Usage

```javascript
const { mergeTimeRanges } = require('./mergeTimeRanges.js');

const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100]
];

const threshold = 200;

const result = mergeTimeRanges(ranges, threshold);
console.log(result);
```

## Function Parameters

- `ranges` - Array of time ranges. Each range is `[start, end]` where start is inclusive and end is exclusive
- `threshold` - Maximum gap (in milliseconds) between ranges that should still be merged

## How to Run

### Option 1: Using the test file

```bash
node test.js
```

This will run all the example test cases and show you the output.

### Option 2: Create your own test

Create a new file (e.g., `myTest.js`):

```javascript
const { mergeTimeRanges } = require('./mergeTimeRanges.js');

const ranges = [[0, 10], [12, 15], [17, 25], [27, 35]];
const threshold = 3;

console.log(mergeTimeRanges(ranges, threshold));
```

Then run:
```bash
node myTest.js
```

### Option 3: Node.js REPL

```bash
node
> const { mergeTimeRanges } = require('./mergeTimeRanges.js')
> mergeTimeRanges([[0, 10], [15, 20]], 4)
```

## Examples

### Example 1: Overlapping and close ranges
```javascript
const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold = 200;

mergeTimeRanges(ranges, threshold);
// Output: [[1000, 2000], [2500, 4100], [8000, 9500]]
```

Explanation:
- `[1000, 2000]` stays separate (gap to next is 500ms > threshold)
- `[2500, 4000]` and `[3900, 4100]` merge because they overlap
- `[8000, 9000]` and `[9050, 9500]` merge (gap is 50ms < threshold)

### Example 2: No merging needed
```javascript
const ranges = [[0, 10], [15, 20], [25, 30]];
const threshold = 4;

mergeTimeRanges(ranges, threshold);
// Output: [[0, 10], [15, 20], [25, 30]]
```

All gaps are larger than the threshold, so no ranges get merged.

### Example 3: Merge all ranges
```javascript
const ranges = [[0, 10], [12, 15], [17, 25], [27, 35]];
const threshold = 3;

mergeTimeRanges(ranges, threshold);
// Output: [[0, 35]]
```

All gaps are within the threshold, so everything merges into one range.

## How it works

1. Sorts all ranges by their start time
2. Iterates through the sorted ranges
3. If the gap between the current range and the last merged range is within the threshold, extends the merged range
4. Otherwise, starts a new merged range
5. Returns the array of merged ranges

## Notes

- Input ranges don't need to be sorted
- Empty or null input returns an empty array
- Time values are in milliseconds (UNIX timestamps)
- Ranges use `[start, end)` format (start inclusive, end exclusive)
