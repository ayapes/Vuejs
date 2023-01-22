<template>
  <v-app color="background">
    <v-main align="center">
      <v-col align="center" class="my-5">
        <router-link to="/"><v-img src="../img/logo.png" max-width="306px" /></router-link>
      </v-col>
      <div class="d-flex justify-center my-5">
        <v-card tile elevation="0" color="background"><router-link to="/concept"><img src="../img/nav1-1.png"
              alt=""></router-link></v-card>
        <v-card tile elevation="0" color="background"><router-link to="/plan"><img src="../img/nav2-1.png"
              alt=""></router-link></v-card>
        <v-card tile elevation="0" color="background"><router-link to="/fair"><img src="../img/nav3-1.png"
              alt=""></router-link></v-card>
        <v-card tile elevation="0" color="background"><router-link to="/contact"><img src="../img/nav4-1.png"
              alt=""></router-link></v-card>
      </div>

      <router-view />
    </v-main>
    <v-footer color="background">
     <v-col align="center">
      <v-card color="background" class="py-4" elevation="0">東京都千代田区X-X-X 電話 0120-000-XXX 営業時間 11:00～20:00(水曜日定休)<br>
Copyright 2014 HOTEL IMPERIAL RESORT TOKYO All rights reserved.</v-card>
     </v-col>
    </v-footer>
  </v-app>

</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
