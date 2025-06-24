# Tenzies Game

Tenzies is a simple dice-based game built with React where the objective is to roll until all dice show the same number. Players can "hold" dice between rolls to strategically lock values and increase their chances of winning.

## About

This project replicates the classic Tenzies game using React state and hooks. It offers a dynamic and interactive experience by allowing users to roll dice, hold their desired dice, and celebrate a win with confetti when all dice match.

## Features

- Roll 10 dice at once
- Click on a die to "hold" its value
- Dice that are held do not change on roll
- Detects when all dice are the same and displays a win screen
- Confetti effect when the user wins
- Restart the game with a single click

## Technologies Used

- React (useState)
- nanoid (for unique dice IDs)
- react-confetti (celebration effect)

## How to Run Locally

# 1. **Clone the repository**

git clone https://github.com/ChaurasiaAdarsh/Tenzies.git
cd TENZIES

# 2. **Install dependencies**

npm install

# 3 **Start the development server**

npm run dev

### File Structure

src/

├── App.jsx 

├── Component/

│   └── Die.jsx

├── main.jsx 

├── index.css      

