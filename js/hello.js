
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
                url:'https://wings.msn.to/'
            };
        }
    }
    // 材料ここまで
).mount('#app');
// 最後に指定したID・クラスにマウントします