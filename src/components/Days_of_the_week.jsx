export const Weekdays = ({ day, onClick }) => {
  return (
    <div
      className="bg-gray-800 p-9 py-3 rounded-full inline-block cursor-pointer text-white  dark:bg-white  dark:text-black "
      onClick={() => onClick(day)}
    >
      {day}
    </div>
  );
};

export const Days_of_the_week = ({ days, onClick }) => {
  return (
    <div className="space-x-11 text-center  text-xl mb-8  justify-stretch mt-6 ">
      {days.map((day, index) => (
        <Weekdays key={index} day={day} onClick={onClick} />
      ))}
    </div>
  );
};