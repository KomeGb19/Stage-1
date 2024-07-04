/* const currentTime = document.getElementById("year");
const thisYear = new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
 */
function displayDate() {
	try {
		const dateElement = document.getElementById("date");
		const dateElement2 = document.getElementById("date-2");
		const currentDate = new Date();
		dateElement.innerHTML = currentDate.toUTCString();
		dateElement2.innerHTML = currentDate.toUTCString();
	} catch (error) {
		console.error("An error occurred while displaying the date:", error);
	}
}

window.onload = displayDate;
