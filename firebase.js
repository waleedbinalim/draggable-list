db.collection('albums').orderBy('rank').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          const id = doc.id;
          let html = `
            <div class="white collapsible-body group-item" style="display: block;" data-id="${id}">
              <span>                    
                <div class="row center" style="width: 100%;">
                <br>
                    <div class="col l1 m12 s12 rank-number">${doc.data().rank}</div>
                    <div class="col l2 m12 s12">${doc.data().artist}</div>
                    <div class="col l2 m12 s12">${doc.data().album}</div>
                    <div class="col l1 m12 s12">${doc.data().year}</div>
                    <div class="col l3 m12 s12">${doc.data().genre}</div>
                    <div class="col l1 m12 s12">
                      <i class="material-icons delete-button">delete</i>
                    </div>
                </div>
              </span>
           </div>`;       
    listGroup.innerHTML += html;
    deleteFunc();
    deleteFunc2();
    autoRanker();
    });
});

////////////////////////////////////////////////////////////////////////////////////////
submitNewEntry.addEventListener('click' , e => {
    e.preventDefault();
    const details = {
      rank: 0,
      artist:  enterNewEntry['artist-name'].value,
      album :  enterNewEntry['album-name'].value,
      year  : enterNewEntry['year-released'].value,
      genre :  enterNewEntry['genre'].value
    };
    db.collection('albums').add(details).then(() => {
      console.log('album added');
      location.reload();
    });
    deleteFunc2();
  });
  
  //////////////////////////////////////////////////////////////////////////////////////////
const deleteFunc2 = () => {
  const deleteButton2 = document.querySelectorAll('.delete-button');
  deleteButton2.forEach(icon => {
    icon.addEventListener('click', e => {
      e.preventDefault();
      const id = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id');
      console.log(id);
      db.collection('albums').doc(`${id}`).delete().then(() => {
        console.log('delete successful');
      });
    });
  });
};