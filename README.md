# Get started gulp for CSS Nite LP39

[CSS Nite LP39「Coder's High 2015：コーディングスタイルの理想と現実」](http://cssnite.jp/lp/lp39/)の、
第4セッション「ビルドツールはじめの一歩」で紹介した`gulp`を使ったタスク自動化のサンプルです。  

Node.jsのインストールがお済みでない方は、予めインストールを済ませておいてください。  
[Node.js 公式サイト (インストーラーはこちらから)](http://nodejs.org/)

## サンプルの使い方

- Step 1. このページの右下の`Download ZIP`ボタンからZIPファイルをダウンロード後、解凍
- Step 2. `ターミナル`もしくは`コマンドプロンプト`をひらき、解凍したフォルダをドラッグ・アンド・ドロップしてEnter
- Step 3. (今作業してるPCで)初めて`gulp`を使う方は、以下のコマンドを実行
 - 既に使ったことがある方は`Step 4`へ

```
npm install -g gulp
# ※ Macをお使いで、もし↑でエラーが出る場合
sudo npm install -g gulp
```

- Step 4. `gulp`がインストールできたら、以下のコマンドを実行

```
npm install
```

- Step 5. インストールが終わったかな？と思ったら、以下のコマンドを実行
 - インストールが終わると、カーソルの前に`$ `や`> `が表示されていると思います

```
gulp
```

## サンプルで使っているプラグイン

プラグイン | 内容
---- | ----
[gulp-concat](https://github.com/wearefractal/gulp-concat) | ファイルの結合を行う
[gulp-uglify](https://github.com/terinjokes/gulp-uglify) | ファイルの圧縮を行う
[gulp-sass](https://github.com/dlmanning/gulp-sass) | Sass(node-sass)を実行してSCSSのコンパイルを行う
[gulp-watch](https://github.com/floatdrop/gulp-watch) | ファイルの変更監視を行う
[browser-sync](https://github.com/BrowserSync/browser-sync) | ブラウザのリロード・同期を行う
