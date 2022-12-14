Vue.createApp({
    data(){
        return{
            current:0
        };
    },
    methods:{
        onplus(e){
            this.current += e;
        }
    }
})
.component('my-counter',{
    // ボタンクリックで加算する値
    props:['step'],
    // カスタムイベントを宣言
    emits:['plusMinus'],
    template:`<button type="button" v-on:click="onclick" class="button">{{step}}</button>`,

    methods: {
        // クリックのときにplusMinusイベントを発生
        onclick(){
            this.$emit('plusMinus',Number(this.step));
        }
    },
})
.mount('#app');