import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import MyToastContainer from '../components/ui/MyToast/MyToastContainer';
import AppRouter from '../router/AppRouter';
import { store } from '../store/store';


interface MainProviderProps {
  children: React.ReactNode
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const MainProvider:FC<MainProviderProps> = ({children}) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
          <MyToastContainer />
          <AppRouter />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default MainProvider