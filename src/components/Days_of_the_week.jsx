import React from "react";

const Weekdays = ({ day }) => {
  return (
    <div className="bg-slate-700 p-9 py-3 rounded-full inline-block cursor-pointer text-white">
      {day}
    </div>
  );
};

const Days_of_the_week = ({ days, onClick }) => {
  return (
    <div className="space-x-6 text-center  text-xl mb-4  justify-stretch mt-4 ">
      {days.map((day, index) => (
        <Weekdays key={index} day={day} onClick={onClick} />
      ))}
    </div>
  );
};

export default Days_of_the_week;
