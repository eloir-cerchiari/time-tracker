import { Topic } from "src/lib/core/domain/model/Topic";
import { TopicMap } from "../mapper/topic-map";
import { InMemoryTopicRepository } from "../repo/in-memory-topic-repository";

export class CreateTopicUseCase{

	handle(request: createTopicRequest): Topic{

		const topicrepo = new InMemoryTopicRepository();
		const response = topicrepo.create(TopicMap.mapToTopic(request));

		return response;
	}
	
}