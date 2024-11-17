export interface WidgetWebComponentProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  theme?: string | undefined | null;
  username?: string | undefined;
  "lg-cols"?: number; // sets columns on large screens (works with grid layout only) .
  "card-view"?: "list" | "grid"; // toggles between list and grid view of the PR cards
  "font-variable"?: string; // You can add your font variable (e.g., --font-primary or any custom variable name) in this prop.
  "md-cols"?: number; // sets columns on medium screens (works with grid layout only) .
  "base-cols"?: number; // sets columns on small screens (works with grid layout only) .
  "top-visible"?: "true" | "false"; // toggles the top bar which shows the organisations where you contributed.
}
