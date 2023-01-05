PeterPan = 0;
Beatz = 0;

preload()
{
    loadSound(music.mp3);
    loadSound(music2.mp3);
}

setup()
{
    var canvas =  createCanvas(700,600);
    canvas.parent('canvas');

    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();

    hide();
}

draw()
{
    image()
}