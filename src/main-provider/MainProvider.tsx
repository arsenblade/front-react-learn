import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/screen/Header/Header';
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
        <QueryClientProvider client={queryClient}>
          <Header Auth={true}/>
          {children}
          <MyToastContainer />
          <AppRouter />
        </QueryClientProvider>
    </BrowserRouter>
  )
}

export default MainProvider