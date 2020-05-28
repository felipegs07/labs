const functionX = () => {
  console.log('Do X thing');
}

const functionY = () => {
  console.log('Do Y thing');
}

const functionW = () => {
  console.log('Do W thing');
}


const strategies = {
  x: functionX,
  y: functionY,
  w: functionW
}

const doSomething = (strategyOption) => {
  strategies[strategyOption] ? strategies[strategyOption]() : console.log('Error');
}

doSomething('x');
doSomething('y');
doSomething('w');
doSomething('djcnd');