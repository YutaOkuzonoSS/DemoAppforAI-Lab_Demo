const { app, Menu, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
// const Screen = require('screen');
// const size = Screen.getPrimaryDisplay().size; // ディスプレイのサイズを取得する


let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 1920,
        height: 1080,
        'icon': __dirname + '/icon.ico'
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // 開発ツールを有効化
    // mainWindow.webContents.openDevTools();

    Menu.setApplicationMenu(null);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

/*
*
* 第一引数がおそらく監視したいディレクトリフォルダ
* 第二引数がおそらくElectronの実行フォルダ
*
* */
// require('electron-reload')("../src", {
//     electron: require('../node_modules/electron')
// });

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});