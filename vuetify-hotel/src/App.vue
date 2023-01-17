<template>

  <v-app id="inspire">
    <v-tabs v-model="tab">
    <v-tab v-for="link in links" :key="link">
      <img :src=require('@/assets/${link}.png')>
    </v-tab></v-tabs>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      'nav1',
      'nav2',
      'nav3',
      'nav4',
    ],
  }),
}
