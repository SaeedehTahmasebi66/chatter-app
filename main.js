var currentChannel = family;
var currentLocation = {
  longitude: "",
  latitude: "",
  what3words: "truck.cotton.zone"
}
var messageObject;
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

var days = ["Sun", "Mon", "Tue", "Wed",
 "Thu", "Fri", "Sat"];

var months = ["Jan", "Feb", "Mar", "April", "May", "June",
 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


//create new messages conveniently
function Message(text){
  this.createdBy = currentLocation.what3words;
  this.longitude = currentLocation.longitude;
  this.latitude = currentLocation.latitude;
  var d = new Date();
  this.createdOn = days[d.getDay()] +", "+ months[d.getMonth()] +" "+ d.getDate() +"th, "+
   d.getHours() +":"+ d.getMinutes();
  this.expiresIn=  10; //new Date(Date.now() + (15*60*1000));
  this.text= text;  
  this.own= true;
}

//takes a message object and returns a string representation of an HTML message element
function createMessageElement(messageObject){
  var stringRepr =`<div class="message">
<h5>
    <b><a href="` +messageObject.createdBy+ `" 
        target="_blank">` + messageObject.createdBy+ `</a>
    </b>` +messageObject.createdOn+ `<em>` +messageObject.expiresIn+ `min. left</em>
</h5>
<p>` +messageObject.text+ `<button>+5 min</button></p>
</div>`;
  return stringRepr;
}
//send button’s onclick event
function sendMessage(txt){
  var txt =$("#textMessage").val();
  var msg = new Message (txt);
  var stringRepr = createMessageElement(msg);
  $("#chat-scroll").append(stringRepr);
  $('#textMessage').val('');
}

