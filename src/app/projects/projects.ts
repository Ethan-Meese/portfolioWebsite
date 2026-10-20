export const PROJECTS = [
  {
    id: 1,
    name: 'Coffee Brews Mobile App',
    stacks: ['TypeScript', 'React Native', 'Expo'],
    description:
      'Developing a coffee brewing tracker app designed to help users create brewing recipes, manage coffee beans and grinders, and efficiently record their daily brews. The application allows users to quickly log brews using their saved coffee and equipment profiles, maintain a history of previous brews, and edit or update recipes, coffee records, grinders, and brew logs. The goal is to provide a centralized, user-friendly platform for organizing brewing equipment, streamlining the brewing process, and tracking coffee experiments to improve consistency and refine brewing techniques over time.',
    vid: 'assets/CoffeeLog.png',
    githubLink: 'https://github.com/Ethan-Meese/BrewLog',
  },
  {
    id: 2,
    name: 'Coffee CRUD App',
    stacks: [
      'C#',
      'TypeScript',
      'HTML',
      'CSS',
      '.Net',
      'Angular',
      'Entity Framework',
      'MSSQL',
    ],
    description:
      'Developed a full-stack Coffee CRUD web application using C#, .NET, Entity Framework, Angular, TypeScript, HTML, CSS, and Microsoft SQL Server (MSSQL). The application allows users to create, view, update, and delete coffee records stored in a local database. Used Entity Framework to facilitate database interactions and implemented secure configuration using application secrets to protect sensitive database credentials.',
    vid: 'assets/CoffeeApp.png',
    githubLink: 'https://github.com/Ethan-Meese/Coffee-CRUD-App',
  },
  {
    id: 3,
    name: 'Dungeon Crawler Web App',
    stacks: ['C#', 'TypeScript', 'HTML', 'CSS', '.Net', 'Angular'],
    description:
      'A full-stack web remake of my console-based dungeon crawler. The backend (C#) implements the core game engine — character classes, dungeon progression, enemy scaling, turn-based combat, and shop mechanics — while the frontend (Angular + TypeScript) delivers a responsive browser UI, handling player input, rendering game state, and communicating with the backend API. The project demonstrates full-stack development, clean architecture, and web-based game deployment without dependencies on external engines or frameworks.',
    vid: 'assets/DungeonWeb.mp4',
    githubLink: 'https://github.com/Ethan-Meese/Dungeon-Game-Web',
  },
  {
    id: 4,
    name: 'Dungeon Crawler CLI',
    stacks: ['C#'],
    description:
      'Built a terminal-based dungeon exploration game implementing a factory-driven character class system, mathematical enemy difficulty scaling, and a modular game loop. Designed using object-oriented principles with clean class hierarchies (Player, Enemy, Room, Shop) and procedural progression logic. Implemented turn-based combat simulation and console UI without third-party frameworks, demonstrating core gameplay programming, state management, and software architecture skills in C#.',
    vid: 'assets/Dungeon.mp4',
    githubLink: 'https://github.com/Ethan-Meese/dungeon-game',
  },
  {
    id: 5,
    name: 'Unity 2D Side Scroller',
    stacks: ['C#', 'Unity'],
    description:
      'Developed an infinite 2D roguelike with modular AI scripting, custom physics-based player controller, chunk-based procedural level generation with a parallax scrolling background, and orb-driven buff system. Engineered using performance-oriented architecture with object pooling, event-driven logic, and scalable gameplay systems. On top of that I made all of the art and animations myself. I never fully finished this project becuase I dedcieded it was smart to move onto more practical projects that would help me in the professional field. However, I am still proud of it and learned a lot.',
    vid: 'assets/Game.mp4',
    githubLink: '',
  },
  {
    id: 6,
    name: 'BlackJack CLI',
    stacks: ['Python'],
    description:
      'Built a functional Blackjack simulator using a dictionary-based card system and full deck logic. Implemented hit/stand mechanics, real-time score calculation with Ace optimization, bust detection, and win evaluation. Designed modular gameplay loop supporting future expansion (e.g., double down, spliting, more decks of cards).',
    vid: 'assets/BlackJack.mp4',
    githubLink: '',
  },
];
