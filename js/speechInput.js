var speechInput = {
    init: function(){
        this.browserCheck();
    },
    browserCheck : function(){
        if (!('webkitSpeechRecognition' in window)) {
            alert("webkitSpeechRecognition is not supported");
            return;
        }else {
            this.runSpeech();
        }
    },
    runSpeech : function(){
        var final_transcript = '',
            recognizing = false,
            ignore_onend,
            start_timestamp;
        // start_button.style.display = 'inline-block';

        // --- Responding -- //
        var dialogInput = $("#dialog"),
            clearInputTimer;

        function respond(message){
            if (message.lastIndexOf("hello del")!== -1){              
                responsiveVoice.speak("Hello Michael. Shall we start the demo?");
            }
            if (message.lastIndexOf("laptop")!== -1){    
                $("#output_wrap").show();
                responsiveVoice.speak("I heard laptop, is this for home or business?");
            }
            if (message.lastIndexOf("home")!== -1){    
                $("#dl-segment").click();
                responsiveVoice.speak("Did you have a brand in mind?");
            }
            if (message.lastIndexOf("inspiron")!== -1){     
                $("#dl-brand").click();         
                responsiveVoice.speak("I heard Inspiron, see our current models below?");
            }
            clearInputTimer = setTimeout(function(){                  
                $("#final_span").text("");
                $("#interim_span").text("");
            }, 200);
            
        }
        // $("body").on("click", "#Go", function(){
        //     var inputText = dialogInput.val().toLowerCase();
        //     if(inputText === "hello delli"){
        //        responsiveVoice.speak("hello Michael, should we start the demo?"); 
        //     }
            
        // });

        // -- End Responding -- //

        $("body").on("click", "#start_button", function(){
            startButton(event);
        })

        var recognition = new webkitSpeechRecognition();

        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = function() {
            recognizing = true;
            showInfo('info_speak_now');
            start_img.src = 'images/mic-animate.gif';
        };

        recognition.onerror = function(event) {
            if (event.error == 'no-speech') {
                start_img.src = 'images/mic.gif';
                showInfo('info_no_speech');
                ignore_onend = true;
            }
            if (event.error == 'audio-capture') {
                start_img.src = 'images/mic.gif';
                showInfo('info_no_microphone');
                ignore_onend = true;
            }
            if (event.error == 'not-allowed') {
                if (event.timeStamp - start_timestamp < 100) {
                    showInfo('info_blocked');
                } else {
                    showInfo('info_denied');
                }
                ignore_onend = true;
            }
        };

        recognition.onend = function() {
            recognizing = false;
            if (ignore_onend) {
                return;
            }
            start_img.src = 'images/mic.gif';
            if (!final_transcript) {
                showInfo('info_start');
                return;
            }
            showInfo('');
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
                var range = document.createRange();
                range.selectNode(document.getElementById('final_span'));
                window.getSelection().addRange(range);
                
            }
        };

        recognition.onresult = function(event) {
            var interim_transcript = '';
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += event.results[i][0].transcript;

                    //-- Adding the feed to dialog -- //
                    respond(final_transcript.toLowerCase());
                    final_transcript = "";
                    continue;

                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }
            final_transcript = capitalize(final_transcript);
            final_span.innerHTML = linebreak(final_transcript);
            interim_span.innerHTML = linebreak(interim_transcript);
            if (final_transcript || interim_transcript) {
                showButtons('inline-block');
            }
        };

        var two_line = /\n\n/g;
        var one_line = /\n/g;
        function linebreak(s) {
            return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
        }
        var first_char = /\S/;
        function capitalize(s) {
            return s.replace(first_char, function(m) { return m.toUpperCase(); });
        }

        function startButton(event) {
            if (recognizing) {
                recognition.stop();
                return;
            }
            final_transcript = '';
            recognition.lang = '6';
            // recognition.lang = select_dialect.value;
            recognition.start();
            ignore_onend = false;
            final_span.innerHTML = '';
            interim_span.innerHTML = '';
            start_img.src = '/images/mic-slash.gif';
            showInfo('info_allow');
            showButtons('none');
            start_timestamp = event.timeStamp;
        }
        function showInfo(s) {
            if (s) {
                for (var child = info.firstChild; child; child = child.nextSibling) {
                    if (child.style) {
                        child.style.display = child.id == s ? 'inline' : 'none';
                    }
                }
                info.style.visibility = 'visible';
            } else {
                info.style.visibility = 'hidden';
            }
        }
        var current_style;
        function showButtons(style) {
            if (style == current_style) {
                return;
            }
            current_style = style;
        }
    }

};
speechInput.init();
