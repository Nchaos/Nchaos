    
Parse.initialize("c3dvBU5D21YhCFsIX0EbLwfxxNUPpx4cGZ7PR5ug", "7hevMe1VFponFzUWhtobIrvTOLPxWSp0CICGDwgP");

function testPostNewSubject(name, Grade){  
    alert("Assignment 7: testPostNewSubject function called");
    console.log("testPostNewSubject output");  
    
    var NewSubject = Parse.Object.extend("Subject");
    var newSubject = new NewSubject();
    newSubject.set("name", name);
    newSubject.set("Grade", Grade);
    newSubject.save(null, {
      success: function(newSubject) {
        console.log('New subject created with id: ' + newSubject.id);
      },
      error: function(newSubject, error) {
        console.log('Failed to create new Subject ' + error.message);
    }
    });
}

//testPostNewSubject("math", 100);

function testGetSubject(ID){
    alert("Assignment 7: testGetSubject function called");
    console.log("testGetSubject output");  

    var name = Parse.Object.extend("Subject");
    var query = new Parse.Query(name);
    query.get(ID, {
    success: function(pic) {
      console.log("Success in retireving subject");
      console.log(query.attributes);
    },
    error: function(object, error) {
      console.log('Failed to create new object, with error code: ' + error.message);
    }
  });
}

//testGetSubject("qTcgvz6AER");

function testGetCollectionOfSubjects() {
  alert("Assignment 7: testGetCollectionOfSubjects function called. Look in console for output");
  console.log("testGetCollectionOfSubjects output");
  
  var Subject = Parse.Object.extend("Subject");
  var subjectCollection = Parse.Collection.extend({
    model: Subject
  });
  var collection = new subjectCollection();

  collection.fetch({
    success: function(collection) {
      console.log("Success retreiving collection of Subjects");
      collection.each(function(object) {
        console.warn(object.attributes);
      });
    },
    error: function(collection, error) {
      console.log("Error retreiving collection of Subjects");
    }
  });
}

//testGetCollectionOfSubjects();

function testUpdateSubject(ID, newName, newGrade) {

  alert("Assignment 7: testUpdateSubject function called. Look in console for output");
  console.log("testUpdateSubject");
  console.log("Initial name of subject: " + name);
  var Subject = Parse.Object.extend("Subject");
  var subject = new Subject();
  subject.set("name", newName);
  subject.set("Grade", newGrade);
  subject.save(null, {
    success: function(subject) {
      console.log('New subject created with objectId: ' + subject.id);
      subject.set("title", "UPDATED TITLE");
      subject.save();
      console.log("Updated name of subject: " + subject.attributes.name);
    },
    error: function(subject, error) {
      console.log('Failed to create new subject, with error code: ' + error.message);
    }
  });
}

//testUpdateSubject("qTcgvz6AER", "English", 90)

function testDeleteSubject(ID) {
  alert("Assignment 7: testDeleteSubject function called. Look in console for output");
  console.log("testDeleteSubject output");

  var Subject = Parse.Object.extend("Subject");
  var subject = new Subject();
  var query = new Parse.Query(Subject);

  query.get(ID, {
    success: function(subject) {
      console.log("Sucess in retireving subject, begin deleting it...");
      subject.destroy({
        success: function(subject) {
          alert("Success in deleting subject from Parse");
          console.log("Subject was successfully deleted from Parse");
        },
        error: function(subject, error) {
          console.log("Subject was not deleted from parse. Error: " + error);
        }
      });
    },
    error: function(subject, error){
      console.log("Failure to retireve subject, with error code: " + error.message);
    }
  });
}

//testDeleteSubject("qTcgvz6AER");

// $( document ).ready( function() {

//   $('#signUpForm').submit( function(event) {
//     event.preventDefault();
//   })

//     var username = document.getElementsByName("signupUsername");
//     var email = document.getElementsByName("signupEmail");
//     var password = document.getElementsByName("signupPassword");
//     // console.log(username);
//     // console.log(email)
//     // console.log(password);

//     var user = new Parse.User();
//     user.set("username", username.value);
//     user.set("password", password.value);
//     user.set("email", email.value);
  
//     user.signUp(null, {
//       success: function(user) {
//         // Hooray! Let them use the app now.
//       },
//       error: function(user, error) {
//         // Show the error message somewhere and let the user try again.
//       alert("Error: " + error.code + " " + error.message);
//       }
//     });


// });

function testPostUserToParse(username, password, email) {

  alert("Assignment 7: testPostToParse function called. Look in console for output");
  console.log("testPostToParse output");

  
  var user = new Parse.User();
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);
  
  user.save(null, {
    success: function(user) {
      console.log('New object created with objectId: ' + user.id);
    },
    error: function(user, error) {
      console.log('Failed to create new object, with error code: ' + error.message);
    }
  });

}

$(document).ready(function(){
  $('#signUpForm').submit( function(event) {

    // testPostUserToParse($("#signupUsername").val() , $("#signupPassword").val() $("#signupEmail").val(), {
    //         success: function(user) {
    //     alert("Success!!!");
    //     // redirect to main
    //     //window.location.replace("admin.html");
    //   },
    //   error: function(user, error) {
    //     // Show the error message somewhere and let the user try again.
    //     alert("Error: " + error.code + " " + error.message);
    //   }
    // });
    testPostUserToParse($("#signupUsername").val() , $("#signupPassword").val() $("#signupEmail").val());

  })
});
//testPostUserToParse("nchaos", "password", "nhchao@smu.edu");


$( document ).ready( function() {

  $("#loginForm").submit( function(event) {
    event.preventDefault();
    // Parse Login
    Parse.User.logIn( $("#signInUsername").val() , $("#signInPassword").val(), {
      success: function(user) {
        alert("Success!!!");
        // redirect to main
        window.location.replace("admin.html");
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }); // end of login function
});

