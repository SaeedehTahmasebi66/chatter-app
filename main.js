
//6.2. Switch channels
function switchChannel(channelName){
console.log('Tuning into channel' + channelName);
document.getElementById('chatName').innerHTML= channelName;
document.getElementById('locateName').innerHTML= 'upgrading.never.helps';
    }

//6.3. Favor channels
function unfilledStar(){
    $('#appStar').attr('src','https://ip.lfe.mw.tum.de/sections/star-o.png');
}
function filledStar(){
    $('#appStar').attr('src','https://ip.lfe.mw.tum.de/sections/star.png');
}

//6.4. Tap tabs
function selectTab(){
    $("button.selected").removeClass("selected");
}
//6.5. Toggle emoji box onclick
function emojiBox(){
    $( ).toggle();
}