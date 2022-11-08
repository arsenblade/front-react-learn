import { ComponentType } from "react";
import LoginPage from "../pages/Auth/login";
import RegistrationPage from "../pages/Auth/registration";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/Profile/Profile";
import TopicReactPage from "../pages/TopicsReact/TopicReact/TopicReact";
import TopicsReactPage from "../pages/TopicsReact/TopicsReact";


interface IRoute {
  path: string,
  Component: ComponentType
}

enum Routes {
  MAIN_ROUTE = '/',
  LOGIN_ROUTE = '/login',
  REGISTRATION_ROUTE = '/registration',
  PROFILE_ROUTE = '/profile',
  TOPICS_REACT_ROUTE = '/topics/react',
  TOPIC_REACT_ROUTE = '/topics/react/:id',
}

export const publicRoutes: IRoute[] = [
  {
    path: Routes.MAIN_ROUTE,
    Component: MainPage
  },
  {
    path: Routes.LOGIN_ROUTE,
    Component: LoginPage
  },
  {
    path: Routes.REGISTRATION_ROUTE,
    Component: RegistrationPage
  },
]

export const authRoutes: IRoute[] = [
  {
    path: Routes.MAIN_ROUTE,
    Component: MainPage
  },
  {
    path: Routes.PROFILE_ROUTE,
    Component: ProfilePage
  },
  {
    path: Routes.TOPICS_REACT_ROUTE,
    Component: TopicsReactPage
  },
  {
    path: Routes.TOPIC_REACT_ROUTE,
    Component: TopicReactPage
  },
]

