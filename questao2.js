import Pilha from "./Pilha";

class TrocarElemento{

    
    constructor(pilha1,pilha2,pilhaAux){
        this.pilha1 = pilha1;
        this.pilha2 = pilha2
        this.pilhaAux = pilhaAux;
    }
    
    preencher(pilha){
        for(let i=0; pilha.top() < i; i++){
            pilha.push(i);
        }

        return pilha;
    }
 
    trocar(pilha){
        for(let i=0; pilha.top()<i; i++){
            this.push(pilha.pop());
        }
        return this.pilha;
    }

  


}

export default TrocarElemento;