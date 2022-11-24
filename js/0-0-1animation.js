Vue.createApp({
    data(){

        return{
            flag:true,
            show:true,
        };
    },

    methods: {
        onclick(){
            this.flag = !this.flag;
        },
        onclick2(){
            this.flag = !this.flag;
        }

    },
}).mount('#app');