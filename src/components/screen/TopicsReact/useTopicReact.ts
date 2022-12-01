import { useMemo } from "react"
import { useQuery } from "react-query"
import { topicService } from "../../../service/topics/topics.service"
import { userService } from "../../../service/user/user.service"
import { MyToast } from "../../ui/MyToast/MyToast"


export const useTopicsReact = (id: string) => {
  const {isLoading: topicsLoading, data: topicsData} = useQuery(['all topics'], () => 
  topicService.getAll(), {
    onError: () => {
      MyToast('Error loading topics', false)
    }
  })

  const {isLoading: userLoading, data: userData} = useQuery(['current user for topic'], () => 
  userService.getById(id))


  return useMemo(() => ({
    topicsData: topicsData?.data,
    topicsLoading,
    userData: userData?.data,
    userLoading
  }), [topicsData?.data, topicsLoading, userData, userLoading])
}