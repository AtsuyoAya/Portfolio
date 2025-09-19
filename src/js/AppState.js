import { makeAutoObservable } from "mobx";

class AppState {

    constructor() {

        this.init()

        makeAutoObservable(this);
    }

    init() {

    }




}

export default new AppState();