const app = new Vue({
    el:'#app',
    data:{
        sitename:'EduXplore',
        bannerimage: "Vue.js App/images/playing 1.jpg",
        activity:{
            id: 1,
            title:"Football",
            description:"Join our 3-month football training program for children!",
            location:"Hendon, London",
            price: 30.00,
            image: "images/playing 1.jpg",
            availableSpace: 10,
            
        },
        states: {
            AL: 'Alabama',
            AK: 'Alaska',
            AR: 'Arizona',
            CA: 'California',
            NV: 'Nevada'
          },
          order: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            method: 'Home Address',
            business: 'Business Address',
            home: 'Home Address',
            gift:'Send As A Gift',
            sendGift: 'Send As A Gift',
            dontSendGift: 'Do Not Send As A Gift'
          },
        cart:[],
        showactivity: true,
        type : 'Home'
    },
    computed:{
        cartItemCount(){
            return this.cart.length;
        },
        canAddtoCart(){
            return this.activity.availableSpace > this.cartItemCount;
        },
        canCheckout(){
            return this.cartItemCount > 0;
        },
        spaceLeft() {
            return this.activity.availableSpace - this.cartItemCount;
           }
    },
    methods:{
        addToCart(id){
                this.cart.push(id);  
        },
        showCheckout() {
            this.showactivity = this.showactivity ? false : true;
            console.log(this.showactivity);
            },
            toActivity(){
                this. type = "Activity"
            },
            toHome(){
                this.type = "Home"
            }
    }
    
});