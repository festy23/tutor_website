@echo off
REM Скрипт для быстрого старта сайта репетитора (Windows)
REM Простые команды для управления проектом

:menu
cls
echo.
echo  Сайт репетитора - Быстрый старт
echo  ======================================
echo.
echo  1. Быстрый старт (установка + запуск)
echo  2. Установить зависимости
echo  3. Запустить проект
echo  4. Собрать проект
echo  5. Предварительный просмотр
echo  6. Проверить код
echo  7. Очистить проект
echo  8. Версии пакетов
echo  9. Выход
echo.
set /p choice="Выберите действие (1-9): "

if "%choice%"=="1" goto start
if "%choice%"=="2" goto install
if "%choice%"=="3" goto dev
if "%choice%"=="4" goto build
if "%choice%"=="5" goto preview
if "%choice%"=="6" goto lint
if "%choice%"=="7" goto clean
if "%choice%"=="8" goto versions
if "%choice%"=="9" goto exit
goto menu

:start
echo.
echo Быстрый старт проекта...
echo Устанавливаю зависимости...
call npm install
if %errorlevel% neq 0 (
    echo Ошибка установки зависимостей
    pause
    goto menu
)
echo Зависимости установлены!
echo Запускаю проект...
call npm run dev
goto menu

:install
echo.
echo Устанавливаю зависимости...
call npm install
if %errorlevel% neq 0 (
    echo Ошибка установки зависимостей
) else (
    echo Зависимости установлены!
)
pause
goto menu

:dev
echo.
echo Запускаю проект...
call npm run dev
goto menu

:build
echo.
echo Собираю проект...
call npm run build
if %errorlevel% neq 0 (
    echo Ошибка сборки
) else (
    echo Сборка завершена! Файлы в папке dist/
)
pause
goto menu

:preview
echo.
echo Запускаю предварительный просмотр...
call npm run preview
goto menu

:lint
echo.
echo Проверяю код линтером...
call npm run lint
pause
goto menu

:clean
echo.
echo Очищаю проект...
if exist node_modules rmdir /s /q node_modules
if exist dist rmdir /s /q dist
if exist .vite rmdir /s /q .vite
echo Проект очищен!
pause
goto menu

:versions
echo.
echo Версии основных пакетов:
echo Node.js:
node --version
echo npm:
npm --version
echo React:
npm list react --depth=0
echo TypeScript:
npm list typescript --depth=0
pause
goto menu

:exit
echo.
echo До свидания!
exit
