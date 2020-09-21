////////////////////////////////UPDATER/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
const updater = () => {
  const rankNumber = document.querySelectorAll('.rank-number');
  rankNumber.forEach(rank => {
    rankSpecial = rank.parentElement.parentElement.parentElement;
    rankSpecialID = rankSpecial.getAttribute('data-id');
    db.collection('albums').doc(`${rankSpecialID}`).update({
      rank: rank.innerHTML
    });
  });
};
  
/////////////FUNCTION FOR AUTORANKING AT START///////////////////////////////////

const autoRanker = () => {
  const rankNumber = document.querySelectorAll('.rank-number');
  j=1
  rankNumber.forEach(rank => {
      rank.innerText = j;
      j += 1;
  });
};

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


//TESTING DELETE FUNCTION
//TESTING A FUNCTUON
const deleteFunc = () => {
  //DELETE AN ITEM FROM THE LIST:
  const deleteButton = document.querySelectorAll('.delete-button');
  deleteButton.forEach(icon => {
      icon.addEventListener('click', e => {
          e.preventDefault();
          e.target.parentElement.parentElement.parentElement.parentElement.remove();
        });
      });
  };




var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

var elem = document.querySelector('.collapsible.expandable.nested');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

new Sortable(example1, {
    animation: 150,
    ghostClass: 'blue-background-class'


});


//MODAL IS DONE IN JQuery

//SUBMITTING NEW ALBUM
const enterNewEntry = document.querySelector('#add-new-form');
const submitNewEntry = document.querySelector('.submit-new-entry');
const listGroup = document.querySelector('.list-group');

submitNewEntry.addEventListener('click' , e => {
  e.preventDefault();
  let html = '';
  const artist = enterNewEntry['artist-name'].value;
  const album = enterNewEntry['album-name'].value;
  const year = enterNewEntry['year-released'].value;
  const genre = enterNewEntry['genre'].value;

  html += `
    <div class="white collapsible-body group-item" style="display: block;">
              <span>                    
                <div class="row" style="width: 100%;">
                <br>
                    <div class="col s1 rank-number">1</div>
                    <div class="col s2">${artist}</div>
                    <div class="col s2">${album}</div>
                    <div class="col s1">${year}</div>
                    <div class="col s3">${genre}</div>
                    <div class="col s1">
                      <i class="material-icons delete-button">delete</i>
                    </div>
                </div>
              </span>
           </div>
  `;
  listGroup.innerHTML += html;
  deleteFunc();
});