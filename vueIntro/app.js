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
            age: 25,
            condition: true,
            books: [
                {title: 'Unconditional love', author: 'kim soo', isFave: true},
                {title: 'love the way you are', author: 'pawarit', isFave: false},
                {title: 'life is hard', author: 'vincent lancough', isFave: true},
            ]
        }
    },
    
    methods: {
        resetTitle(){
            // alert('hey');
            this.title = 'The litle Giant';
        },
        changeTitleThroughParam(title){
            this.title = title;
        },
    },
    
    computed: {
        filteredBooks(){
            return this.books.filter((book) => book.isFave)
        }
    }
});

app.mount("#app");