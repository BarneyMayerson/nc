import "../css/app.css";

import { createApp, h } from "vue";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { modal } from "momentum-modal";
import AppLayout from "@/components/layouts/AppLayout.vue";

InertiaProgress.init({
  showSpinner: true,
  color: "#FB8136",
});

const appName =
  window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: async (name) => {
    const page = (
      await resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob("./Pages/**/*.vue")
      )
    ).default;

    if (page.layout === undefined) {
      page.layout = AppLayout;
    }

    return page;
  },
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
