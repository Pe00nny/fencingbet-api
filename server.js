// server.js — простой API для FencingBet

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Разрешаем запросы с любого сайта (включая твой frontend)
app.use(cors());

// Данные о матчах — редактируй здесь!
const MATCHES = {
  T16: {
    player1: { name: "ПОКАЗАНОВ А.", photo: "https://via.placeholder.com/300?text=Показанов" },
    player2: { name: "СМЕТАНИН В.", photo: "https://via.placeholder.com/300?text=Сметанин" }
  },
  T8: {
    player1: { name: "ИГРОК 1", photo: "" },
    player2: { name: "ИГРОК 2", photo: "" }
  },
  T4: {
    player1: { name: "ИГРОК 1", photo: "" },
    player2: { name: "ИГРОК 2", photo: "" }
  },
  T2: {
    player1: { name: "ИГРОК 1", photo: "" },
    player2: { name: "ИГРОК 2", photo: "" }
  }
};

// Эндпоинт: GET /api/matches
app.get('/api/matches', (req, res) => {
  res.json(MATCHES);
});

// "Заглушка" для корня
app.get('/', (req, res) => {
  res.send('FencingBet API активен. Используй /api/matches');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
