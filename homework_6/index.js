/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.type = "Cat";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.type = "Dog";
}
//var animals = [new Cat(), new Dog(), new Bird()];

$(document).ready(function() {
// get the savedAnimal in local storage if one exists
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  //use a boolean to keep track of whether you have saved an animal
  var hasSavedAnimal = false;

  //check if the saved animal exists in local storage
  if (animal === null) 
  {
    //if there is no saved animal, the button should display the Save Animal text
    $("#button-storage").text("Save Animal");

    //if there is no saved animal, we generate one
    animal = generateRandomAnimal();
  } 
  else 
  {
    //if there is a saved animal, the button should display Clear Animal text
    $("#button-storage").text("Clear Animal");

    //change the boolean to note that this animal has been saved
    hasSavedAnimal = true;
  };

  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

  $("Qty-1").click(function(){
      Qty = 1;
      $(".item-picture-detail").attr("src", "i/01-Original.jpg");
      //$(".item-price").text("$2.99");
      $(this).addClass("Border");
      $(this).siblings().removeClass("Border");
  });
  
  $("Qty-3").click(function(){
      Qty = 3;
      $(".item-picture-detail").attr("src", "i/01-Original.jpg");
      //$(".item-price").text("$2.99");
      $(this).addClass("Border");
      $(this).siblings().removeClass("Border");
  });



});