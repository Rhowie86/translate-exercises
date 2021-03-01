console.log("Do you believe in magic?");
console.log("------------------------");

const spells = [
  {
    name: "Turn enemy into a newt",
    isEvil: true,
    energy: 5.1,
  },
  {
    name: "Conjure some gold for a local charity",
    isEvil: false,
    energy: 2.99,
  },
  {
    name: "Give a deaf person the ability to heal",
    isEvil: false,
    energy: 12.2,
  },
  {
    name: "Make yourself emperor of the universe",
    isEvil: true,
    energy: 100.0,
  },
  {
    name: "Convince your relatives your political views are correct",
    isEvil: false,
    energy: 2921.5,
  },
];

console.log("Good Book");
spells.forEach((spell) => {
  if (spell.isEvil !== true) {
    console.log("   ", spell.name);
  }
});

console.log("Evil Book");
spells.forEach((spell) => {
  if (spell.isEvil === true) {
    console.log("   ", spell.name);
  }
});
