import React, { useRef, useEffect } from 'react';

const DinoGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    // Переменные состояния игры
    let gameState = 'initial';
    let score = 0;
    let gameSpeed = 5;
    let obstacles: Cactus[] = [];
    let nextObstacleTime = 0;
    // Константы игры
    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    ctx.scale(dpr, dpr);
    const groundY = canvasHeight - 30;
    const playerX = 60;
    const maxScore = 100;
    // Игрок
    const player = {
      y: groundY,
      width: 48,
      height: 48,
      isJumping: false,
      yVelocity: 0,
      jumpPower: -13,
      gravity: 0.7,
      sprite: new Image(),
      frame: 0,
      frameCount: 0,
      update() {
        if (this.isJumping) {
          this.y += this.yVelocity;
          this.yVelocity += this.gravity;
          if (this.y >= groundY) {
            this.y = groundY;
            this.isJumping = false;
          }
        }
        this.frameCount++;
        if (gameState === 'playing' && this.frameCount > 8) {
          this.frame = (this.frame + 1) % 2;
          this.frameCount = 0;
        }
      },
      draw() {
        ctx!.drawImage(
          this.sprite,
          this.frame * 24, 0, 24, 24,
          playerX, this.y - this.height, this.width, this.height
        );
      },
      jump() {
        if (!this.isJumping) {
          this.isJumping = true;
          this.yVelocity = this.jumpPower;
        }
      }
    };

    // Obstacle
    class Cactus {
      x: number;
      width: number;
      height: number;
      isScored = false;

      constructor() {
        this.x = canvasWidth;
        this.width = 20 + Math.random() * 25;
        this.height = 30 + Math.random() * 35;
      }

      update() {
        this.x -= gameSpeed;
      }

      draw() {
        ctx!.fillStyle = '#333';
        ctx!.fillRect(this.x, groundY - this.height, this.width, this.height);
      }
    }

    function spawnObstacle() {
      if (Date.now() > nextObstacleTime) {
        obstacles.push(new Cactus());
        nextObstacleTime = Date.now() + 1200 + Math.random() * 1200;
      }
    }

    function checkCollisions() {
        for (const obstacle of obstacles) {
            if (
                playerX < obstacle.x + obstacle.width &&
                playerX + player.width > obstacle.x &&
                player.y - player.height < groundY &&
                player.y > groundY - obstacle.height
            ) {
                gameState = 'gameOver';
            }
        }
    }

    function updateScore() {
      for (const obstacle of obstacles) {
        if (!obstacle.isScored && obstacle.x + obstacle.width < playerX) {
          score += 10;
          obstacle.isScored = true;
          if (score >= maxScore) {
            gameState = 'gameWon';
          }
        }
      }
    }

    function drawText(text: string, x: number, y: number, size = 16, align: 'center' | 'left' = 'center') {
      ctx!.font = `${size}px 'Press Start 2P', sans-serif`;
      ctx!.fillStyle = '#333';
      ctx!.textAlign = align;
      ctx!.fillText(text, x, y);
    }

    function clearCanvas() {
      ctx!.fillStyle = 'white';
      ctx!.fillRect(0, 0, canvasWidth, canvasHeight);
    }

    function drawGround() {
      ctx!.fillStyle = '#333';
      ctx!.fillRect(0, groundY, canvasWidth, 2);
    }

    function resetGame() {
      gameState = 'playing';
      score = 0;
      obstacles = [];
      nextObstacleTime = Date.now() + 1000;
      player.y = groundY;
      player.isJumping = false;
      gameSpeed = 5;
    }

    function gameLoop() {
      clearCanvas();
      drawGround();

      if (gameState === 'initial') {
        player.draw();
        drawText('начать игру', canvasWidth / 2, canvasHeight / 2 - 20);
      } else if (gameState === 'playing') {
        player.update();
        player.draw();
        spawnObstacle();
        
        obstacles.forEach(o => {
            o.update();
            o.draw();
        });

        checkCollisions();
        updateScore();

        obstacles = obstacles.filter(o => o.x + o.width > 0);
        drawText(`Баллы ЕГЭ: ${score}`, 10, 30, 16, 'left');

      } else if (gameState === 'gameOver' || gameState === 'gameWon') {
        const message = gameState === 'gameWon' ? 'Поздравляю, вы сдали!' : 'Вы проиграли!';
        drawText(message, canvasWidth / 2, canvasHeight / 2 - 40);
        drawText(`Ваши баллы: ${score}`, canvasWidth / 2, canvasHeight / 2);
        drawText('Нажмите, чтобы начать заново', canvasWidth / 2, canvasHeight / 2 + 40);
      }

      animationFrameId = requestAnimationFrame(gameLoop);
    }

    function handleInput() {
      if (gameState === 'playing') {
        player.jump();
      } else if (gameState === 'initial' || gameState === 'gameOver' || gameState === 'gameWon') {
        resetGame();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === 'Space' || e.code === 'ArrowUp') {
            e.preventDefault();
            handleInput();
        }
    };

    canvas.addEventListener('click', handleInput);
    document.addEventListener('keydown', handleKeyDown);

    player.sprite.onload = () => {
        gameLoop();
    };
    player.sprite.src = '../assets/dino_sprite_game.png';

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('click', handleInput);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto px-2 sm:px-4 py-4 sm:py-8 bg-white/90 dark:bg-gray-900/90 rounded-xl shadow dark:shadow-2xl border border-accent dark:border-gray-700 flex flex-col items-center my-4">
      <h2 className="font-pixel text-base mb-4 uppercase inline-block relative text-accent dark:text-gray-100 text-center w-full">Проверь себя</h2>
      <canvas ref={canvasRef} className="w-full h-32 xs:h-40 sm:h-48 bg-white dark:bg-gray-900 border-2 border-accent dark:border-gray-700 rounded shadow-inner"></canvas>
    </div>
  );
};

export default DinoGame;