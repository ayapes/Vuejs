<template>
  <v-app>
    <v-main align="center">
      <v-col align="center">
        <v-img src="@/assets/logo.png" max-width="306px" />
      </v-col>
      <div class="d-flex justify-center">
<v-card tile elevation="0"><img src="@/assets/nav1-1.png" alt=""></v-card>
<v-card tile elevation="0"><img src="@/assets/nav2-1.png" alt=""></v-card>
<v-card tile elevation="0"><img src="@/assets/nav3-1.png" alt=""></v-card>
<v-card tile elevation="0"><img src="@/assets/nav4-1.png" alt=""></v-card>
      </div>
      <router-view />
    </v-main>
  </v-app>

</template>

<script setup>
  //
</script>
