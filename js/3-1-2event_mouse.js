Vue.createApp({
    data(){
        return{
            path:'https://2.bp.blogspot.com/-H6-3MlL99N8/VKTgxjpDkOI/AAAAAAAAqXE/jOcqBjUTIG8/s400/pyoko12_christmas_wreath.png'
        };
    },

    methods:{
        onmouseenter(){
            this.path='https://1.bp.blogspot.com/-ionQjiY2pYc/UYzXLhhJhxI/AAAAAAAAR5A/MldjYi0D7G4/s400/christmas_wreath.png';
        },

        onmouseleave(){
            this.path='https://2.bp.blogspot.com/-H6-3MlL99N8/VKTgxjpDkOI/AAAAAAAAqXE/jOcqBjUTIG8/s400/pyoko12_christmas_wreath.png';
        }
    }
}).mount('#app');