let profileblock = [];

window.addEventListener('load', function () { 
    getProfile();
    console.log("hi");
});


function getProfile() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api/?results=4');
    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText);
        let results = response.results
        
    for (let i = 0; i <results.length; i++) {
            showProfile(results[i]);
        }
    });
    request.send();  
}



function showProfile(profile) {
   let child = document.createElement('li');  
   let parent = document.querySelector('#profile ul'); 
   let template = document.querySelector('#profile-block');

   
   child.innerHTML = Mustache.render(template.innerHTML, {
      pictureLarge: profile.picture.large,
      nameFirst: profile.name.first,
      nameLast: profile.name.last,
      gender: profile.gender,
      locationCity: profile.location.city,
      email: profile.email,
   });

    let button = child.querySelector('.Like'); 
    button.addEventListener('click', function() {
       console.log('clicked' + " " + profile.name.first +" " + profile.name.last + " " + "rocks!");
    
   });
   parent.appendChild(child); 

   let button2 = child.querySelector('.Dislike'); 
   button2.addEventListener('click', function() {
       console.log('clicked' + " " + profile.name.first +" " + profile.name.last + " " + "is a LOSER!");
    
   });
   parent.appendChild(child);
}








