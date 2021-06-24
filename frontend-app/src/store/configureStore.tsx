
import {applyMiddleware, createStore, Store} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga'
import rootReducer from "../reducer/reducer";
import IInitialState from "../state/InitialState";
import rootSaga from "../saga/rootsaga";
const sagaMiddleWare  = createSagaMiddleware();

export default function configureStore (initialState : IInitialState) : Store<any> {
//Store<any>
    const store : any = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                immutableStateInvariantMiddleware(),
                sagaMiddleWare
            )),
        );

    sagaMiddleWare.run(rootSaga);

    return store;
}
