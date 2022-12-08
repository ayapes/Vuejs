// Vue.createApp({})
//     .component('my-hello', {
//         template: `<div>こんにちわ、{{ name }}！</div>`,
//         data() {
//             return {
//                 name: 'Vue.js',
//             };
//         }
//     })
//     .mount('#app');


// グローバル登録

const MyHello = {
    template: `<div>こんにちわVue.js!</div>`
};

const YourHello = {
    template: `<div>こんばんわVue.js!</div>`
};

Vue.createApp({
    components: {
        'my-hello': MyHello,
        'your-hello':YourHello,
    }
}).mount('#app');