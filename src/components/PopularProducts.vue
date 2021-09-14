<template>
    <div class="bg">
        <div class="container">
            <h2 class="fino title hidden">Popular products</h2>
            <div class="slider" ref="slider">
                <div class="products" ref="products">
                    <div class="product">
                        <img class="img" src="assets/img/products/couch.jpg" alt="couch">
                    </div>
                    <div class="product">
                        <img class="img" src="assets/img/products/nightstand.jpg" alt="nightstand">
                    </div>
                    <div class="product">
                        <img class="img" src="assets/img/products/bed.jpg" alt="bed">
                    </div>
                    <div class="product">
                        <img class="img" src="assets/img/products/couch.jpg" alt="bed">
                    </div>
                    <div class="product">
                        <img class="img" src="assets/img/products/nightstand.jpg" alt="bed">
                    </div>
                    <div class="product">
                        <img class="img" src="assets/img/products/bed.jpg" alt="bed">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default({
        name: "popularProducts",
        data: () => {
            return {
                isPressed: false,
                startingPoint: 0,
                cursorX: 0
            }
        },
        mounted() {
            this.$refs.slider.addEventListener("mousedown", this.mouseDown);
            document.addEventListener("mouseup", this.mouseUp);
            this.$refs.slider.addEventListener("mousemove", this.mouseMove)
        },
        unmounted(){
            document.removeEventListener("mouseup", this.mouseUp);
        },
        methods: {
            mouseDown(e) {
                this.isPressed = true;
                this.startingPoint = e.offsetX - this.$refs.products.offsetLeft;
            },
            mouseUp() {
                if(this.isPressed) this.isPressed = false;
            },
            mouseMove(e) {
                if(this.isPressed) {
                    e.preventDefault();
                    this.cursorX = e.offsetX;
                    this.$refs.products.style.left = `${this.cursorX - this.startingPoint}px`
                }

                this.checkBoundary();
            },
            checkBoundary() {
                if(parseInt(this.$refs.products.style.left) > 0) {
                    this.$refs.products.style.left = 0
                } else if((parseInt(document.querySelector(".container").offsetWidth) - parseInt(this.$refs.products.style.left)) > this.$refs.products.offsetWidth) {
                        this.$refs.products.style.left = `-${this.$refs.products.offsetWidth - document.querySelector(".container").offsetWidth}px`;
                }
            }
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

    .slider {
        width: 95vw;
        overflow: hidden;
    }

    .products {
        display: flex;
        width: 300%;
        margin-bottom: 100px;
        position: relative;
        pointer-events: none;
    }

    .product {
        width: 150px;
        height: 150px;
        margin-right: 15px;
        pointer-events: none;
    }

    @media screen and (min-width: 600px) {
        .products {
            width: 200%;
        }

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
            margin-bottom: 200px;
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
            margin-bottom: 200px;
        }

        .product {
            width: 400px;
            height: 400px;
            margin-right: 30px;
        }
    }

    @media screen and (min-width: 1500px) {
        .products {
            width: 150%;
        }
    }
</style>
