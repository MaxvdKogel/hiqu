<template>
    <div class="imgPlaceholder"> </div>
    <div class="imgDiv">
        <img class="img" src="../../public/assets/img/poop.jpg" alt="">
    </div>
</template>

<script>

export default {
  name: "fullscreenImg"
};

</script>

<style scoped>

    .imgPlaceholder {
        height: 100vh;
        width: 100%;
        position: relative;
        z-index: -3;
    }

    .imgDiv {
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: -1;
        transform: scale(1.0); 
    }

    .imgDiv::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("../../public/assets/img/fullscreenImg.jpg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>