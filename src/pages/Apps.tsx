import GreyCenteredFlat from "../components/GreyCenteredFlat";
import Card from "../components/Card";
import "../css/Apps.css";

const Apps = () => {
  return (
    <div id="apps-page-root">
      <GreyCenteredFlat id="greyTray">
        <Card></Card>
        <Card></Card>
      </GreyCenteredFlat>
    </div>
  );
};

export default Apps;
