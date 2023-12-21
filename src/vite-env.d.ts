// 声明一个模块，用于导入.vue文件并将其作为Vue组件使用
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
