let count = 0;
let buttonCreature = {
    name: "Ladris",
    species: "Galactic creature",
    favoriteFood: "Pizza",
    moods: ["sleepy", "joyful", "romantic", "energetic", "reflective", "humorous"]
}

$("#needy-button").click(function (){
    count = count + 1;

    let arrayPosition = count - 1;

    let currentMood = buttonCreature.moods[arrayPosition];

    
    let message = "<p>My name is " + buttonCreature.name + ".</p>";
    message = message + "<p>My current mood is " + currentMood + ".</p>";
    message = message + "<p>I am an " + buttonCreature.species + ".</p>";
    message = message + "<p>My favorite food is " + buttonCreature.favoriteFood + ".</p>";

    $("#output").html(message);

    console.log(count);
    console.log(arrayPosition);
    console.log(currentMood);
    

});

