'use strict';
module.exports = exports = {};


exports.nickCommand = function(message, socket) {
  console.log('username: ' + socket.username);
  socket.username = message.split(' ').slice(1).join(' ').trim();
  socket.write(`you are now ${socket.username}\n`);

};

exports.dmCommand = function(message, array){
 // "/dm user_30 hello how are you"
  let toUsername = message.split(' ')[1];
  let content = message.split(' ').slice(2).join(' ').trim();
  array.forEach(s => {
    if (s.username === toUsername)
      s.write(content);
  });
};

exports.users = function(array, socket){
  array.forEach(user => {
    socket.write(user.username + '\n');
  });
};


exports.trolololol = function (message, array) {
  let content = message.split(' ').slice(1).join(' ').trim();
  array.forEach(user => {
    for (var i = 0; i < 10; i++) {
      user.write(content + '\n');
    }
  });
};

exports.ban = function(message, array){
 // "/dm user_30 hello how are you"
  let toUsername = message.split(' ')[1].trim();
  console.log(toUsername);
  array.forEach(s => {
    console.log(s.username);
    if (s.username === toUsername)
      s.end(`${s.username} was removed`);
  });
};
