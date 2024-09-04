/*
    Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

    Can you make it so that it updates every second, and shows time in the following formats -

        - HH:MM::SS (Eg. 13:45:23)

        - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/ 
setInterval(
    function displayTime(){
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2,"0");
        const minutes = currentTime.getMinutes().toString().padStart(2,"0");
        const seconds = currentTime.getSeconds().toString().padStart(2,"0");

        // 24hr-format
        const timeIn24HrFromat = `${hours}:${minutes}:${seconds}`;
        console.log(timeIn24HrFromat);
        document.getElementById("24hr-format").innerHTML = timeIn24HrFromat;

        // 12hr-format
        const timeIn12HrFormat = currentTime.toLocaleTimeString([],{
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        console.log(timeIn12HrFormat);
        document.getElementById("12hr-format").innerHTML = timeIn12HrFormat;
    },1000);