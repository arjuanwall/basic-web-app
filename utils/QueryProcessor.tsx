export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "arjunw"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "arjunw";
  }

  if (query.toLowerCase().includes("largest:")) {
    const matches = query.toLowerCase().match(/-?\d+/g);
    let largest = 0;
    if (matches) {
      const numbers = matches.map(Number);
      largest = Math.max(...numbers);
      return largest.toString()
    }
    return largest.toString();
  }

  if (query.toLowerCase().includes("plus")) {
    const matches = query.toLowerCase().match(/-?\d+/g);
    let sum = 0;
    if (matches) {
      const numbers = matches.map(Number);
      sum = numbers.reduce((acc, num) => acc + num, 0);
    }
    return sum.toString();
  }

  if (query.toLowerCase().includes("multiplied")) {
    const matches = query.toLowerCase().match(/-?\d+/g);
    let product = 1;
    if (matches) {
      const numbers = matches.map(Number);
      product = numbers.reduce((acc, num) => acc * num, 1);
    }
    return product.toString();
  }

  if (query.toLowerCase().includes("both a square and a cube")) {
    const matches = query.toLowerCase().match(/-?\d+/g);
    let result = "";
    if (matches) {
      const numbers = matches.map(Number);

      const found = numbers.filter(num => {
        const sqrt = Math.sqrt(num);
        const cbrt = Math.cbrt(num);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      });

      result = found.join(", ");
      return result;

    }
    return result;
  }

  return "";
}
