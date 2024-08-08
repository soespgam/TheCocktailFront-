export interface Cocktail {
    id?: number;
    name: string;
    category: string;
    image: string;
    instruccions: string;
    instruccionsEs: string;
    instruccionsIt: string;
    instruccionsFr: string;
}

export interface ResponseApi1{
    strDrink:string;
    strCategory:string;
    strDrinkThumb:string;
    strInstructions:string;
    strInstructionsES:string;
    strInstructionsIT:string;
    strInstructionsFR:string;
}

export interface ResponseApi2{
    idDrink:string;
    strDrink:string;
    strCategory:string;
    strDrinkThumb:string;
}