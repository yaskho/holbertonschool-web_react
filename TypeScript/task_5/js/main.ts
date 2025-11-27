// Branded interfaces for nominal typing
export interface MajorCredits {
  credits: number;
  _brand: "MajorCredits";
}

export interface MinorCredits {
  credits: number;
  _brand: "MinorCredits";
}

// Function to sum major credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MajorCredits",
  };
}

// Function to sum minor credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: "MinorCredits",
  };
}

// ---- TESTING ----
const math: MajorCredits = { credits: 10, _brand: "MajorCredits" };
const physics: MajorCredits = { credits: 15, _brand: "MajorCredits" };
const history: MinorCredits = { credits: 5, _brand: "MinorCredits" };
const art: MinorCredits = { credits: 8, _brand: "MinorCredits" };

console.log(sumMajorCredits(math, physics)); // { credits: 25, _brand: 'MajorCredits' }
console.log(sumMinorCredits(history, art)); // { credits: 13, _brand: 'MinorCredits' }