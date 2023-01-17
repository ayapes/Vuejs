<template>

  <v-app id="inspire">
    <v-spacer></v-spacer>
    <v-img src="@/assets/logo.png" />
    <v-app-bar class="px-3" color="white" flat density="compact" extension-height="48">


      <v-spacer></v-spacer>

      <v-tabs centered color="grey-darken-2">
        <v-tab v-for="link in links" :key="link">
          <img :src="link.src">
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="8">
            <v-sheet min-height="70vh" rounded="lg">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      { src: require("@/assets/logo.png") },
    ],
  }),
}
</script>