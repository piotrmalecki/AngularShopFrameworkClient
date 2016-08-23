
namespace Models.Customer {

    export interface ICustomer {

        Id?: string;
        FirstName?: string;
        LastName?: string;
        EmailAddress: string;
        PrimaryPhone: string;
        AlternatePhone?: string;
        ForeignAddress?: boolean;
        Address?: Models.Location.IAddress;
        CommunicationPreferences?: ICommunicationPreferences;
    }
}