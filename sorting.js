const listItem = document.querySelectorAll('.group-item');
const updateButton = document.querySelector('.the-button');


//CLICK FEATURE FOR CHECKING
listItem.forEach(item => {


    item.addEventListener('click', e => {
        console.log(item.classList);
    })
});


//For Button Update
updateButton.addEventListener("click" , e => {
        e.preventDefault();
        const updatedListItem = document.querySelectorAll('.group-item');
        const rankNumber = document.querySelectorAll('.rank-number');

        //REMOVES ALL PREV CLASSES OF HTML
        updatedListItem.forEach(item => {
            item.classList = '';
        })

        //ADDS NEW CLASSES AFTER RANKING
        let i = 0;
        updatedListItem.forEach(item => {
            item.classList.add(`white`, `collapsible-body`, `group-item`);
            item.classList.add(`rank-${i}`);
            i++;
        });

        //RANKS THE UPDATED UP
        j=1
        rankNumber.forEach(rank => {
            rank.innerText = j;
            j ++;
        });

        //EDITS THE HTML OF FRONT-END
        let html = '';
        updatedListItem.forEach(item => {
            html += `${item.innerHTML}`;
        });
        listItem.innerHTML = html;
        // console.log(listItem.innerHTML);
        updater();
    });
    
    deleteFunc();