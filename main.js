
//6.2. Switch channels
function switchChannel(channel) {
  console.log('Tuning into channel' + channel.name);
  document.getElementById('chatName').innerHTML = channel.name;
  document.getElementById('locateName').innerHTML = channel.createdBy;
}

//6.3. Favor channels
//function unfillStar() {
  //$('#appStar').attr('src','https://ip.lfe.mw.tum.de/sections/star-o.png');
  
//}

function fillStar() {
 /* $('#appStar').attr('src','https://ip.lfe.mw.tum.de/sections/star.png'); */
  $("#appStar").toggleClass("fas");
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