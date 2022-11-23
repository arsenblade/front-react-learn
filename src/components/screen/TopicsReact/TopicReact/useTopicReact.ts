import { useMemo } from "react"
import { useQuery } from "react-query"
import { topicService } from "../../../../service/topics/topics.service"
import { MyToast } from "../../../ui/MyToast/MyToast"


export const useTopicReact = (id: string) => {
  const {isLoading: isLoadingCurrentTopic, data: currentTopic} = useQuery(['current topic', id], () => 
  topicService.getById(id), {
    onError: () => {
      MyToast('Не удалось загрузить тему', false)
    }
  })

  const {isLoading: isLoadingAllTopics, data: allTopics} = useQuery(['all topics'], () => 
  topicService.getAll())

  return useMemo(() => ({
    currentTopic: currentTopic?.data,
    allTopics: allTopics?.data,
    isLoadingCurrentTopic,
    isLoadingAllTopics
  }), [allTopics?.data, currentTopic?.data, isLoadingAllTopics, isLoadingCurrentTopic])
}