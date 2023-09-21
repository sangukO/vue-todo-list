import { loadEnv, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const resolveAlias = Object.fromEntries(
    Object.entries({
        "@components": "./src/components",
        "@pages": "./src/pages",
        "@router": "./src/router",
        "@stores": "./src/stores",
        "@utils": "./src/utils",
        "@api": "./src/api",
        //   '@composable': './src/composable',
        //   '@cstore': './src/composable/store',
        //   '@directive': './src/directive',
        //   '@plugins': './src/plugins',
        //   '@postcss': './src/assets/postcss',
    }).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, path.join(__dirname, "./env"), "");
    return {
        plugins: [vue()],
        resolve: {
            alias: resolveAlias,
        },
        server: {
            host: true,
            proxy: {
                "^/todos": {
                    target: env.VUE_APP_API,
                    changeOrigin: true,
                },
            },
        },
    };
});
