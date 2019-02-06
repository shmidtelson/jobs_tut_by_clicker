var $input = document.querySelectorAll('.bloko-icon-link');
moment.locale('ru');

console.log('Started ' + moment().format('D MMMM YYYY HH:mm'));

var parsePage = class parsePage {
    constructor() {

    }

    static reloadPage() {
        window.location.reload()
    }

    static nowDate() {
        return parseInt(moment().format('X'))
    }

    static getLatestTime() {
        var $date = document.querySelector('.resumelist__update-info');
        return parseInt(moment($date.innerText, 'D MMMM YYYY HH:mm').format('X'))
    }

    link_clicker() {
        if (parsePage.nowDate() < parsePage.getLatestTime()) {
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