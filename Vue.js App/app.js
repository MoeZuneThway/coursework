const app = new Vue({
    el:'#app',
    data:{
        sitename:'Vue.js Pet Depot',
        product:{
            id: 1,
            title:"Cat Food, 25lb bag",
            description:"A 25 pound bag of irresistible organic goodness for your cat.",
            price: 20.00,
            image: "cat.jpg",
            availableIventory: 5,
            
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
        showProduct: true,
        
    },
    computed:{
        cartItemCount(){
            return this.cart.length;
        },
        canAddtoCart(){
            return this.product.availableIventory > this.cartItemCount;
        },
        canCheckout(){
            return this.cartItemCount > 0;
        }
    },
    methods:{
        addToCart(id){
                this.cart.push(id);   
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true 
            },
    }
    
});