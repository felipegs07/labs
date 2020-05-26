class Calculator {
  constructor(initialValue = 0){
    this.value = initialValue;
  }

  add(value){
    this.value += value;
    return this.value;
  }
  subtract(value){
    this.value -= value;
    return this.value;
  }
  multiply(value){
    this.value *= value;
    return this.value;
  }
  devide(value){
    this.value /= value;
    return this.value;
  }
}

class Command {
  constructor(subject){
    this._subject = subject;
    this.commandsExecuted = [];
  }

  execute(command, param = 0){
    this.commandsExecuted.push(command);
    return this._subject[command](param);
  }
}

const commander = new Command(new Calculator);
commander.execute('add', 10);
commander.execute('subtract', 5);
commander.execute('multiply', 2);
commander.execute('devide', 3);

console.log(commander.commandsExecuted);