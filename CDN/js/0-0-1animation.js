Vue.createApp({
    data(){

        return{
            flag:true,
            flag2:true,
            show:true,
        };
    },

    methods: {
        onclick(){
            this.flag = !this.flag;
        },
        onclick2(){
            this.flag2 = !this.flag2;
        }

    },
}).mount('#app');