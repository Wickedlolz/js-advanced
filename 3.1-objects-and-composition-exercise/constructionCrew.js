function constructionCrew(worker) {
    if (worker.dizziness == true) {
        let neededAmout = worker.weight * worker.experience * 0.1;
        worker.levelOfHydrated += neededAmout;
        worker.dizziness = false;
    }

    return worker;
}

console.log(
    constructionCrew({
        weight: 80,
        experience: 1,
        levelOfHydrated: 0,
        dizziness: true,
    })
);
