<template>
    <div class="bg">
        <div class="container">
            <h2 class="fino title">Popular products</h2>
            <div class="products" :data-x='moveX'>
                <div class="product" :style="{transform: 'translateX(' + moveX + 'px)'}">
                    <img class="img" src="assets/img/products/couch.jpg" alt="couch">
                </div>
                <div class="product" :style="{transform: 'translateX(' + moveX + 'px)'}">
                    <img class="img" src="assets/img/products/nightstand.jpg" alt="nightstand">
                </div>
                <div class="product" :style="{transform: 'translateX(' + moveX + 'px)'}">
                    <img class="img" src="assets/img/products/bed.jpg" alt="bed">
                </div>
                <div class="product" :style="{transform: 'translateX(' + moveX + 'px)'}">
                    <img class="img" src="assets/img/products/bed.jpg" alt="bed">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default({
        name: "popular(Products",
        data: function() {
            return {
                offsetLeft: 0,
                mouseIsDown: false,
                mouseX: 0,
                moveX: 0,
                maxMove: 0
            }
        },
        mounted() {

            var trackLength = (document.querySelector(".product").children.length * (400 + 30));

            

            var binds = {
                mousedown: function(e) {
                    var target = e.target;
                    if (!target.classList.contains("products")) return;
                    this.mouseX = e.clientX;
                    this.mouseIsDown = true;
                }.bind(this),
                mouseup: function(e) {

                    console.log(e.clientX - this.mouseX);

                    this.mouseIsDown = false;
                }.bind(this),
                mouseout: function() {
                    this.mouseIsDown = false;
                }.bind(this),
                mousemove: function(e) {
                    var target = e.target;
                    if (!target.classList.contains("products") || !this.mouseIsDown) return;

                    this.moveX =  this.offsetLeft - (e.clientX - this.mouseX) * .2;
                    this.offsetLeft = this.moveX;
                }.bind(this)
            };

            for(var bind in binds) {
                document.addEventListener(bind, binds[bind]);
            }
        },
        methods: {

        }
    })
</script>

<style scoped>

    .bg {
        background-color: var(--background);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    h2 {
        padding: 100px 0 50px 0;
    }

    .products {
        display: flex;
        width: 300%;
        padding-bottom: 100px;
    }

    .product {
        width: 150px;
        height: 150px;
        margin-right: 15px;
        user-select: none;
    }

    @media screen and (min-width: 600px) {
        .product {
            width: 200px;
            height: 200px;
            margin-right: 20px;
        }
    }

    @media screen and (min-width: 900px) {
        h2 {
            padding: 200px 0 100px 0;
        }

        .products {
            padding-bottom: 200px;
        }

        .product {
            width: 300px;
            height: 300px;
            margin-right: 20px;
        }
    }

    @media screen and (min-width: 1200px) {
        .title {
            padding: 200px 0 100px 0;
        }

        .products {
            padding-bottom: 200px;
        }

        .product {
            width: 400px;
            height: 400px;
            margin-right: 30px;
        }
    }
</style>
