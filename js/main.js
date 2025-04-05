var app = new Vue({
    el: "article",
    data: {
        products:[
            {
                id:1,
                title:"Grape sweet", 
                short_text:'sweet', 
                image:'../grape/grape 1.jpg', 
                desc: "grape - this is a sweet and juicy fruit that is perfect for desserts and salads. It contains a lot of fiber and antioxidants."
            },
            {
                id:2,
                title:"grape juicy", 
                short_text:'juicy', 
                image:'../grape/grape 2.jpg',
                desc: "grape - this is a juicy and aromatic fruit that perfectly quenches thirst. It contains a lot of vitamins and minerals that are good for health." 
                
            },
            {
                id:3,
                title:"Grape useful", 
                short_text:'uselful', 
                image:'../grape/grape 3.jng', 
                desc: "Grape - this is a useful fruit that helps improve metabolism and lower cholesterol levels in the blood. It contains a lot of fiber and vitamins."
            },
            {
                id:4,
                title:"Grape aromatic", 
                short_text:'aromatic', 
                image:'../grape/grape 4.jng', 
                desc: "grape - this is an aromatic fruit that has a pleasant smell and taste. It contains a lot of antioxidants and vitamins that are good for health."
            },
            {
                id:5,
                title:"Grape nice", 
                short_text:'nice', 
                image:'../grape/grape 5.jng', 
                desc: "garpe - this is a nice fruit that has a pleasant taste and aroma. It contains a lot of vitamins and minerals that are good for health."
            }
        ],
        product: {},
        btnVisible: 0
    },
    mounted:function(){
        this.getProduct();
    },
    methods: {
        getProduct: function() {
            if (window.location.hash) {
                var id = window.location.hash.replace("#", "");
                if (this.products > 0) {
                    for (let i in this.products) {
                        if (this.products[i].id === id) {
                            this.product = this.products[i];
                        }
                    }
                }
            }
        }
    }
});