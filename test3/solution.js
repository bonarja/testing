function MyPromise(callback) {
    var dispatcherResolve, dispatcherReject;

    function reject(value) {
        setTimeout(() => {
            typeof dispatcherReject === "function" && dispatcherReject(value);
        }, 0);
    }

    function resolve(value) {
        setTimeout(() => {
            try {
                typeof dispatcherResolve === "function" &&
                    dispatcherResolve(value);
            } catch (error) {
                reject(error);
            }
        }, 0);
    }

    this.then = function (c) {
        dispatcherResolve = c;
        return this;
    };

    this.catch = function (c) {
        dispatcherReject = c;
        return this;
    };

    callback(resolve, reject);
}

let promise = new MyPromise((resolve, reject) => {
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
});

promise
    .then((successMessage) => {
        console.log("Yes! " + successMessage);
    })
    .catch((failMessage) => {
        console.log("No! " + failMessage);
    });
