const Alpha = {
    template: `<button v-bind:style="{width:'40px',height:'40px',marginRight:'20px'}" v-on:click="onclickA">A</button>`,
    methods: {
        onclickA() {
            console.log("A");
        }
    }
};

const Beta = {
    template: `<button v-bind:style="[size]" v-on:click="onclickB">B</button>`,
    data() {
        return {
            size: {
                width: '40px',
                height: '40px',
                'margin-right':'20px'
            }
        }
    },
    methods: {
        onclickB() {
            console.log("B");
        }
    }
};

Vue.createApp({

    components: {
        'alpha': Alpha,
        'beta': Beta,
    }
}).mount('#app');