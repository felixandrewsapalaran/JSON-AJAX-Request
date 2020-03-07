var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4){
    var employees = JSON.parse(xhr.responseText);
    //build html for our widget
    var statusHTML = '<ul class="bulleted">';
    //loop to run through the list of employees
    for (var i = 0; i < employees.length; i += 1){
      //get each item in the employee list using the counter i
      //check if the employee is in the office 
      if (employees[i].inoffice === true){
        //keeps adding li tag
        statusHTML += '<li class = "in">';
      } else {
        //if employee is not in the office
        statusHTML += '<li class = "out">';
      }
      //add the name is close the li tag
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    //close ul tag
    statusHTML += '</ul>';
    //inject html into the page
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();


