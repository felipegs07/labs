class JobBuilder {
  constructor(jobTitle, location){
    this.jobTitle = jobTitle;
    this.location = location;
  }
  setCompany(companyName){
    this.companyName = companyName;
    return this;
  }
  setSalary(salaryValue){
    this.salary = salaryValue;
    return this;
  }
  build(){
    return new Job(this.jobTitle, this.companyName, this.salary, this.location);
  }
}

class Job {
  constructor(jobTitle, companyName, salary, location){
    this.jobTitle = jobTitle;
    this.companyName = companyName;
    this.salary = salary;
    this.location = location;
  }

  publish(){
    console.log(`A new job offer from ${this.companyName} is oponed. 
      The job is to ${this.jobTitle}, with R$${this.salary} of salary in ${this.location}`
    );
  }
}

//INIT
const job = new JobBuilder('Frontend Engineer', 'Brazil')
  .setCompany('GitHub')
  .setSalary(10000)
  .build();

job.publish();