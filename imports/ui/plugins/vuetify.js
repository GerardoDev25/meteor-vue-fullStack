import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import es from "vuetify/es5/locale/es";

Vue.use(Vuetify);

export default new Vuetify(
  (preset = {
    them: {
      options: {
        CustomProperties: true,
      },
      themes: {
        light: {
          primary: "#01697d",
          secondary: "#002744",
          accent: "#8c191d",
          error: "#d64143",
          info: "#5bc0de",
          success: "#5cb85c",
          warning: "#f0ad4e",
        },
      },
      icons: {
        iconFont: "md",
      },
      lang: {
        locales: { es },
      },
      current: "es",
    },
  })
);
