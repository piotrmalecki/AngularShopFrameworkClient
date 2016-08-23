namespace Filters {
    interface IInput {
        Price: number;
        Description: string;
    }

    export function priceOption() {
        return function (input: IInput) {
            return '$' + input.Price +'/month '+ input.Description;
        }
    }
}