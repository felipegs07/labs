const Computer = {
  turnOn(){
    return 'on';
  },
  turnOff(){
    return 'off';
  },
  standBy(){
    return 'standby';
  }
};

const myOwnComputer = Object.create(Computer);

console.log(myOwnComputer.__proto__ === Computer);