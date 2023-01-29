/* eslint-disable no-undef */
/// <reference types="vitest" />
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import { run } from "vite-plugin-run";
const path = require("path");

export default defineConfig({
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./resources/images"),
    },
  },
  plugins: [
    laravel(["resources/js/app.js"]),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
    run([
      {
        name: "build routes",
        run: ["php", "artisan", "ziggy:generate"],
        condition: (file) => file.includes("/routes/"),
      },
    ]),
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitestSetupFile.js"],
  },
});
