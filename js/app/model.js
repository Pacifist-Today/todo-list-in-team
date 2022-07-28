

 export class Model{

    constructor(){
        this.formId = 'todoForm'
        this.containerTodoItemsId = `todoItems`
    }

    setData(inputData){

        const savedData = this.data;

        const oldData = savedData ? savedData : [];

        inputData.status = `noStatus`

        if(!savedData){
            inputData.id = 1;
        }else {
            inputData.id = oldData[oldData.length-1].id +1
        }
        oldData.push(inputData);

        localStorage.setItem(this.formId, JSON.stringify(oldData));
    }

    get data(){
        return JSON.parse(localStorage.getItem(this.formId));
    }

    removeItem(itemId){
        const initData = this.data;
        const updatedData = initData.filter(item => item.id !== itemId);

       if (!updatedData.length){
           localStorage.removeItem(this.formId)
       } else {
           localStorage.setItem(this.formId, JSON.stringify(updatedData));
       }
    }

    updateStatus(id, statusValue) {
        const data = this.data
        for (let item of data){
            if (item.id === id) {
                item.status = statusValue
                console.log(item.id, item.status)
            }
        }
        localStorage.setItem(this.formId, JSON.stringify(data))
    }


}
