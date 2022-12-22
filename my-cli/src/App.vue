<template>
    <!-- 楽天ブックス
        Items(検索結果)>Item(一冊ずつ)>Item>細かい情報 -->
    <!-- コンポーネントへのv-forの場合、複製されたコンポーネントを区別する重複しないkey属性が必要 -->
    <BookCard v-for="book in books"
              v-bind:bookData = "book.Item" 
              v-bind:key="book.Item.isbn"/>
              <hr>
    <!-- P.88 v-forから配列要素だけでなく、その配列の各キーやインデックス番号が取れる -->
    <!-- bookDataていう空のオブジェクトにItem(細かい情報の方)群をほりこむ -->
    <BookCard v-for="(book, key,index ) in books"
              v-bind:bookData = "book.Item" 
              v-bind:key="index" />
  </template>
  
  <script>
  // import 外部ファイルを読み込む
  import BookCard from './components/BookCard.vue'
  // export 外部ファイルに公開する
  export default {
    name: 'App',
    components: {
      BookCard
    },
    data () {
      return {
      // 初回ロード時に渡すダミーデータ
       bookData : {}, //空のオブジェクト
       books : [], // 空の配列
      }
    },
    // ライフサイクルフック（実行タイミングの指定）
    // 非同期処理を含む関数はmountedの中にに書く
    mounted: function () {
      const RAKUTEN_API = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=%E7%AD%92%E4%BA%95%E5%BA%B7%E9%9A%86&booksGenreId=001&applicationId=1045443226673597322'
      fetch(RAKUTEN_API)
        .then(response => response.json())
        .then(data => {
          // 複数の本のデータが入った配列
          const books = data.Items;
          this.books = books;//books[]にほりこんでる
        })
      }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>