const app = new Vue({
    el: '#app',
    data: {
        sitename: 'EduXplore',
        bannerimage: "Vue.js App/images/playing 1.jpg",
        activities: activities,
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
            gift: 'Send As A Gift',
            sendGift: 'Send As A Gift',
            dontSendGift: 'Do Not Send As A Gift'
        },
        cart: [],
        showactivity: true,
        type: 'Home'
    },
    computed: {
        cartItemCount() {
            return this.cart.length;
        },
        canCheckout() {
            return this.cartItemCount > 0;
        }
    },
    methods: {
        addToCart(activity) {
            this.cart.push(activity.id);
        },
        canAddtoCart(activity) {
            return activity.availableSpace > this.cartCount(activity.id);
        },
        cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        },
        spaceLeft(activity) {
            return activity.availableSpace - this.cartCount(activity.id);
        },
        showCheckout() {
            this.showactivity = !this.showactivity;
            console.log(this.showactivity);
        },
        toActivity() {
            this.type = "Activity";
        },
        toHome() {
            this.type = "Home";
        }
    }
});
    