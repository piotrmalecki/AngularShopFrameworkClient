
namespace Models.Customer {

    export interface IApplicationResponse {

        StorageApplicationId?: string;
        Customer: ICustomer;
        MiddleInitial?: string;
        SalutationId?: string;
        CareOf: string;
        BusinessName: string;
        Title: string;
        Department: string;
        PrimaryPhoneExt?: string;
        AlternatePhone: string;
        AlternatePhoneExt?: string;
        Fax?: string;
        FaxExt?: string;
        EmailAddressNotRequired?: boolean;
        DoNotSendMarketingEmail?: boolean;
        Student: boolean;
        StorageOrderId: string;
        ForeignNational: boolean;
        ActiveMilitary: boolean;
        ForeignAddress: boolean;
        EmergencyContactFirstName: string;
        EmergencyContactLastName: string;
        EmergencyContactRelationship: string;
        EmergencyContactForeignAddress: boolean;
        EmergencyContactAddress1: string;
        EmergencyContactAddress2: string;
        EmergencyContactZipCode: string;
        EmergencyContactPrimaryPhone: string;
        EmergencyContactPrimaryPhoneExt?: string;
        EmergencyContactAlternatePhone: string;
        EmergencyContactAlternatePhoneExt?: string;
        EmergencyContactCity: string;
        EmergencyContactState: string;
        EmergencyContactCountry: string;
        UnitAccessFirstName1?: string;
        UnitAccessLastName1?: string;
        UnitAccessMiddleInitial1?: string;
        UnitAccessAuthorizedToVacate1?: boolean;
        UnitAccessFirstName2?: string;
        UnitAccessLastName2?: string;
        UnitAccessMiddleInitial2?: string;
        UnitAccessAuthorizedToVacate2?: boolean;
        UnitAccessFirstName3?: string;
        UnitAccessLastName3?: string;
        UnitAccessMiddleInitial3?: string;
        UnitAccessAuthorizedToVacate3?: boolean;
        UnitAccessFirstName4?: string;
        UnitAccessLastName4?: string;
        UnitAccessMiddleInitial4?: string;
        UnitAccessAuthorizedToVacate4?: boolean;
        EmergencyContactEmailAddress?: string;
        HasAcceptedGoodNeighborPolicy?: boolean;
        CustomerNumber?: string;
        CustomerClassId?: string;
    }
}