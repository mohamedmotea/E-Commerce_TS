import { PersistGate } from 'redux-persist/integration/react'
import {store,persist} from './store/store'
import AppRoutes from './routes/AppRoutes';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './services/axiosApi'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider store={store}>
  <PersistGate loading={null} persistor={persist}>
  <AppRoutes/>
  </PersistGate>
  </Provider>
)
