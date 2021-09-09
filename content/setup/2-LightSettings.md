---
title: "ライティング設定ウィンドウ解説"
metaTitle: "ライティング設定ウィンドウ解説"
metaDescription: "ライティング設定ウィンドウの詳細な解説"
---

このページではライティング設定ウィンドウにある設定項目の作り方を解説します。  
各要素を設定する方法を通じて、ご自身のワールド専用のカスタマイズ方法の参考となることを目的としています。

※[設定全般用ウィンドウ解説](/setup/1-ConfigWindow)を読み、基本的なトグルやスライダーの設定方法が大体理解できた前提での解説となります。

# 1. Skyboxを変更するトグルスイッチ

`ToggleGroupElement`に`Udon Behaviour`を仕込んでいます。設定は下記の通り
- `Program Source`：`ToggleToSkyboxGroup`を設定
- `Synchronization Method`：`Manual`に設定
- `Skybox Array`：切り替えたいスカイボックスのMaterial
- `Toggle Array`：上記Skyboxに対応する順番で、変更するためのToggleを並べる

※これまで同様、他のオブジェクトに設定して読み替え可

![ライティング設定ウィンドウ解説1](/udon-extra-menu-kit/image/setup/4-1.png)

各トグルで押された時のイベントには、上記設定したUdonの`UdonBehaviour.SendCustomEvent (string)`を設定。  
実行する名前は`OnToggleStateChanged`です。

![ライティング設定ウィンドウ解説2](/udon-extra-menu-kit/image/setup/4-2.png)

# 2. ライトの明るさ調整スライダー

スライダーが変更された時のイベントに、直接ライトのオブジェクトを指定します。
紐付ける内容は`Light.intensity (float)`です。  

![ライティング設定ウィンドウ解説3](/udon-extra-menu-kit/image/setup/4-3.png)

初期状態を合わせるために、スライダーの値とライトのintensityの値をあらかじめ一致させておく必要があります。

# 3. ライトの影をOn/Offするトグルスイッチ

具体的にはOnだとSoft Shadowになります。

ライトのオブジェクト(Directional Light)に`Udon Behaviour`を仕込んでいます。設定は下記の通り
- `Program Source`：`ToggleToShadow`を設定
- `Synchronization Method`：`Manual`に設定
- `Target Light`：切り替えたいライトのオブジェクト（ここでは自分自身）
- `Shadow Toggle`：切り替えに使うトグルのオブジェクトを設定
- `Is Inverted`：OnにするとトグルのOn/Off状態と影のOn/Off状態を逆転

※これまで同様、他のオブジェクトに設定して読み替え可

![ライティング設定ウィンドウ解説4](/udon-extra-menu-kit/image/setup/4-4.png)

トグルで押された時のイベントには、上記設定したUdonの`UdonBehaviour.SendCustomEvent (string)`を設定。  
実行する名前は`OnToggleStateChanged`です。

![ライティング設定ウィンドウ解説5](/udon-extra-menu-kit/image/setup/4-5.png)

# 4. ポストプロセスの強度調整スライダー

`Bloom`オブジェクトに自身のポストプロセスの`Weight`を操作するアニメーターと、`Udon Behaviour`を仕込んでいます。設定は下記の通り
- `Controller`：`PostEffect`を設定。必要に応じてアニメーションファイルを編集してください。
- `Program Source`：`SliderToAnimator`を設定
- `Synchronization Method`：`Manual`に設定
- `Parameter`：動かしたいアニメーターの変数名を設定（ここでは`Value）
- `Animator`：動かしたいアニメーターが入ったオブジェクト（ここでは自身）
- `Max Value`：スライダー最大時の`Parameter`で設定した変数の値
- `Min Value`：スライダー最小時の`Parameter`で設定した変数の値

※これまで同様、他のオブジェクトに設定して読み替え可

![ライティング設定ウィンドウ解説4](/udon-extra-menu-kit/image/setup/4-6.png)

スライダーが変更された時のイベントには、上記設定したUdonの`UdonBehaviour.SendCustomEvent (string)`を設定。  
実行する名前は`OnSliderValueChanged`です。

![ライティング設定ウィンドウ解説5](/udon-extra-menu-kit/image/setup/4-7.png)