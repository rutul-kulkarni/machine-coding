import "./App.css";
import ItemContainer from "./ItemContainer";
import Tab from "./Tab";
import TabContainer from "./TabContainer";
import TabItem from "./TabItem";
import Tabs from "./Tabs";

function App() {
  return (
    <div>
      <Tabs>
        <TabContainer>
          <Tab value={1}>Tab 1</Tab>
          <Tab value={2}>Tab 2</Tab>
        </TabContainer>
        <ItemContainer>
          <TabItem value={1}>Item 1</TabItem>
          <TabItem value={2}>
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "red",
              }}
            >
              Hello
            </div>
          </TabItem>
        </ItemContainer>
      </Tabs>
    </div>
  );
}

export default App;
