// for (var i = 0; i < 5; i++) {
//     var n = i + 0;
//     setTimeout(function () {
//         console.log(n);
//     }, 1000);
// }

Array.prototype.MyAsignForEach = function (callback) {
    var length = this.length;
    var index = -1;

    return new Promise(function (resolve) {
        function next() {
            index++;
            if (index >= length) return resolve();
            callback(this[index], index, next);
        }
        next();
    });
};

Array(5)
    .fill(0)
    .MyAsignForEach((x, index, next) => {
        setTimeout(() => {
            console.log(index);
            next();
        }, 1000);
    })
    .then(() => {
        console.log("finalizo el recorrido");
    });
