//this is the page counter 
var pageCounter = 1;
//this will show the family info
var FamilyTree = document.getElementById("Family-info");
var btn = document.getElementById("btn");
//an event listener with an onclick function
btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://raw.githubusercontent.com/wcasey1/familyMembers/master/jason%202/myFamily_" + pageCounter + ".json");
//this will display the information when asked for
ourRequest.onload = function() {
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};
ourRequest.send();

pageCounter++;
//This button can be clicked two times and then the button will hide
if(pageCounter >2){
	btn.classList.add("hide-me");
}

});

//a function to display the dater on the screen
function renderHTML(data){
//for loop
var htmlString = "";
// i used this so it knows when to stop looping and to display the value of familyMember
for ( i = 0; i <data.length; i++) {

        
        htmlString += "<p>" + data[i].name + " is a " + data[i].familyMember + ".</p>";
}
FamilyTree.insertAdjacentHTML('beforeend', htmlString);
}


