import { Meteor } from "meteor/meteor";
import Vue from "vue";

import App from "/imports/ui/App";

Meteor.startup(() => {
  new Vue({
    render: (e) => e(App),
  }).$mount((elementOrSelector = "app"));
});
