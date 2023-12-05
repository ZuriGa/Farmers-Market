import React from "react";

const MarketSchedule = [
    {
        day: "Sunday",
        location: "Lents International",
        hours: "9:00am - 2:00pm",
        booth: "4A"
    },
    {
        day: "Monday",
        location: "Pioneer Courthouse Square",
        hours: "10:00pm - 2:00pm",
        booth: "7C"
    },
    {
        day: "Tuesday",
        location: "Hillsboro",
        hours: "5:00pm - 8:30pm",
        booth: "1F"
    },
    {
        day: "Wednesday",
        location: "Shemanski Park",
        hours: "10:00am - 2:00pm",
        booth: "3E"
    },
    {
        day: "Thursday",
        location: "Northwest Portland",
        hours: "2:00pm - 6:00pm",
        booth: "6D"
    },
    {
        day: "Saturday",
        location: "Beaverton",
        hours: "10:00am - 1:30pm",
        booth: "9G"
    },
];

function Schedule({ selectedDay }) {
    const scheduleForSelectedDay = MarketSchedule.find((Schedule) => Schedule.day === selectedDay);
    return (
        <React.Fragment>
            {scheduleForSelectedDay ? (
                <ul>
                    <li>
                        <strong>{scheduleForSelectedDay.day}:</strong> {scheduleForSelectedDay.location} ({scheduleForSelectedDay.hours}) Booth: {scheduleForSelectedDay.booth}
                    </li>
                </ul>
            ) : (
                <p>No Schedule available for the selected day.</p>
            )}
        </React.Fragment>
    );
}

export default Schedule;