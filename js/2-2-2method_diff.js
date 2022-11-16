
Vue.createApp({

    data: function () {
        return {
            current: new Date().toLocaleString()
        };
    },
    computed: {
        // プロパティ（値）として登録される。
        // あらかじめ処理を行い、呼び出されたら結果を返す
        randomc: function () {
            return Math.random();
        }
    },

    methods: {
        // メソッド（関数）として登録される
        // 呼び出す（今回はクリック動作）と処理を行って結果を返す（リアタイやね）
        onclick: function () {
            // クリックの旅にcurrentを書き換えます。⇒現在時刻が変わる
            this.current = new Date().toLocaleString();
        },
        randomm: function () {
            return Math.random();
        }
    }
}).mount('#app');