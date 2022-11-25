Vue.createApp({
    data() {
        return {
            message:'こんにちわ',
            attrs: {
                size: 30,
                maxlength: 60,
                required: true,
            }
        }
    }
}).mount('#app');