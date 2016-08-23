namespace Models.Order {

    export interface IOrder {
        OrderDate: Date;
        Username: string;
        FirstName: string;
        LastName: string;
        Address: string;
        City: string;
        State: string;
        PostalCode:string;
        Country: string;
        Phone: string;
        Email: string;
        Total: number;
        Experation: Date;
        SaveInfo: boolean;
    }

    export class Order implements IOrder {
        OrderDate: Date;
        Username: string;
        FirstName: string;
        LastName: string;
        Address: string;
        City: string;
        State: string;
        PostalCode: string;
        Country: string;
        Phone: string;
        Email: string;
        Total: number;
        Experation: Date;
        SaveInfo: boolean;
    }
}