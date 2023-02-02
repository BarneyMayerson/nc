import { usePage, router } from "@inertiajs/vue3";
import { POSITION, useToast } from "vue-toastification";

const { success, info, warning, error } = useToast();

export const notifications = {
  install(app) {
    router.on("finish", (event) => {
      const { props } = usePage();

      if (props.flash?.success) {
        success(props.flash?.success, {
          position: POSITION.BOTTOM_RIGHT,
        });
      }

      if (props.flash?.info) {
        info(props.flash?.info, {
          position: POSITION.BOTTOM_RIGHT,
        });
      }

      if (props.flash?.warning) {
        warning(props.flash?.warning, {
          position: POSITION.BOTTOM_RIGHT,
        });
      }

      if (props.flash?.error) {
        error(props.flash?.error, {
          position: POSITION.BOTTOM_RIGHT,
        });
      }
    });
  },
};
