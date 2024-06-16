// Calendar
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDays= ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let date = new Date();

const renderCalendar = () => {
    calendarDays.innerHTML = '';
    weekdays.innerHTML = '';
    const firstDay = (new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 6) % 7;
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const today = new Date();

    monthYear.innerHTML = `${months[date.getMonth()]} ${date.getFullYear()}`;

    for (let w = 0; w < weekDays.length; w++) {
        weekdays.innerHTML += `<div>${weekDays[w]}</div>`;
    }

    for (let i = 0; i < firstDay; i++) {
        calendarDays.innerHTML += '<div></div>';
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        if (date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear() && i === today.getDate()) {
            dayDiv.style.backgroundColor = "#333";
            dayDiv.style.color = "#fff";
        }
        calendarDays.appendChild(dayDiv);
    }
};

prev.onclick = () => { 
    date.setMonth(date.getMonth() - 1); 
    renderCalendar(); 
}
next.onclick = () => { 
    date.setMonth(date.getMonth() + 1); 
    renderCalendar(); 
}

renderCalendar();


// Clock
setInterval(() => {
    d = new Date();
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    time.innerHTML = `${hr} : ${min} : ${sec}`;
 
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

}, 1000);










