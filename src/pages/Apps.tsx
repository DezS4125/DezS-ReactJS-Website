import GreyCenteredFlat from "../components/GreyCenteredFlat";
import Card from "../components/Card";
import "../css/Apps.css";

const Apps = () => {
  return (
    <div id="apps-page-root">
      <GreyCenteredFlat id="greyTray">
        <Card
          title="To do List"
          text="A to do description"
          img="src/assets/todoIcon.png"
          href="todolist"
        ></Card>
        <Card title="" text="" id="" img="" href=""></Card>
        <Card></Card>
      </GreyCenteredFlat>
    </div>
  );
};

export default Apps;
