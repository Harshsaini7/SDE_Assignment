const mergeTimeRanges = (ranges, threshold) => {
  if (!ranges || ranges.length === 0) {
    return [];
  }

  const sorted = ranges.slice().sort((a, b) => a[0] - b[0]);
  const merged = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const lastMerged = merged[merged.length - 1];
    const gap = current[0] - lastMerged[1];

    if (gap <= threshold) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      merged.push(current);
    }
  }

  return merged;
};

module.exports = {
  mergeTimeRanges
};
