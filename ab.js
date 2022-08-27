counsellors = [
  {
      Name:"Bob",
      phone_number:1029384576,
      profession:"Architect",
      Time_slot:"3:30 to 5:30"
  },
  {
    Name:"Bob",
    phone_number:1029384576,
    profession:"architect",
    Time_slot:"3:30 to 5:30"
},
  {   
      Name:"Alice",
      phone_number: 1234567890,
      profession:"Engineer",
      Time_slot:"3:30 to 5:30"
  },
  {   
    Name:"Alice",
    phone_number: 1234567890,
    profession:"engineer",
    Time_slot:"3:30 to 5:30"
},
{
  Name:"Lol",
  phone_number: 124567890,
  profession:"dictator",
  Time_slot:"3:30 to 5:30"
},
  {
      Name:"Lol",
      phone_number: 124567890,
      profession:"Dictator",
      Time_slot:"3:30 to 5:30"
  }
]

let x = Math.floor((Math.random() * counsellors.length) + 0); 
var Name = document.getElementsByName('Name');
var Phone_Number = document.getElementsByName('Phone_Number');
var Pick_Slot = document.getElementsByName("Datetime");
var Counsellor_Name = document.getElementsByName("Counsellor_Name")




function Search(){
  var y= document.getElementById('search_profession').value;
  console.log(y);
  for(i=0;i<counsellors.length;i++){
      if (y==counsellors[i].profession) {
          document.getElementById('_Name').innerHTML=counsellors[i].Name;
          document.getElementById('_Phone-Number').innerHTML=counsellors[i].phone_number;
          document.getElementById('_profession').innerHTML=counsellors[i].profession;
          document.getElementById('_time_slot').innerHTML=counsellors[i].Time_slot;
          break;
      }
      else{
          document.getElementById('_Name').innerHTML="Not found";

      }
  }
}
