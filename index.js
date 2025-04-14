import { format } from "date-fns";

function updateClock() {
  const now = new Date();
  const formattedTime = format(now, "MMMM do yyyy, h:mm:ss a");
  document.getElementById("clock").textContent = formattedTime;
}

setInterval(updateClock, 1000);
