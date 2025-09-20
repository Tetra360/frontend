// vite.config.ts
import { defineConfig } from "file:///C:/Users/Bellw/development/frontend/node_modules/vite/dist/node/index.js";
import path from "node:path";
import electron from "file:///C:/Users/Bellw/development/frontend/node_modules/vite-plugin-electron/dist/simple.mjs";
import react from "file:///C:/Users/Bellw/development/frontend/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///C:/Users/Bellw/development/frontend/node_modules/@tailwindcss/vite/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\Bellw\\development\\frontend";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    electron({
      main: {
        // Shortcut of `build.lib.entry`.
        entry: "electron/main.ts"
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`.
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: path.join(__vite_injected_original_dirname, "electron/preload.ts")
      },
      // Ployfill the Electron and Node.js API for Renderer process.
      // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
      // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
      renderer: process.env.NODE_ENV === "test" ? void 0 : {}
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  // 開発サーバーの設定
  server: {
    host: "0.0.0.0",
    // すべてのネットワークインターフェースでリッスン
    port: 5173,
    // ポート番号（デフォルト）
    strictPort: true
    // ポートが使用中の場合は起動を停止
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxCZWxsd1xcXFxkZXZlbG9wbWVudFxcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQmVsbHdcXFxcZGV2ZWxvcG1lbnRcXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0JlbGx3L2RldmVsb3BtZW50L2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xyXG5pbXBvcnQgZWxlY3Ryb24gZnJvbSAndml0ZS1wbHVnaW4tZWxlY3Ryb24vc2ltcGxlJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwiQHRhaWx3aW5kY3NzL3ZpdGVcIlxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgdGFpbHdpbmRjc3MoKSxcclxuICAgIGVsZWN0cm9uKHtcclxuICAgICAgbWFpbjoge1xyXG4gICAgICAgIC8vIFNob3J0Y3V0IG9mIGBidWlsZC5saWIuZW50cnlgLlxyXG4gICAgICAgIGVudHJ5OiAnZWxlY3Ryb24vbWFpbi50cycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHByZWxvYWQ6IHtcclxuICAgICAgICAvLyBTaG9ydGN1dCBvZiBgYnVpbGQucm9sbHVwT3B0aW9ucy5pbnB1dGAuXHJcbiAgICAgICAgLy8gUHJlbG9hZCBzY3JpcHRzIG1heSBjb250YWluIFdlYiBhc3NldHMsIHNvIHVzZSB0aGUgYGJ1aWxkLnJvbGx1cE9wdGlvbnMuaW5wdXRgIGluc3RlYWQgYGJ1aWxkLmxpYi5lbnRyeWAuXHJcbiAgICAgICAgaW5wdXQ6IHBhdGguam9pbihfX2Rpcm5hbWUsICdlbGVjdHJvbi9wcmVsb2FkLnRzJyksXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIFBsb3lmaWxsIHRoZSBFbGVjdHJvbiBhbmQgTm9kZS5qcyBBUEkgZm9yIFJlbmRlcmVyIHByb2Nlc3MuXHJcbiAgICAgIC8vIElmIHlvdSB3YW50IHVzZSBOb2RlLmpzIGluIFJlbmRlcmVyIHByb2Nlc3MsIHRoZSBgbm9kZUludGVncmF0aW9uYCBuZWVkcyB0byBiZSBlbmFibGVkIGluIHRoZSBNYWluIHByb2Nlc3MuXHJcbiAgICAgIC8vIFNlZSBcdUQ4M0RcdURDNDkgaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uLXZpdGUvdml0ZS1wbHVnaW4tZWxlY3Ryb24tcmVuZGVyZXJcclxuICAgICAgcmVuZGVyZXI6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCdcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZWxlY3Ryb24tdml0ZS92aXRlLXBsdWdpbi1lbGVjdHJvbi1yZW5kZXJlci9pc3N1ZXMvNzgjaXNzdWVjb21tZW50LTIwNTM2MDA4MDhcclxuICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgIDoge30sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIFx1OTU4Qlx1NzY3QVx1MzBCNVx1MzBGQ1x1MzBEMFx1MzBGQ1x1MzA2RVx1OEEyRFx1NUI5QVxyXG4gIHNlcnZlcjoge1xyXG4gICAgaG9zdDogJzAuMC4wLjAnLCAgLy8gXHUzMDU5XHUzMDc5XHUzMDY2XHUzMDZFXHUzMENEXHUzMEMzXHUzMEM4XHUzMEVGXHUzMEZDXHUzMEFGXHUzMEE0XHUzMEYzXHUzMEJGXHUzMEZDXHUzMEQ1XHUzMEE3XHUzMEZDXHUzMEI5XHUzMDY3XHUzMEVBXHUzMEMzXHUzMEI5XHUzMEYzXHJcbiAgICBwb3J0OiA1MTczLCAgICAgICAvLyBcdTMwRERcdTMwRkNcdTMwQzhcdTc1NkFcdTUzRjdcdUZGMDhcdTMwQzdcdTMwRDVcdTMwQTlcdTMwRUJcdTMwQzhcdUZGMDlcclxuICAgIHN0cmljdFBvcnQ6IHRydWUsIC8vIFx1MzBERFx1MzBGQ1x1MzBDOFx1MzA0Q1x1NEY3Rlx1NzUyOFx1NEUyRFx1MzA2RVx1NTgzNFx1NTQwOFx1MzA2Rlx1OEQ3N1x1NTJENVx1MzA5Mlx1NTA1Q1x1NkI2MlxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVMsU0FBUyxvQkFBb0I7QUFDbFUsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sY0FBYztBQUNyQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFKeEIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBO0FBQUEsUUFFSixPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0EsU0FBUztBQUFBO0FBQUE7QUFBQSxRQUdQLE9BQU8sS0FBSyxLQUFLLGtDQUFXLHFCQUFxQjtBQUFBLE1BQ25EO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJQSxVQUFVLFFBQVEsSUFBSSxhQUFhLFNBRS9CLFNBQ0EsQ0FBQztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBRUEsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUNOLFlBQVk7QUFBQTtBQUFBLEVBQ2Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
