class fracao{

    constructor(num,den){
        this.num=num;
        this.den=den;
    }

    multiplicacao(f){
        return  (this.num * f.num )+ "/" +(this.den * f.den);
    }
    divisão(f){
        return  (this.num * f.den )+ "/" +(this.den * f.num);
    }
}
export default fracao;