import { ComponentType } from "react";
import AdminCreateTopicPage from "../pages/Admin/AdminCreateTopic";
import AdminStatisticsPage from "../pages/Admin/AdminStatistics";
import LoginPage from "../pages/Auth/login";
import RegistrationPage from "../pages/Auth/registration";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/Profile/Profile";
import TopicReactPage from "../pages/TopicsReact/TopicReact/TopicReact";
import TopicsReactPage from "../pages/TopicsReact/TopicsReact";
import TopicTestPage from "../pages/TopicsReact/TopicTest/TopicTest";


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
  TOPIC_TEST_ROUTE = '/topics/test/:idTest',
  MANAGE_STATISTICS_ROUTE = '/manage/statistics',
  MANAGE_CREATE_TOPIC_ROUTE = '/manage/create/topic'
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
  {
    path: Routes.TOPIC_TEST_ROUTE,
    Component: TopicTestPage
  },
]

export const adminRoutes: IRoute[] = [
  {
    path: Routes.MANAGE_STATISTICS_ROUTE,
    Component: AdminStatisticsPage
  },
  {
    path: Routes.MANAGE_CREATE_TOPIC_ROUTE,
    Component: AdminCreateTopicPage
  },
]

