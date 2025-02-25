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

  if (query.toLowerCase().includes("both a square and a cube:")) {
    const matches = query.toLowerCase().match(/-?\d+/g);
    let result = "";
    if (matches) {
      const numbers = matches.map(Number);

      const found = numbers.filter(num => {
        const sqrt = Math.sqrt(num);
        const cbrt = Math.cbrt(num);
        return Number.isInteger(sqrt) && Number.isInteger(cbrt);
      });

      result = found.join(" , ");
      return result;

    }
    return result;
  }

  if (query.toLowerCase().includes("minus")) {
    const matches = query.toLowerCase().match(/-?\d+/g);
    if (matches && matches.length >= 2) {
      const numbers = matches.map(Number);

      const result = numbers[0] - numbers[1];
      return result.toString();
    }

    return "";
  }

  if (query.toLowerCase().includes("primes")) {
    const matches = query.toLowerCase().match(/-?\d+/g);
    if (matches) {
      const numbers = matches.map(Number);

      const isPrime = (num: number): boolean => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
      const primes = numbers.filter(isPrime);
      return primes.join(",");
    }
    return "";
  }

  if (query.toLowerCase().includes("power")) {
    const matches = query.toLowerCase().match(/-?\d+/g);

    if (matches && matches.length >= 2) {
      const numbers = matches.map(Number);
      const base = numbers[0];
      const exponent = numbers[1];
      const result = Math.pow(base, exponent);
      return result.toString();
    }

    return "";
  }

  return "";
}
