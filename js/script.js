$(document).ready(function () {
    $("#button1").mouseenter(function() {
        $("#button1").removeClass("makeRed").addClass("makeBorder");
        $("#button1").mouseleave(function () {
            $("#button1").addClass("makeRed").removeClass("makeBorder");
        });
    });

    $("#button1").click(function() {
        $("#para1").slideToggle("medium");
    });

    $("#button2").mouseenter(function() {
        $("#button2").removeClass("makeRed").addClass("makeBorder");
        $("#button2").mouseleave(function () {
            $("#button2").addClass("makeRed").removeClass("makeBorder");
        });
    });

    $("#button2").click(function() {
        $("#para2").fadeToggle("medium");
    })

    $("#button3").mouseenter(function() {
        $("#button3").removeClass("makeRed").addClass("makeBorder");
        $("#button3").mouseleave(function () {
            $("#button3").addClass("makeRed").removeClass("makeBorder");
        })
    })

    $("#button3").click(function() {
        $("#para3").toggle("medium");
    })

    $("#button4").click(function() {
        $(this).next().slideToggle('slow')
    })

});