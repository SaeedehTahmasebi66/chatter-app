
//6.2. Switch channels
function switchChannel(channelName) {
  console.log('Tuning into channel' + channelName);
  document.getElementById('chatName').innerHTML = channelName;
  document.getElementById('locateName').innerHTML = 'upgrading.never.helps';
}

//6.3. Favor channels
function unfillStar() {
  $('#appStar').attr('src','https://ip.lfe.mw.tum.de/sections/star-o.png');
}

function fillStar() {
  $('#appStar').attr('src','https://ip.lfe.mw.tum.de/sections/star.png');
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