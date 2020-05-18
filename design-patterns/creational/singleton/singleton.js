class Job {
  constructor(data){
    if(Job.exists){
      return Job.instance;
    }

    this._data = data;
    Job.instance = this;
    Job.exists = true;
    
    return this;
  }

  getJob(){
    return this._data;
  }

  setJob(data){
    this._data = data;
  }
}

const frontendJob = new Job('Frontend');
console.log('front obj', frontendJob);

const backendJob = new Job('Backend');
console.log('back obj', backendJob);

backendJob.setJob('DevOps');
console.log('front obj', frontendJob);
console.log('back obj', backendJob);