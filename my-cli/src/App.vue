<template>
<img alt="Vue logo" src="./assets/logo.png">
<HelloWorld msg="Vue.js Appにようこそ"/>
<HelloWorld msg2="Vue.js Appにようこそ★"/>
<GoodBye></GoodBye>
<RakutenBooks bookImg="001" book-title="笑犬楼vs.偽伯爵" book-auther="筒井 康隆, 蓮實 重彦" book-price="1650" bookType="kami" bookMemo1="2022年12月21日頃発売 ／ 新潮社 ／ 単行本">
</RakutenBooks>
<RakutenBooks book-img="002" book-title="人類よさらば （河出文庫）[電子書籍版]" book-auther="筒井康隆" book-price="814" book-type="denshi" book-memo1="2022年05月27日発売 ／ 小説・エッセイ ／ 河出書房新社 ／ 対応端末：電子書籍リーダー, Android, iPhone, iPad">
</RakutenBooks>
<RakutenBooks book-img="003" book-title="馬の首風雲録 （徳間文庫）" book-auther="筒井康隆" book-price="946" book-type="kami" book-memo1="シリーズ名： 馬の首風雲録" book-memo2="2022年10月07日発売 ／ 徳間書店 ／ 文庫">
</RakutenBooks>
<RakutenBooks book-img="004" book-title="あるいは酒でいっぱいの海 （河出文庫）[電子書籍版]" book-auther="筒井康隆" book-price="693" book-type="denshi" book-memo1="2021年09月03日発売 ／ 小説・エッセイ ／ 河出書房新社 ／ 対応端末：電子書籍リーダー, Android, iPhone, iPad">
</RakutenBooks>
<RakutenBooks book-img="005" book-title="誰にもわかるハイデガー 文学部唯野教授・最終講義 （河出文庫）" book-auther="筒井康隆" book-price="759" book-type="kami" book-memo1="シリーズ名： 誰にもわかるハイデガー" book-memo2="2022年03月08日頃発売 ／ 河出書房新社 ／ 文庫">
</RakutenBooks>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GoodBye from './components/GoodBye.vue'
import RakutenBooks from './components/RakutenBooks.vue'

export default {
name: 'App',
components: {
HelloWorld,
GoodBye,
RakutenBooks
}
}
</script>

<style>
body{
box-sizing: border-box;
margin: 0;
padding: 0;
line-height: 100%;
font-size: 10px;
}
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
</style>
