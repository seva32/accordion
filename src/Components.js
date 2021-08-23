// import { jsx } from "@emotion/react";

// import posed from "react-pose";
// import styled from "@emotion/styled/macro";

// const AccordionButton = styled("button")(
//   {
//     textAlign: "left",
//     minWidth: 80,
//     cursor: "pointer",
//     flex: 1,
//     paddingTop: 10,
//     paddingBottom: 10,
//     fontSize: 20,
//     border: "none",
//     backgroundColor: "unset",
//     ":focus": {
//       outline: "none",
//       backgroundColor: "rgba(255, 255, 255, 0.4)",
//     },
//   },
//   ({ isOpen }) =>
//     isOpen
//       ? {
//           backgroundColor: "rgba(255, 255, 255, 0.2)",
//         }
//       : null
// );

// const PoseAccordionContents = posed.div({
//   open: { maxHeight: 200 },
//   closed: { maxHeight: 0 },
// });

// function AccordionContents({ isOpen, ...props }) {
//   return (
//     <PoseAccordionContents
//       pose={isOpen ? "open" : "closed"}
//       css={{ overflowY: "hidden", textAlign: "justify" }}
//       {...props}
//     />
//   );
// }

// const AccordionItem = styled("div")(
//   {
//     display: "grid",
//     gridTemplate: "auto auto",
//     gridGap: 4,
//     gridAutoFlow: "row",
//   },
//   (props) => ({
//     gridAutoFlow: props.direction === "horizontal" ? "column" : "row",
//   })
// );

// const TabButtons = styled("div")({ display: "flex" });
// const TabButton = styled(AccordionButton)({
//   textAlign: "center",
// });
// const TabItems = styled("div")({
//   position: "relative",
//   minHeight: 120,
// });

// const BelowTabItem = posed.div({
//   open: { opacity: 1, top: 0 },
//   closed: { opacity: 0, top: 30 },
// });

// const AboveTabItem = posed.div({
//   open: { opacity: 1, bottom: 0 },
//   closed: { opacity: 0, bottom: 30 },
// });

// function TabItem({ position, isOpen, ...props }) {
//   props = {
//     pose: isOpen ? "open" : "closed",
//     css: { position: "absolute", overflowY: "hidden" },
//     ...props,
//   };
//   return position === "above" ? (
//     <AboveTabItem {...props} />
//   ) : (
//     <BelowTabItem {...props} />
//   );
// }

// export {
//   AccordionButton,
//   AccordionItem,
//   AccordionContents,
//   AboveTabItem,
//   BelowTabItem,
//   TabItem,
//   TabItems,
//   TabButton,
//   TabButtons,
// };

import React from "react";
import "./Components.css";

function AccordionButton({ isOpen, children, onClick }) {
  return (
    <button
      className="accordion-btn"
      style={{
        backgroundColor: isOpen ? "rgba(255, 255, 255, 0.2)" : null,
      }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

function AccordionContents({ isOpen, children, ...props }) {
  return (
    <div
      style={{
        maxHeight: isOpen ? "200px" : "0px",
        overflowY: "hidden",
        textAlign: "justify",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function AccordionItem({ direction, children }) {
  return (
    <div
      className="accordion-item"
      style={{ gridAutoFlow: direction === "horizontal" ? "column" : "row" }}
    >
      {children}
    </div>
  );
}

function TabButtons({ children }) {
  return <div style={{ display: "flex" }}>{children}</div>;
}

function TabButton({ isOpen, children, onClick }) {
  return (
    <button
      className="accordion-btn"
      style={{
        backgroundColor: isOpen ? "rgba(255, 255, 255, 0.2)" : null,
        textAlign: "center",
      }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

function TabItems({ children }) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: 120,
        display: "flex",
      }}
    >
      {children}
    </div>
  );
}

function BelowTabItem({ open, children, ...props }) {
  return (
    <div
      style={{
        opacity: open ? "1" : "0",
        top: open ? "30" : "0",
        position: "absolute",
        overflowY: "hidden",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function AboveTabItem({ open, children, ...props }) {
  return (
    <div
      style={{
        opacity: open ? "1" : "0",
        top: open ? "0" : "30",
        position: "absolute",
        overflowY: "hidden",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function TabItem({ position, isOpen, children, ...props }) {
  return position === "above" ? (
    <AboveTabItem open={isOpen} {...props}>
      {children}
    </AboveTabItem>
  ) : (
    <BelowTabItem open={isOpen} {...props}>
      {children}
    </BelowTabItem>
  );
}

export {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  TabItem,
  TabItems,
  TabButton,
  TabButtons,
};
