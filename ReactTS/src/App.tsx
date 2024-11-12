import React from 'react'
import PropsApp from './Components/PropsPassing/PropsApp'
import BasicUseState from './Components/UseState/BasicUseState'
import Form from './Components/ReactFormTS/Form'
import ReactFormAssign from './Components/ReactFormTS/ReactFormAssign'
import ContextAPI from './Components/ContextAPI/ContextAPI'
import { MyContextProvider } from './Components/ContextAPI/context/Mycontext'
import CountContextProvider from './Components/ContextAPI/context/CountContext'
import ContextAPI2 from './Components/ContextAPI/ContextAPI2'
import Redux from './Components/Redux/Redux'
import Reducer from './Components/Reducers/Reducer'
import { Provider } from 'react-redux'
import store from './Components/Redux/Store/store'

const App = () => {
  return (
    <div>
      {/* <PropsApp/> */}
      {/* <BasicUseState/> */}
      {/* <Form/> */}
      {/* <ReactFormAssign/> */}
      {/* <MyContextProvider>
        <ContextAPI />
      </MyContextProvider> */}
      {/* <CountContextProvider>
        <ContextAPI2/>
      </CountContextProvider> */}

      {/* <Reducer/> */}

      <Provider store={store}>
        <Redux />
      </Provider>
    </div>
  );
}

export default App