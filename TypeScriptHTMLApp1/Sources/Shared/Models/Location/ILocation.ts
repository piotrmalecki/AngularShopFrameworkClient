
namespace Models.Location {

    export interface ILocation {
        LocationNumber: number;
        LocationDescription: string;
        Address: IAddress;
        CrossStreet: string;
        OperatingHours: string;
        Phone: string;
        LocationPhotoPath: string;
        WhatToDo: string;
        WhatToEat: string;
        WhatToSee: string;
        RelatedLocations: IRelatedLocation[];
        Features: any[];
        SubwayLines: ISubwayLine[];
        LocationID: string;
        Latitude: number;
        Longitude: number;
        LocationName: string;
    }

    export interface IMapLocation {
        LocationID: string;
        Latitude: number;
        Longitude: number;
        LocationName: string;
        Label: string;
        InfoBox: string;
    }

    export interface IPricedLocation {
        Distance: number;
        GroupsCount: number;
        MinimalPrice: number;
        MinimalPriceStorageUnitGroupId: string;
        ResultsCount: number;
        SizeGroups: any;
        StorageLocationId: string;
        LocationId: string;
    }
}