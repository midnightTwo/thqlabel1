const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function createInstallerImages() {
  // Загружаем иконку
  const icon = await loadImage('icon.png');
  
  // === Боковая картинка (164x314) ===
  const sideCanvas = createCanvas(164, 314);
  const sideCtx = sideCanvas.getContext('2d');
  
  // Градиент фона
  const gradient = sideCtx.createLinearGradient(0, 0, 0, 314);
  gradient.addColorStop(0, '#1a1a2e');
  gradient.addColorStop(0.5, '#16213e');
  gradient.addColorStop(1, '#0f3460');
  sideCtx.fillStyle = gradient;
  sideCtx.fillRect(0, 0, 164, 314);
  
  // Декоративные круги
  sideCtx.globalAlpha = 0.1;
  sideCtx.fillStyle = '#e94560';
  sideCtx.beginPath();
  sideCtx.arc(140, 50, 80, 0, Math.PI * 2);
  sideCtx.fill();
  sideCtx.beginPath();
  sideCtx.arc(20, 280, 60, 0, Math.PI * 2);
  sideCtx.fill();
  sideCtx.globalAlpha = 1;
  
  // Иконка по центру
  const iconSize = 80;
  const iconX = (164 - iconSize) / 2;
  sideCtx.drawImage(icon, iconX, 80, iconSize, iconSize);
  
  // Текст
  sideCtx.fillStyle = '#ffffff';
  sideCtx.font = 'bold 18px Arial';
  sideCtx.textAlign = 'center';
  sideCtx.fillText('thqlabel', 82, 190);
  
  sideCtx.font = '12px Arial';
  sideCtx.fillStyle = '#aaaaaa';
  sideCtx.fillText('Официальное', 82, 220);
  sideCtx.fillText('приложение', 82, 235);
  
  // Линия
  sideCtx.strokeStyle = '#e94560';
  sideCtx.lineWidth = 2;
  sideCtx.beginPath();
  sideCtx.moveTo(40, 260);
  sideCtx.lineTo(124, 260);
  sideCtx.stroke();
  
  // Версия
  sideCtx.fillStyle = '#666666';
  sideCtx.font = '10px Arial';
  sideCtx.fillText('v1.0.0', 82, 290);
  
  // Сохраняем как PNG, потом конвертируем
  fs.writeFileSync('build/installerSidebar.png', sideCanvas.toBuffer('image/png'));
  console.log('✓ Создан installerSidebar.png');
  
  // === Верхний баннер (150x57) ===
  const headerCanvas = createCanvas(150, 57);
  const headerCtx = headerCanvas.getContext('2d');
  
  // Градиент
  const headerGradient = headerCtx.createLinearGradient(0, 0, 150, 0);
  headerGradient.addColorStop(0, '#1a1a2e');
  headerGradient.addColorStop(1, '#16213e');
  headerCtx.fillStyle = headerGradient;
  headerCtx.fillRect(0, 0, 150, 57);
  
  // Иконка маленькая
  headerCtx.drawImage(icon, 10, 8, 40, 40);
  
  // Текст
  headerCtx.fillStyle = '#ffffff';
  headerCtx.font = 'bold 14px Arial';
  headerCtx.textAlign = 'left';
  headerCtx.fillText('thqlabel', 58, 30);
  
  headerCtx.font = '10px Arial';
  headerCtx.fillStyle = '#888888';
  headerCtx.fillText('Установка', 58, 45);
  
  fs.writeFileSync('build/installerHeader.png', headerCanvas.toBuffer('image/png'));
  console.log('✓ Создан installerHeader.png');
  
  console.log('\n✅ Все изображения созданы!');
}

createInstallerImages().catch(console.error);
