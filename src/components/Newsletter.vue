<template>
    <div class="bgContainer">
        <div class="bg" :style="{'--remaining': remainingSpace}">
            <div class="form">
                <div class="inner">
                    <h2 class="title hidden">Newsletter</h2>
                    <p class="p hidden">Subscribe to our newsletter and get a 10% discount!</p>
                    <form>
                        <input type="text" class="hidden" placeholder="Email address">
                    </form>
                    <div class="cta hidden">
                        <p class="ctaTxt">Subscribe</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="imgDiv">
            <img class="img" src="/assets/img/keuken.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default{
    name: "newsletter",
    data: function() {
        return {
            remainingSpace: "0px"
        }
    },
    mounted() {
        this.calcRemainingSpace();
    },
    methods: {
        calcRemainingSpace() {
            if(window.innerWidth >= 1300) {
                this.remainingSpace = (
                    (window.innerWidth - 1300 - (window.innerWidth * 0.01))/2) + "px";
            }
            window.addEventListener('resize', () => {
                this.remainingSpace = (
                    (window.innerWidth - 1300 - (window.innerWidth * 0.01))/2) + "px";
            })
        }
    }
}

</script>

<style scoped>

.bgContainer {
    background-color: white;
    display: flex;
}

.bg {
    background-color: white;
    display: flex;
    width: 60%;
}

.form {
    background-color: var(--background-light);
    padding: 0 5vw;
    width: 100%;
    transform: scale(1.0);
    position: relative;
}

.title {
    margin: 100px 0 20px 0; 
}

input {
    margin: 25px 0;
    border: none;
    background-color: var(--background--light);
    border-bottom: 0.5px solid #00000075;
    padding: 3px 0;
    width: 75%;
    outline: none;
}

.cta {
    margin-bottom: 100px;
}

.imgDiv {
    width: 40%;
    position: relative;
}

.img {
    height: 105%;
    position: absolute;
}

.form > .inner {
    position: relative;
    z-index: 2;
}

@media screen and (min-width: 600px) {
    .title {
        margin-bottom: 25px;
    }
    
    input {
        margin: 30px 0;
        width: 55%;
    }
}

@media screen and (min-width: 900px) {
    .title {
        margin: 200px 0 30px 0;
    }
    
    input {
        margin: 50px 0;
    }

    .cta {
        margin-bottom: 200px;
    }
}

@media screen and (min-width: 1200px) {
    .bg {
        padding-left: var(--remaining);
    }

    .bgContainer {
        display: flex;
        align-items: center;
    }

    .imgDiv {
        height: 100vh;
    }

    .form::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background);
        transform: translate(-30px, -30px);
        z-index: 0;
    }

    .form::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background-light);
        z-index: 1;
    }
}

</style>

