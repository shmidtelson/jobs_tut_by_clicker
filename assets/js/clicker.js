var parsePage = class parsePage {
    targetsQuery = '.applicant-resumes-update-button:not(.applicant-resumes-update-button_disabled) .bloko-link[data-qa="resume-update-button"]';
    link_clicker() {
        var targetItems = document.querySelectorAll(this.targetsQuery);

        targetItems.forEach(function (item) {
            item.click()
        });

        window.location.reload()
    };
};

setInterval(function () {
    (new parsePage()).link_clicker();
}, 60000);
