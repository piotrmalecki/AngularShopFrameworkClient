
namespace Models.Location {

    export interface IAddress {
        Address1: string;
        Address2?: any;
        City: string;
        State: string;
        ZipCode: string;
        Country: string;
        AddressCertificationType: number;
    }
}