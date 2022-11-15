
Vue.createApp({

    data: function () {
        return {
            current: new Date().toLocaleString()
        };
    },
    computed: {
                    randomc: function () {
                return Math.random();
            }
    },

    methods: {
        onclick: function () {
            // クリックの旅にcurrentを書き換えます。⇒現在時刻が変わる
            this.current = new Date().toLocaleString();
        },
        randomm: function () {
            return Math.random();
        }
    }
}).mount('#app');