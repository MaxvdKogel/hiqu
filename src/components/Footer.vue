<template>
    <footer :style="cssProps">
        <div class="container">
            <p class="logo fino">Hiqu</p>
                <div class="links bilo p">
                    <div class="col">
                        <p class="link">Home</p>
                        <p class="link">Products</p>
                        <p class="link">About us</p>
                    </div>
                    <div class="col">
                        <p class="link">Instagram</p>
                        <p class="link">Facebook</p>
                        <p class="link">Twitter</p>
                    </div>
                    <div class="developer">
                        <p>Developed by</p>
                        <a class="link stonks" :href="'https://stonks.agency/'" target="_blank">Stonks Agency</a>
                    </div>
                </div>
        </div>
    </footer>
</template>

<script>

export default ({
    name: "Footer",
    props: ['bgColor'],
    computed: {
        cssProps() {
            return {
                '--bg': this.bgColor
            }
        }
    }
});

</script>

<style scoped>
    footer {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: var(--bg);
    }

    .logo {
        padding: 50px 0 25px 0;
    }

    .links {
        display: flex;
        margin-bottom: 50px;
        position: relative;
    }

    .col + .col {
        margin-left: 10%;
    }

    .link {
        cursor: pointer;
    }

    .link + .link {
        margin-top: 1rem;
    }

    .developer {
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .stonks {
        font-size: 16px;
        border-bottom: 1px solid var(--highlight);
    }

    @media screen and (min-width: 600px) {
        .logo {
            padding-top: 100px;
        }

        .links {
            margin-bottom: 100px;
        }

        .stonks {
            font-size: 20px;
            border-bottom: 1.5px solid var(--highlight);
        }
    }

    @media screen and (min-width: 900px) {
        .logo {
            padding-bottom: 50px;
        }

        .stonks {
            font-size: 24px;
            border-bottom: 2px solid var(--highlight);
        }
    }

    @media screen and (min-width: 1200px) {
        .developer {
            display: flex;
            align-items:center
        }

        a {
            margin-left: 5px;
        }
    }
</style>
