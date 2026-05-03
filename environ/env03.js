

let environmentElements = {
    Weather: "The weather here is unusual, ranging from extreme thunder storms to bright sunny skies. It's unpredictable, and no one knows why.",
    Orbs: "If you find yourself lost, look for an orb. They will guide you, reassure you, and will be no wrong.",
    Sounds: "The sounds here aren't what you would expect. With the smallest creatures being loud, and the larger ones quiet as a mouse.",
    People: "Watch out for the people, for you don't know who to trust. Only listen to the orbs.",

}

$("#Weather").click(function (){
    
    
    let message = environmentElements.Weather;

    $("#output").html(message);
});
$("#Orbs").click(function (){
    
    
    let message = environmentElements.Orbs;

    $("#output").html(message);
});
$("#Sound").click(function (){
    
    
    let message = environmentElements.Sounds;

    $("#output").html(message);
});
$("#People").click(function (){
    
    
    let message = environmentElements.People;

    $("#output").html(message);
});