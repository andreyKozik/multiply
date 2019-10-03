module.exports = function multiply(a, b) {
    var result = [];
    for (var i = a.length - 1; i >= 0; i--) {
        for (var j = b.length - 1; j >= 0; j--) {
            var m = a[i] * b[j];
            result[i + j] = (result[i + j] > 0) ? result[i + j] + m : m;
        }
    }
    for (var i = result.length - 1; i >= 0; i--) {
        if (i > 0) {
            result[i - 1] = result[i - 1] + Math.floor(result[i] / 10);
            result[i] = result[i] % 10;
        }
    }
    return result.join('');
}
