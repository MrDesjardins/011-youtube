function displayName(
  firstname?: string,
  lastname?: string,
  title?: string
): string {
  const fullname = `${firstname} ${lastname}`.trim();
  if (title !== undefined) {
    return `${title} ${fullname}`;
  } else {
    return `[No title] ${fullname}`;
  }
}

const withTitle = displayName("Patrick", "Desjardins", "Engineer");
const withoutTitle = displayName("Patrick", "Desjardins");
console.log(withTitle);
console.log(withoutTitle);
