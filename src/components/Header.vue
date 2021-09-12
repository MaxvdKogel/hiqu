<template>
    <header>
        <div class="container header__container">
            <div class="nav">
                <p class="logo fino opacity">Hiqu</p>
                <div class="hamburger opacity" :class="{'active' : this.$store.state.isBurgerActive }" @click.prevent="toggle">
                    <div class="topLine"></div>
                    <div class="bottomLine"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import gsap from 'gsap';
    let tl = gsap.timeline({
        defaults: {
            ease: "power2"
        }
    });

    export default ({
        name: "Header",
        data: () => ({
            isBurgerActive: false
        }),
        mounted() {
            tl.from(".opacity", {
                opacity: 0,
                duration: 1
            }, "+=0.75")
        },
        methods: {
            toggle() {
                this.isBurgerActive = !this.isBurgerActive;
                this.$store.state.isMenuActive = this.isBurgerActive;
            }
        }
    });
</script>

<style scoped>

header {
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
}

.nav {
  display: flex;
  justify-content: space-between;
}

.hamburger {
  position: relative;
  width: 35px;
  height: 13px;
  cursor: pointer;
}

.topLine, .bottomLine {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: var(--text);
  transition: all .3s ease;
}

.topLine {
  top: 0;
}

.bottomLine {
  bottom: 0;
}

.active .topLine{
    transform: rotate(-45deg);
    top: 6px;
}

.active .bottomLine{
    transform: rotate(45deg);
    bottom: 6px;
}

@media screen and (min-width: 600px) {
    .hamburger {
        height: 14px;
    }
    
    .topLine, .bottomLine {
        height: 2px;
    }

}

</style>
