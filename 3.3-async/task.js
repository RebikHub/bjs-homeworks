class AlarmClock {
    constructor(alarmCollection, timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, id) {
        if (this.alarmCollection.id || id === undefined) {
            throw new Error('error text');
        };
        if (this.alarmCollection.some((item) => item.id === id)) {
            console.error();
            return;
        }
        return this.alarmCollection.push({
            time,
            callback,
            id
        });
    };

    removeClock(id) {
        const result = this.alarmCollection.some(item => item.id === id);
        this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
        return result;
    };

    getCurrentFormattedTime() {
        let date = new Date();
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
        return `${hours}:${minutes}`;
    };

    start() {
        let currentDate = this.getCurrentFormattedTime();

        function checkClock(call) {
            if (currentDate === call.time) {
                return call.callback();
            };
            return;
        };
        if (this.timerId === null) {
            return this.timerId = setInterval(() => {
                return this.alarmCollection.forEach(item => checkClock(item));
            }, 1000);
        };
    };

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        };
    };

    printAlarms() {
        return this.alarmCollection.forEach(item => console.log(`Будильник №${item.id}, заведен на ${item.time}`));
    };

    clearAlarms() {
        clearInterval(this.timerId);
        return this.alarmCollection = [];
    };
};