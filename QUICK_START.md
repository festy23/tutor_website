# Быстрый старт - Сайт репетитора

## Запуск за 30 секунд

### Самый простой способ (Make)
```bash
make start
```

### Интерактивное меню
```bash
# Windows
start.bat

# Mac/Linux
./start.sh
```

### Стандартные команды
```bash
npm install
npm run dev
```

---

## Что происходит при `make start`?

1. **Установка зависимостей** - npm install
2. **Запуск сервера** - npm run dev
3. **Открытие в браузере** - http://localhost:5173

---

## Основные команды

| Команда | Описание |
|---------|----------|
| `make start` | Быстрый старт |
| `make dev` | Только запуск |
| `make build` | Сборка проекта |
| `make clean` | Очистка проекта |
| `make help` | Справка |

---

## Проблемы?

### Make не найден
```bash
# Mac
brew install make

# Ubuntu/Debian
sudo apt-get install make

# Windows
# Используйте start.bat
```

### Node.js не найден
```bash
# Скачайте с nodejs.org
# Или используйте nvm
```

---

## Готово!

Сайт запущен и доступен по адресу: **http://localhost:5173**
