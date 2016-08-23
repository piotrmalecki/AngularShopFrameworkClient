
namespace Models.Items {

    export interface IItems{
        ID: number,
        CatagorieId: number,
        Name: string
        Price: number,
        ItemPictureUrl: string
        InternalImage: any
    }
}