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
        case '#Documentation':
          $("#body").text("Use another apiary endpoint to create a blog");
        break;
        case '#Example':
          $("#body").text("Blank");
        break;
        case '#page5':
          $("#body").text("empty");
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
                    {"title":"Documentation", "href": "Documentation"},
                    {"title":"Example","href": "Example"},
                    {"title":"page5", "href": "page5"}
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
