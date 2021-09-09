---
title: "その他解説"
metaTitle: "その他解説"
metaDescription: "その他の解説"
---

# Quest用ワールド設定

Questではキーアサインが異なるためか、そのままだとミュートボタンなどを押した時に拡張メニューが呼び出されてしまいます。

![その他解説1](/udon-extra-menu-kit/image/setup/2-1.png)

`ExtraMenu`内の`RootMenu`内で`Vr Detect Key`という設定項目を変更します。  
画像のように`joystick button 1`と`joystick button 3`に変更するとQuestでもメニューを出したときに拡張メニューが出現するようになります。

---

# 移動可能ウィンドウにUIコンポーネントを追加する方法

移動可能ウィンドウにはスクロール可否2種類のウィンドウがあります。  
UIコンポーネントの詳細とPrefab名については[付属UIコンポーネント](/introduction/3-UIComponent)を参照してください。

## スクロールしないウィンドウの場合

スクロールしないウィンドウは下記のような状況で使うことを推奨します。
 - 1つや2つなど少ないUIコンポーネントを配置したい
 - 広々とした空間に多くのUIコンポーネントを一括で見せたい

例として空のスクロールしないウィンドウを設置します。  

![その他解説2](/udon-extra-menu-kit/image/setup/2-2.png)

`/Assets/Konoe.Studio/ExtraMenu/Prefab/Non-Scroll Parts`内の`Non-Scroll_EmptyMovableMenuKit.prefab`をヒエラルキーに配置します。  
サンプルとして同梱したSceneにも配置されています。

![その他解説3](/udon-extra-menu-kit/image/setup/2-3.png)

`Non-Scroll_EmptyMovableMenuKit` > `MovableMenu` > `MovableMenuCanvas` > `Vertical Layout` 直下にUIコンポーネントを配置できます。  
※中にある`---Here---`は消してください。
余白の部分をクリックすると大体このあたりが開かれると思います。

![その他解説4](/udon-extra-menu-kit/image/setup/2-4.png)

スクロールしないウィンドウのため、`MovableMenuCanvas`内`Rect Transform`コンポーネントで指定されたサイズをはみ出した分のボタン等を押すことができません。  
必要に応じて`Height`の値を調整してください。

## スクロール可能なウィンドウの場合

スクロール可能なウィンドウは下記のような状況で使うことを推奨します。
 - 多くのUIコンポーネントを限られた空間に配置したい

例として空のスクロールビュー付きウィンドウを設置します。  

![その他解説5](/udon-extra-menu-kit/image/setup/2-5.png)

`/Assets/Konoe.Studio/ExtraMenu/Prefab/Scroll Parts`内の`Scroll_EmptyMovableMenuKit.prefab`をヒエラルキーに配置します。  
サンプルとして同梱したSceneにも配置されています。

![その他解説6](/udon-extra-menu-kit/image/setup/2-6.png)

`Scroll_EmptyMovableMenuKit` > `MovableMenu` > `MovableMenuCanvas` > `Vertical Layout` > `Main` > `ScrollView` > `Content` 直下にUIコンポーネントを配置できます。  
※中にある`---Here---`は消してください。
余白の部分をクリックすると大体Mainあたりが開かれると思います。

![その他解説7](/udon-extra-menu-kit/image/setup/2-7.png)

はみ出た分はスクロールして表示するウィンドウのため、スクロール動作できないSceneでの編集中はどんな風に見えているかを確認できません。  
必要に応じて上部のオブジェクトを非表示にすることで見ながら編集することができます。

---

## ボタンのタイトル・アイコンの場所

### 拡張メニュー
- タイトル：`ExtraMenu` > `RootMenu` > `SizeOffset` > `Canvas` > `Vertical Layout` > `Menu Group` > 6要素のうちのどれか > `Title`
- アイコン：`ExtraMenu` > `RootMenu` > `SizeOffset` > `Canvas` > `Vertical Layout` > `Menu Group` > 6要素のうちのどれか > `Icon`

タイトルは`Text`コンポーネント内の`Text`要素を書き換えます。  
アイコンは`Image`コンポーネントの`Source Image`要素に入れる画像を入れ替えます。

![その他解説8](/udon-extra-menu-kit/image/setup/2-8.png)

### 移動可能ウィンドウ
- タイトル：ウィンドウのPrefab > `MovableMenu` > `MovableMenuCanvas` > `Vertical Layout` > `Header` > `Title_Header` > `TitleText`

### リセットスイッチ（移動可能ウィンドウの位置リセットボタン）

- タイトル：`PillarResetSwitch`or`WallResetSwitch` > `Text`
- アイコン：`PillarResetSwitch`or`WallResetSwitch` > `Image`

---

# 拡張メニューから呼び出すオブジェクトの設定方法

TBD