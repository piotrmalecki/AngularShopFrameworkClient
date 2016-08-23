
namespace Models.Location {

    export interface ILocationShort {
        LocationID: string;
        Latitude: number;
        Longitude: number;
        LocationName: string;
        Address: IAddress;
        CrossStreet: string;
        Label?: string;
    }
}