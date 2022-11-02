const pokemon = [
  {
    name: "Eevee",
    type: "Normal",
    weight: 14.3,
    category: "Evolution",
    moves: ["Tackle", "Quick Attack", "Tail Whip"],
  },
  {
    name: "Mimikyu",
    type: "Ghost and Psychic",
    weight: 1.5,
    category: "Disguise",
    moves: ["Shadow Claw", "Shadow Sneak", "Protect"],
  },
  {
    name: "Mienfoo",
    type: "Fighter",
    weight: 44.1,
    category: "Martial Arts",
    moves: ["Fury Swipes", "Fake Out", "Quick Guard"],
  },
  {
    name: "Sudowoodo",
    type: "Rock",
    weight: 83.3,
    category: "Imitation",
    moves: ["Fake Tears", "Wood Hammer", "Rock Slide"],
  },
  {
    name: "Torchic",
    type: "Fire",
    weight: 5.5,
    category: "Chick",
    moves: ["Ember", "Flamethrower", "Aerial Ace"],
  },
];

pokemon.forEach((pokemon) => {
  console.log(pokemon.name);
  pokemon.moves.forEach((move) => {
    console.log(move);
  });
});

pokemon.forEach((pokemon) => {
  const filteredMoves = pokemon.moves.filter((move) => move.length > 5);
  console.log(filteredMoves);
});
