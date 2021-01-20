(function(win, doc) {

    'use strict'

    // Header elements

    var titleFrame = doc.querySelector(".title__frame");
    var themeOutline = doc.querySelector(".theme__outline");


    // Utility functions

    var saveLocal = function(key, value) {
        if (win.localStorage) {
            win.localStorage.setItem(key, JSON.stringify(value));
        };
    };

    var restoreLocal = function(key) {
        if (win.localStorage && win.localStorage.getItem(key)) {
            return JSON.parse(win.localStorage.getItem(key));
        };
    };

    var removeLocal = function(key) {
        if (win.localStorage && win.localStorage.getItem(key)) {
            localStorage.removeItem(key);
        };
    };


    // on load check theme set & change if dark
    if (restoreLocal("Settings") && restoreLocal("Settings").theme === "dark") {
        doc.body.classList.add("dark");
    };

    // toggle theme...
    var toggleTheme = function() {
        doc.body.classList.toggle("dark");
        var theme = doc.body.classList.contains("dark") ? "dark" : "light";
        saveLocal("Settings", { theme: theme });
    };

    // ... on click
    themeOutline.addEventListener("click", function() {
        toggleTheme();
    });

    // ... on keydown
    themeOutline.addEventListener("keydown", function(event) {
        if (event.keyCode == 13 || event.keyCode == 32) {
            event.preventDefault();
            toggleTheme();
        };
    });

})(window, document)
