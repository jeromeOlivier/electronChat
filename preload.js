const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('notificationAPI', {
  sendNotification(message) {
    ipcRenderer.send('notify', message);
  },
});
