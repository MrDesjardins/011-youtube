interface Person2 {
  readonly id: number;
  readonly name: string;
}

const p2: Person2 = { id: 1, name: "Patrick" };
console.log(p2);
// p2.id = 2; // Cannot re-define
