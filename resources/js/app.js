import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { modal } from "momentum-modal";

InertiaProgress.init({
  showSpinner: true,
  color: "#FB8136",
});

function resolvePageComponent(name, pages) {
  for (const path in pages) {
    if (path.endsWith(`${name.replace(".", "/")}.vue`)) {
      return typeof pages[path] === "function" ? pages[path]() : pages[path];
    }
  }

  throw new Error(`Page not found: ${name}`);
}

const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(name, import.meta.glob("./Pages/**/*.vue")),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(modal, {
        resolve: (name) =>
          resolvePageComponent(name, import.meta.glob("./Pages/**/*.vue")),
      })
      .use(plugin)
      .mount(el);
  },
});
