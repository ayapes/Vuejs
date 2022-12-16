<template>
<div id="apppp">
<div class="wrapper">
<div class="left">
<p class="img"><img v-bind:src="imgSrc"></p>
</div>
<div class="right">
<p class="title">
<span v-show="bookType1" class="kami">本</span>
<span v-show="bookType2" class="denshi">電子</span>{{ bookTitle }}</p>
<p class="auther">{{ bookAuther }}</p>
<p class="memo" v-text="bookMemo1"></p>
<p class="memo">{{ bookMemo2 }}</p>
<p class="price">{{ bookPrice }}円<span class="tax">（税込）</span><span class="ship" v-text="shipping"></span>
</p>
<p class="cart"><img src="@/assets/rakutenbooks/cart.png"></p>
</div>
</div></div>
</template>
<script>
export default {
name: 'RakutenBooks',
props: ['bookImg', 'bookTitle', 'bookAuther', 'bookPrice', 'bookType', 'bookMemo1', 'bookMemo2'],
data() {
return {
kami: true,
denshi: false,
}
},
methods: {
    
},
computed: {
imgSrc() {
const img = require("../assets/rakutenbooks/" + this.bookImg + ".jpg");
console.log("あああ");
return img;
},

bookType1() {
if (this.bookType === "kami") {
return true;
}
return false;
},
bookType2() {
if (this.bookType === "denshi") {
return true;
}
return false;
},

shipping() {
if (this.bookType === "kami") {
return "送料無料";
} else { return ""; }


}
},
}
</script>
<style scoped>
#apppp {
margin: 30px auto !important;
width: 700px;
box-sizing: border-box;
margin: 0;
padding: 0;
line-height: 100%;
font-size: 10px;
}

.wrapper {
border: 1px solid #666;
display: flex;
flex-wrap: nowrap;
justify-content: space-around;
margin-bottom: 20px;

}

.left {
width: 180px;
margin: 15px 0;
/* border: 1px solid red; */
}

.img {
text-align: center;
}

.img img {
max-width: 100%;
box-shadow: 0px 0px 6px 4px rgba(117, 117, 117, 0.64);
}

.right {
width: 480px;
margin: 15px 0;
position: relative;
}

.title {
font-size: 17px;
font-weight: bold;
padding-bottom: 10px;
color: rgb(38, 38, 252);
display: flex;
align-items: center;
}

.kami {
/* width: 50px; */
text-align: center;
display: inline-block;
background-color: red;
color: #FFF;
height: 20px;
line-height: 20px;
padding: 0 10px;
margin-right: 5px;
font-weight: 100;
font-size: 12px;
}

.denshi {
/* width: 50px; */
text-align: center;
display: inline-block;
border: 1px solid red;
color: red;
height: 20px;
line-height: 20px;
padding: 0 10px;
margin-right: 10px;
font-weight: 100;
font-size: 12px;
white-space: nowrap;
}

.auther {
    text-align: left;
font-size: 13px;
padding-bottom: 20px;
}

.memo {
    text-align: left;
font-size: 12px;
color: rgb(153, 153, 153);
padding-bottom: 5px;
}

.price {
    text-align: left;
font-size: 18px;
font-weight: bold;
color: rgb(185, 42, 42);
}

.tax {
font-size: 13px;
color: rgb(190, 190, 190);
}

.ship {
font-size: 15px;
}

.cart {
position: absolute;
bottom: 0;
left: 0;
}

.cart img:hover {
opacity: 0.6;
cursor: pointer;
}
</style>