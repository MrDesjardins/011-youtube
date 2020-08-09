namespace Example8 {
  interface House {
    id: number;
    rooms: Room[];
  }

  interface Room {
    name: string;
  }

  export type Immutable<T> = T extends
    | Function
    | boolean
    | number
    | string
    | null
    | undefined
    ? T
    : { readonly [P in keyof T]: Immutable<T[P]> };
  function immutate<T>(obj: T): Immutable<T> {
    return { ...obj } as Immutable<T>;
  }

  const myHouse: House = {
    id: 1,
    rooms: [{ name: "kitchen" }, { name: "living" }],
  };

  const myHouse2 = immutate(myHouse);
  // myHouse2.id = 2;
  // myHouse2.rooms = [];
  // myHouse2.rooms.push({ name: "kitchen" });
  console.log(myHouse2);
  myHouse.rooms.push({ name: "Modified in house #1" });
  console.log(myHouse2);
}
