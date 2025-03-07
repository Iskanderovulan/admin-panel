import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import svgr from "@svgr/rollup";

export default defineConfig(({ mode }) => {
    return {
        plugins: [react(), tsconfigPaths(), svgr()],
        resolve: {
            alias: {
                "@app": path.resolve(__dirname, "./src/app"),
                "@pages": path.resolve(__dirname, "./src/pages"),
                "@widgets": path.resolve(__dirname, "./src/widgets"),
                "@features": path.resolve(__dirname, "./src/features"),
                "@entities": path.resolve(__dirname, "./src/entities"),
                "@shared": path.resolve(__dirname, "./src/shared"),
            },
        },
        define: {
            __IS_DEV__: mode === "development",
        },
        optimizeDeps: {
            exclude: ["recharts"],
        },
        test: {
            globals: true,
            environment: "jsdom",
            setupFiles: "./src/setupTests.ts",
            css: true,
        },
        server: {
            host: true, // или '0.0.0.0'
        },
    };
});
