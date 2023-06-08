"use client";

const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

function mmddyyyy(value) {
  const date = new Date(value);
  const month =
    date.getMonth() + 1 < 10
      ? `0` + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0` + date.getDate() : date.getDate();
  const year = date.getFullYear();
  return month + `/` + day + `/` + year;
}

export function addSubDays(days) {
  var currentDate = new Date(); // Get the current date and time
  var newDate = new Date(currentDate); // Create a new Date object based on the current date
  // Add or subtract the specified number of days
  newDate.setDate(currentDate.getDate() + days);
  // Return the new date as a string in the format yyyy-mm-dd
  return {
    send: mmddyyyy(newDate.toISOString()),
    date:
      newDate.getDate() < 10 ? `${0}${newDate.getDate()}` : newDate.getDate(),
    day: weekday[newDate.getDay()],
  };
}
