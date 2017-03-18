import data from './Data';


export default (state=data,payload)=>{

	switch(payload.type){

		case 'GET_QZ_DATA': return state;
				
				break;

		case 'remove': return state.filter(item=>item!==payload.item);
				break;		
		default: return state;		
	}

};


