module.exports = function fn(arg) {
    if (typeof arg === "number") {
        return null;
    } else if (typeof arg === "string") {
        let reverseStr = arg
            .split("")
            .reverse()
            .join("");
        return reverseStr;
    } else if (Array.isArray(arg)) {
        let reverseArray = [];
        for (let i = 0; i < arg.length; i++) {
            reverseArray.push(fn(arg[i]));
        }
        return reverseArray;
    }
};
