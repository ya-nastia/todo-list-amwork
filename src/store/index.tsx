import { makeAutoObservable, runInAction } from "mobx";
import { ITodo } from "../App";
import axios from "axios";
import { createContext, useContext } from "react";

class AppStore {
    todos: ITodo[] = [];
    isLoading = false;
    isError = false;

    constructor() {
        makeAutoObservable(this);
    }

    async getTodos() {
        this.isLoading = true;
        this.isError = false;

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

            runInAction(() => {
                this.todos = response.data;
                this.isLoading = false;
            });
        } catch {
            runInAction(() => {
                this.todos = [];
                this.isLoading = false;
                this.isError = true;
            });
        }
    }
}

const appStore = new AppStore();

export const StoreContext = createContext<AppStore>({} as AppStore);
export const StoreProvider = StoreContext.Provider;

export const useStore = (): AppStore => useContext(StoreContext);

export default appStore;