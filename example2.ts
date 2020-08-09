let age: number;

function beforeTestInitialize(ageToSet: number = 0) {
  age = ageToSet;
}
function test1() {
  beforeTestInitialize();
  console.log(age === 0);
}

function test2() {
  beforeTestInitialize();
  age++;
  console.log(age === 1);
}
test1();
test2();
