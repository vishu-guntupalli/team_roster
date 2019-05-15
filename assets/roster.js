$(document).ready(function(){
    document.getElementById("submitButton").onclick = function(){
        var studName = document.getElementById('rosterInput').value;
        console.log(studName);
        
        var newStudentLine = $("<li>");
        newStudentLine.text(studName);
        $('#rosterList').append(newStudentLine);
        newStudentLine.addClass("list-group-item")

    }
});