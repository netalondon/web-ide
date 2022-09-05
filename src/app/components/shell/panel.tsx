import { CSSProperties, ReactNode } from "react";

export const Panel = (props: {
  mainClassName?: string;
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => {
  return (
    <article className={["panel", props.className ?? ""].join(" ")}>
      {props.header && <header>{props.header}</header>}
      <main className={props.mainClassName}>{props.children}</main>
      {props.footer && <footer>{props.footer}</footer>}
    </article>
  );
};

export const Accordian = (props: {
  children: ReactNode;
  summary: ReactNode;
  className?: string;
  style?: CSSProperties;
  open?: boolean;
}) => {
  return (
    <details
      className={props.className ?? ""}
      open={props.open}
      style={props.style}
    >
      <summary>
        <div className="flex row align-baseline">{props.summary}</div>
      </summary>
      {props.children}
    </details>
  );
};
