Vue.createApp({
    data() {
        return {
            message: ''
        };
    },

    methods: {
        onchange(){
            //アップロードファイルを準備
            //refはdocument.getElementBy...の代わりのようなもの。
            const fl = this.$refs.upfile.files[0];

            // multipart/form-data形式の空のインスタンスを作る
            //JSのままではサーバーのPHPにデータ渡せない（言語違うから）
            //PHPでも理解できる「form-data形式」というやつに変換するために
            //FormData（）をnewしております。
            const data = new FormData();

            data.append('upfile', fl, fl.name);

            //サーバー（指定したURL）にデータを送信する関数
            //HTMLで<form type="post" action="upload.php"...の代わり
            fetch('upload.php', {
                method: 'POST',
                body: data,
            })
                //then(); 前段のメソッドの成功時には結果を表示
                .then(response => response.text())
                .then(text => {
                    this.message = text;
                })
                //catch():前段のメソッド失敗時にはエラーメッセージをダイアログに表示
                .catch(error => {
                    window.alert(`Error: ${error.message}`);
                });
        }
    }
}).mount('#app');
