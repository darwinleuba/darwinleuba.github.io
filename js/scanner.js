Quagga.init({
    inputStream : {
        name : "Live",
        type : "LiveStream",
         // Or '#yourElement' (optional)
        target: document.querySelector('#yourElement') 
    },
    decoder : {
        readers : ["code_128_reader"]
    }
}, function(err) {
    if (err) {
        console.log(err);
        return
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
});