// server.js — обновлённая версия с поддержкой T4 (2 боя)

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const MATCHES = {
  T16: {
    type: "single",
    match: {
      player1: { name: "ПОКАЗАНОВ А.", photo: "https://via.placeholder.com/300?text=Показанов" },
      player2: { name: "СМЕТАНИН В.", photo: "https://via.placeholder.com/300?text=Сметанин" }
    }
  },
  T8: {
    type: "single",
    match: {
      player1: { name: "ИВАНОВ К.", photo: "https://via.placeholder.com/300?text=Иванов" },
      player2: { name: "ПЕТРОВ М.", photo: "https://via.placeholder.com/300?text=Петров" }
    }
  },
  T4: {
    type: "double",
    matches: [
      {
        id: 1,
        player1: { name: "СЕРГЕЕВ А.", photo: "https://via.placeholder.com/300?text=Сергеев" },
        player2: { name: "ВАСИЛЬЕВ И.", photo: "https://via.placeholder.com/300?text=Васильев" }
      },
      {
        id: 2,
        player1: { name: "КОЗЛОВ С.", photo: "https://via.placeholder.com/300?text=Козлов" },
        player2: { name: "РОМАНОВ Д.", photo: "https://via.placeholder.com/300?text=Романов" }
      }
    ]
  },
  T2: {
    type: "single",
    match: {
      player1: { name: "ПИДОР", photo: "" },
      player2: { name: "ГАНДОН", photo: "" }
    }
  }
};

app.get('/api/matches', (req, res) => {
  res.json(MATCHES);
});

app.get('/', (req, res) => {
  res.send('FencingBet API — обновлён для T4 (2 боя)');
});

app.listen(PORT, () => {
  console.log(`API запущен на порту ${PORT}`);
});
