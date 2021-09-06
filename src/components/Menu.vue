<template>
    <div class="menu">
        <div class="container">
            <div class="links">
                <h2 class="title link home">Home</h2>
                <h2 class="title link">Products</h2>
                <h2 class="title link">About us</h2>
                <div class="social-links">
                    <div class="insta social-link">
                        <svg id="insta" xmlns="http://www.w3.org/2000/svg" width="16.8" height="16.8" viewBox="0 0 14 14">
                            <path id="Path_8" data-name="Path 8" d="M7,.162C5.1.162,4.861.17,4.114.2a5.138,5.138,0,0,0-1.7.325,3.431,3.431,0,0,0-1.24.807,3.431,3.431,0,0,0-.807,1.24,5.138,5.138,0,0,0-.325,1.7C.008,5.022,0,5.26,0,7.162S.008,9.3.042,10.048a5.138,5.138,0,0,0,.325,1.7,3.432,3.432,0,0,0,.807,1.24,3.431,3.431,0,0,0,1.24.807,5.138,5.138,0,0,0,1.7.325c.747.034.985.042,2.886.042s2.139-.008,2.886-.042a5.138,5.138,0,0,0,1.7-.325,3.579,3.579,0,0,0,2.047-2.047,5.138,5.138,0,0,0,.325-1.7C13.992,9.3,14,9.063,14,7.162s-.008-2.139-.042-2.886a5.138,5.138,0,0,0-.325-1.7,3.431,3.431,0,0,0-.807-1.24,3.432,3.432,0,0,0-1.24-.807A5.138,5.138,0,0,0,9.886.2C9.139.17,8.9.162,7,.162ZM7,1.423c1.869,0,2.09.007,2.829.041a3.874,3.874,0,0,1,1.3.241,2.169,2.169,0,0,1,.8.524,2.169,2.169,0,0,1,.524.8,3.873,3.873,0,0,1,.241,1.3c.034.738.041.96.041,2.829s-.007,2.09-.041,2.829a3.873,3.873,0,0,1-.241,1.3,2.318,2.318,0,0,1-1.329,1.329,3.873,3.873,0,0,1-1.3.241c-.738.034-.959.041-2.829.041s-2.091-.007-2.829-.041a3.873,3.873,0,0,1-1.3-.241,2.169,2.169,0,0,1-.8-.524,2.168,2.168,0,0,1-.524-.8A3.873,3.873,0,0,1,1.3,9.99c-.034-.738-.041-.96-.041-2.829s.007-2.09.041-2.829a3.873,3.873,0,0,1,.241-1.3,2.169,2.169,0,0,1,.524-.8,2.169,2.169,0,0,1,.8-.524,3.874,3.874,0,0,1,1.3-.241C4.91,1.43,5.131,1.423,7,1.423Z" transform="translate(0 -0.162)"/>
                            <path id="Path_9" data-name="Path 9" d="M128.135,130.63a2.333,2.333,0,1,1,2.333-2.333A2.333,2.333,0,0,1,128.135,130.63Zm0-5.928a3.595,3.595,0,1,0,3.595,3.595A3.595,3.595,0,0,0,128.135,124.7Z" transform="translate(-121.135 -121.296)" fill="#030404"/>
                            <path id="Path_10" data-name="Path 10" d="M363.612,89.629a.84.84,0,1,1-.84-.84A.84.84,0,0,1,363.612,89.629Z" transform="translate(-352.036 -86.365)" fill="#030404"/>
                        </svg>
                    </div>
                    <div class="facebook social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="8.93" height="16.8" viewBox="0 0 7.442 14">
                            <path id="facebook" d="M126.876,7.816l.386-2.515h-2.413V3.669a1.257,1.257,0,0,1,1.418-1.358h1.1V.17A13.376,13.376,0,0,0,125.417,0a3.07,3.07,0,0,0-3.286,3.384V5.3h-2.209V7.816h2.209v6.079a8.793,8.793,0,0,0,2.718,0V7.816Z" transform="translate(-119.922)"/>
                        </svg>
                    </div>
                    <div class="twitter social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.328" height="16.5176" viewBox="0 0 14 11.376">
                            <path id="twitter" d="M4.4,59.363a8.117,8.117,0,0,0,8.173-8.173c0-.124,0-.248-.008-.371A5.844,5.844,0,0,0,14,49.332a5.734,5.734,0,0,1-1.65.452A2.883,2.883,0,0,0,13.613,48.2a5.757,5.757,0,0,1-1.824.7,2.875,2.875,0,0,0-4.895,2.62,8.159,8.159,0,0,1-5.92-3,2.886,2.886,0,0,0,.889,3.834,2.851,2.851,0,0,1-1.3-.36v.036a2.882,2.882,0,0,0,2.3,2.816,2.868,2.868,0,0,1-1.3.049,2.881,2.881,0,0,0,2.684,1.995A5.765,5.765,0,0,1,.684,58.114,5.844,5.844,0,0,1,0,58.072,8.133,8.133,0,0,0,4.4,59.36" transform="translate(0 -47.987)"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="imgDiv">
                <img class="img" src="/assets/img/kamer-menu.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name: "Menu",
    data: () => ({
        isMenuActive: false
    }),
    watch: {
        '$store.state.isMenuActive' : function() {
            const menu = document.querySelector(".menu");
            menu.classList.toggle("menu-active");
            this.isMenuActive = !this.isMenuActive;
        }
    }
})
</script>

<style scoped>

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    height: 100vh;
    width: 100vw;
    background-color: var(--background);
    transform: translateY(-100%);
    transition: all .4s ease-in;
}

.menu-active {
    transform: translateY(0);
    transition-timing-function: ease-out;
}

.container {
    height: 40vh;
    display: flex;
    justify-content: space-between;
}

.link, .social-link {
    cursor: pointer;
}

.links {
    margin-right: 50px;
    position: relative;
}

.link::after {
    border-bottom: 2.5px solid var(--highlight);
    display: block;
    content: '';
    transform: scaleX(0);  
    transition: transform 0.25s ease-in-out;
    transform-origin:100% 50%
}

.link:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
}

.home {
    width: 60%;
}

svg {
    width: 20px;
    height: 20px;
}

.social-links {
    display: flex;
    position: absolute;
    bottom: 0;
}

.social-link {
    display: flex;
    align-items: flex-end;
}

.social-link + .social-link {
    margin-left: 20px;
}

.imgDiv {
    position: relative;
    transform: translateX(-5vw);
    height: 100%;
}

.imgDiv::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-light);
    z-index: -1;
    transform: translate(5vw, -5vw);
}

@media screen and (min-width: 600px) {
    .container {
        height: 50vh;
    }
    
    .link + .link {
        margin-top: 1em;
    }

    svg {
        width: 30px;
        height: 30px;
    }

    .social-link + .social-link {
        margin-left: 30px;
    }
}

@media screen and (min-width: 900px) {
    svg {
        width: 35px;
        height: 35px;
    }

    .social-link + .social-link {
        margin-left: 30px;
    }
}

@media screen and (min-width: 1200px) {
    .container {
        height: 60vh;
    }

    .link + .link {
        margin-top: 0.5em;
    }

    .social-link + .social-link {
        margin-left: 50px;
    }

    .imgDiv::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--background-light);
        z-index: -1;
        transform: translate(50px, -50px);
    }

    .imgDiv {
        position: relative;
        transform: translateX(0);
        height: 100%;
    }
}

</style>
