import { Topic } from "../../domain/model/Topic";

export class TopicMap{
	
	// Map the TopicRequest to Topic
	static mapToTopic(request: TopicDTO): Topic{
		const topic = new Topic(request.subject, request.description, request.startAt, request.endAt);
		return topic;
	}

	// Map the Topic to TopicDTO
	static mapToDTO(topic: Topic): TopicDTO{
		const topicDTO = {
			id: topic.uid,
			subject: topic.subject,
			description: topic.description,
			startAt: topic.startAt,
			endAt: topic.endAt,
			subTopics: topic.subTopics.map(subTopic => this.mapToDTO(subTopic))
		}
		return topicDTO;
	}
}