// global.d.ts
export {};

declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: {
      inject: () => void;
    };
  }
}
