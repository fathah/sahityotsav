export default interface ConfigType{
    type: 'unit' | 'sector' | 'division' | 'sector' | 'district' | 'state';
    year: number;
    typeName:string;
    venue: string;
    venueDates: string;
    // Site settings
    style:{
        primaryColor: string;
        heroColor?: string;
    },
    socials?: {
        youtube?: string;
        facebook?: string;
        instagram?: string;
        twitter?: string;
    }

}