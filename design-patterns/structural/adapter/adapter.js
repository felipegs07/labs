//old class
class Message {
  constructor(receiver){
    this.receiver = receiver;
  }

  send(message, type){
    switch(type){
      case 'sms':
        console.log(`Sending SMS to ${this.receiver}. Message: ${message}`);
        break;
      case 'call':
        console.log(`Sending Call to ${this.receiver}. Message: ${message}`);
        break;
      default:
        console.log('Error: No message type defined.');
    }
  }
}

//new class
class newMessage {
  constructor(receiver){
    this.receiver = receiver;
  }

  sendSMS(message){
    console.log(`Sending SMS to ${this.receiver}. Message: ${message} with new API`);
  }

  sendCall(message){
    console.log(`Sending Call to ${this.receiver}. Message: ${message} with new API`);
  }
} 

//class that joins the 2 classes
class MessageAdapter {
  constructor(receiver){
    this.newMessageAPI = new newMessage(receiver);
  }

  send(message, type){
    switch(type){
      case 'sms':
        this.newMessageAPI.sendSMS(message);
        break;
      case 'call':
        this.newMessageAPI.sendCall(message);
        break;
      default:
        console.log('Error: No message type defined.');
    }
  }
}

const message = new MessageAdapter('mom');
message.send('Hello', 'sms');


