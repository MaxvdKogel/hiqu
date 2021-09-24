<template>
    <div>
        <Header />
        <Menu />
    </div>
    <router-view />
</template>

<script>
import Header from "@/components/Header";
import Menu from "@/components/Menu";

import gsap from 'gsap';

export default {
    name: "App",
    components: {
        Header,
        Menu
    },
    mounted() {
        window.addEventListener('scroll', this.inViewport);
        window.addEventListener('scroll', this.parallax);
    },
    unmounted() {
        window.removeEventListener('scroll', this.inViewport);
        window.removeEventListener('scroll', this.parallax);
    },
    methods: {
        inViewport() {
            var el = document.querySelectorAll(".hidden");
            for(var i = 0; i < el.length; i++) {
                if(el[i].getBoundingClientRect().top - (window.innerHeight * 0.75) < 0) {

                    el[i].classList.remove("hidden");

                    gsap.from(el[i], {
                        opacity: 0,
                        y: 50,
                        duration: .5
                    })
                    
                }
            }
        },
        parallax() {
            this.scrolled = window.pageYOffset;
            const parallaxElement = document.querySelectorAll('.parallax');
            for(var i = 0; i < parallaxElement.length; i++) {
                var pos = this.scrolled * parallaxElement[i].dataset.rate;
                parallaxElement[i].style.transform = 'translateY('+ pos +'px)';
            }
        }
    }
};
</script>

<style>

html, body {
  height: 100%;
  width: 100%;
}

body::-webkit-scrollbar {
    display: none;
}

body {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

:root {
  --highlight: #E2BB5D;
  --background: #E7D5C4;
  --background-light: #FFFAEE;
  --white: #FFF;
  --text: #000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

.fino {
  font-family: "fino-sans", serif;
}

.bilo {
  font-family: "bilo", sans-serif;
}

.hidden {
    opacity: 0;
}

.visible {
    opacity: 1;
}

a {
    text-decoration: none;
    color: black;
}

.container {
  position: relative;
  width: 100%;
  max-width: 1300px;
  padding: 0 5%;
}

.logo {
  letter-spacing: 1px;
  font-size: 16px;
  font-weight: 600;
}

.title {
  font-size: 30px;
  font-family: "fino-sans", serif;
  font-weight: 400;
}

.p, input, input::placeholder {
  font-size: 14px;
  font-family: "bilo", sans-serif;
}

.cta {
  position: relative;
  height: 30px;
  width: 125px;
  font-weight: 600;
  background-color: var(--highlight);
  cursor: pointer;
}

.ctaTxt {
  font-family: "fino-sans", serif;
  font-size: 16px;
  letter-spacing: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.images {
    position: relative;
    overflow: hidden;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media screen and (min-width: 600px) {
  .logo {
    font-size: 25px;
  }

  .title {
    font-size: 50px;
  }

  .p, input, input::placeholder {
    font-size: 18px;
  }

  .cta {
    height: 40px;
    width: 175px;
  }

  .ctaTxt {
    font-size: 20px;            
  }
}

@media screen and (min-width: 900px) {
  .logo {
    font-size: 30px;
  }

  .title {
    font-size: 60px;
  }

  .p, input, input::placeholder {
    font-size: 22px;
  }

  .cta {
    height: 50px;
    width: 200px;
  }

  .ctaTxt {
    font-size: 24px;            
  }
}

@media screen and (min-width: 1200px) {
  .title {
    font-size: 100px;
  }
}
</style>
