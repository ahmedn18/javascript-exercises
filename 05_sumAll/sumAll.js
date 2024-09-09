const sumAll = function(start, end) {
    if (start < 0 || !Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    // Swap elements to be able to use gauss formula
    if (start > end) [start, end] = [end, start];

    // to avoid zero result (1 - 1) = 0
    if (start > 1) return (end * start * (end + 1) * (start - 1) / 2);
    
    else return (end * (end + 1) / 2);
};

// Do not edit below this line
module.exports = sumAll;
