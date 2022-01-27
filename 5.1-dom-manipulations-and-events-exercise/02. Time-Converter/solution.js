function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', onDaysClick);
    hoursBtn.addEventListener('click', onHoursClick);
    minutesBtn.addEventListener('click', onMinutesClick);
    secondsBtn.addEventListener('click', onSecondsClick);

    const inputDays = document.getElementById('days');
    const inputHours = document.getElementById('hours');
    const inputMinutes = document.getElementById('minutes');
    const inputSeconds = document.getElementById('seconds');

    const rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    function convert(value, unit) {
        const inDays = value / rations[unit];

        return {
            days: inDays,
            hours: inDays * rations.hours,
            minutes: inDays * rations.minutes,
            seconds: inDays * rations.seconds,
        };
    }

    function onDaysClick(event) {
        const output = convert(Number(inputDays.value), inputDays.id);

        inputHours.value = output.hours;
        inputMinutes.value = output.minutes;
        inputSeconds.value = output.seconds;
    }

    function onHoursClick(event) {
        const output = convert(Number(inputHours.value), inputHours.id);

        inputDays.value = output.days;
        inputMinutes.value = output.minutes;
        inputSeconds.value = output.seconds;
    }

    function onMinutesClick(event) {
        const output = convert(Number(inputMinutes.value), inputMinutes.id);

        inputDays.value = output.days;
        inputHours.value = output.hours;
        inputSeconds.value = output.seconds;
    }

    function onSecondsClick(event) {
        const output = convert(Number(inputSeconds.value), inputSeconds.id);

        inputDays.value = output.days;
        inputHours.value = output.hours;
        inputMinutes.value = output.minutes;
    }
}
