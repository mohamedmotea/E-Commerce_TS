import { combineReducers, configureStore } from "@reduxjs/toolkit"
import categoriesSlice from "./Categories/categoriesSlice"
import productsSlice from './Products/ProductsSlice';
import subCategoriesSlice from "./SubCategories/subCategoriesSlice";
import cartSlice from "./Cart/cartSlice";
import storage from 'redux-persist/lib/storage' 
import { persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

const cartPersistConfig = {
  key:'cart',
  storage,
  whitelist:['items']
}


const rootReducer = combineReducers(
  {categoriesSlice
    ,productsSlice
    ,subCategoriesSlice
    ,cartSlice: persistReducer(cartPersistConfig,cartSlice)
  })

const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[  FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER]
      }

    })
  
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


const persist = persistStore(store)
export  {store,persist}