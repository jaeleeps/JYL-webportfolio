<template>
  <v-layout row wrap justify-center>
    <v-flex v-for="(item, i) in cardsData" :key="i" xs12 md4 pa-5>
      <v-hover v-slot:default="{ hover }">
        <v-card class="mx-auto" :elevation="hover ? 12 : 2" max-width="350" pa10>
          <v-img
            class="black--text align-end"
            aspect-ratio="1"
            height="200px"
            eager
            contain
            :src="item.main_img"
            lazy-src="@/assets/profile_img_01.png"
            gradient="to top right, rgba(100,115,201,.1), rgba(25,32,72,.2)"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title>{{item.title_txt}}</v-card-title>
          <v-card-subtitle class="pb-1">
            <span style="font-weight: bold">Keywords:</span>
            {{item.dev_stacks}}
          </v-card-subtitle>

          <v-card-text class="text--primary mb-n5">
            <div v-for="(main_txt, i) in item.main_txt_arr" :key="i">{{main_txt}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" @click="item.show = !item.show" text>Related Link</v-btn>
            <v-overlay opacity="0.80" zIndex="5" :value="item.show">
              <div style="height:100vh; width:100vw; text-align:center;" @click="item.show = false"></div>
              <div id="overlay-center-wrapper">
                <span>
                  Link to
                  <v-icon x-large>{{item.link_icon}}</v-icon>
                </span>
                <span>
                  <v-btn ma-2 x-large rounded outlined color="white" :href="item.related_link">Sure!</v-btn>
                  <v-btn
                    ma-2
                    x-large
                    rounded
                    outlined
                    color="white"
                    @click="item.show = false"
                  >Nope!</v-btn>
                </span>
              </div>
            </v-overlay>
          </v-card-actions>

          <!-- <v-card-actions>
          <v-btn color="orange" @click="item.show = !item.show" text>Share</v-btn>
          <v-btn color="orange" @click="item.show = !item.show" text>Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="item.show = !item.show">
            <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="item.show">
            <v-divider></v-divider>
            <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
          </div>
          </v-expand-transition>-->
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    cardsData: [
      {
        title_txt: "kor-string-similarity",
        dev_stacks: "Javascript, Node.js",
        main_txt_arr: [
          "Sørensen–Dice coefficient and NphoEd(Normallized phoneme-based metric)-based string similarity calculating NPM module."
        ],
        main_img: require("@/assets/projects/kor_string_similarity01.png"),
        show: false,
        hover: false,
        related_link: "https://www.npmjs.com/package/kor-string-similarity",
        link_icon: "mdi-npm-variant-outline"
      },
      {
        title_txt: "Paper plane",
        dev_stacks: "Vue.js, Vuex, Node.js, Express.js, ElementUI",
        main_txt_arr: [
          "Memo-based Social diary SPA build with Vue.js, Vuex, and Element UI."
        ],
        main_img: require("@/assets/projects/paperplane01.png"),
        show: false,
        hover: false,
        related_link: "https://github.com/osam2019/WEB_PaperPlane_Solo",
        link_icon: "mdi-github-circle"
      },
      {
        title_txt: "Trouble on Beryl Isle",
        dev_stacks: "Unity, C#, Blender, Substance Designer",
        main_txt_arr: [
          "Third-person action adventure video game developed using Unity C# and 3D design tools."
        ],
        main_img: require("@/assets/projects/tobi01.png"),
        show: false,
        hover: false,
        related_link:
          "https://vgdev.gtorg.gatech.edu/game/trouble-on-beryl-isle/",
        link_icon: "mdi-application"
      },
      {
        title_txt: "Personal website",
        dev_stacks: "Vue.js, Vuetify.js, Vuex, Node.js",
        main_txt_arr: [
          "Scroll-based SPA portfolio website."
        ],
        main_img: require("@/assets/projects/jleeweb_img01.png"),
        show: false,
        hover: false,
        related_link:
          "https://github.com/jaeleeps/JLweb",
        link_icon: "mdi-github-circle"
      }
    ]
  })
};
</script>

<style scoped>
#overlay-center-wrapper {
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

#overlay-center-wrapper > span {
  display: block;
  font-size: 2.5rem;
}
</style>