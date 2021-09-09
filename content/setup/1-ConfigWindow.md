---
title: "設定全般用ウィンドウ解説"
metaTitle: "設定全般用ウィンドウ解説"
metaDescription: "設定全般用ウィンドウの詳細な解説"
---

このページでは設定全般用ウィンドウにある設定項目の作り方を解説します。  
各要素を設定する方法を通じて、ご自身のワールド専用のカスタマイズ方法の参考となることを目的としています。  


# ウィンドウにUIを配置・入れ替える

[移動可能ウィンドウにuiコンポーネントを追加する方法](/setup/3-General#移動可能ウィンドウにuiコンポーネントを追加する方法)を参照

# Sit判定On/Off・高さ調整・椅子コライダーOn/Off

サンプルシーン内にある椅子に関する設定の解説をします。

![設定全般用ウィンドウ解説1-1](/udon-extra-menu-kit/image/setup/3-1-1.png)

## 1. 椅子の配置

SDKに含まれている椅子のサンプル(`VRCChair3`)を使用します。  
サンプルにはSitするためのステーションが最初から含まれているため、異なる椅子を使う場合には適宜読み替えてください。

## 2. トグルスイッチでSitステーションのOn/Off設定する機構

`VRCChair3`以下に`SitColliderChanger`オブジェクトを作成し、`Udon Behaviour`コンポーネントを追加します。  
※どこにどんな名前で作っても構いません。

- `Udon Behaviour`コンポーネントの`Program Source`には`ToggleToCollider`を設定
- `Synchronization Method`は`Manual`に設定
- `Target Collider`にはSitインタラクト用のコライダーが入ったオブジェクト（ここでは`VRCChair3`）を入れる
- `Collider Changer`には紐付けるToggle要素（ここではChair StationのToggle）を入れる

![設定全般用ウィンドウ解説1-2](/udon-extra-menu-kit/image/setup/3-1-2.png)

> **※Note**  
> `ToggleToCollider`はToggle要素でコライダーのOn/Offを変更するために作りました。  
> 残りの設定可能な項目には下記のような効果があります。  
> `Is Change Trigger`：コライダーをOn/Offする代わりに、コライダーの`IsTrigger`をOn/Offします。
> `Is Inverted`：Toggle要素のOn/Offに対して、結果を逆にします。

先ほど`Udon Behaviour`を設定した際に入れた`Toggle`オブジェクトのインスペクターから`Toggle`コンポーネントを設定します。  
- 初期状態でOnにしたい場合は`Is On`をOnに
- `On Value Changed (Boolean)`に一つ追加し、先ほど作成した`SitColliderChanger`をセット
- `UdonBehaviour.SendCustomEvent (string)`を選択し、下の入力欄に`OnToggleStateChanged`と入力

![設定全般用ウィンドウ解説1-3](/udon-extra-menu-kit/image/setup/3-1-3.png)

> **※Note**  
> `On Value Changed (Boolean)`はこのToggleの状態が変更したときに何をするかという設定です。  
> ここでは`SitColliderChanger`にある`UdonBehaviour`（つまり`ToggleToCollider`）内の`OnToggleStateChanged`を実行するという意味になります。  
> パッケージ内の`ToggleToCollider.cs`をテキストエディタ等で開くと、`OnToggleStateChanged`があることがわかります。

これでSitのOn/Off設定完了です。  
ここで解説した設定方法は言い換えると**「トグルスイッチで任意のUdonスクリプトを実行（今回はコライダーのOn/Offを設定）」**と同じです。応用に役立ててください。

## 3. スライダーでSit時の高さ調整する機構

`VRCChair3`直下にある`Seat`オブジェクト（VRC_Stationコンポーネントで`Player Enter Location`に設定されているオブジェクト）に`Animator`コンポーネントを追加、`Controller`に`SeatPosition`を設定します。

![設定全般用ウィンドウ解説1-4](/udon-extra-menu-kit/image/setup/3-1-4.png)

`SeatPosition`のアニメーター内に設定されているアニメーションを必要に応じて設定します。  
アニメーション内の左のポイントとスライダーが左端が対応、同様にアニメーションの右のポイントがスライダー右端の状態と対応します。

![設定全般用ウィンドウ解説1-5](/udon-extra-menu-kit/image/setup/3-1-5.png)

`VRCChair3`以下に`SitAnimationChanger`オブジェクトを作成し、`Udon Behaviour`コンポーネントを追加します。  
※どこにどんな名前で作っても構いません。

- `Udon Behaviour`コンポーネントの`Program Source`には`SliderToAnimator`を設定
- `Synchronization Method`は`Manual`に設定
- `Slider Obj`は対応させたいSliderコンポーネントを含んだオブジェクト（ここではChair StationのSlider）を入れる
- `Parameter`は`Value`と入力
- `Animator`はスライダーに対応して動かしたいAnimator（ここでは`VRCChair3`直下の`Seat`オブジェクト）を入れる
- `Min Value`と`Max Value`はそれぞれ`0`と`1`を入力

![設定全般用ウィンドウ解説1-6](/udon-extra-menu-kit/image/setup/3-1-6.png)

> **※Note**  
> `SliderToAnimator`はSlider要素でアニメーションの変数を変更するために作りました。  
> `Parameter`はアニメーターにある変数の名前です。  
> 実際に`SeatPosition`アニメーターを開き、唯一設定されているState（SeatHeight）のインスペクターを見ると、`Value`という名の変数で`Motion`に設定されたアニメーションの状態にするよう設定されていることがわかります。  
> うまく使えばより複雑な機構も実現できます。

先ほど`Udon Behaviour`を設定した際に入れた`Slider`オブジェクトのインスペクターから`Slider`コンポーネントを設定します。  
- 初期状態の値を`Value`で設定します
- `On Value Changed (Single)`に一つ追加し、先ほど作成した`SeatAnimatorChanger`をセット
- `UdonBehaviour.SendCustomEvent (string)`を選択し、下の入力欄に`OnSliderValueChanged`と入力

![設定全般用ウィンドウ解説1-6](/udon-extra-menu-kit/image/setup/3-1-7.png)

これでSit時の高さ調整とスライダーを紐付けできました。
ここで解説した設定方法は言い換えると**「スライダーでアニメーターの変数を変更する設定」**と同じです。応用に役立ててください。

## 4. トグルスイッチで椅子のコライダーOn/Off設定する機構

ここでは手順2で行う内容とほとんど同じです。
違いは椅子そのものにコライダーがないため、`VRC_chair_udon`オブジェクトに`Mesh Collider`コンポーネントを追加しています。  
後は手順2と同じような手順で、追加した`Mesh Collider`をトグルでOn/Offできるようになります。  
是非付属のサンプルシーンで確認したり、自身で試して理解を深めるのに役立ててください。

# トグルスイッチのグループで、オブジェクトの出現状態を切り替える

Cube Exampleの各Cubeボタン（1～3）を押すと、対応した別のCubeオブジェクトが出現（有効化）します。  
この項目では下記を説明します。
- 各トグルが押された時にオブジェクトを有効化/無効化する方法
- 複数のトグルをまとめて排他制御する設定

![設定全般用ウィンドウ解説2-1](/udon-extra-menu-kit/image/setup/3-2-1.png)

## 1. 有効化/無効化するオブジェクトを作成

必要なオブジェクトを拵えてください。ここでは例としてサンプルシーンの中にある`Cube 1`～`Cube 3`を使います。

## 2. トグル毎にオブジェクトを紐付ける（ここではx3）

3つある`Toggle`オブジェクト全てに対して下記設定をします
- 初期状態でOnにしたい場合は`Is On`をOnに（3つのうち1つしかOnにできません）
- `On Value Changed (Boolean)`に一つ追加し、紐付けたいオブジェクト（`Cube 1`～`Cube 3`）をセット
- `GameObject.SetActive (bool)`を選択

![設定全般用ウィンドウ解説2-2](/udon-extra-menu-kit/image/setup/3-2-2.png)

> **※Note**  
> もしSitのOn/Offについて熟読したのであれば、Udonに関する設定が今回はないことがわかると思います。  
> **今回のように`GameObject.SetActive (bool)`を選んだプルダウンメニューから選択できるものであれば、比較的簡単にトグルと紐付けできます。（超重要）**

## 3. 初期でOffのオブジェクトを無効化しておく

サンプルシーンでは`Cube 1`のみがデフォルトOnで、残りの2と3はデフォルトオフであるため、オブジェクトの初期状態をその設定にあわせます。

![設定全般用ウィンドウ解説2-3](/udon-extra-menu-kit/image/setup/3-2-3.png)

> **※Note**  
> もしSitのOn/Offについて熟読したのであれば、そちらでは初期状態に合わせた設定をしていないことがわかると思います。  
> あちらでは設定したUdon Behaviourのスクリプト内で、トグルやスライダーの初期値を見て、その状態に自動で合わせるための仕組みが既に入っているからです。  
> そのため、今回のようなUnityの機構だけで実現する場合や、あるいはUdonスクリプトでも自動で初期状態を合わせる配慮がされていない場合は、自分で正しい初期状態になるよう設定しておく必要があります。

## 4. 排他制御の設定

サンプルとして設定されているCube Exampleでは、各ボタンを押すと他のボタンがオフになります。  
このような動きを排他制御と呼び、これはただToggleコンポーネントのオブジェクトを寄せ集めただけでは実現しません。  

`ToggleGroupElement`オブジェクトを見ると、`Toggle Group`コンポーネントがついていることがわかると思います。

![設定全般用ウィンドウ解説2-4](/udon-extra-menu-kit/image/setup/3-2-4.png)

> **※Note**  
> `Allow Switch Off`をOnにすると、排他制御しているトグルボタン全てがオフになる状態にできます。
> この設定の初期値はOffのため、トグルたちのどれか一つはOnのままにされます。

`ToggleGroupElement`直下の3つのToggle設定に`Group`という項目があります。  
ここに先ほどの`ToggleGroupElement`を設定することで、同じグループにまとめられたトグルを排他制御できます。

![設定全般用ウィンドウ解説2-5](/udon-extra-menu-kit/image/setup/3-2-5.png)

排他制御をやめて個別に動作させたい場合は、このGroup設定を削除してNoneにします。

# ピックアップオブジェクトを初期位置に戻す機構

動かしたオブジェクトを片付けるボタンについて解説します。

![設定全般用ウィンドウ解説3-1](/udon-extra-menu-kit/image/setup/3-3-1.png)

# 1. ピックアップオブジェクトを用意

必要なオブジェクトをご用意ください。ここでは例としてサンプルシーン内にある`PickupCylinder`を用いて説明します。

# 2. ボタンオブジェクトにUdonスクリプトを設定

ボタンが押された時に設定されたオブジェクトを初期位置に戻すスクリプトを設定します。
- `ButtonElement`オブジェクトに`Udon Behaviour`を追加
- `Program Source`には`ResetPosition`を設定
- ボタンが押された時に片付けたいオブジェクトを`Target Objects`に設定（ここでは`PickupCylinder`）

※別のオブジェクトにUdon Behaviourを追加して読み替えても問題ありません。

![設定全般用ウィンドウ解説3-2](/udon-extra-menu-kit/image/setup/3-3-2.png)

`ButtonElement`オブジェクトの`Button`コンポーネントを設定し、ボタンが押した時に上記スクリプトを実行する設定をします。
- `On Click ()`に`ResetPosition`を設置したオブジェクト（ここでは`ButtonElement`自身）を設定
- `UdonBehaviour.SendCustomEvent (string)`を選択し、下の入力欄に`Invoke`と入力

![設定全般用ウィンドウ解説3-3](/udon-extra-menu-kit/image/setup/3-3-3.png)

ここで解説した設定方法は言い換えると**「ボタンで任意のUdonスクリプトを実行（今回は片付け）」**と同じです。応用に役立ててください。