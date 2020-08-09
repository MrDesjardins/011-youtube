interface House {
  id: number;
  rooms: Room[];
}

interface Room {
  name: string;
}

const myHouse: House = {
  id: 1,
  rooms: [{ name: "kitchen" }, { name: "living" }],
};

const copyHouse1 = { ...myHouse };
copyHouse1.id = 2; // Only affect the copy
console.log(myHouse);
copyHouse1.id = 12;
console.log(copyHouse1);