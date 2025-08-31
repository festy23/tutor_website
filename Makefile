# Makefile для сайта репетитора
# Простые команды для быстрого старта

.PHONY: help install dev build preview lint clean start

# Показать справку по командам
help:
	@echo "Доступные команды:"
	@echo ""
	@echo "  make install  - Установить зависимости"
	@echo "  make dev      - Запустить в режиме разработки"
	@echo "  make start    - Быстрый старт (install + dev)"
	@echo "  make build    - Собрать для продакшена"
	@echo "  make preview  - Предварительный просмотр сборки"
	@echo "  make lint     - Проверить код линтером"
	@echo "  make clean    - Очистить node_modules и dist"
	@echo "  make help     - Показать эту справку"
	@echo ""

# Установить зависимости
install:
	@echo "Устанавливаю зависимости..."
	npm install
	@echo "Зависимости установлены!"

# Запустить в режиме разработки
dev:
	@echo "Запускаю сервер разработки..."
	npm run dev

# Быстрый старт (установка + запуск)
start: install
	@echo "Запускаю проект..."
	npm run dev

# Собрать для продакшена
build:
	@echo "Собираю проект..."
	npm run build
	@echo "Сборка завершена! Файлы в папке dist/"

# Предварительный просмотр сборки
preview:
	@echo "Запускаю предварительный просмотр..."
	npm run preview

# Проверить код линтером
lint:
	@echo "Проверяю код линтером..."
	npm run lint

# Очистить проект
clean:
	@echo "Очищаю проект..."
	rm -rf node_modules
	rm -rf dist
	rm -rf .vite
	@echo "Проект очищен!"

# Переустановить зависимости (clean + install)
reinstall: clean install
	@echo "Зависимости переустановлены!"

# Проверить версии
versions:
	@echo "Версии основных пакетов:"
	@echo "Node.js: $(shell node --version)"
	@echo "npm: $(shell npm --version)"
	@echo "React: $(shell npm list react --depth=0 | grep react)"
	@echo "TypeScript: $(shell npm list typescript --depth=0 | grep typescript)"

# Быстрая проверка проекта
check: lint build
	@echo "Проект прошел все проверки!"

# Деплой (если нужно)
deploy: build
	@echo "Готов к деплою!"
	@echo "Файлы для загрузки находятся в папке dist/"
