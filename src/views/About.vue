<template>
    <div class="bg">
        <div class="container">
            <div class="images">
                <div class="img1 parallax" data-rate=".05">
                    <img src="assets/img/about/diningRoom.jpg" alt="" class="img">
                </div>
                <div class="img2 parallax" data-rate="-.05">
                    <img src="assets/img/about/kitchen.jpg" alt="" class="img">
                </div>
            </div>
            <div class="txt">
                <h1 class="title fino">About us</h1>
                <p class="bilo p">
                    Hiqu is a high-end interior reseller since 1998.
                    derived under the mindset that your home reflects
                    who you are, it should be beautiful but practical at the
                    same time. We have a full range of products and
                    design services to make it exactly the way you want
                    and make you really feel at home.
                </p>
                <div class="cta fino">
                    <p class="ctaTxt">products</p>
                </div>
            </div>
        </div>
    </div>
    <Footer bg-color="var(--background-light)" />
</template>

<script>
import Footer from '@/components/Footer'

export default {
    name: "About",
    components: {
        Footer
    }
};

</script>

<style scoped>
    .bg {
        height: 100vh;
        background-color: var(--background-light);
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }

    .images {
        height: 40vh;
        width: 90%;
        top: 12vh;
    }

    .img1, .img2 {
        position: absolute;
    }

    .img1 {
        left: 0;
        top: 10%;
        height: 75%;
        width: 45%;
    }

    .img2 {
        right: 0;
        width: 62%;
        height: 60%;
        bottom: 0;
    }

    .txt {
        position: absolute;
        bottom: 20%;
        padding: 0 5%;
    }

    .p {
        margin: 20px 0;
    }

    @media screen and (max-width: 350px) {
        .txt {
            bottom: 10%;
        }
    }

    @media screen and (min-width: 600px) {
        .images {
            height: 50vh;
            width: 80%;
        }

        .txt {
            bottom: 10%;
            width: 90%;
            padding: 0;
        }

        .p {
            margin: 25px 0 30px 0;
            width: 70%;
        }
    }

    @media screen and (min-width: 900px) {
        .p {
            margin: 30px 0 50px 0;
        }
    }

    @media screen and (min-width: 1200px) {
        .bg {
            display: flex;
            justify-content: center;
        }

        .container {
            flex-direction: row;
        }

        .images{
            position: absolute;
            height: 55vh;
            width: 45%;
            top: 25%;
            right: 0;
            margin-right: 5vw;
        }

        .img2 {
            right: 0;
            width: 62%;
            height: 65%;
            bottom: 0;
        }

        .txt {
            width: 50%;
            bottom: auto;
        }

        .p {
            width: 60%;
        }
    }
</style>