Vue.createApp({})
    .component('rakuten-books', {
        props: ['bookImg', 'bookTitle', 'bookAuther', 'bookPrice'],
        template: `<div v-bind:class="{wrapper}">
    <div v-bind:class="{left}">
    <p v-bind:class="{img}"><img v-bind:src="imgSrc"></p>
    </div>
    <div v-bind:class="{right}">
    <p v-bind:class="{title}">{{ bookTitle }}</p>
    <p v-bind:class="{auther}">{{ bookAuther }}</p>
    <p v-bind:class="{price}">{{ bookPrice }}円<span>（税込）</span></p>
    <p v-bind:class="{cart}"><img src="./img/rakutenbooks/cart.png"></p>
    </div>
</div>`,
        data() {
            return {
                wrapper: true,
                left: true,
                img: true,
                right: true,
                title: true,
                auther: true,
                price: true,
                cart: true,
            }
        },
        computed: {
            imgSrc() {
                const img = "./img/rakutenbooks/" + this.bookImg + ".jpg"
                return img;
            },
        },
    })
    .mount('#app');