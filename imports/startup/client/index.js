import { Meteor } from "meteor/meteor";
import Vue from "vue";
import vuetify from "../../ui/plugins/vuetify";

import "../../ui/plugins";
import App from "/imports/ui/App";

Meteor.startup(() => {
  new Vue({
    vuetify,
    render: (e) => e(App),
  }).$mount((elementOrSelector = "app"));
});
