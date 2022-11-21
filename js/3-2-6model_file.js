Vue.createApp({
    data() {
        return {
            message: ''
        };
    },

    methods: {
        onchange(){
            //アップロードファイルを準備
            const fl = this.$refs.upfile.files[0];
            // multipart/form-data形式の空のインスタンスを作る
            //JSのままではサーバーのPHPにデータ渡せない（言語違うから）
            //PHPでも理解できる「form-data形式」というやつに変換するために
            //FormData（）をnewしております。
            const data = new FormData();
            data.append('upfile', fl, fl.name);
            //サーバーにデータを送信
            fetch('upload.php', {
                method: 'POST',
                body: data,
            })
                //成功時には結果を表示
                .then(response => response.text())
                .then(text => {
                    this.message = text;
                })
                //失敗時にはエラーメッセージをダイアログに表示
                .catch(error => {
                    window.alert(`Error: ${error.message}`);
                });
        }
    }
}).mount('#app');