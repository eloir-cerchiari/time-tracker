import { Topic } from "../model/Topic";

export interface TopicRepositoryInterface{
	
	create(topic: Topic): Topic;
	update(topic: Topic): Topic;
	delete(topic: Topic): void;
	findAll(): Topic[];
	findByUid(uid: string): Topic;
	
}