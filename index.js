const pokemon = [
  {
    name: "Eevee",
    type: "Normal",
    weight: 14.3,
    category: "Evolution",
    evolutionType: [
      "water",
      "electric",
      "fire",
      "ice",
      "psychic",
      "grass",
      "dark",
      "fairy",
    ],
  },
  {
    name: "Mimikyu",
    type: "Ghost and Psychic",
    weight: 1.5,
    category: "Disguise",
  },
  {
    name: "Mienfoo",
    type: "Fighter",
    weight: 44.1,
    category: "Martial Arts",
  },
  {
    name: "Sudowoodo",
    type: "Rock",
    weight: 83.3,
    category: "Imitation",
  },
  {
    name: "Torchic",
    type: "Fire",
    weight: 5.5,
    category: "Chick",
  },
];

pokemon.forEach((pokemon) => {
  console.log(pokemon.name);
});

pokemon.forEach((pokemon) => {
  console.log(pokemon);
});
