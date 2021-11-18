<template>
   <div class="bg">
       <div class="container">
           <div class="imgDiv">
               <div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/Ju7l5y9osyymQ" width="100%" height="100%" style="position:absolute" frameBorder="0" allowFullScreen></iframe></div>
           </div>
            <div class="txt">
                    <h1 class="fino title">products</h1>
                    <p class="bilo p">
                        Uhhh I'm sorry we don't really sell interior.
                        But I do sell websites! I'm a freelance web developer
                        and this was one of my side projects. So if you need a
                        website or just want to see my work, visit my portfolio.
                    </p>
                <div class="cta fino">
                    <a class="ctaTxt" href="https://maxvanderkogel.com/">portfolio</a>
                </div>
            </div>
       </div>
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
        display: flex;
        align-items: center;
    }

    .imgDiv {
        /* ratio = height / width = 360/480 = 0.75 */
        width: 90vw;
        height: calc(0.75*90vw);
        margin: 0 auto 40px auto;
        position: relative;
    }

     iframe {
        max-height: 100%;
        max-width: 100%;
        min-height: 100%;
        min-width: 100%;
        width: 0;
        pointer-events: none;
    }

    .p {
        margin: 20px 0;
    }

    @media screen and (min-width: 600px) {
        .imgDiv {
            /* ratio = height / width = 360/480 = 0.75 */
            width: 72vw;
            height: calc(0.75*72vw);
            margin-bottom: 60px;
        }

        .p {
            margin: 25px 0 30px 0;
        }
    }

    @media screen and (min-width: 900px) {
        .imgDiv {
            margin-bottom: 100px;
        }
        
        .p {
            margin: 30px 0 50px 0;
        }
    }

    @media screen and (min-width: 1200px) {
        .imgDiv {
            /* ratio = height / width = 360/480 = 0.75 */
            width: 30vw;
            height: calc(0.75*30vw);
            margin: 0;
        }

        .bg {
            justify-content: center;
        }

        .container {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
        }

        .txt {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 40%;
        }
    }
</style>
