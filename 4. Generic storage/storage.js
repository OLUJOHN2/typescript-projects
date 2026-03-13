// A generic storage class
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Storage = /** @class */ (function () {
    function Storage() {
        this.items = [];
    }
    Storage.prototype.add = function (item) {
        this.items.push(item);
    };
    Storage.prototype.getAll = function () {
        return __spreadArray([], this.items, true);
    };
    Storage.prototype.remove = function (index, item) {
        this.items[index] = item;
    };
    return Storage;
}());
// Example usage:
// Store strings
var stringStorage = new Storage();
stringStorage.add("Hello");
stringStorage.add("World");
console.log(stringStorage.getAll());
// Store numbers
var numberStorage = new Storage();
numberStorage.add(42);
numberStorage.add(99);
console.log(numberStorage.getAll());
var userStorage = new Storage();
userStorage.add({ name: "John", age: 25 });
userStorage.add({ name: "Jane", age: 30 });
console.log(userStorage.getAll());
