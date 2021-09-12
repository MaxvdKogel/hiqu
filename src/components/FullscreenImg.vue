<template>
    <div class="imgDiv">
    </div>
</template>

<script>
export default {
    name: "fullscreenImg"
};

</script>

<style scoped>

     .imgDiv {
        height: 100vh;
        width: 100%;
        background: url(../../public/assets/img/fullscreenImg.jpg) no-repeat center center fixed;
        background-attachment: scroll;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
    }

    @media screen and (min-width: 1200px) {
        .imgDiv {
            background-attachment: fixed;
        }
    }

</style>