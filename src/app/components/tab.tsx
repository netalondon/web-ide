import {
  cloneElement,
  CSSProperties,
  ReactElement,
  ReactNode,
  useState,
} from "react";

export const Tabs = (props: {
  tab: string;
  tablist: string;
  children: ReactNode[];
}) => {
  const [selected, setSelected] = useState(props.tab);
  const tabs = props.children ?? [];
  const tabCount = tabs.length;

  return (
    <section
      role="tablist"
      style={{ "--tab-count": tabCount } as CSSProperties}
    >
      {tabs.map(
        (tab) =>
          tab &&
          cloneElement(tab as ReactElement, {
            key: (tab as ReactElement).props.tabid,
            prefix: props.tablist,
            selected: selected === (tab as ReactElement).props.tabid,
            setSelected,
          })
      )}
    </section>
  );
};

export const Tab = (
  props: {
    tabid: string;
    label: ReactNode;
    children: ReactNode;
  } & Partial<{
    prefix: string;
    selected: boolean;
    setSelected(id: string): string;
  }>
) => (
  <>
    <div
      role="tab"
      id={`${props.prefix}-tab-${props.tabid}`}
      aria-controls={`${props.prefix}-tabpanel-${props.tabid}`}
      aria-selected={props.selected}
    >
      <label>
        <input
          type="radio"
          name={props.prefix}
          value={props.tabid}
          checked={props.selected}
          onChange={() => props.setSelected?.(props.tabid)}
        />
        {props.label}
      </label>
    </div>
    <div
      role="tabpanel"
      id={`${props.prefix}-tabpanel-${props.tabid}`}
      aria-labelledby={`${props.prefix}-tab-${props.tabid}`}
    >
      {props.children}
    </div>
  </>
);
