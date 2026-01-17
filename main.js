const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

function getIconPath() {
  // Пробуем разные пути к иконке
  const paths = [
    path.join(__dirname, 'build', 'icons', 'win', 'icon.ico'),
    path.join(__dirname, 'icon.ico'),
    path.join(process.resourcesPath, 'build', 'icons', 'win', 'icon.ico')
  ];
  
  for (const p of paths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return paths[0];
}

function createWindow() {
  // Скрываем меню приложения
  Menu.setApplicationMenu(null);

  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    title: 'thqlabel',
    icon: getIconPath(),
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Загружаем URL
  mainWindow.loadURL('https://thqlabel.ru');

  // Открываем на весь экран (опционально, можно убрать)
  // mainWindow.maximize();
}

// Когда приложение готово, создаём окно
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // На macOS пересоздаём окно при клике на иконку в доке
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Закрываем приложение при закрытии всех окон (кроме macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
