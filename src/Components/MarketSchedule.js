import React, {useState} from "react";
import Schedule from "./Schedule";

function MarketSchedule() {
    const [selectedDay, setSelectedDay] = useState("Sunday");

    const handleDayChange = (day) => {
        setSelectedDay(day);
    };

    return (
        <React.Fragment>
            <div>
                <h3>Find us at this Farmers Market</h3>
                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                    <button key={day} onClick={() => handleDayChange(day)}>{day}</button>
                ))}
            </div>
            <hr />
            <Schedule selectedDay={selectedDay} />
        </React.Fragment>
        
    );
}

export default MarketSchedule;