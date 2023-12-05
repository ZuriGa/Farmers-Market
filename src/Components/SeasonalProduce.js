import React, {useState} from "react";
import Produce from "./Produce";

function SeasonalProduce() {
    const [selectedMonth, setSelectedMonth] = useState ("January");

    const handleMonthChange = (month) => {
        setSelectedMonth(month);
    };

    return (
        <React.Fragment>
            <div>
                <h3>Select our Seasonal Produce</h3>
                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
                    <button key={month} onClick={() => handleMonthChange(month)}>
                        {month}
                    </button>
                ))}
            </div>
            <hr />
            <Produce selectedMonth={selectedMonth} />
        </React.Fragment>
    );
}

export default SeasonalProduce;