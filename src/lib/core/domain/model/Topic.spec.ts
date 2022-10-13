import {Topic} from './Topic';

describe('Topic', () => {


	const dataInicio = new Date();
	const dataTermino = new Date();
	dataTermino.setDate(dataTermino.getDate() + 1);

	it('precisa criar uma instancia de Topic', () => {
		expect(new Topic('Teste', 'Descrição', new Date(), null)).toBeTruthy();
	});
	it('precisa criar uma instancia de Topic com data de termino posterior ao inicio', () => {
		expect(() => new Topic('Teste', 'Descrição', dataInicio, dataTermino)).toBeDefined();	
	})

	it('precisa retornar um erro quando data de termino for menor que a data de inicio', () => {
		expect(() => new Topic('Teste', 'Descrição', dataTermino, dataInicio)).toThrowError('Data de termino não pode ser menor que a data de inicio');
	});

});