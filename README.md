
# Hexagonal Tic Tac Toe
A multiplayer Tic Tac Toe game played on a 50×50 hexagonal grid instead of the classic square board.

---

## Live Demo

**[Play Now → chihebbhy.github.io/Hexagonal-tic-tac-toe](https://chihebbhy.github.io/Hexagonal-tic-tac-toe/)**

---

## Features

- 50×50 hexagonal grid
- Real-time multiplayer via Firebase Realtime Database
- Local (offline) two-player mode on the same device
- Win detection across all 3 hex axis directions
- Room system — create a room or join one with a code

---

## How to Play

1. Two players take turns clicking hexagonal cells.
2. Player 1 is **X**, Player 2 is **O**.
3. The first player to align **5 consecutive marks** in any hex direction wins.

Since hex cells have 6 neighbors, winning lines run in 3 directions: horizontal, diagonal-left, and diagonal-right.

---

## Multiplayer — Room System

| Action | How |
|--------|-----|
| Create a Room | Click "Create Room" and get a unique room code |
| Share the Code | Send the code to your opponent |
| Join a Room | Click "Join Room" and enter the code |
| Play | Moves sync in real-time via Firebase |

Both players need an internet connection for online play. Use **Local Mode** to play offline.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and layout |
| CSS3 | Hex grid rendering and styling |
| JavaScript (Vanilla) | Game logic and win detection |
| Firebase Realtime Database | Online multiplayer sync |
| GitHub Pages | Hosting |

---

## Project Structure

```
Hexagonal-tic-tac-toe/
│
├── index.html      # Main entry point
├── style.css       # Hex grid layout and styling
├── game.js         # Game logic and win detection
└── README.md
```

---

## Installation & Local Setup

### Prerequisites

- A modern browser (Chrome, Firefox, Edge)
- A Firebase project with Realtime Database enabled *(for multiplayer only)*

### Steps

```bash
# Clone the repository
git clone https://github.com/chihebbhy/Hexagonal-tic-tac-toe.git

# Navigate into the project
cd Hexagonal-tic-tac-toe

# Open index.html in your browser
```

### Firebase Setup (Multiplayer Only)

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Enable **Realtime Database** in test mode.
3. Replace the Firebase config placeholder in your script with your own credentials:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
};
```

> For local-only play, skip Firebase setup entirely and use Local Mode.

---

## Future Improvements

- Better CSS animations and visual polish
- Mobile-responsive layout
- Sound effects and win animations
- Player name customization
- Score tracking across rounds
- AI opponent for single-player mode
- Dark / Light theme toggle

---

## Credits

Inspired by **[WebGoatGuy](https://www.youtube.com/@WebGoatGuy)** on YouTube.
