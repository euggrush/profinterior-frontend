const dayjs = require("dayjs");

export default {
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
        getTimeStamp(date) {
            let myDate = date;
            myDate = myDate.split("-");
            const timestamp = +new Date(
                Date.UTC(myDate[0], myDate[1] - 1, myDate[2])
            ).getTime();
            return timestamp;
        },
        getDate(date) {
            return dayjs(date).format("MMMM D, YYYY h:mm A");
        }
    }
}