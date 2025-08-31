#!/bin/bash

# Скрипт для быстрого старта сайта репетитора (Unix/Linux/macOS)
# Простые команды для управления проектом

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Функция для вывода с цветом
print_status() {
    echo -e "${GREEN}[SUCCESS] $1${NC}"
}

print_error() {
    echo -e "${RED}[ERROR] $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

print_info() {
    echo -e "${BLUE}[INFO] $1${NC}"
}

# Функция для показа меню
show_menu() {
    clear
    echo
    echo " Сайт репетитора - Быстрый старт"
    echo " ======================================"
    echo
    echo " 1. Быстрый старт (установка + запуск)"
    echo " 2. Установить зависимости"
    echo " 3. Запустить проект"
    echo " 4. Собрать проект"
    echo " 5. Предварительный просмотр"
    echo " 6. Проверить код"
    echo " 7. Очистить проект"
    echo " 8. Версии пакетов"
    echo " 9. Выход"
    echo
}

# Функция для быстрого старта
quick_start() {
    echo
    print_info "Быстрый старт проекта..."
    print_info "Устанавливаю зависимости..."
    
    if npm install; then
        print_status "Зависимости установлены!"
        print_info "Запускаю проект..."
        npm run dev
    else
        print_error "Ошибка установки зависимостей"
        read -p "Нажмите Enter для продолжения..."
    fi
}

# Функция для установки зависимостей
install_deps() {
    echo
    print_info "Устанавливаю зависимости..."
    if npm install; then
        print_status "Зависимости установлены!"
    else
        print_error "Ошибка установки зависимостей"
    fi
    read -p "Нажмите Enter для продолжения..."
}

# Функция для запуска проекта
run_dev() {
    echo
    print_info "Запускаю проект..."
    npm run dev
}

# Функция для сборки проекта
build_project() {
    echo
    print_info "Собираю проект..."
    if npm run build; then
        print_status "Сборка завершена! Файлы в папке dist/"
    else
        print_error "Ошибка сборки"
    fi
    read -p "Нажмите Enter для продолжения..."
}

# Функция для предварительного просмотра
preview_build() {
    echo
    print_info "Запускаю предварительный просмотр..."
    npm run preview
}

# Функция для проверки кода
lint_code() {
    echo
    print_info "Проверяю код линтером..."
    npm run lint
    read -p "Нажмите Enter для продолжения..."
}

# Функция для очистки проекта
clean_project() {
    echo
    print_warning "Очищаю проект..."
    rm -rf node_modules dist .vite
    print_status "Проект очищен!"
    read -p "Нажмите Enter для продолжения..."
}

# Функция для показа версий
show_versions() {
    echo
    print_info "Версии основных пакетов:"
    echo "Node.js: $(node --version)"
    echo "npm: $(npm --version)"
    echo "React: $(npm list react --depth=0 | grep react)"
    echo "TypeScript: $(npm list typescript --depth=0 | grep typescript)"
    read -p "Нажмите Enter для продолжения..."
}

# Основной цикл меню
while true; do
    show_menu
    read -p "Выберите действие (1-9): " choice
    
    case $choice in
        1) quick_start ;;
        2) install_deps ;;
        3) run_dev ;;
        4) build_project ;;
        5) preview_build ;;
        6) lint_code ;;
        7) clean_project ;;
        8) show_versions ;;
        9) 
            echo
            print_info "До свидания!"
            exit 0
            ;;
        *) 
            print_warning "Неверный выбор. Попробуйте снова."
            sleep 2
            ;;
    esac
done
