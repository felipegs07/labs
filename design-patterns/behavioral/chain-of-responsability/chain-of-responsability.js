class Calculator {
  constructor(initialValue = 0){
    this.value = initialValue;
  }

  add(value){
    this.value += value;
    return this;
  }
  subtract(value){
    this.value -= value;
    return this;
  }
  showResult(){
    console.log(this.value);
  }
}

const calc1 = new Calculator(10);
calc1.add(10).add(10).add(20).subtract(45).showResult();

const calc2 = new Calculator();
calc2.add(10).add(10).add(20).subtract(45).showResult();