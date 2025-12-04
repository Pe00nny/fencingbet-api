// server.js — с поддержкой коэффициентов

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
      player2: { name: "СМЕТАНИН В.", photo: "https://via.placeholder.com/300?text=Сметанин" },
      odds: {
        "Победа 1": 1.85,
        "Победа 2": 2.10,
        "Первый удар 1": 1.90,
        "Первый удар 2": 1.90,
        "До минуты 1": 2.20,
        "До минуты 2": 1.70
      }
    }
  },
  T8: {
    type: "single",
    match: {
      player1: { name: "ИВАНОВ К.", photo: "https://via.placeholder.com/300?text=Иванов" },
      player2: { name: "ПЕТРОВ М.", photo: "https://via.placeholder.com/300?text=Петров" },
      odds: {
        "Победа 1": 2.00,
        "Победа 2": 1.80,
        "Первый удар 1": 1.85,
        "Первый удар 2": 1.95,
        "До минуты 1": 1.90,
        "До минуты 2": 1.90
      }
    }
  },
  T4: {
    type: "double",
    matches: [
      {
        id: 1,
        player1: { name: "СЕРГЕЕВ А.", photo: "https://via.placeholder.com/300?text=Сергеев" },
        player2: { name: "ВАСИЛЬЕВ И.", photo: "https://via.placeholder.com/300?text=Васильев" },
        odds: {
          "Победа 1": 1.60,
          "Победа 2": 2.40,
          "Первый удар 1": 1.75,
          "Первый удар 2": 2.05,
          "До минуты 1": 2.10,
          "До минуты 2": 1.80
        }
      },
      {
        id: 2,
        player1: { name: "КОЗЛОВ С.", photo: "https://via.placeholder.com/300?text=Козлов" },
        player2: { name: "РОМАНОВ Д.", photo: "https://via.placeholder.com/300?text=Романов" },
        odds: {
          "Победа 1": 2.20,
          "Победа 2": 1.70,
          "Первый удар 1": 2.00,
          "Первый удар 2": 1.80,
          "До минуты 1": 1.85,
          "До минуты 2": 1.95
        }
      }
    ]
  },
  T2: {
    type: "single",
    match: {
      player1: { name: "ФИНАЛИСТ 1", photo: "" },
      player2: { name: "ФИНАЛИСТ 2", photo: "" },
      odds: {
        "Победа 1": 1.90,
        "Победа 2": 1.90,
        "Первый удар 1": 1.90,
        "Первый удар 2": 1.90,
        "До минуты 1": 1.90,
        "До минуты 2": 1.90
      }
    }
  }
};

app.get('/api/matches', (req, res) => {
  res.json(MATCHES);
});

app.get('/', (req, res) => {
  res.send('FencingBet API — с коэффициентами');
});

app.listen(PORT, () => {
  console.log(`API запущен на порту ${PORT}`);
});
