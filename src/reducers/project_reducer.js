

export default (state=[],payload)=>{

	switch(payload.type){

		case 'ADD_PROJECT': return [...state,payload.project];
				
				break;

		case 'remove': return state.filter(item=>item!==payload.item);
				break;		
		default: return state;		
	}

};


