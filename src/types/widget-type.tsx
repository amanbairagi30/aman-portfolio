// src/types/widgetTypes.ts
export interface WidgetWebComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  theme: string | undefined;
  username: string;
  lgCols?: number;
  cardView?: string;
  fontVariable?: string;
  mdCols?: number;
  baseCols?: number;
  topStatusBarVisible?: boolean;
}
