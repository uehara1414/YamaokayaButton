# YamaokayaButton

## 開発
```sh
npm install -g exp
npm install
exp start # 開発用ビルドの開始
```

## Build
```sh
exp build:ios # 本番用ビルド
```


## 解決したい課題
山岡家のラーメンを一緒に食べに行きたい人を集めたいが、声をどこでどうかけたらいいのかわからない。
候補者全員に通知を送りたい。

## 作るもの
山岡家を食べたいときに、どの山岡家にいついくのかを入力することで、アプリを入れている人全員に通知を送る事ができるスマホアプリ。

入力項目は、山岡家の店舗（とりあえずは函館内の山岡家で選択式）、時間、コメント。
通知を受けた側は、参加表明を一言コメントとともにできる。

単純だが、とりあえずはこれだけのシステムとする。

## 画面設計
1. ログイン画面

1. メイン画面
    - 下部に画面間推移ボタン(タブナビゲーター？)

    1. 現在の募集情報表示画面
        - 募集中情報リスト
            - onClick => 参加表明画面(モーダル)
                - コメント入力(テキストインプット)
                - 参加ボタン


    1. 募集追加画面
        - 店舗選択(スライダー)
        - 時間選択(スライダー)
        - コメント入力(テキストインプット)