//Employee
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();


//Rooms
var xhrRoom = new XMLHttpRequest();
xhrRoom.onreadystatechange = function () {
  if(xhrRoom.readyState === 4 && xhrRoom.status === 200) {
    var rooms = JSON.parse(xhrRoom.responseText);
    var availabilityHTML = '<ul class="rooms">';
    for (var j = 0; j < rooms.length; j += 1) {
      if (rooms[j].available === true) {
        availabilityHTML += '<li class="empty">';
      }else{
        availabilityHTML += '<li class="full">'
      }
      availabilityHTML += rooms[j].room;
      availabilityHTML += '</li>';
    }
    availabilityHTML += '</ul>';
    document.getElementById('roomList').innerHTML = availabilityHTML;
  }
};

xhrRoom.open('GET','../data/rooms.json');
xhrRoom.send();