export class Topic{

	private _uid: string = '';
	public subject: string;
	public description: string;
	private _startAt: Date = new Date();
	public _endAt: Date | null = null;
	public subTopics: Topic[] = [];

	constructor(
		name: string, 
		description: string | null, 
		startAt: Date, 
		endAt: Date | null, 
		subTopics: Topic[] | null = null 
	){

		this.subject = name;
		this.startAt = startAt;

		this.description = description || "";

		this.endAt = endAt || null;
		
		this.subTopics = subTopics || [];
		this.validate();
	}

	get startAt(){
		return this._startAt;
	}
	set startAt(value: Date){
		this._startAt = value;
		this.validate()
	}

	get endAt(){
		return this._endAt;
	}

	set endAt(value: Date | null){
		this._endAt = value;
		this.validate();
	}

	private validate(){
		if(this.endAt && this.endAt.getTime() < this.startAt.getTime()){
			throw new Error('Data de termino não pode ser menor que a data de inicio');
		}
	}

	set uid(value: string){
		this._uid = value;
	}

	get uid(){
		return this._uid;
	}

}