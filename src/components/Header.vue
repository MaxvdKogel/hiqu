<template>
    <header>
        <div class="container header__container">
            <div class="nav">
                <p class="logo fino">Hiqu</p>
                <div class="hamburger">
                    <div class="topLine"></div>
                    <div class="bottomLine"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    };
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
  height: 12px;
  cursor: pointer;
}

.topLine, .bottomLine {
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: var(--text);
}

.topLine {
  top: 0;
}

.bottomLine {
  bottom: 0;
}

@media screen and (min-width: 600px) {

  .topLine, .bottomLine {
    height: 2px;
  }

}

</style>
