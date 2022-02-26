const {app, BrowserWindow} = require('electron')

function createWindow(){
    const ventana = new BrowserWindow({
        width: 400,
        height: 450,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow);