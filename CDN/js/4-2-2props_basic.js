Vue.createApp({})
    .component('my-hello', {
        // props: ['yourName'],
        props:{
            yourName:{
                type:String,
                default:`名無し`,
                validator(value){
                    return value.length <= 5
                },
                // required:true,
                
            },
            // props:{
            //     yourName:String,
            // },
            //user propsは任意のUser型である
            // user:User,
        },
        template: `<div>こんにちわ！{{ yourName }}さーん！</div>`,
    })
    .component('my-counter', {
        props: ['init'],
        template: `<div>現在の値は{{ current }}です！<input type="button" v-on:click="onclick" value="増やす"></div>`,
        data() {
            return {
                current: this.init,
            };
        },
        methods: {
            onclick() {
                console.log(this.init);
                console.log(this.current);
                this.current++;
                //↑this.init++:でええんちゃうん？と思うけど、propsの値はこっち側では変更してはいけないルール。守られているので、変更できない。propsはHTML側（親）で指定しているinit="0"のこと。なのでcurrentに代入して、currentをどうにかこうにかする形にしているということである。
            }
        },

    })
    .mount('#app');