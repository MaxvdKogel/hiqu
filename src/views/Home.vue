<template>
    <landingPage />
    <fullscreenImg />
    <popularProducts />
    <newsletter />
    <Footer />
</template>

<script>

import landingPage from "@/components/Landing-page.vue";
import fullscreenImg from "@/components/FullscreenImg.vue";
import popularProducts from "@/components/PopularProducts.vue";
import newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/Footer.vue";

export default {
name: "Home",
    components: {
        landingPage,
        fullscreenImg,
        popularProducts,
        newsletter,
        Footer
    }
};

</script>
