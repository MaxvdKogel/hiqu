<template>
    <div class="bg">
        <h1>about</h1>
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
</style>