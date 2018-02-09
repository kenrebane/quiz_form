function submitAnswers() {
  var total = 5;
  var score = 0;

  //Get user input
  var q1 = document.forms["quiz"]["q1"].value;
  var q2 = document.forms["quiz"]["q2"].value;
  var q3 = document.forms["quiz"]["q3"].value;
  var q4 = document.forms["quiz"]["q4"].value;
  var q5 = document.forms["quiz"]["q5"].value;

  //Input validation
  for ( var i = 1; i <= total; i++ ) {
    var q = eval("q"+i);
    console.log(q, i);
    if ( q === null || q === "" ) {
      alert("Question " + i + " not answered");
      return false;
    }
  }

  //Set correct answers
  var answers = ["b", "a", "d", "b", "d"];

  //Check for right answers
  for ( var i = 1; i <= total; i++ ) {
    var q = eval("q"+i);
    if ( q === answers[i-1]) {
      score++;
    }
  }

  //Display Results
  var results = document.getElementById("results");
  results.innerHTML = "<h3>You scored <span>" + score + "</span> out of <span>" + total + "</span>!";
  //alert("Results: " + score + " out of " + total);
  window.scrollTo(0, 0);
  return false;
}
