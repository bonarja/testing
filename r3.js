var rgb = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
};

var wb = {
    white: "#FFFFFF",
    black: "#000000",
};

// Polyfill
function assign() {
    var target = arguments[0];
    if (!target || typeof target !== "object") throw "No target";

    for (var index = 0; index < arguments.length; index++) {
        if (index === 0) continue;
        var source = arguments[index];
        if (typeof source !== "object") {
            throw "Source is not an object";
        }
        for (var key in source) {
            target[key] = source[key];
        }
    }
    return target;
}

var colors = assign({}, rgb, wb);
console.log(colors);
