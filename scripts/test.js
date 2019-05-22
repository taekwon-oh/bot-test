module.exports = function (robot) {

  robot.respond(/つかれた/i, function(msg) {
    return msg.send("お疲れ様！");
  });

};
