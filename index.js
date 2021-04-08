function wakeDog(dogName, dogBreed) {
    const wake = `Wake ${dogName} the ${dogBreed}`;
    return wake;
}

function leashDog(dogName, dogBreed) {
    const leash = `Leash ${dogName} the ${dogBreed}`;
    return leash;
}

function walkToPark(dogName, dogBreed) {
    const walk = `Walk to the park with ${dogName} the ${dogBreed}`;
    return walk;
}

function throwFrisbee(dogName, dogBreed) {
    const frisbree = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    return frisbree;
}

function walkHome(dogName, dogBreed) {
    const home = `Walk home with ${dogName} the ${dogBreed}`;
    return home;
}

function unleashDog(dogName, dogBreed) {
    const unleash = `Unleash ${dogName} the ${dogBreed}`;
    return unleash;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed){
    const activities = [];
    for(let i = 0; i < routine.length; i++) {
        activities.push(routine[i](dogName, dogBreed));
    }
    return activities;
}