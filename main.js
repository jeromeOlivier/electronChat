const { app, BrowserWindow, Notification, ipcMain } = require('electron');
const path = require('path');
const { electron } = require('process');
const isDev = !app.isPackaged;

function createWindow() {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#ddd',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  window.loadFile('index.html');
  // isDev && window.webContents.openDevTools();
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  });
}

app.whenReady().then(createWindow);

ipcMain.on('notify', (_, message) => {
  new Notification({ title: 'Notification', body: message }).show();
});

// on mac, quit app when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
