Vue.createApp({

    methods: {
        onclick(e){
            console.log(e.screenX)
        }
    },
}).mount("#app")