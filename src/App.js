import { Card, CardContent } from "@material-ui/core";
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import Map from "./components/Map";
import TableData from "./components/TableData";
import LineGraph from "./components/LineGraph";

function App() {
  return (
    <div className="app">
      <div className="app_left">
        {/* Header */}
        <Header />
        {/* InfoBoxs */}
        <InfoBox />

        {/* Map */}
        <Map />
      </div>
      <Card className="app_right">
        <CardContent>
          {/* Tablee */}
          <h3>Live Cases by Country</h3>
          <TableData />
          <h3>Worldwide new cases</h3>
          <LineGraph />
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
