<template>
    <landingPage />
    <fullscreenImg />
    <popularProducts />
    <newsletter />
    <Footer bg-color="white"/>
</template>

<script>

import landingPage from "@/components/Landing-page";
import fullscreenImg from "@/components/FullscreenImg";
import popularProducts from "@/components/PopularProducts";
import newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer"

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
