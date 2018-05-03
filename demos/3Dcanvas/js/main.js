var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    ballCount = 10,
    ballArr = [],
    xCenter = canvas.width / 2,
    yCenter = canvas.height / 2,
    focalLength = 120,
    angleY = 0.04;

function rotateY(ball, angleY) {
    var cosy = Math.cos(angleY),
        siny = Math.sin(angleY),
        x1 = ball.xPos * cosy - ball.zPos * siny,
        z1 = ball.zPos * cosy + ball.xPos * siny;
    ball.xPos = x1;
    ball.zPos = z1;

    var scale = focalLength / (focalLength + ball.zPos);
    ball.x = xCenter + ball.xPos * scale;
    ball.y = yCenter + ball.yPos * scale;
    ball.r = ball.R * scale;
    ball.alpha = scale;
}

function draw(angleY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < ballCount; i++) {
        rotateY(ballArr[i], angleY);
        ballArr[i].draw(ctx);
    }
}

function animate() {
    draw(angleY);
    requestAnimationFrame(animate);
}

//初始化小球
for (var i = 0; i < ballCount; i++) {
    var options = {};
    options.R = 10 + 10 * Math.random();
    options.xPos = 200 * Math.random() - 100;
    options.yPos = 100 * Math.random() - 50;
    options.zPos = 20 * Math.random() - 10;
    var ball = new Ball(options);
    ballArr.push(ball);
}

requestAnimationFrame(animate);

