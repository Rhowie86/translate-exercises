const names = [
  "Nashville",
  "Hong Kong",
  "The back yard",
  "Earth",
  "London",
  "The Mall",
  "Ryman Auditorium",
  "The Great Wall of China",
];

console.log("All Place Names");
names.forEach((place) => {
  console.log(place);
});

console.log("'The' Place Names");

const theNames = names.filter((place) => place.includes("The"));
theNames.forEach((the) => {
  console.log(the);
});
