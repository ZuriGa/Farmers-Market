import React from "react";
import Header from "./Header";
import MarketSchedule from "./MarketSchedule";
import SeasonalProduce from "./SeasonalProduce";

function App() {
    return (
    <React.Fragment>
        <Header />
        <MarketSchedule />
        <SeasonalProduce />
    </React.Fragment>
    );
}

export default App;