/*

<button class="btn btn-default btn-kudo btn-xs js-view-kudos" data-entry="[&quot;Activity&quot;,4160650391]" str-on="click" str-trackable-id="ChcIBTITCJf5+b8PGAIoATCiBjgAQABIARIECgIICQ==" str-type="kudos" title="View all kudos">
    <span class="app-icon icon-color icon-kudo icon-sm">kudos</span>
    <span class="count count-kudos" data-kudo-count="13">13</span>
</button>

*/


// click all kudo buttons on DOM
document.querySelectorAll('.btn-kudo').forEach((elem) => { elem.click() });

// click kudo buttons for specific athlete
let superFancyFunction = () => {
    const athleteToFind = "Mason Rudolph";

    // get all entries on page
    let entries = document.querySelectorAll('.entity-details');

    // loop through page entries
    entries.forEach(elem => {
        // find desired entries
        if (elem.querySelector('.entry-athlete').innerHTML.includes(athleteToFind)) {
            elem.querySelector('.btn-kudo').click();
        }
    });
}



// select all months for activity in year
document.querySelectorAll('a.bar').forEach( asmonth => {
    month.click();
    superFancyFunction()
});




let getMonths = () => {
    document.querySelectorAll('a.bar').forEach(month => {
        console.log(month);
        setTimeout(getMonths, 2000);
    });
}
