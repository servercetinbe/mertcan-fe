// TypeScript code
type User = {
    id: number;
    name: string;
    email: string;
};

const getUser = (id: number): User => {
    return {
        id,
        name: `User${id}`,
        email: `user${id}@example.com`
    };
};

const user = getUser(1);
console.log(user);

/*
JavaScript is a dynamically typed language, and therefore type errors can occur at runtime.
TypeScript is a superset of JavaScript that provides static type checking and catches these errors at compile time.

For example, consider the following JavaScript code:

function add(x, y) {
    return x + y;
}

If you pass HTML input values to this function, you may get unexpected results:

let result = add(input1.value, input2.value);
console.log(result); // When 10 and 20 are entered, you get "1020" instead of 30.

This is because input values come as strings and the + operator concatenates strings.

With TypeScript, we can prevent these errors by specifying types:

function add(x: number, y: number): number {
    return x + y;
}

Now the add function only accepts parameters of type number and will give an error at compile time if the wrong type of values are passed.
npm install -g typescript
*/
