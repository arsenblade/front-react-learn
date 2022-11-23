import { useMemo } from "react"
import { useQuery } from "react-query"
import { topicService } from "../../../service/topics/topics.service"
import { MyToast } from "../../ui/MyToast/MyToast"


export const useTopicsReact = () => {
  const {isLoading, data} = useQuery(['all topics'], () => 
  topicService.getAll(), {
    onError: () => {
      MyToast('Error loading topics', false)
    }
  })

  return useMemo(() => ({
    data: data?.data,
    isLoading
  }), [data?.data, isLoading])
}