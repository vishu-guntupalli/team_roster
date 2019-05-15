$(document).ready(function () {

    var addedStudents = [];

    document.getElementById("submitButton").onclick = function () {
        var studName = document.getElementById('rosterInput').value;
        if ((addedStudents.indexOf(studName) === -1)) {
            console.log(studName);

            var newStudentLine = $("<li>");
            newStudentLine.text(studName);
            $('#rosterList').append(newStudentLine);
            newStudentLine.addClass("list-group-item " + studName);

            var studentRemoveButton = $("<button>");
            studentRemoveButton.text("Remove");
            studentRemoveButton.addClass("btn btn-danger removeButton");
            studentRemoveButton.attr("style", "float:right");
            studentRemoveButton.attr("studName", studName);
            newStudentLine.append(studentRemoveButton);

            $("#rosterInput").val("");

            addedStudents.push(studName);
        }
        else {
            alert("This student is already present");
        }

        $(".removeButton").on('click', function () {
            var sureToDelete = confirm("Do you really want to delete the " + studName + " ?");
            if (sureToDelete) {
                $('.' + $(this).attr('studName')).remove();
                addedStudents.splice(addedStudents.indexOf(this.studName), 1);
            }
        });

    }

    $("#helloButton").on('click',function(){
        for(var i=0; i<addedStudents.length; i++) {
            alert("Hello "+addedStudents[i]);
        }
    });

});