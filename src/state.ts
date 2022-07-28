const state ={
    data:{
        tasks:[]    
    },
    listeners:[],
    
   init(){
      const data:any = localStorage.getItem("saved-state")
    if (!data) {
    return console.log("bienvenidos a una list de trabajos pendientes que hice utilizando un localStorage");
    
  }
  this.setState(JSON.parse(data))
   },
    getState(){
        return this.data
    },
    getEnableTasks(){
        const currentState = this.getState()
        return currentState.tasks.filter((t)=>
        !t.deleted)
        
    },
    setState(newState){
        this.data = newState
        for (const cb of this.listeners) {
            cb(newState)
        }  
      localStorage.setItem("saved-state",JSON.stringify(newState))
        console.log("he cambiado", this.data);
    },
    subscribe(callback:(any)=>any){
        this.listeners.push(callback)
    },
    addTask(id, title){
        const currentState = this.getState()
        currentState.tasks.push({id, title, completed:false ,deleted:false})
        this.setState(currentState)
    },
    changeItemState(id, value){
        const currentState = this.getState();
     const found = currentState.tasks.find((t)=> t.id == id)
     found.completed = value;
     this.setState(currentState)
        console.log(found);
        
    },
    addItem(item:string){
        const cs = this.getState()
        cs.data.tasks.push(item)        
        this.setState(cs)
    },
}


export {state}