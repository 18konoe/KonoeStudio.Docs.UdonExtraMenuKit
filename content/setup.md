---
title: "セットアップ"
metaTitle: "セットアップ"
metaDescription: "基本的な導入方法"
---

# 1. 動作要件の確認とパッケージのインストール

あらかじめVRCSDK3(World用)とUdonSharpがインストールされている必要があります。
[動作要件](/requirement)に書かれたバージョンを確認してください。
動作要件外のバージョンでも動作する可能性はありますが、動作確認はされていません。

上記必須パッケージのインストールを確認後、本製品のUnityPackageファイルをインストールします。

# 2. Prefabの配置

`/Assets/Konoe.Studio/ExtraMenu/Prefab`内の`ExtraMenu.prefab`をヒエラルキーに配置します。

![セットアップ1](/udon-extra-menu-kit/image/setup/1-1.png)

設定例が見たい場合は公開しているサンプルワールドと同じSceneが下記に同梱されています。
`/Assets/Konoe.Studio/ExtraMenu/ExampleScene.unity`

# 3. 移動可能ウィンドウの配置

ヒエラルキーに配置したExtraMenu内にある下記5つのウィンドウを、Scene内の初期位置として移動させます。

- LightWindowExample
- MovableMirror
- JoinLeaveLogWindow
- ConfigWindowExample
- SleepWindow

![セットアップ2](/udon-extra-menu-kit/image/setup/1-2.png)

どこにも置きたくないウィンドウや、初期状態では非表示にしたいウィンドウは`MovableMenu`のInspectorからUdon Behaviourコンポーネント内にある、`Is Default Hidden`を有効にします。

![セットアップ3](/udon-extra-menu-kit/image/setup/1-3.png)

（上記はミラーを例として紹介）

# 4. 不要なリセットボタンの削除

`MovableMirror`を除いた、4つのウィンドウ内には2種類のリセットボタンが入っています。  
通常どちらかしか必要ないと思いますので、不要なボタンは削除してしまっても問題ありません。

![セットアップ5](/udon-extra-menu-kit/image/setup/1-5.png)

# 5. 設定全般ウィンドウとライティング設定用ウィンドウをカスタマイズする

下記の詳細解説を参考に、自身のワールドに合ったカスタマイズをしましょう。  
カスタマイズのベースとしやすい設定全般ウィンドウとライティング設定用ウィンドウについての解説もあります。

また、拡張メニューから移動可能ウィンドウ以外を呼び出したり、拡張メニューを使わずとも移動可能ウィンドウだけを利用することも可能です。

- [設定全般用ウィンドウ解説](/setup/1-ConfigWindow)
- [ライティング設定ウィンドウ解説](/setup/2-LightSettings)
- [その他解説](/setup/3-General)