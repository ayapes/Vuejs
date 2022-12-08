
// アプリを起動する
Vue.createApp(
    // 材料
    {
        //  key : 値
        //  dataはkey、function()が値
        // 「data」はデータオブジェクト。Vueで設定されてる。
        // データバインディング：データオブジェクトをHTMLに割り当てること
        data: function () {
            return {
                message: '皆さんこんにちわー！',
                value:'5',
                url:'https://wings.msn.to/',
                email: 'AyaYamaoka@ymok.me'
            };
        },

        computed:{
            // プロパティ（値）として登録される
            localEmail: function(){
                return this.email.split('@')[0].toLowerCase();
            }
        },

        methods: {
            // メソッド（関数）として登録される。
            localEmail2: function(){
                return this.email.split('@')[0].toLowerCase();
            }
        },
    }
    // 材料ここまで
).mount('#app');
// 最後に指定したID・クラスにマウントします