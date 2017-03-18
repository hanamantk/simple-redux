export default (state=0,payload)=>{

	switch(payload.type){

		case 'INC_COUNTER': return state+1;
				break;

		case 'DEC_COUNTER': return state-1;
				break;

		default: return state;		
	}

};