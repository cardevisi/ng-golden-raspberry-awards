export const DATA_TABLE = [
  { id: 1, title: 'The Shawshank Redemption', year: 1994, winner: 'Yes' },
  { id: 2, title: 'The Godfather', year: 1972, winner: 'No' },
  { id: 3, title: 'The Godfather: Part II', year: 1974, winner: 'Yes' },
  { id: 4, title: 'The Dark Knight', year: 2008, winner: 'Yes' },
  { id: 5, title: '12 Angry Men', year: 1957, winner: 'Yes' },
  { id: 6, title: "Schindler's List", year: 1993, winner: 'Yes' },
  { id: 7, title: 'Pulp Fiction', year: 1994, winner: 'Yes' },
  {
    id: 8,
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    winner: 'Yes',
  },
  { id: 9, title: 'Fight Club', year: 1999, winner: 'No' },
  { id: 10, title: 'The Good, the Bad and the Ugly', year: 1966, winner: 'No' },
];

export const MOCK_TABLE_FOR_MULTIPLES = [
  { year: 1994, winnerCount: 1 },
  { year: 1972, winnerCount: 2 },
  { year: 1974, winnerCount: 3 },
  { year: 2008, winnerCount: 1 },
  { year: 1957, winnerCount: 2 },
  { year: 1993, winnerCount: 2 },
  { year: 1994, winnerCount: 2 },
  { year: 2003, winnerCount: 3 },
  { year: 1999, winnerCount: 1 },
  { year: 1966, winnerCount: 2 },
];

export const MOCK_TABLE_FOR_STUDIOS_WINNERS = [
  { year: 1994, winnerCount: 1 },
  { year: 1972, winnerCount: 2 },
  { year: 1974, winnerCount: 3 },
  { year: 2008, winnerCount: 1 },
  { year: 1957, winnerCount: 2 },
  { year: 1993, winnerCount: 2 },
  { year: 1994, winnerCount: 2 },
  { year: 2003, winnerCount: 3 },
  { year: 1999, winnerCount: 1 },
  { year: 1966, winnerCount: 2 },
];

export const MOCK_TABLE_FOR_MOVIES_BY_YEAR = [
  { year: 1994, winnerCount: 1 },
  { year: 1972, winnerCount: 2 },
  { year: 1974, winnerCount: 3 },
  { year: 2008, winnerCount: 1 },
  { year: 1957, winnerCount: 2 },
  { year: 1993, winnerCount: 2 },
  { year: 1994, winnerCount: 2 },
  { year: 2003, winnerCount: 3 },
  { year: 1999, winnerCount: 1 },
  { year: 1966, winnerCount: 2 },
];

export const MOCK_TABLE_FOR_MAX_AND_MIN_WINNERS_INTERVAL_FOR_PRODUCERS = {
  min: [
    {
      producer: 'Joel Silver',
      interval: 1,
      previousWin: 1990,
      followingWin: 1991,
    },
  ],
  max: [
    {
      producer: 'Matthew Vaughn',
      interval: 13,
      previousWin: 2002,
      followingWin: 2015,
    },
  ],
};
