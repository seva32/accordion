import React from "react";
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  TabButton,
  TabItem,
  TabItems,
  TabButtons,
} from "./Components.js";
import {
  useAccordion,
  accordionReducer,
  combineReducers,
  singleReducer,
  preventCloseReducer,
} from "./useAccordion.js";

function Accordion({ items, reducer = () => {}, ...props }) {
  const { openIndexes, toggleIndex } = useAccordion({
    reducer: combineReducers(reducer, preventCloseReducer),
  });
  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={item.title} direction="vertical">
          <AccordionButton
            isOpen={openIndexes.includes(index)}
            onClick={() => toggleIndex(index)}
          >
            {item.title}{" "}
            <span>{openIndexes.includes(index) ? "👇" : "👈"}</span>
          </AccordionButton>
          <AccordionContents isOpen={openIndexes.includes(index)}>
            {item.contents}
          </AccordionContents>
        </AccordionItem>
      ))}
    </div>
  );
}

function useTabs({ reducer = () => {} } = {}) {
  return useAccordion({
    reducer: combineReducers(
      reducer,
      preventCloseReducer,
      singleReducer,
      accordionReducer
    ),
  });
}

function Tabs({ items, position }) {
  const { openIndexes, toggleIndex } = useTabs();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: position === "above" ? "column" : "column-reverse",
      }}
    >
      <TabItems>
        {items.map((item, index) => (
          <TabItem key={index} isOpen={openIndexes.includes(index)}>
            {items[index].contents}
          </TabItem>
        ))}
      </TabItems>
      <TabButtons>
        {items.map((item, index) => (
          <TabButton
            key={item.title}
            isOpen={openIndexes.includes(index)}
            onClick={() => toggleIndex(index)}
          >
            {item.title}
          </TabButton>
        ))}
      </TabButtons>
    </div>
  );
}

const items = [
  {
    title: "🐴",
    contents: (
      <div>
        Horses can sleep both lying down and standing up. Domestic horses have a
        lifespan of around 25 years. A 19th century horse named 'Old Billy' is
        said to have lived 62 years.
      </div>
    ),
  },
  {
    title: "🦏",
    contents: (
      <div>
        Rhino skin maybe thick but it can be quite sensitive to sunburns and
        insect bites which is why they like wallow so much – when the mud dries
        it acts as protection from the sunburns and insects.
      </div>
    ),
  },
  {
    title: "🦄",
    contents: (
      <div>
        If you’re looking to hunt a unicorn, but don’t know where to begin, try
        Lake Superior State University in Sault Ste. Marie, Michigan. Since
        1971, the university has issued permits to unicorn questers.
      </div>
    ),
  },
];

function App() {
  return (
    <div
      style={{
        maxWidth: 400,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 60,
      }}
    >
      <Accordion items={items} reducer={singleReducer} />
      <Tabs items={items} position="above" />
    </div>
  );
}

export default App;
