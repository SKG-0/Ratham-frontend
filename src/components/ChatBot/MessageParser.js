import { GOT_IT } from "../../utilities/constants";

class MessageParser {
  constructor(actions, props) {
    this.actions = actions;
    this.props = props;
  }
  //message parsing according to different inputs from input
  parse(message) {
    const lowercase = message.toLowerCase();
    if (lowercase === GOT_IT) {
      this.actions.handleGotIt(message);
    } else if (this.props.askName) {
      this.actions.handleName(message);
    } else if (!this.props.askName && !this.props.askAge) {
      this.actions.handleDefault();
    }
  }
}

export default MessageParser;
