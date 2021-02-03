function wakeDog(dogName, dogBreed) {
    const wake = `Wake ${dogName} the ${dogBreed}`;
    console.log(wake);
    return wake;
}

function leashDog(dogName, dogBreed) {
    const leash = `Leash ${dogName} the ${dogBreed}`;
    console.log(leash);
    return leash;
}

function walkToPark(dogName, dogBreed) {
    const walk = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walk);
    return walk;
}

function throwFrisbee(dogName, dogBreed) {
    const frisbree = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(frisbree);
    return frisbree;
}

function walkHome(dogName, dogBreed) {
    const home = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(home);
    return home;
}

function unleashDog(dogName, dogBreed) {
    const unleash = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleash);
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