var worker = new Worker('js/worker1.js');

worker.addEventListener('message', function(e){
    var newData = e.data;
    console.log(newData);
});

worker.postMessage("Hello Praveen, I am from Main, invoking worker1");

