// A generic storage class

class Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }

  remove(index: number, item: T) {
    this.items[index] = item;
  }
}

// Example usage:

// Store strings
const stringStorage = new Storage<string>();
stringStorage.add("Hello");
stringStorage.add("World");
console.log(stringStorage.getAll());

// Store numbers
const numberStorage = new Storage<number>();
numberStorage.add(42);
numberStorage.add(99);
console.log(numberStorage.getAll());

// Store objects
interface User {
  name: string;
  age: number;
}

const userStorage = new Storage<User>();
userStorage.add({ name: "John", age: 25 });
userStorage.add({ name: "Jane", age: 30 });
console.log(userStorage.getAll());
