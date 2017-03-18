export const addTocart=(item)=>{
 return {
 	type:'add',
 	item
 };
}

export const removeItem=(item)=>{
	return {
		type:'remove',
		item	
	};
}

export const incCounter=()=>{
	return {
		type:'INC_COUNTER',
			
	};
}
export const decCounter=()=>{
	return {
		type:'DEC_COUNTER',
			
	};
}