import "../css/app.css";

import { createApp, h } from "vue";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

InertiaProgress.init({
  showSpinner: true,
  color: "#FB8136",
});

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.vue`,
      import.meta.glob("./Pages/**/*.vue")
    ),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
