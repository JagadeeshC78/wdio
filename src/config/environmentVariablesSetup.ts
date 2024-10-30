export const  setSiteEnvironment = () => {
    const envScript = " " + process.env.ENV;
    const envObject = ENV[envScript.trim()];
    process.env = { ...process.env, ...{ "SITECONFIG": envObject } };
};

export const  getUserRole = () => {
    return process.env.SITECONFIG['userRole'];
};

export const  getObjective = () => {
    return process.env.SITECONFIG['objectiveType'];
};

export const  getBrowser = () => {
    return process.env.SITECONFIG['browser'];
};

export const  getOs = () => {
    return process.env.SITECONFIG['os'];
};

export const  getSiteEnvironment = () => {
    return process.env.SITECONFIG;
};

export const  getUserCredentials = () => {
    return process.env.SITECONFIG['credential'];
};

export const  getLanguage = () => {
    return process.env.SITECONFIG['language'];
};

export const  getCompany = () => {
    return process.env.SITECONFIG['company'];
};

export const ENV = {

    // Pre-Requisite **********************************************************

    PreRequisite_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PreReq',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    PreRequisite_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PreReq',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    // PNP ********************************************************************

    PickandPrice_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnP',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    PickandPrice_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PnP',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },
    
    PickandPrice_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnP',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    PickandPrice_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'pcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PnP',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    PickandPrice_ComUs_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'pcu',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnP',
        os: 'Mac',
        userRole: 'COMUS',
        language: 'English'
    },

    PickandPrice_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PnP',
        os: 'Win',
        userRole: 'SYSAD',
        language: 'English'
    },

    PickandPrice_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnP',
        os: 'Win',
        userRole: 'SALAD',
        language: 'English'
    },
    
    PickandPrice_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PnP',
        os: 'Win',
        userRole: 'ACCAD',
        language: 'English'
    },

    PickandPrice_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'pcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnP',
        os: 'Win',
        userRole: 'COMAD',
        language: 'English'
    },

    PickandPrice_ComUs_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'pcu',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PnP',
        os: 'Win',
        userRole: 'COMUS',
        language: 'English'
    },

    // RNR ********************************************************************************

    RateandRank_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnR',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    RateandRank_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'RnR',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    RateandRank_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnR',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    RateandRank_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'rcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'RnR',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    RateandRank_ComUs_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'rcu',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnR',
        os: 'Mac',
        userRole: 'COMUS',
        language: 'English'
    },

    RateandRank_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'RnR',
        os: 'Win',
        userRole: 'SYSAD',
        language: 'English'
    },

    RateandRank_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnR',
        os: 'Win',
        userRole: 'SALAD',
        language: 'English'
    },

    RateandRank_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'RnR',
        os: 'Win',
        userRole: 'ACCAD',
        language: 'English'
    },

    RateandRank_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'rcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnR',
        os: 'Win',
        userRole: 'COMAD',
        language: 'English'
    },

    RateandRank_ComUs_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'rcu',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnR',
        os: 'Win',
        userRole: 'COMUS',
        language: 'English'
    },

    // ANA ********************************************************************************

    AskandAnswer_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnA',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    AskandAnswer_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnA',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    AskandAnswer_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnA',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    AskandAnswer_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'acad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnA',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    AskandAnswer_ComUs_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'abuy',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnA',
        os: 'Mac',
        userRole: 'COMUS',
        language: 'English'
    },

    AskandAnswer_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qaadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnA',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    AskandAnswer_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'AnA',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },    
    
    AskandAnswer_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnA',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    AskandAnswer_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'acad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'AnA',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    AskandAnswer_ComUs_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'abuy',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnA',
        os: 'Windows',
        userRole: 'COMUS',
        language: 'English'
    },

    // LEFT MENU FEATURES ********************************************************************

    LeftMenuFeatures_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'LeftMenuFeatures',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'

    },

    LeftMenuFeatures_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'LeftMenuFeatures',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    LeftMenuFeatures_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'LeftMenuFeatures',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    LeftMenuFeatures_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'LeftMenuFeatures',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    LeftMenuFeatures_ComUs_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpbuy',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'LeftMenuFeatures',
        os: 'Mac',
        userRole: 'COMUS',
        language: 'English'
    },
    
    LeftMenuFeatures_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'LeftMenuFeatures',
        os: 'Win',
        userRole: 'SYSAD',
        language: 'English'

    },

    LeftMenuFeatures_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'LeftMenuFeatures',
        os: 'Win',
        userRole: 'SALAD',
        language: 'English'
    },

    LeftMenuFeatures_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'LeftMenuFeatures',
        os: 'Win',
        userRole: 'ACCAD',
        language: 'English'
    },

    LeftMenuFeatures_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'LeftMenuFeatures',
        os: 'Win',
        userRole: 'COMAD',
        language: 'English'
    },

    LeftMenuFeatures_ComUs_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpbuy',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'LeftMenuFeatures',
        os: 'Win',
        userRole: 'COMUS',
        language: 'English'
    },

    // PNP TEMPLTE ********************************************************************

    PnPTemplate_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnPTemplate',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    PnPTemplate_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PnPTemplate',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    PnPTemplate_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnPTemplate',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    PnPTemplate_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'cppcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PnPTemplate',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    PnPTemplate_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PnPTemplate',
        os: 'Win',
        userRole: 'SYSAD',
        language: 'English'
    },

    PnPTemplate_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnPTemplate',
        os: 'Win',
        userRole: 'SALAD',
        language: 'English'
    },

    PnPTemplate_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'PnPTemplate',
        os: 'Win',
        userRole: 'ACCAD',
        language: 'English'
    },

    PnPTemplate_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'cppcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnPTemplate',
        os: 'Win',
        userRole: 'COMAD',
        language: 'English'
    },

    // RNR TEMPLATE ********************************************************************
    
    RnRTemplate_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnRTemplate',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    RnRTemplate_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'RnRTemplate',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    RnRTemplate_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnRTemplate',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    RnRTemplate_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'cppcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'RnRTemplate',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    RnRTemplate_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'RnRTemplate',
        os: 'Win',
        userRole: 'SYSAD',
        language: 'English'
    },

    RnRTemplate_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnRTemplate',
        os: 'Win',
        userRole: 'SALAD',
        language: 'English'
    },

    RnRTemplate_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'RnRTemplate',
        os: 'Win',
        userRole: 'ACCAD',
        language: 'English'
    },

    RnRTemplate_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'cppcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnRTemplate',
        os: 'Win',
        userRole: 'COMAD',
        language: 'English'
    },

    // ANA TEMPLATE ********************************************************************

    AnATemplate_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'AnATemplate',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'

    },

    AnATemplate_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnATemplate',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    AnATemplate_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'AnATemplate',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    AnATemplate_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'cppcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnATemplate',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    AnATemplate_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnATemplate',
        os: 'Win',
        userRole: 'SYSAD',
        language: 'English'

    },

    AnATemplate_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'AnATemplate',
        os: 'Win',
        userRole: 'SALAD',
        language: 'English'
    },

    AnATemplate_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'AnATemplate',
        os: 'Win',
        userRole: 'ACCAD',
        language: 'English'
    },

    AnATemplate_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'cppcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'AnATemplate',
        os: 'Win',
        userRole: 'COMAD',
        language: 'English'
    },

    // LOCALE GROUP ********************************************************************

    LocaleGroup_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'LocaleGroup',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    LocaleGroup_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'LocaleGroup',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    LocaleGroup_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'LocaleGroup',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    LocaleGroup_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'LocaleGroup',
        os: 'Win',
        userRole: 'SYSAD',
        language: 'English'
    },

    LocaleGroup_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'LocaleGroup',
        os: 'Win',
        userRole: 'SALAD',
        language: 'English'
    },

    LocaleGroup_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'LocaleGroup',
        os: 'Win',
        userRole: 'ACCAD',
        language: 'English'
    },

    // WAVES ********************************************************************

    Waves_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'Waves',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    Waves_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'Waves',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    Waves_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'Waves',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    Waves_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'Waves',
        os: 'Win',
        userRole: 'SYSAD',
        language: 'English'
    },

    Waves_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'Waves',
        os: 'Win',
        userRole: 'SALAD',
        language: 'English'
    },

    Waves_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'Waves',
        os: 'Win',
        userRole: 'ACCAD',
        language: 'English'
    },

    // ARI ********************************************************************

    ARIF1_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF1',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF1_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF1',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    ARIF1_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF1',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF1_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF1',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    ARIF1_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF1',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF1_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF1',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ARIF1_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF1',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF1_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF1',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // ARIF2 ********************************************************************

    ARIF2_SysAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF2',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF2_SalAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF2',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    ARIF2_AccAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF2',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF2_ComAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF2',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    ARIF2_SysAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF2',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF2_SalAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF2',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ARIF2_AccAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF2',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF2_ComAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF2',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // ARIF3 ********************************************************************

    ARIF3_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF3',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF3_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF3',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    ARIF3_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF3',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF3_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF3',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    ARIF3_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF3',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF3_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF3',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ARIF3_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF3',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF3_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF3',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // ARIF4 ********************************************************************

    ARIF4_SysAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF4',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF4_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF4',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF4_AccAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF4',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF4_ComAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF4',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    ARIF4_SysAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF4',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF4_SalAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF4',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ARIF4_AccAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF4',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF4_ComAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF4',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // ARIF5 ********************************************************************

    ARIF5_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF5',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF5_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF5',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    ARIF5_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF5',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF5_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF5',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },
    
    ARIF5_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF5',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ARIF5_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF5',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ARIF5_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ARIF5',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ARIF5_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ARIF5',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // ISP F1 ********************************************************************

    ISPF1_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF1',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF1_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF1',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF1_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF1',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF1_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF1',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    ISPF1_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF1',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF1_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF1',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF1_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF1',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF1_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF1',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // ISPF2 ********************************************************************

    ISPF2_SysAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF2',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF2_SalAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF2',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF2_AccAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF2',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF2_ComAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF2',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    ISPF2_SysAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF2',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF2_SalAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF2',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF2_AccAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF2',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF2_ComAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF2',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // ISPF3 ********************************************************************

    ISPF3_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF3',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF3_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF3',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF3_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF3',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF3_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF3',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    ISPF3_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF3',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF3_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF3',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF3_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF3',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF3_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF3',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // ISPF4 ********************************************************************

    ISPF4_SysAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF4',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF4_SalAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF4',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF4_AccAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF4',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF4_ComAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF4',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    ISPF4_SysAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF4',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF4_SalAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF4',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF4_AccAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF4',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF4_ComAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF4',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // ISPF5 ********************************************************************

    ISPF5_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF5',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF5_SalAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF5',
        os: 'Mac',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF5_AccAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF5',
        os: 'Mac',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF5_ComAd_Mac_Eng_FF: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF5',
        os: 'Mac',
        userRole: 'COMAD',
        language: 'English'
    },

    ISPF5_SysAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'kuadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF5',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    ISPF5_SalAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qa-sales',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF5',
        os: 'Windows',
        userRole: 'SALAD',
        language: 'English'
    },

    ISPF5_AccAd_Win_Eng_FF: {
        url: "",
        credential: {
            userName: 'qafiadmin',
            password: '[]',
        },
        browser: 'Firefox',
        objectiveType: 'ISPF5',
        os: 'Windows',
        userRole: 'ACCAD',
        language: 'English'
    },

    ISPF5_ComAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'pnpcad',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'ISPF5',
        os: 'Windows',
        userRole: 'COMAD',
        language: 'English'
    },

    // MULTI-LOCALE ********************************************************************
    
    PnPMultiLocale_SysAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qaadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnPMultiLocale',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    RnRMultiLocale_SysAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qaadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnRMultiLocale',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    AnAMultiLocale_SysAd_Win_Eng_GC: {
        url: "",
        credential: {
            userName: 'qaadmin',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'AnAMultiLocale',
        os: 'Windows',
        userRole: 'SYSAD',
        language: 'English'
    },

    PnPMultiLocale_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'PnPMultiLocale',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    RnRMultiLocale_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'RnRMultiLocale',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    },

    AnAMultiLocale_SysAd_Mac_Eng_GC: {
        url: "",
        credential: {
            userName: 'psys',
            password: '[]',
        },
        browser: 'Chrome',
        objectiveType: 'AnAMultiLocale',
        os: 'Mac',
        userRole: 'SYSAD',
        language: 'English'
    }

};