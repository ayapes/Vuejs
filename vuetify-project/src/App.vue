<template>
  <v-app>
    <v-main align="center">
      <v-col align="center">
        <v-img src="@/assets/logo.png" max-width="306px" />
      </v-col>
      <div class="d-flex justify-center">
        <v-card tile elevation="0"><router-link to="/"><img src="@/assets/nav1-1.png" alt=""></router-link></v-card>
        <v-card tile elevation="0"><router-link to="/about"><img src="@/assets/nav2-1.png"
              alt=""></router-link></v-card>
        <v-card tile elevation="0"><router-link to="/"><img src="@/assets/nav3-1.png" alt=""></router-link></v-card>
        <v-card tile elevation="0"><router-link to="/about"><img src="@/assets/nav4-1.png"
              alt=""></router-link></v-card>
      </div>
      <div id="slider" style="margin: 0 auto; width: 840px;">
      <v-carousel cycle height="400" hide-delimiter-background :show-arrows="false" hide-delimiters>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">
                {{ slide }} Slide
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
      <router-view />
    </v-main>
  </v-app>

</template>

<script>
export default {
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
}
</script>
