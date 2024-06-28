function gameObject() {
    // Define the home team object
    const homeTeam = {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 17
        },
        "Reggie Evans": {
          number: 11,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 2,
          blocks: 1,
          slamDunks: 15
        },
        // ... Add other players for the home team using the same format
        "Brook Lopez": {
          number: 13,
          shoe: 17,
          points: 26,
          rebounds: 19,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 1
        },
        "Mason Plumlee": {
          number: 19,
          shoe: 15,
          points: 19,
          rebounds: 12,
          assists: 2,
          steals: 4,
          blocks: 1,
          slamDunks: 0
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 2,
          blocks: 1,
          slamDunks: 12
        }
      }
    };
  
    // Define the away team object
    const awayTeam = {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 40,
          shoe: 18,
          points: 10,
          rebounds: 14,
          assists: 2,
          steals: 7,
          blocks: 15,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 28,
          shoe: 16,
          points: 12,
          rebounds: 12,
          assists: 1,
          steals: 4,
          blocks: 5,
          slamDunks: 0
        },
        // ... Add other players for the away team using the same format
        "DeSagna Diop": {
          number: 33,
          shoe: 14,
          points: 24,
          rebounds: 31,
          assists: 2,
          steals: 2,
          blocks: 5,
          slamDunks: 1
        },
        "Ben Gordon": {
          number: 5,
          shoe: 15,
          points: 33,
          rebounds: 6,
          assists: 2,
          steals: 12,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 15,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 1,
          steals: 2,
          blocks: 5,
          slamDunks: 12
        }
      }
    };
  
    // Combine home and away teams into the game object
    const gameObject = {
      home: homeTeam,
      away: awayTeam
    };
  
    return gameObject;
  }
  
  // Example usage
  const game = gameObject();
  console.log(game);
  