// .vitepress/theme/index.js
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import AdComponent from "./AdComponent.vue";

import "./index.css";

import { ElButton } from "element-plus";
import "element-plus/dist/index.css";

import PageHeader from "./components/PageHeader.vue";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "doc-before": () => h(AdComponent),
    });
  },
  enhanceApp({ app }) {
    app.component("ElButton", ElButton);
    app.component("PageHeader", PageHeader);
  },
};
