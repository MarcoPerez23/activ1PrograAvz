const {app, BrowserWindow} = require('electron')

function createWindow(){
    const ventana = new BrowserWindow({
        width: 350,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow);