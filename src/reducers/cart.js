export default (state=[],payload)=>{

	switch(payload.type){

		case 'add': return [...state,payload.item];
				
				break;

		case 'remove': return state.filter(item=>item!==payload.item);
				break;		
		default: return state;		
	}

};