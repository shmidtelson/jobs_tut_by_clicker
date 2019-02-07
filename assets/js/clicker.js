var $input = document.querySelectorAll('.bloko-icon-link');
moment.tz.setDefault("Europe/Minsk");
moment.locale('ru');

var parsePage = class parsePage {
    constructor() {
        this.link_clicker()
    }

    static reloadPage() {
        window.location.reload()
    }

    static nowDate() {
        return parseInt(moment().format('X'))
    }

    static getLatestTime() {
        var $date = document.querySelector('.resumelist__update-info');
        // $date - 7 февраля 2019 23:50
        var arr = $date.innerText.split(" "); // Split date for parsing
        $date = moment(arr[0] + " " + arr[1].substring(0,3) + " " + arr[2] + " " + arr[3], 'D MMM YYYY HH:mm')
            .add(4, 'hours') // For condition
            .format('X');
        return parseInt($date);
    }

    link_clicker() {
        if (parsePage.nowDate() > parsePage.getLatestTime()) {
            $input.forEach((element) => {
                if (element.disabled !== null && !element.disabled) {
                    element.click();
                    console.log('clicked');
                }
            });
            parsePage.reloadPage();
        } else {
            console.log(moment().format("MMMM D YYYY, HH:mm"));
        }
    };
};

var p = new parsePage();

setInterval(p.link_clicker, 60000);