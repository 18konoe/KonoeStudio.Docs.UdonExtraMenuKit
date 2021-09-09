---
title: "付属UIコンポーネント"
metaTitle: "UI Component"
metaDescription: "付属するUIコンポーネントの説明"
---

# 各コンポーネント解説

![付属UIコンポーネント概要1](/udon-extra-menu-kit/image/introduction/4-1.png)

## ①ボタン

Prefab名：`ButtonElement`  
uGUIのButtonをひとつ持ちます。ボタンの上の字を変更できます。

## ②スライダー

Prefab名：`SliderElement`  
uGUIのSliderをひとつ持ちます。ラベルの文字を変更できます。

## ③トグル付きスライダー

Prefab名：`ToggleWithSliderElement`  
uGUIのToggleとSliderをひとつずつ持ちます。ラベルの文字を変更できます。

## ④トグルスイッチ

Prefab名：`ToggleElement`  
uGUIのToggleをひとつ持ちます。ラベルの文字を変更できます。

## ⑤4ボタントグルスイッチ

Prefab名：`ToggleGroupElement`  
uGUIのToggleを4つ持ち、それらをToggle Groupとして設定してあるため、一つをONにすると他の要素がOFFになる排他制御されます。  
Toggle Groupの設定をすることで、全てOFFの状態を許可できます。  
Toggle Groupをオフにすることで、排他制御ではなく複数のToggleをONの状態にできます。

## ⑥2ボタントグルボタン

Prefab名：`ToggleGroupWithTitleElement2`  
uGUIのToggleを2つ持ち、それらをToggle Groupとして設定してあります。  
上記⑤4ボタントグルスイッチのトグルが2つ版＋ラベル付きのイメージです。

## ⑦3ボタン

Prefab名：`ToggleGroupWithTitleElement3`  
uGUIのToggleを3つ持ち、それらをToggle Groupとして設定してあります。  
上記⑤4ボタントグルスイッチのトグルが2つ版＋ラベル付きのイメージです。

## ⑧アラーム設定UI

Prefab名：`SetAlarmElement`  
こちらのUIは特殊で、アラーム設定専用に設計したので他の用途は想定していません。  
睡眠用設定がある移動可能ウィンドウ内と同様の設定をすることで、アラーム設定機能を持たせることができます。