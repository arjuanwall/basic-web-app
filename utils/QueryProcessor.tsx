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

  if (query.toLowerCase().includes("largest")) {
    const matches = query.toLowerCase().match(/-?\d+/g);
    const largest = 0;
    if (matches) {
      const numbers = matches.map(Number);
      const largest = Math.max(...numbers);
    }

    return largest.toString();
  }

  return "";
}
