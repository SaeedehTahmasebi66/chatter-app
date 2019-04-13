var currentChannel = family;
var currentLocation = {
  longitude: "",
  latitude: "",
  what3words: "w3w3w3"
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


//create new messages conveniently
function Message(text){
  this.createdBy = currentLocation.what3words;
  this.longitude = currentLocation.longitude;
  this.latitude = currentLocation.latitude;
  this.createdOn= new Date();
  this.expiresIn= new Date(Date.now() + (15*60*1000));
  this.text= text;
  this.own= true;
}
var messageObject = new Message ("Hello Chatter");

/* این قسمت مال قبلنه.  ک من سینک کردهبودم قبلا (قبل عید) ولی پیروز فهمیدم ک اصلا کامیت نشده بوده تو گیت هابم.
//send button’s onclick event
function sendMessage(){
  var messageObject = new Message ("Hello Chatter");
  createMessageElement(messageObject);
  $("#chat-scroll").append(createMessageElement(messageObject));
}
//takes a message object and returns a string representation of an HTML message element
function createMessageElement(messageObject){
  var stringRepr =
  `<div class="message">
  <h3><a href=":createdBy:" target="_blank"><strong>:createdBy:</strong></a>
      :createdOn: <em>:expiresIn: min. left</em></h3>
  <p>:text:</p>
  <button>+5 min.</button>
</div>`;
  return stringRepr;
}
*/

var stringRepr =`<div class="message">
<h5>
    <b><a href="` +messageObject.createdBy+ `" 
        target="_blank">` + messageObject.createdBy+ `</a>
    </b>` +messageObject.createdOn+ `<em>` +messageObject.expiresIn+ `min. left</em>
</h5>
<p>` +messageObject.text+ `<button>+5 min</button></p>
</div>`;

function sendMessage(){
  $("#chat-scroll").append(stringRepr);
}


