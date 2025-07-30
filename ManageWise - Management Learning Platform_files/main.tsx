import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/main.tsx?v=t_jKnVgsiV_kk6GO1BnLP");import __vite__cjsImport0_react_jsxDevRuntime from "/@fs/home/runner/workspace/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=3ba4158d"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/home/runner/workspace/client/src/main.tsx?v=t_jKnVgsiV_kk6GO1BnLP " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_reactDom_client from "/@fs/home/runner/workspace/node_modules/.vite/deps/react-dom_client.js?v=3ba4158d"; const createRoot = __vite__cjsImport3_reactDom_client["createRoot"];
import App from "/src/App.tsx?v=t_jKnVgsiV_kk6GO1BnLP";
import "/src/index.css?v=t_jKnVgsiV_kk6GO1BnLP";
import { registerServiceWorker, checkForPWAInstall } from "/src/pwa.ts?v=t_jKnVgsiV_kk6GO1BnLP";
import { useCapacitor } from "/src/hooks/useCapacitor.ts?v=t_jKnVgsiV_kk6GO1BnLP";
registerServiceWorker();
checkForPWAInstall();
const initApp = async () => {
  _s();
  const { initializeNativeFeatures, isNative } = useCapacitor();
  if (isNative) {
    await initializeNativeFeatures();
  }
  createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "/home/runner/workspace/client/src/main.tsx?v=t_jKnVgsiV_kk6GO1BnLP",
    lineNumber: 19,
    columnNumber: 55
  }, this));
};
_s(initApp, "CMn3xA1Q1Fh/RGY+0ZTtpHVXn+8=", false, function() {
  return [useCapacitor];
});
initApp();
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/client/src/main.tsx?v=t_jKnVgsiV_kk6GO1BnLP", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/client/src/main.tsx?v=t_jKnVgsiV_kk6GO1BnLP", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JzRDsyQkFsQnREO0FBQW1CLE1BQVEscUJBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdDLE9BQU9BLFNBQVM7QUFDaEIsT0FBTztBQUNQLFNBQVNDLHVCQUF1QkMsMEJBQTBCO0FBQzFELFNBQVNDLG9CQUFvQjtBQUc3QkYsc0JBQXNCO0FBQ3RCQyxtQkFBbUI7QUFHbkIsTUFBTUUsVUFBVSxZQUFZO0FBQUFDLEtBQUE7QUFDMUIsUUFBTSxFQUFFQywwQkFBMEJDLFNBQVMsSUFBSUosYUFBYTtBQUU1RCxNQUFJSSxVQUFVO0FBQ1osVUFBTUQseUJBQXlCO0FBQUEsRUFDakM7QUFFQUUsYUFBV0MsU0FBU0MsZUFBZSxNQUFNLENBQUUsRUFBRUMsT0FBTyx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSSxDQUFHO0FBQzdEO0FBQUVOLEdBUklELFNBQU87QUFBQSxVQUNvQ0QsWUFBWTtBQUFBO0FBUzdEQyxRQUFRIiwibmFtZXMiOlsiQXBwIiwicmVnaXN0ZXJTZXJ2aWNlV29ya2VyIiwiY2hlY2tGb3JQV0FJbnN0YWxsIiwidXNlQ2FwYWNpdG9yIiwiaW5pdEFwcCIsIl9zIiwiaW5pdGlhbGl6ZU5hdGl2ZUZlYXR1cmVzIiwiaXNOYXRpdmUiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vQXBwXCI7XG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJTZXJ2aWNlV29ya2VyLCBjaGVja0ZvclBXQUluc3RhbGwgfSBmcm9tICcuL3B3YSc7XG5pbXBvcnQgeyB1c2VDYXBhY2l0b3IgfSBmcm9tICcuL2hvb2tzL3VzZUNhcGFjaXRvcic7XG5cbi8vIFJlZ2lzdGVyIFBXQSBmZWF0dXJlcyAob25seSBmb3Igd2ViKVxucmVnaXN0ZXJTZXJ2aWNlV29ya2VyKCk7XG5jaGVja0ZvclBXQUluc3RhbGwoKTtcblxuLy8gSW5pdGlhbGl6ZSBhcHBcbmNvbnN0IGluaXRBcHAgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgaW5pdGlhbGl6ZU5hdGl2ZUZlYXR1cmVzLCBpc05hdGl2ZSB9ID0gdXNlQ2FwYWNpdG9yKCk7XG4gIFxuICBpZiAoaXNOYXRpdmUpIHtcbiAgICBhd2FpdCBpbml0aWFsaXplTmF0aXZlRmVhdHVyZXMoKTtcbiAgfVxuICBcbiAgY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikhKS5yZW5kZXIoPEFwcCAvPik7XG59O1xuXG5pbml0QXBwKCk7XG4iXSwiZmlsZSI6Ii9ob21lL3J1bm5lci93b3Jrc3BhY2UvY2xpZW50L3NyYy9tYWluLnRzeCJ9