import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
          light: {
            primary: '#439466',
            secondary:'#414d5c'
          },
        },
      },
});
