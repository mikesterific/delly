var dialog = {
    init: function(){
        this.body();
    },
    respond : function(message){
        if (message.lastIndexOf("hello del")!== -1){
            responsiveVoice.speak("Hello Michael. Shall we start the demo?");
        }
        
    },
    body: function(){
        var dialogInput = $("#dialog");
        $("body").on("click", "#Go", function(){
            var inputText = dialogInput.val().toLowerCase();
            if(inputText === "hello delli"){
               responsiveVoice.speak("hello Michael, should we start the demo?"); 
            }
            
        });

    }
};
//dialog.init();