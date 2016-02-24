var myDataRef = new Firebase('https://crackling-inferno-9988.firebaseio.com/someTests/');
$('#messageInput').keypress(function (e) {
  if (e.keyCode == 13) {
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    myDataRef.push({name: name, text: text});
    $('#messageInput').val('');
  }
});
myDataRef.on('child_added', function(snapshot) {
	var key = snapshot.key();
  var message = snapshot.val();
  displayChatMessage(message.name, message.text);
});
function displayChatMessage(name, text) {
  $('<div class="blue"/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
  $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  $('<div class="green"/>').text("_________").appendTo($('#messagesDiv'));
};
