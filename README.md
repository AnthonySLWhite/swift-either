# Swift-Either

Swift-Either is a utility for making it easier to catch errors and handling them

## Installation

Use the package manager [NPM](https://www.npmjs.com/package/@anthonywhite/swift-either) to install Swift-Either.

```bash
npm i swift-either --save
```

## Usage

```javascript
import swiftEither from "swift-either";
const either = swiftEither(1); //pass 1 if you want errors to be logged automaticly

function createUser(user) {
  return either(left => {
    //Write your code

    !user ? left("No user was inserted") : 0; // if true then code execution is stopped
    console.log("User parameter exists");

    // Write your code

    user === "John Doe"
      ? left(user, e => console.log(`User ${e} already exists`))
      : 0; // if true then code execution is stopped

    return "User created";
  });
}

console.log(createUser());
// No user was inserted

console.log(createUser("John Doe"));
// User parameter exists
// User John Doe already exists

console.log(createUser("Jack"));
// User parameter exists
// User created
```

## If you get an unhandled error then it will also work. For example:

```javascript
import swiftEither from "swift-either";
const either = swiftEither();
const test = () => {
 return either(left => {
   nonExistentFunction(2);
 });
};
console.log(test());
​​​​​// Unhandled Error: ​​​​​
​​​​​//      nonExistentFunction is not defined​​​​​
//  at ​​​test()​​​
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
