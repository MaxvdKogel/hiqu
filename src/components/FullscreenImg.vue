<template>
    <div class="imgDiv"></div>
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
        background-attachment: fixed;
        background-size: cover;
    }

</style>