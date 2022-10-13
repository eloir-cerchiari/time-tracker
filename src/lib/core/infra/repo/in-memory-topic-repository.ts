import { Topic } from "src/lib/core/domain/model/Topic";
import { TopicRepositoryInterface } from "src/lib/core/domain/repo/topic-repository-interface";

export class InMemoryTopicRepository implements TopicRepositoryInterface{

	private database: Topic[] = [];

	create(topic: Topic): Topic {
		if(topic.uid && topic.uid.length > 0){
			console.log(topic);
			return this.update(topic);
		}

		topic.uid = this.generateUid();
		this.database.push(topic);
		
		return topic;
	}
	
	update(topic: Topic): Topic {
		
		const topicToUpdate = this.database.find(t => t.uid === topic.uid);
		
		if(!topicToUpdate){
			throw new Error('Topic não encontrado');
		}

		topicToUpdate.subject = topic.subject;
		topicToUpdate.description = topic.description;
		topicToUpdate.startAt = topic.startAt;
		topicToUpdate.endAt = topic.endAt;
		topicToUpdate.subTopics = topic.subTopics;

		return topicToUpdate;
	}

	delete(topic: Topic) {

		const index = this.database.findIndex(t => t.uid === topic.uid);

		if(index === -1){
			throw new Error('Topic não encontrado');
		}
		
		this.database.splice(index, 1);
	}

	findAll(): Topic[] {
		if(this.database.length === 0){
			throw new Error('Nenhum topic encontrado');
		}
		return this.database;
	}

	findByUid(uid: string): Topic {
		const topic = this.database.find(t => t.uid === uid);

		if(!topic){
			throw new Error('Topic não encontrado');
		}

		return topic;
	}


	private generateUid(): string {
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}

	
	
}