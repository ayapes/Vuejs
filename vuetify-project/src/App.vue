<template>
  <!-- v-appタグは、Vuetifyを利用するコンポーネントで必要なタグです。 -->
  <!-- 全てのコンポーネントの親コンポーネント（つまりApp.vueにあるAppコンポーネント）に配置する必要があります。 -->
  <v-app>
    <v-navigation-drawer color="primary">
      ナビゲーション
      <ul>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
        <li>aaa</li>
      </ul>
    </v-navigation-drawer>

    <v-app-bar color="accent">
      アプリ上部のバー
    </v-app-bar>

  
    <v-main >
      <v-container fluid>
        
      </v-container>
    </v-main>

    <v-footer app color="secondary">
      フッター
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",
};
</script>