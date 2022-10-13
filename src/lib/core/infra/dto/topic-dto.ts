interface TopicDTO{
	id: string;
	subject: string;
	description: string;
	startAt: Date;
	endAt: Date | null;
	subTopics: TopicDTO[];

}

interface createTopicRequest{
	id: string;
	subject: string;
	description: string;
	startAt: Date;
	endAt: Date | null;
	subTopics: TopicDTO[];

}