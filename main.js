var currentChannel = family;
var currentLocation = {
  longitude: "",
  latitude: "",
  what3words: ""
}
//6.2. Switch channels
function switchChannel(channel) {
  console.log('Turning into channel' + channel.name);
  $('#chatName').html(channel.name);
  $('#locateName').html(channel.createdBy);

//highlight the channells 
  $("ul li.highlighted").removeClass("highlighted");
  $(channel.name).addClass("highlighted");
  //solution2(doesn't need IDs)
  //$("li:contains("+ channel.name +")").addClass("highliighted");    it doesn't work!!!
  
  var star = (channel.starred) ? 'fas' : 'far';
  $("#appStar").removeClass("fas far");
  $("#appStar").addClass(star);
  
  currentChannel =channel;
 
}

//Toggle the channel stars
function toggleChannelStar() {
  $("#appStar").toggleClass("fas far");
  $(' li:contains(' + currentChannel.name + ') span .fa-star').toggleClass("fas far");
  (currentChannel.starred)=!(currentChannel.starred);


 /* if(currentChannel.starred === false){
    currentChannel.starred = true;
  }
  else{
      currentChannel.starred = false;
    } 
 */   
}


//6.4. Tap tabs
function selectTab(tabId) {
  $("button.selected").removeClass("selected");
  $(tabId).addClass("selected");
}

//6.5. Toggle emoji box onclick
function toggleEmojiBox() {
  $("div #emojis").toggle();
}