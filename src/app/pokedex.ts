export interface Pokedex {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: [
    {
      ability: {
        name: string;
      };
      slot: number;
    }
  ];
  types: [
    {
      slot: 1;
      type: {
        name: string;
      };
    }
  ];

  weaknesses: [
    {
      slot: 1;
      weakness: {
        name: string;
      };
    }
  ];

  moves: [
    {
      move: {
        name: string;
      }
    }
  ]
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      }
    }
  ]

}
