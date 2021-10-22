class StateControllerClass {
  state = {}

  set = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    }
    this.fire(this.state)
  }

  get = () => {
    return this.state
  }

  subscribers = []

  subscribeAll = (subsArr) => {
    for(const sub of subsArr) {
      const { fn, that } = sub;
      this.subscribe(fn, that);
    }
  }

  subscribe = (fn, that = null) => {
    this.subscribers.push({ fn, that })
  }
  
  fire = (data) => {
    this.subscribers.forEach(({ fn, that }) => {
      fn.call(that, data)
    })
  }
}

export default new StateControllerClass()
