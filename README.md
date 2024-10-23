# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Table of contents

1. はじめに

- これがVue.jsだ！
- このコースの流れ
- 再生速度の変更とQ&Aの使い方
- このコースのもくじ

2. こうしてVue.jsをはじめる

- イントロダクション
- 「単一ファイルコンポーネント」と「Vite」
- こうして開発環境を整える(Node.js, VSCode, create-vue)
- create-vueが作成したプロジェクトはどうなっているのか
- 拡張機能はこうセットアップする(Volar, ESLint, Prettier)
- createAppを使ってVueのアプリを作る方法
- .vueファイルはこうなっている！
- JavaScriptのデータを表示する方法
- クリックされた時に処理を実行する方法
- これがリアクティビティだ！
- ref()を使ってリアクティブなデータを作る方法
- reactive()を使ってオブジェクトをリアクティブにする方法
- reactive()とref()はこうして一緒に使える
- 普通のオブジェクトとref()はこうして一緒に使う

3. これがVue.jsの基礎だ！(テンプレート構文, イベントハンドリング, 算出プロパティ, ウォッチャー, クラス/スタイル)

- イントロダクション
- これがテンプレート構文だ！
- 二重波括弧({})を使ってデータを描画する方法
- これがv-から始まる特別な属性であるディレクティブだ！
- v-htmlを使ってデータをHTMLとして出力する方法
- こうしてv-bindを使って属性値を指定する
- Boolean属性に対してv-bindを利用する方法
- v-bindで１度に複数の属性を指定する方法
- v-onを用いてクリックなどのイベント発生時に特定の処理をする方法
- イベントオブジェクトを使ってイベントの情報を取得する方法
- v-onでハンドラーに引数を渡す方法
- イベント修飾子を使って頻繁に行う処理を簡略化する方法 - stop, prevent
- キー修飾子を使ってキーボードイベントに対して処理をする方法
- ディレクティブの構造はこうなっている
- 角括弧([])を使ってディレクティブの引数にscriptのデータを指定する方法
- v-modelを使用してinputを単純に扱えるようにする方法
- computedを使って複雑な式を１つにまとめる方法
- computedを使う時はここに注意する - ReactiveEffect
- watchEffectを使ってリアクティブなデータの変更を監視する方法
- watchを使って特定のリアクティブなデータの変更を監視する方法
- class属性はこう指定する！
- style属性はこう指定する！

4. 「条件付きレンダリング」と「リストレンダリング」

- イントロダクション
- v-if, v-else, v-else-ifを使って描画を条件分岐する方法
- templateタグを使用して効率よく複数の要素にv-ifを適応させる方法
- v-showを使って頻繁に何かを切り替える処理のパフォーマンスを上げる方法
- v-forを使って配列のリストを描画する方法
- key属性はこう使う！
- v-forで配列のインデックスを取得する方法
- v-forで分割代入する方法
- templateタグを使用して効率よく複数の要素にv-forを適応させる方法
- オブジェクトに対してv-forを使用する方法
- n in 10のように整数値に対してv-forを適用する方法
- inの代わりにofを使用してv-forを使う方法

5. コンポーネントはこう使う！

- イントロダクション
- これがコンポーネントツリーだ！
- コンポーネント同士を繋げる方法
- おすすめのコンポーネント名の書き方
- グローバル登録でコンポーネントをどこでも使えるようにする方法
- 「componentsフォルダの作成」と「@でパスを省略する方法」
- 属性をコンポーネントにつけた時はこう継承される
- styleタグにscoped属性をつけてCSSの適用範囲をコンポーネント内に限定する方法
- Viteの機能を使ってグローバルなCSSを作る方法
- Vue Devtoolsをブラウザの拡張機能として使い開発の手助けにする方法

6. 親子間のコンポーネントでデータを受け渡す方法

- イントロダクション
- propsを利用して親から子にデータを渡す方法
- バリデーションを利用してpropsに予期しないデータが渡るのを防ぐ方法
- 高度なバリデーションをpropsに指定する方法
- propsの命名規則はこうなっている
- emitを使ってイベントを発生させて子から親に対して通信する方法
- 引数をemitに渡して子から親にデータを渡す方法
- defineEmitsを使って明示的にemitするイベントを示す方法
- emitの命名規則はこうなっている

7. 食事選択アプリをVue.jsで作る方法

- イントロダクション
- アプリのセットアップを行う方法
- コンポーネントを使って食べ物の情報をこうして管理する
- propsを使って汎用的な食べ物のコンポーネントを作成する方法
- ユーザーが食べたい物をクリックする時の処理はこう書く
- 最後にユーザーが最も食べたい物を１つだけ表示する方法

8. Vue.jsの内部構造はこうなっている

- イントロダクション
- こうして仮想DOMを使ってレンダリングをしている
- 仮想DOMはコンポーネント単位ではこうなっている
- これがコンポーネントのライフサイクルだ！
- DOMが更新されるタイミングはこうなっている -nextTick()
- refを使って直接DOM要素にアクセスする方法

9. コンポーネントの高度な機能はこう書く

- イントロダクション
- slotを使ってタグごと親から子にデータを渡す方法
- フォールバックコンテンツを使ってデフォルトのコンテンツを指定する方法
- 名前付きスロットを使ってslotタグを複数指定する方法
- slotで子から親にデータを渡す方法
- 動的コンポーネントを使って簡単にコンポーネントを切り替える方法 - <component is>
- shallowRefを使ってパフォーマンスを上げる方法
- KeepAliveを使ってデータが消えないようにする方法
- KeepAliveにはこれらの属性をつけることができる！ - include属性 exclude属性 max属性
- KeepAliveのライフサイクルはこうなっている - onActivated, onDeactivated
- <Teleport>を利用して好きな位置にテンプレートを配置する方法
- 非同期コンポーネントを利用して遅延読み込みする方法 - defineAsyncComponent
- 非同期コンポーネントのローディング中やエラー時に別のコンポーネントを表示する方法

10. こうすれば簡単にVue.jsでフォームを作れる

- イントロダクション
- テキストのinputタグとtextareaタグにv-modelを適用させる方法
- チェックボックスにv-modelを適用させる方法
- ラジオボタンにv-modelを適用させる方法
- selectタグにv-modelを適用させる方法
- v-modelで使用できる３つの修飾子 - lazy, trim, number
- defineModelを使ってコンポーネントにv-modelを使用する方法

11. Composableを使って処理の部分を再利用する方法

- イントロダクション
- これがComposableだ！
- Composable同士を組み合わせる方法 - Composition API
- Composableの書き方のベストプラクティスはこうなっている
- VueUseを使って簡単に便利な機能を利用する方法

12. アニメーションはこうしてVue.jsで使う

- イントロダクション
- CSSトランジションとCSSアニメーションはこうなっている
- <Transition>を使って要素の表示時や消える時にアニメーションをつける方法
- 内部でTransitionコンポーネントはこうやってクラスをつけている
- name propsを使ってクラスの名前をv以外にする方法
- CSSアニメーションをTransitionコンポーネントで使う方法
- appearを使って最初の表示時にもアニメーションをつける方法
- クラスの名前を自由に変える方法 - Animate.css
- modeを使って２つの要素が切り替わる時に綺麗にアニメーションする方法
- 6つのTransitionコンポーネントが発生させるイベント
- JavaScriptで要素の表示時や消える時にアニメーションをつける方法
- enter-cancelledとleave-cancelledを使って綺麗なJavaScriptアニメーションを作る方法
- TransitionGroupを使ってリストに対してアニメーションをつける方法
- moveクラスを利用して滑らかなアニメーションをリストにつける方法
- 13. Vue RouterでURLごとに違うコンポーネントを表示する方法
-
- イントロダクション
- Vue Routerはこうしてセットアップする
- Vue Routerの設定はこう書く - history, <RouterView>
- <RouterLink>を使って効率良くページを移動する方法
- 動的な:to属性を使って遷移先のページをオブジェクトで指定する方法
- プログラムから画面を移動する方法 - push(), replace(), go()
- nameを使ってルートに名前をつける方法
- パラメーター(:)を使って動的なパスを作る方法
- routeオブジェクトでURLの情報を取得する方法
- パラメーターに色々なルールを追加する方法 - (\\d+), ?, +, \*
- どんなパスでも全てキャッチする処理を書く方法
- 「リダイレクト」と「エイリアス」
- props: trueとしてコンポーネントの再利用性を上げる方法
- ネストされたRouterViewはこう使う
- 名前付きビューを使って複数のRouterViewを同じ階層に配置する方法
- <Transition>をVue Routerと一緒に使う方法
- スクロールの振る舞いはこうして指定する
- beforeEachナビゲーションガードでページ移動時に処理を実行する方法
- beforeEnterナビゲーションガードで特定のページ移動時に処理を実行する方法
- onBeforeRouteUpdateナビゲーションガードでコンポーネントの再利用時に処理を実行する方法
- beforeResolveナビゲーションガードとafterEachフックでページ移動完了時に処理を実行する方法
- onBeforeRouteLeaveナビゲーションガードでページから離れる時に処理を実行する方法
- metaはこう使って各ルートに情報をつける！
- Vue Routerで遅延読み込みをして効率よくコンポーネントをダウンロードする方法

14. Piniaを使ってプロジェクト全体で使うデータを管理する方法

- イントロダクション
- Piniaがなぜ必要なのか
- Piniaを使ってStoreを定義する方法 - defineStore()
- Storeで定義したデータをコンポーネントから使う方法
- 「State」と「Getters」と「Actions」
- コンポーネント以外のところでStoreで定義したデータを使う方法
- 15. 世界中に自分のアプリを公開する方法
- イントロダクション
- npm run buildでdistフォルダを作って公開する準備をする方法
- これが静的ホスティングサービスだ！
- Cloudflare Pagesを使ってVue.jsのアプリケーションを公開する方法

16. このコースのまとめ

17. TypeScriptとVue.jsを一緒に使う方法(ボーナス)

- イントロダクション
- こうしてTypeScriptをセットアップする
- ref()とTypeScriptを一緒に使う方法
- computed()とTypeScriptを一緒に使う方法
- イベントハンドラーとTypeScriptを一緒に使う方法
- propsとTypeScriptを一緒に使う方法
- defineModel()とTypeScriptを一緒に使う方法
- emitとTypeScriptを一緒に使う方法

18. Options APIはこうなっている(ボーナス)

- イントロダクション
- dataやmethodsを使ってOptions APIでデータを操作する方法
- 「Options API」vs「Composition API」
- computedとwatchはOptions APIではこうなっている
- ライフサイクルフックはOptions APIではこうなっている
- コンポーネントの親子間のデータの受け渡しはOptions APIではこうなっている -props, emit
- ビルドツールを使わずにCDNからVue.jsを使う方法
- setup()を使ってComposition APIを使う方法
