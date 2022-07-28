

export class View{

    constructor(){

    }

    renderToDoItem(data){

       const divElem = document.createElement('div')
       divElem.classList.add('col-4','itemContainer')
       divElem.setAttribute('data-id', `${data.id}`)
       divElem.innerHTML = `<div class="taskWrapper">
                                  <div class="taskHeading">${data.title}</div>
                                  <div class="taskDescription">${data.description}</div>
                                  <button class="btn-delete">Delete</button>
                                  <select class="taskStatus" id=${data.id}>
                                        <option value="noStatus" ${(data.status === `noStatus` ? `selected` : ``)}>noStatus</option> 
                                        <option value="pending" ${(data.status === `pending` ? `selected` : ``)}>pending</option>  
                                        <option value="complete" ${(data.status === `complete` ? `selected` : ``)}>complete</option>   
                                  </select>
                            </div>`

        const container = document.getElementById('todoItems')

        container.append(divElem)

    }

    removeToDoItem(item){
        item.remove();
    }

    updateStatus() {

    }

}
