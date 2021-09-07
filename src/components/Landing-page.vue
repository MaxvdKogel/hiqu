<template>
    <div class="landingPage">
        <div class="container landingPage__container">
            <div class="images">
                <div class="img1">
                    <img class="img-up img" ref="img1" src="assets/img/kamer1.jpg" alt="">
                </div>  
                <div class="img2">
                    <img class="img-up img" ref="img2" src="assets/img/kamer2.jpg" alt="">
                </div>
                <div class="img3">
                    <img class="img-up img" ref="img3" src="assets/img/kamer3.jpg" alt="">
                </div>
            </div>
            <div class="txt">
                <h1 class="title fino anim">Quality interiors that make you <br> feel at home.</h1>
                <p class="p bilo intro anim">
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. <br> Pellentesque blandit
                    fermentum sapien non fringilla.
                </p>
                <div class="cta fino anim">
                    <p class="ctaTxt" ref="ctaTxt">products</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
let tl = gsap.timeline({
    defaults: {
        ease: "power2"
    },
    onComplete: () => {
        console.log("done");
    }
});

export default ({
    name: "landingPage",
    mounted() {
        tl
            .from(".img-up", { height: 0, duration: 1, stagger: 0.2, clearProps: "height" })
            .from(".anim", {opacity: 0, y: 50, duration: .75, stagger: 0.15 }, "-=1")
            .from(this.$refs.ctaTxt, { opacity: 0, duration: .3 }, "-=0.45");
    }
});

</script>

<style scoped>

    .landingPage {
        height: 100vh;
        width: 100vw;
        background-color: var(--background-light);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .landingPage__container {
        height: 100%;
        position: absolute;
        top: 0;
    }

    .images {
        position: relative;
        height: 44vh;
        top: 10vh;
    }

    .img {
        position: absolute;
        bottom: 0;
    }

    .img1, .img2, .img3 {
        position: absolute;
    }

    .img1 {
        right: 0;
        top: 2%;
        width: 30%;
        height: 42%;
    }

    .img2 {
        left: 10%;
        top: 12.5%;
        height: 55%;
        width: 35%;
    }

    .img3 {
        bottom: 0;
        left: 35%;
        width: 35%;
        height: 50%;
    }

    .txt {
        text-align: center;
        position: absolute;
        bottom: 10%;
        left: 50%;
        width: 75%;
        transform: translate(-50%, 0);
    }

    .title {
        margin-bottom: 20px;
    }

    .intro {
        width: 75%;
        margin: 0 auto 20px auto;
    }
    
    .cta {
        margin: 0 auto;
    }

    @media screen and (max-height: 800px) {
        .txt {
            bottom: 5%;
        }
    }

    @media screen and (max-width: 350px) {
        .txt {
            width: 100%;
            bottom: 5%;
        }
    }

    @media screen and (min-width: 600px) {

        .landingPage__container {
            height: 100%;
        }
        
        .images {
            position: relative;
            height: 55vh;
            top: 10vh;
        }

        .img1 {
            right: 10%;
            width: 25%;
        }
        
        .img2 {
            left: 15%;
            width: 30%;
        }

        .img3 {
            width: 30%;
        }

        .txt {
            bottom: 5%;
            width: 80%;
        }

        .title {
            margin-bottom: 25px;
        }

        
        .intro {
            margin-bottom: 30px;
        }
    }

    @media screen and (min-width: 900px) {
        .title {
            margin-bottom: 30px;
        }

        .txt {
            bottom: 7.5%;
            width: 75%;
        }

        .intro {
            margin-bottom: 50px;
        }

    }

    @media screen and (min-width: 1200px) {
        .landingPage__container {
            display: flex;
        }

        .images {
            width: 55%;
            height: 60%;
            top: 53%;
            transform: translateY(-50%);
            right: 0;
            position: absolute;
        }

        .txt {
            width: 70%;
            position: relative;
            left: 0;
            bottom: 0;
            transform: translate(0);
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            z-index: 2;
        }

        .intro {
            margin: 0 0 50px 0;
        }

        .cta {
            margin: 0;
        }
    }
</style>
