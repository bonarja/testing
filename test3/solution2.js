// simple callback

function myPromise(resolve, reject) {
    setTimeout(function () {
        if (Math.round(Math.random()) === 1) {
            resolve("Success!");
        } else {
            reject("Fail!");
        }
    }, 1000);
}

myPromise(
    (successMessage) => console.log("Yes! " + successMessage),
    (failMessage) => console.log("No! " + failMessage)
);
