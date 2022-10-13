import { InMemoryTopicRepository } from "src/lib/core/infra/repo/in-memory-topic-repository";
import { Topic } from "../../domain/model/Topic";

describe('Topic Repository', () => {


	const dataTermino = new Date();
	dataTermino.setDate(dataTermino.getDate() + 1);

	it('precisa criar uma instancia de TopicRepository', () => {
		expect(new InMemoryTopicRepository()).toBeDefined();
	});

	it('precisa gerar um UID', () => {
		const topicrepo = new InMemoryTopicRepository();
		const topic = new Topic('Teste', 'Descrição', new Date(), null);
		
		topicrepo.create(topic);
		expect(topic.uid.length).toBeGreaterThan(1);
		
	});

	it('precisa retornar um topic pelo id', () => {
		const topicrepo = new InMemoryTopicRepository();
		const topic = new Topic('Teste', 'Descrição', new Date(), null);

		topicrepo.create(topic);
		
		const newTopic = topicrepo.findByUid(topic.uid);

		expect(newTopic).toBeDefined();
	});

	it('precisa retornar um erro quando não encontrar o topic pelo id', () => {
		const topicrepo = new InMemoryTopicRepository();
		const topic = new Topic('Teste', 'Descrição', new Date(), null);

		topicrepo.create(topic);

		expect(() => topicrepo.findByUid('123')).toThrowError('Topic não encontrado');
	});

	it('precisa retornar todos os topic', () => {
		const topicrepo = new InMemoryTopicRepository();
		const topic = new Topic('Teste', 'Descrição', new Date(), null);

		topicrepo.create(topic);

		const topicList = topicrepo.findAll();

		expect(topicList.length).toBeGreaterThan(0);
	})

	it('precisa retornar um erro quando não encontrar todos os topic', () => {
		const topicrepo = new InMemoryTopicRepository();

		expect(() => topicrepo.findAll()).toThrowError('Nenhum topic encontrado');
	});

	it('precisa atualizar um topic', () => {
		const topicrepo = new InMemoryTopicRepository();
		const topic = new Topic('Teste', 'Descrição', new Date(), null);

		topicrepo.create(topic);

		const newTopic = new Topic('Teste', 'Descrição', new Date(), dataTermino);

		newTopic.uid = topic.uid;

		const updatedTopic = topicrepo.update(newTopic);

		expect(updatedTopic.endAt).toEqual(dataTermino);
	});

	it('precisa retornar um erro quando não encontrar o topic para atualizar', () => {
		const topicrepo = new InMemoryTopicRepository();
		const topic = new Topic('Teste', 'Descrição', new Date(), null);

		topicrepo.create(topic);

		const newTopic = new Topic('Teste', 'Descrição', new Date(), dataTermino);

		newTopic.uid = '123';

		expect(() => topicrepo.update(newTopic)).toThrowError('Topic não encontrado');
	});

	it('precisa deletar um topic', () => {
		const topicrepo = new InMemoryTopicRepository();
		const topic = new Topic('Teste', 'Descrição', new Date(), null);

		topicrepo.create(topic);
		
		topicrepo.delete(topic);

		expect(() => topicrepo.findByUid(topic.uid)).toThrowError('Topic não encontrado');
	});



	it('precisa retornar um erro quando não encontrar o topic para deletar', () => {
		const topicrepo = new InMemoryTopicRepository();
		const topic = new Topic('Teste', 'Descrição', new Date(), null);

		topicrepo.create(topic);

		const newTopic = new Topic('Teste', 'Descrição', new Date(), dataTermino);

		newTopic.uid = '123';

		expect(() => topicrepo.delete(newTopic)).toThrowError('Topic não encontrado');
	});


});