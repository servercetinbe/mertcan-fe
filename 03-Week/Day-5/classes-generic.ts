class Person {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    greet() {
      return `Hello, my name is ${this.name}`;
    }
  }
  
  const person = new Person('Mertcan');
  console.log(person.greet());
  

  function identity<T>(value: T): T {
    return value;
  }
  
  console.log(identity<number>(54));   // 54
  console.log(identity<string>('hello')); // hello
  