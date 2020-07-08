//conditionals menu links
const loggedOutLinks0=document.querySelector('.logged-out0');
const loggedOutLinks1=document.querySelector('.logged-out1');
const loggedOutLinks2=document.querySelector('.logged-out2');
const loggedInLinks1=document.querySelector('.logged-in1');
const loggedInLinks2=document.querySelector('.logged-in2');
const loggedInLinks3=document.querySelector('.logged-in3');
const setupUI = (user) => {
  if (user)
  {
    //toggle UI elements
    loggedInLinks1.style.display = 'block';
    loggedInLinks2.style.display = 'block';
    loggedInLinks3.style.display = 'block';
    loggedOutLinks0.style.display = 'none';
    loggedOutLinks1.style.display = 'none';
    loggedOutLinks2.style.display = 'none';
  }
  else
  {
    
    loggedInLinks1.style.display = 'none';
    loggedInLinks2.style.display = 'none';
    loggedInLinks3.style.display = 'none';
    loggedOutLinks0.style.display = 'block';
    loggedOutLinks1.style.display = 'block';
    loggedOutLinks2.style.display = 'block';
  }
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});