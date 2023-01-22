<template>
    <v-app>
        <v-main>
            <div id="slider" class="my-0 mx-auto" style="max-width: 840px;width:100%;">
                <v-carousel cycle hide-delimiter-background :show-arrows="false" hide-delimiters>
                    <v-carousel-item v-for="item in items" :key="item">
                        <v-img contain :src="item"></v-img>
                    </v-carousel-item>
                </v-carousel>
            </div>
        </v-main>

    </v-app>

</template>

<script>
export default {
    name: 'HomeView',
    data: () => ({
        items: [
            {
                src: '../../img/slide1.jpg'
            },
            {
                src: '../../img/slide2.jpg'
            },
            {
                src: '../../img/slide3.jpg'
            },

        ],
    }),
}
</script>