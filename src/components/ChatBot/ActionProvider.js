import { updateAge, updateName } from "../../redux/action";
import store from "../../redux/store";
import eventEmitter from "../../eventEmitter";
import {
  BOT_EXIT,
  ENTER_AGE,
  ENTER_NAME,
  HELLO,
} from "../../utilities/constants";

export default class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.dispatch = store.dispatch;
  }
  addMessageToState(message) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
  //handling Got it message
  handleGotIt(text) {
    const message = this.createClientMessage(text);
    this.addMessageToState(message);
    this.askName();
  }
  //handling default message if any option is not selected or a text is entered
  handleDefault() {
    const message = this.createChatBotMessage(HELLO);
    this.addMessageToState(message);
  }
  //handling the exit functionality with setting timer of 5 seconds and displaying on chatbot
  exit() {
    const message = this.createChatBotMessage(BOT_EXIT);
    this.addMessageToState(message);

    let val = 5;
    setInterval(() => {
      let text = this.createChatBotMessage(val.toString());
      this.addMessageToState(text);
      val -= 1;
    }, 1000);

    setTimeout(() => {
      eventEmitter.emit("handleExit");
    }, 6000);
  }
  //adding message to state
  askName() {
    this.setState((prevState) => ({ ...prevState, askName: true }));
    const message = this.createChatBotMessage(ENTER_NAME);
    this.addMessageToState(message);
  }
  //adding age to state
  askAge() {
    this.setState((prevState) => ({
      ...prevState,
      askAge: true,
    }));
    const message = this.createChatBotMessage(ENTER_AGE, {
      widget: "agedropdown",
    });

    this.addMessageToState(message);
  }
  //setting name
  handleName(name) {
    this.setState((prevState) => ({ ...prevState, askName: false, name }));
    this.dispatch(updateName(name));
    this.askAge();
  }
  //setting age
  handleAge(age) {
    const message = this.createClientMessage(age);
    this.addMessageToState(message);
    this.setState((prevState) => ({
      ...prevState,
      askAge: false,
      age,
    }));
    this.dispatch(updateAge(age));

    this.exit();
  }
}
