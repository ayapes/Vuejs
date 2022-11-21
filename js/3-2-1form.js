Vue.createApp({

    data(){
        return{
            myName:'匿名',
            pet:'いぬ',
            agree:false,
            os:['Windows','macOS'],
            os2:'',
            os3:['Windows','macOS'],
        };
    }
}).mount('#app')