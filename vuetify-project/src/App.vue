<template>
  <v-app>
    <v-navigation-drawer color="primary">
      <div class="pa-5">
        <h2>ナビゲーションバー</h2>
        <div class="pt-2">
          <p>
            この部分は画面サイズが1280pxより大きい時のみ表示される設定です。
          </p>
        </div>
      </div>
    </v-navigation-drawer>

    <v-app-bar color="accent" absolute="true">
      <div class="pa-5">
        <h2>ヘッダー</h2>
        <p>この部分は「headerタグ」に変換されます。</p>
      </div>
    </v-app-bar>

    <!-- style属性で通常のcssも利用できる -->
    <v-main style="height: 200vh">
      <v-container fluid>
        <v-card class="mx-auto my-10">
          <p>
            「v-app-bar」と「v-footer」はデフォルトでは画面上下に固定されます(CSSのpositon="fixed"の状態)。
          </p>
          <p>「absolute="true"」属性を付けると、スクロールに従い移動します。</p>
        </v-card>

        <v-card class="mx-auto my-10">
          <p>
            「v-app-bar」と「v-footer」はデフォルトでは画面上下に固定されます(CSSのpositon="fixed"の状態)。
          </p>
          <p>「absolute="true"」属性を付けると、スクロールに従い移動します。</p>
        </v-card>

        <h3>公式から完コピのカルーセルパネルの例</h3>
        <v-carousel>
          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
            cover
          ></v-carousel-item>

          <v-carousel-item
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-container>
    </v-main>

    <v-footer app absolute="true" class="bg-teal">
      <div class="pa-5">
        <h2>フッター</h2>
        <p>この部分は「footerタグ」に変換されます。</p>
      </div>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  name: "App",
};
</script>