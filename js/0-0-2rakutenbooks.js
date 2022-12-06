Vue.createApp({})
    .component('rakuten-books', {
        props: ['bookImg', 'bookTitle', 'bookAuther', 'bookPrice', 'bookType','bookMemo1','bookMemo2'],
        template: `<div v-bind:class="{wrapper}">
    <div v-bind:class="{left}">
    <p v-bind:class="{img}"><img v-bind:src="imgSrc"></p>
    </div>
    <div v-bind:class="{right}">
    <p v-bind:class="{title}">
    <span v-show="bookType1" v-bind:class="{kami}">本</span>
    <span v-show="bookType2" v-bind:class="{denshi}">電子</span>{{ bookTitle }}</p>
    <p v-bind:class="{auther}">{{ bookAuther }}</p>
    <p class="memo">{{ bookMemo1 }}</p>
    <p class="memo">{{ bookMemo2 }}</p>
    <p v-bind:class="{price}">{{ bookPrice }}円<span class="tax">（税込）</span><span class="ship" v-text="shipping"></span></p>
    <p v-bind:class="{cart}"><img src="./img/rakutenbooks/cart.png"></p>
    </div>
</div>`,
        data() {
            return {
                kami: true,
                denshi: true,
                wrapper: true,
                left: true,
                img: true,
                right: true,
                title: true,
                auther: true,
                price: true,
                cart: true,
                tax: true,
            }
        },
        methods: {

        },
        computed: {
            imgSrc() {
                const img = "./img/rakutenbooks/" + this.bookImg + ".jpg"
                return img;
            },
            bookType1() {
                if (this.bookType === "kami") {
                    return true;
                }
            },
            bookType2() {
                if (this.bookType === "denshi") {
                    return true;
                }
            },
            shipping() {
                if (this.bookType === "kami") {
                    return "送料無料";
                } else { return ""; }

            }
    },
    })
    .mount('#app');