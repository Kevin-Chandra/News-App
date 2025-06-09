import en from "@resources/locale/en";

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof en;
  }
}