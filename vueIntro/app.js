// const app = Vue.createApp({
//     //data, functions
//     template: '<h2>Hi I am the template</h2>'
// });


const app = Vue.createApp({
    //this is shorthand for function
    data(){
        return {
            title: 'The litle Giant',
            author: 'Bulfo Macaren',
            age: 25
        }
    },
    methods: {
        resetTitle(){
            // alert('hey');
            this.title = 'The litle Giant';
        }
    }
});

app.mount("#app");