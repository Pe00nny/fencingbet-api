// server.js — только ставки на ПОБЕДУ, с минимальными кэфами

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const MATCHES = {
  T16: {
    type: "single",
    match: {
      player1: { name: "ИВАНОВ А.", photo: "https://via.placeholder.com/300?text=Иванов" },
      player2: { name: "СЕРГЕЕВ В.", photo: "https://via.placeholder.com/300?text=Сергеев" },
      odds: {
        "Победа 1": 1.85,
        "Победа 2": 2.10
      }
    }
  },
  T8: {
    type: "single",
    match: {
      player1: { name: "СОКОЛОВ", photo: "https://via.placeholder.com/300?text=Петров" },
      player2: { name: "СИДОРОВ М.", photo: "https://via.placeholder.com/300?text=Сидоров" },
      odds: {
        "Победа 1": 2.00,
        "Победа 2": 1.80
      }
    }
  },
  T4: {
    type: "double",
    matches: [
      {
        id: 1,
        player1: { name: "КОЗЛОВ И.", photo: "https://via.placeholder.com/300?text=Козлов" },
        player2: { name: "ВАСИЛЬЕВ Д.", photo: "https://via.placeholder.com/300?text=Васильев" },
        odds: {
          "Победа 1": 1.60,
          "Победа 2": 2.40
        }
      },
      {
        id: 2,
        player1: { name: "СМОЛЕНСКИЙ С.", photo: "https://via.placeholder.com/300?text=Смоленский" },
        player2: { name: "БЕЛОВ А.", photo: "https://via.placeholder.com/300?text=Белов" },
        odds: {
          "Победа 1": 2.20,
          "Победа 2": 1.70
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
        "Победа 2": 1.90
      }
    }
  }
};

app.get('/api/matches', (req, res) => {
  res.json(MATCHES);
});

app.get('/', (req, res) => {
  res.send('FencingBet API — ставки только на победу');
});

app.listen(PORT, () => {
  console.log(`✅ FencingBet API запущен на порту ${PORT}`);
});
