interface Person {
  id: number;
  name: string;
}

const p1: Person = { id: 1, name: "Patrick" };
console.log(p1);
p1.id = 2;
console.log(p1);

// p1 = { id: 3, name: "NoName" }; // const => cannot re-initialize
