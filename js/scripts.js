// what is the path to the JSON file?
const apiURL = "../hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);

    for (i = 0; i < myList.length; i++) {


//section
let sections = document.createElement("section")

//ion-icons

      //Image
    let myImageTag = document.createElement("img");
    myImageTag.src = myList [i].photo;
    myImageTag.alt = "Hotel"
//Fig Caption
    let myCaptionTag= document.createElement("figCaption");
    myCaptionTag.textContent = myList [i].name;
//Figure 
    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);
    
      //myFigureTag >>Image, Caption, Figure


//Address    
    let myAddressTag = document.createElement("p");
    myAddressTag.textContent = myList [i].address[0];
      

    let myAddressTag2 = document.createElement("p");
    myAddressTag2.textContent = myList [i].address[1];
    myAddressTag2.className = ("address2");
    let myAddressTag3 = document.createElement("p");
    myAddressTag3.textContent = myList [i].address[2];
    myAddressTag3.className = ("address3");
      //myAddressTag >> Address line 1, address line 2

      //ICONS
      let iconphone = document.createElement("i");

      let iconpin = document.createElement("i")
      iconpin.className = "icon ion-md-pin";

      

//Phone Numberx
let phones = document.createElement("p");
phones.textContent = myList [i].phone;
console.log(phones)




//Division
    let divisions = document.createElement("div");
    //divions.appendChild(ionIcon)
    //division > div Address

//Spanning
    let spans1 = document.createElement("span");
    let spans2 = document.createElement("span");
    spans1.appendChild(iconpin)
    spans1.appendChild(myAddressTag)
    spans1.appendChild(myAddressTag2)
    spans1.appendChild(myAddressTag3)

    spans2.appendChild(iconphone)
    spans2.appendChild(phones)

    iconphone.className = "icon ion-md-call";

      divisions.appendChild(spans1) 
      divisions.appendChild(spans2) 

    //span >> span




//BRING IT ALL TOGETHER
sections.appendChild(myFigureTag)
sections.appendChild(divisions)
//Appended Cards

document.getElementById('myCards').appendChild(sections);



      //place icon here


//place phone# here
    console.log(myCards)
    }
    
}); //end of "then" fat arrow function
