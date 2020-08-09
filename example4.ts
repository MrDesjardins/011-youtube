function displayNameWithLet(
  firstname?: string,
  lastname?: string,
  title?: string
): string {
  let fullname: string = "";
  if (firstname !== undefined) {
    fullname += firstname;
  }
  if (lastname !== undefined) {
    fullname += " " + lastname;
  }
  if (title !== undefined) {
    fullname = title + " " + fullname;
  } else {
    fullname = "[No title] " + fullname;
  }

  return fullname;
}

const withTitle2 = displayNameWithLet("Patrick", "Desjardins", "Engineer");
const withoutTitle2 = displayNameWithLet("Patrick", "Desjardins");
console.log(withTitle2);
console.log(withoutTitle2);
