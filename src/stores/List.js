import { observable} from 'mobx'

export class List {
    @observable name
    @observable price = 0
    @observable quantity =1
    constructor(name) {
        this.name = name
    }
  
} 