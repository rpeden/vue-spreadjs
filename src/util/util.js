export const groupBySum = (items, groupByProp, sumProp) => {
    var groups = new Map();
    for (const item of items) {
      if (item[groupByProp] && item[sumProp]) {
        const groupBy = item[groupByProp];
        if (groups.has(groupBy)) {
          const currentValue = groups.get(groupBy);
          groups.set(groupBy, currentValue + item[sumProp]);
        } else {
          groups.set(groupBy, item[sumProp]);
        }
      }
    }
    const sums = [];
    for (const [key, value] of groups) {
      sums.push({
        [groupByProp]: key,
        [sumProp]: value
      });
    }
    return sums;
  };
  