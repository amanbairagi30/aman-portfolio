import { WidgetWebComponentProps } from "./widget-type";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "widget-web-component": WidgetWebComponentProps;
    }
  }
}
