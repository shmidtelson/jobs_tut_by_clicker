var $input = document.querySelectorAll('.bloko-icon-link');
moment.locale('ru');

var parsePage = class parsePage {
    static current_selector = '.resumelist__update-info';

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
        var $date = document.querySelector(this.current_selector);
        // $date - 7 февраля 2019 23:50
        // Разбираем дату в массив.
        var arr = $date.innerText.split(" "); // Split date for parsing
        /*
         Cобираем дату в нужном нам формате. Чтобы не путаться с окончаниями, мы обрезаем название текущего месяца
         до первых трех символов: февраля => фев. И снова собираем дату и добавляем к ней 4 часа (таков интервал
         системы) и трансформируем ее в UNIX дату, чтобы можно было комфортно сравнивать Int.
          */
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
