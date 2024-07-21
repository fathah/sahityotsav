import ConfigType from "./types/configs_types";

const APPCONFIGS:ConfigType = {
    type: "district",
    year: 2024,
    typeName:"Kannur",
    venue:"Thalassery",
    venueDates:"August 10, 11, 12",
    style:{
        primaryColor:"#C7D9A7",
        primaryDark:"#7D9C43",
        heroColor:"#30352D"
    },
    socials:{
        youtube:"dsf",
        facebook:"fefs"
    },
    ziqx:{
        appkey:process.env.ZIQX_APPKEY!
       
    }
};

export default APPCONFIGS;