// ==UserScript==
// @name         MultCloud
// @namespace    https://www.multcloud.com/
// @version      1.1
// @description  URL decoding for MultCloud
// @author       ShadyThGod
// @include      *multcloud.com*
// ==/UserScript==

document.getElementById('taskUploadURL').addEventListener('click', function() {
    document.getElementById('addOfflineTask').addEventListener('click', function() {
        setTimeout(function() {
            var offTaskWindow_1 = document.querySelector('div[style="position:absolute;left:50%;top:50%;margin-left:-200px;margin-top:-115px;width:400px;height:230px;overflow:hidden;background-color:#FFF;z-index:120000;border:8px solid #b7d3df;border-radius:0px;"]');
            offTaskWindow_1.id = "offTaskWindow_1";
            var offDiv = document.getElementById('addOfflineTaskDIV');
            var offTaskButton_2 = document.createElement('button');
            offTaskButton_2.id = "offTaskButton_SanitizeName";
            offTaskButton_2.className = "allButton";
            offTaskButton_2.innerHTML = "Sanitize";
            offTaskButton_2.type = "button";
            offTaskButton_2.style.cssFloat = "left";
            offTaskButton_2.style.color = "white";
            offTaskButton_2.style.width = "60px";
            offTaskButton_2.style.height = "35px";
            offTaskButton_2.style.marginTop = "7px";
            offTaskButton_2.style.padding = "0 7px";
            offTaskButton_2.style.lineHeight = "35px";
            offTaskButton_2.style.textAlign = "center";
            offTaskButton_2.style.border = "0";
            offDiv.appendChild(offTaskButton_2);

            document.getElementById('offTaskButton_SanitizeName').addEventListener('click', function() {
                var currentValue = document.getElementById('offlineName').value;
                document.getElementById('offlineName').value = currentValue.replace(/\%20/g, ' ') //Decoding spaces
                    .replace(/\%28/g, '(') //Decoding open parenthesis
                    .replace(/\%29/g, ')') //Decoding close parenthesis
                    .replace(/\%60/g, '`') //Decoding grave
                    .replace(/\%7E/g, '~') //Decoding tilde
                    .replace(/\%21/g, '!') //Decoding exclamation mark
                    .replace(/\%23/g, '#') //Decoding number sign
                    .replace(/\%24/g, '$') //Decoding dollar sign
                    .replace(/\%25/g, '%') //Decoding percent sign
                    .replace(/\%5E/g, '^') //Decoding circumflex
                    .replace(/\%26/g, '&') //Decoding ampersand
                    .replace(/\%3D/g, '=') //Decoding equals sign
                    .replace(/\%2B/g, '+') //Decoding plus sign
                    .replace(/\%5C/g, '\\') //Decoding back slash
                    .replace(/\%7C/g, '|') //Decoding bar
                    .replace(/\%5B/g, '[') //Decoding left bracket
                    .replace(/\%5D/g, ']') //Decoding right bracket
                    .replace(/\%7B/g, '{') //Decoding left brace
                    .replace(/\%7D/g, '}') //Decoding right brace
                    .replace(/\%3B/g, ';') //Decoding semi-colon
                    .replace(/\%3A/g, ':') //Decoding colon
                    .replace(/\%27/g, '\'') //Decoding single quote
                    .replace(/\%22/g, '"') //Decoding double quote
                    .replace(/\%2C/g, ',') //Decoding comma
                    .replace(/\%3C/g, '<') //Decoding less than
                    .replace(/\%3E/g, '>') //Decoding greater than
                    .replace(/\%3F/g, '?') //Decoding question mark
                ;
            });
        }, 100);
    });
});