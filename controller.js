function loadusers() {
$.get('users-list.mst', function(template) {
    $.getJSON(
        'http://private-f907e-testapi881.apiary-mock.com/Users', 
        {}, 
        function(json, textStatus) {
            var data = {"users":json};
            console.log(data);
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function loaduserById(id) {
$.get('users-detail.mst', function(template) {
    $.getJSON(
        'http://private-f907e-testapi881.apiary-mock.com/Users/id',
        {}, 
        function(json, textStatus) {
            var data = {"user":json};
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function createuser() {
$.get('users-list.mst', function(template) {
    $.getJSON(
        'http://private-f907e-testapi881.apiary-mock.com/Users', 
        {}, 
        function(json, textStatus) {
            var data = {"users":json};
            console.log(data);
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function hashAction(){
    var numberPattern = /users-\d+/g;
    var userId = location.hash.match( numberPattern );
    if (userId) {
        loaduserById(userId);
        return;
    }
    switch(location.hash) {
        case '#home':
          //do something
          $("#body").text("Keep track of your assignments and progress throughout the semester!");
        break;
        case '#users':
          //do something else
          loadusers();
        break;
        case '#About':
          $("#body").text("This website is design for users to keep track of they're progress throughtout their semester by calculating they're current grades using their syllabus for grade percentages and their earn grades on assignments");
        break;
        case '#New User':
          //Create a new user
          createuser();
        break;
        case '#Other':
          $("#body").text("Work in Progress!");
        break;
        default:
          location.hash = "home";
      }
}

$(function(){
    $("#body").text("");
    $.get('navigation.mst', function(template) {
    var data = {"title":"TEST TITLE", 
                "nav":[
                    {"title":"Home", "href":"home"},
                    {"title":"Users", "href": "users"},
                    {"title":"About", "href": "About"},
                    {"title":"New User", "href": "New User"},
                    {"title":"Other", "href": "Other"}
                    ]
                };
    var rendered = Mustache.render(template,data);
    $('#navigation').html(rendered);
    });
    window.onhashchange = function(){
      hashAction();
    };
    hashAction();
});
