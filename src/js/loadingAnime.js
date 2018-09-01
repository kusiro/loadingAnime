import anime from 'animejs';
var lineAnime = new anime.timeline({
    loop: true,
});
var dotAnime = new anime.timeline({
    loop: true
})

var easIn = [.5, .2, .8, .5],
    easOut = [.2, .5, .5, .8],
    easInOut = [.5, 0, .5, 1];
lineAnime
    .add({
        targets: '.hexgon',
        clipPath: ["inset(51% 100% 51% 0)", "inset(0% 75% 51% 0)"],
        duration: 1000,
        easing: easIn,
        offset: 1200
    })
    .add({
        targets: '.hexgon',
        clipPath: ["inset(0% 75% 51% 0)", "inset(0% 25% 51% 0)"],
        duration: 1000,
        easing: easOut
    })

dotAnime
    .add({
        targets: '.dot',
        scale: [0, 1],
        duration: 1000,
        easing: easInOut,
    })
    .add({
        targets: '.dot',
        top: [265, 134.5],
        left: [232.5, 308.6],
        duration: 1000,
        easing: easIn,
        offset: '+=200'
    })
    .add({
        targets: '.dot',
        left: [308.6, 461],
        duration: 1000,
        easing: easOut
    })
