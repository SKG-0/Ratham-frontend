//Event emitter class for setting events
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  emit(eventName, data) {
    const eventListeners = this.listeners[eventName];
    if (eventListeners) {
      eventListeners.forEach((listener) => listener(data));
    }
  }
}

export default new EventEmitter();
