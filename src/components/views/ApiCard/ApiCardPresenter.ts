import { ApiCardFunction } from "./ApiCard";

class ApiCardPresenter {
    private _compFunc: ApiCardFunction;

    constructor(func: ApiCardFunction) {
        this._compFunc = func;
        console.log("constructed");
    }

    getApiList = () => {
        return "https://jsonplaceholder.typicode.com/todos/1";
    }
}

export default ApiCardPresenter;