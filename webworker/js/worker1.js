self.addEventListener('message', function(e){
    var message = e.data + " - this is now masaged data";
    self.postMessage(message);
    self.close();
})