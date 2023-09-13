export function getCurrentTime(currentTime = new Date()) {
    const timeString = currentTime.toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
    });

    return timeString;
}

export function getNextPrayerTime(currentTime, jadwalSholat) {
    const timeString = currentTime.toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
    });

    let nextPrayer = null;

    for (const [prayer, time] of jadwalSholat) {
        if (new Date(`01/01/2000 ${time}`) > new Date(`01/01/2000 ${timeString}`)) {
            nextPrayer = `${prayer} ${time}`;
            break;
        }
    }
    if (jadwalSholat.length !== 0) {
        if (timeString > jadwalSholat[4][1]) {
            nextPrayer = `${jadwalSholat[0][0]} ${jadwalSholat[0][1]}`
        }
    }
    return nextPrayer;
}

export function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(inputDate).toLocaleDateString('id-ID', options);
}

export function formatDateToSlashFormat(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
}