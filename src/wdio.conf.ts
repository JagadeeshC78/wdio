import { execSync, exec, spawn } from 'child_process';

import lp from '@WebPages/login/login.page';
import { macChromeCapabilities, multiCapabilities } from './config/capabilities';
import { ENV, setSiteEnvironment, getBrowser, getObjective, getLanguage, getUserCredentials } from './config/environmentVariablesSetup';

setSiteEnvironment();

const objectiveType = getObjective();
// const capabilities = multiCapabilities[getBrowser()];
const selectedEnv = ENV[process.env.ENV];

console.log('ENV variable:', process.env.ENV);
console.log('Environment:', selectedEnv);
console.log('Browser:', getBrowser());
// console.log('Capabilities:', capabilities);
console.log("Feature Type :", getObjective());

let specArray = [];

if (objectiveType == "PreReq") {
    specArray = [
        './web/tests/prereq/prerequisite.spec.ts',
    ]
} else if (objectiveType == "PnP") {
    specArray = [
        './web/tests/setup/setup01_publishinsight.spec.ts',

        './web/tests/progress/gp01_surveybeforeresponse.spec.ts',
        './web/tests/progress/gp02_segmentbeforeresponse.spec.ts',
        './web/tests/progress/gp03_surveywithwaves.spec.ts',
        './web/tests/progress/gp04_surveywithwavesntargettype.spec.ts',
        './web/tests/progress/gp05_surveywithtargettype.spec.ts',
        './web/tests/progress/gp06_afterresponse.spec.ts',
        './web/tests/progress/gp07_endinsight.spec.ts',
        './web/tests/progress/gp08_displogic.spec.ts',
        './web/tests/progress/gp09_skiplogic.spec.ts',
        './web/tests/progress/gp10_dispnskiplogic.spec.ts',
        './web/tests/progress/gp11_startwithitems.spec.ts',
        './web/tests/progress/gp12_nonmandatorymatrix.spec.ts',
        './web/tests/progress/gp13_consent_choicelimit_rtf.spec.ts',
        './web/tests/progress/gp14_choicelimitresponse.spec.ts',
        './web/tests/progress/gp15_include_exclude.spec.ts',
        './web/tests/progress/gp16_includeExcludeResponse.spec.ts',
        './web/tests/progress/gp17_removeresponses.spec.ts',

        // './web/tests/results/res01_items.spec.ts', // new feature, TC re-write/correct
        './web/tests/results/res02_items_DemandCurve.spec.ts',
        './web/tests/results/res03_itemslocale.spec.ts',
        // './web/tests/results/res04_itemssentimentsntopword.spec.ts', // new feature, TC re-write/correct
        './web/tests/results/res05_itemssegments.spec.ts',
        // './web/tests/results/res06_itemsmmngcomments.spec.ts',   // new feature, TC re-write/correct
        './web/tests/results/res07_segmentsaddstandard.spec.ts',
        './web/tests/results/res08_segmentsaddoneoff.spec.ts',
        './web/tests/results/res09_segmentseditoneoff.spec.ts',
        './web/tests/results/res10_segmentsmanage.spec.ts',
        './web/tests/results/res11_segments.spec.ts',
        './web/tests/results/res12_surveys.spec.ts',
        './web/tests/results/res13_attributesFeedback.spec.ts',
        './web/tests/results/res14_attributeAnalysis.spec.ts',
        './web/tests/results/res15_pricing.spec.ts',
        './web/tests/results/res16_01_interactionspenetration.spec.ts',
        // './web/tests/results/res16_02_interactionswith50items.spec.ts',  // check and un-comment
        './web/tests/results/res17_interactionsreach.spec.ts',
        './web/tests/results/res18_decisions.spec.ts',
        './web/tests/results/res19_riskyproductalert.spec.ts',
        './web/tests/results/res20_ssotherinsights.spec.ts',        
        './web/tests/results/res21_respChoiceLimit.spec.ts',
        './web/tests/results/res22_respInclExcl.spec.ts',
        './web/tests/results/res23_items_InitialPriceCurve.spec.ts',
        './web/tests/results/res24_manageLocales.spec.ts',
        './web/tests/results/res25_setTicketPrice.spec.ts',

        // './web/tests/setup/setup02_createinsight.spec.ts',
        // './web/tests/setup/setup03_overview.spec.ts',
        // './web/tests/setup/setup04_locale.spec.ts',
        // './web/tests/setup/setup05_itemsbasics.spec.ts',
        // './web/tests/setup/setup06_itemsaddedit.spec.ts',
        // './web/tests/setup/setup07_itemsaddfromexisting.spec.ts',
        // './web/tests/setup/setup08_itemslimitperrespondent.spec.ts',
        // './web/tests/setup/setup09_itemsmassedit.spec.ts',
        // './web/tests/setup/setup10_itemsimport01.spec.ts',
        // './web/tests/setup/setup11_itemsimport02.spec.ts',
        // './web/tests/setup/setup13_surveycreate.spec.ts',
        // './web/tests/setup/setup14_01_surveyedit.spec.ts',     
        // './web/tests/setup/setup14_02_editstandardquestion.spec.ts',
        // './web/tests/setup/setup15_surveyformelements.spec.ts',
        // './web/tests/setup/setup16_surveydisplogic01.spec.ts',
        // './web/tests/setup/setup17_surveydisplogic02.spec.ts',
        // './web/tests/setup/setup18_surveydisplogic03.spec.ts',
        // './web/tests/setup/setup19_surveyskiplogic01.spec.ts',
        // './web/tests/setup/setup20_surveyskiplogic02.spec.ts',
        // './web/tests/setup/setup21_surveyskiplogic03.spec.ts',
        // './web/tests/setup/setup22_surveydispnskiplogic.spec.ts',
        // './web/tests/setup/setup23_survey250questions.spec.ts',
        // './web/tests/setup/setup24_surveycopyfrom.spec.ts',
        // './web/tests/setup/setup25_segmentcreate.spec.ts',
        // './web/tests/setup/setup26_segmentedit.spec.ts',
        // './web/tests/setup/setup27_01_gamesettings.spec.ts',
        // './web/tests/setup/setup27_02_gamesettings.spec.ts',
        // './web/tests/setup/setup28_reviewnpublish.spec.ts',
        // './web/tests/setup/setup31_attributeanalysis.spec.ts',
        // './web/tests/setup/setup32_surveychoicelimit.spec.ts',
        // './web/tests/setup/setup33_segmentchoicelimit.spec.ts',
        // './web/tests/setup/setup34_copysurveyfromchoicelimit.spec.ts',
        // './web/tests/setup/setup35_include_exclude.spec.ts',
        // './web/tests/setup/setup36_copydetailsdateandtimestamp.spec.ts',
        // './web/tests/setup/setup37_respondentConsent.spec.ts',
        
        // './web/tests/setup/setup39_importassistant.spec.ts',
        // './web/tests/setup/setup40_importassistantdropbox.spec.ts',
        
        // './web/tests/others/others01_dnsrpd_tp_hs.spec.ts',
        // './web/tests/others/others02_roledegrade.spec.ts'
    ]
} else if (objectiveType == "RnR") {
    specArray = [
        './web/tests/setup/setup01_publishinsight.spec.ts',

        './web/tests/progress/gp01_surveybeforeresponse.spec.ts',
        './web/tests/progress/gp02_segmentbeforeresponse.spec.ts',
        './web/tests/progress/gp03_surveywithwaves.spec.ts',
        './web/tests/progress/gp04_surveywithwavesntargettype.spec.ts',
        './web/tests/progress/gp05_surveywithtargettype.spec.ts',
        './web/tests/progress/gp06_afterresponse.spec.ts',
        './web/tests/progress/gp07_endinsight.spec.ts',
        './web/tests/progress/gp08_displogic.spec.ts',
        './web/tests/progress/gp09_skiplogic.spec.ts',
        './web/tests/progress/gp10_dispnskiplogic.spec.ts',
        './web/tests/progress/gp11_startwithitems.spec.ts',
        './web/tests/progress/gp12_nonmandatorymatrix.spec.ts',
        './web/tests/progress/gp13_consent_choicelimit_rtf.spec.ts',
        './web/tests/progress/gp14_choicelimitresponse.spec.ts',
        './web/tests/progress/gp15_include_exclude.spec.ts',
        './web/tests/progress/gp16_includeExcludeResponse.spec.ts',
        './web/tests/progress/gp17_removeresponses.spec.ts',

        // './web/tests/results/res01_items.spec.ts',               // new feature, TC re-write/correct
        // './web/tests/results/res06_itemsmmngcomments.spec.ts',   // new feature, TC re-write/correct
        './web/tests/results/res07_segmentsaddstandard.spec.ts',
        './web/tests/results/res08_segmentsaddoneoff.spec.ts',
        './web/tests/results/res09_segmentseditoneoff.spec.ts',
        './web/tests/results/res10_segmentsmanage.spec.ts',
        './web/tests/results/res11_segments.spec.ts',
        './web/tests/results/res12_surveys.spec.ts',
        './web/tests/results/res18_decisions.spec.ts',
        './web/tests/results/res19_riskyproductalert.spec.ts',
        './web/tests/results/res20_ssotherinsights.spec.ts',
        './web/tests/results/res21_respChoiceLimit.spec.ts',
        './web/tests/results/res22_respInclExcl.spec.ts',
        './web/tests/results/res24_manageLocales.spec.ts',

        // './web/tests/setup/setup02_createinsight.spec.ts',
        // './web/tests/setup/setup03_overview.spec.ts',
        // './web/tests/setup/setup04_locale.spec.ts',
        // './web/tests/setup/setup05_itemsbasics.spec.ts',
        // './web/tests/setup/setup06_itemsaddedit.spec.ts',
        // './web/tests/setup/setup07_itemsaddfromexisting.spec.ts',
        // './web/tests/setup/setup09_itemsmassedit.spec.ts',
        // './web/tests/setup/setup10_itemsimport01.spec.ts',
        // './web/tests/setup/setup11_itemsimport02.spec.ts',
        // './web/tests/setup/setup12_itemssettorank.spec.ts',
        // './web/tests/setup/setup13_surveycreate.spec.ts',
        // './web/tests/setup/setup14_01_surveyedit.spec.ts',
        // './web/tests/setup/setup14_02_editstandardquestion.spec.ts',
        // './web/tests/setup/setup15_surveyformelements.spec.ts',
        // './web/tests/setup/setup16_surveydisplogic01.spec.ts',
        // './web/tests/setup/setup17_surveydisplogic02.spec.ts',
        // './web/tests/setup/setup18_surveydisplogic03.spec.ts',
        // './web/tests/setup/setup19_surveyskiplogic01.spec.ts',
        // './web/tests/setup/setup20_surveyskiplogic02.spec.ts',
        // './web/tests/setup/setup21_surveyskiplogic03.spec.ts',
        // './web/tests/setup/setup22_surveydispnskiplogic.spec.ts',
        // './web/tests/setup/setup23_survey250questions.spec.ts',
        // './web/tests/setup/setup24_surveycopyfrom.spec.ts',
        // './web/tests/setup/setup25_segmentcreate.spec.ts',
        // './web/tests/setup/setup26_segmentedit.spec.ts',
        // './web/tests/setup/setup27_01_gamesettings.spec.ts',
        // './web/tests/setup/setup27_02_gamesettings.spec.ts',
        // './web/tests/setup/setup28_reviewnpublish.spec.ts',
        // './web/tests/setup/setup32_surveychoicelimit.spec.ts',
        // './web/tests/setup/setup33_segmentchoicelimit.spec.ts',
        // './web/tests/setup/setup34_copysurveyfromchoicelimit.spec.ts',
        // './web/tests/setup/setup35_include_exclude.spec.ts',
        // './web/tests/setup/setup36_copydetailsdateandtimestamp.spec.ts',
        // './web/tests/setup/setup37_respondentConsent.spec.ts',

        // './web/tests/others/others01_dnsrpd_tp_hs.spec.ts',
        // './web/tests/others/others02_roledegrade.spec.ts'
    ]
} else if (objectiveType == "AnA") {
    specArray = [
        './web/tests/setup/setup01_publishinsight.spec.ts',

        './web/tests/progress/gp01_surveybeforeresponse.spec.ts',
        './web/tests/progress/gp02_segmentbeforeresponse.spec.ts',
        './web/tests/progress/gp03_surveywithwaves.spec.ts',
        './web/tests/progress/gp04_surveywithwavesntargettype.spec.ts',
        './web/tests/progress/gp05_surveywithtargettype.spec.ts',
        './web/tests/progress/gp06_afterresponse.spec.ts',
        './web/tests/progress/gp07_endinsight.spec.ts',
        './web/tests/progress/gp08_displogic.spec.ts',
        './web/tests/progress/gp09_skiplogic.spec.ts',
        './web/tests/progress/gp10_dispnskiplogic.spec.ts',
        './web/tests/progress/gp11_startwithitems.spec.ts',
        './web/tests/progress/gp12_nonmandatorymatrix.spec.ts',
        './web/tests/progress/gp13_consent_choicelimit_rtf.spec.ts',
        './web/tests/progress/gp14_choicelimitresponse.spec.ts',
        './web/tests/progress/gp15_include_exclude.spec.ts',
        './web/tests/progress/gp16_includeExcludeResponse.spec.ts',
        './web/tests/progress/gp17_removeresponses.spec.ts',
        
        './web/tests/results/res07_segmentsaddstandard.spec.ts',
        './web/tests/results/res08_segmentsaddoneoff.spec.ts',
        './web/tests/results/res09_segmentseditoneoff.spec.ts',
        './web/tests/results/res10_segmentsmanage.spec.ts',
        './web/tests/results/res12_surveys.spec.ts',
        './web/tests/results/res20_ssotherinsights.spec.ts',
        './web/tests/results/res21_respChoiceLimit.spec.ts',
        './web/tests/results/res22_respInclExcl.spec.ts',

        './web/tests/setup/setup02_createinsight.spec.ts',
        './web/tests/setup/setup03_overview.spec.ts',
        './web/tests/setup/setup04_locale.spec.ts',
        // './web/tests/setup/setup13_surveycreate.spec.ts',
        // './web/tests/setup/setup14_01_surveyedit.spec.ts',
        // './web/tests/setup/setup14_02_editstandardquestion.spec.ts',
        './web/tests/setup/setup15_surveyformelements.spec.ts',
        './web/tests/setup/setup16_surveydisplogic01.spec.ts',
        './web/tests/setup/setup17_surveydisplogic02.spec.ts',
        './web/tests/setup/setup18_surveydisplogic03.spec.ts',
        './web/tests/setup/setup19_surveyskiplogic01.spec.ts',
        './web/tests/setup/setup20_surveyskiplogic02.spec.ts',
        './web/tests/setup/setup21_surveyskiplogic03.spec.ts',
        './web/tests/setup/setup22_surveydispnskiplogic.spec.ts',
        './web/tests/setup/setup23_survey250questions.spec.ts',
        // './web/tests/setup/setup24_surveycopyfrom.spec.ts',
        './web/tests/setup/setup25_segmentcreate.spec.ts',
        './web/tests/setup/setup26_segmentedit.spec.ts',
        // './web/tests/setup/setup27_01_gamesettings.spec.ts',
        // './web/tests/setup/setup27_02_gamesettings.spec.ts',
        './web/tests/setup/setup28_reviewnpublish.spec.ts',
        './web/tests/setup/setup32_surveychoicelimit.spec.ts',
        './web/tests/setup/setup33_segmentchoicelimit.spec.ts',
        './web/tests/setup/setup34_copysurveyfromchoicelimit.spec.ts',
        './web/tests/setup/setup35_include_exclude.spec.ts',
        // './web/tests/setup/setup36_copydetailsdateandtimestamp.spec.ts',
        './web/tests/setup/setup37_respondentConsent.spec.ts',

        // './web/tests/others/others01_dnsrpd_tp_hs.spec.ts',
        // './web/tests/others/others02_roledegrade.spec.ts'
    ]
} else if (objectiveType == "LeftMenuFeatures") {
    specArray = [
        './web/tests/surveysandsegments/mngsurveys01_plbasics.spec.ts',
        './web/tests/surveysandsegments/mngsurveys02_plcreate.spec.ts',
        './web/tests/surveysandsegments/mngsurveys03_plwithsegments.spec.ts',
        './web/tests/surveysandsegments/mngsurveys04_plwithsetup.spec.ts',
        './web/tests/surveysandsegments/mngsurveys05_plslwithsetupnsegments.spec.ts',
        './web/tests/surveysandsegments/mngsurveys06_pledit.spec.ts',
        './web/tests/surveysandsegments/mngsurveys07_plcopynarchive.spec.ts',
        './web/tests/surveysandsegments/mngsurveys08_translations01.spec.ts',
        './web/tests/surveysandsegments/mngsurveys09_translations02.spec.ts',
        './web/tests/surveysandsegments/mngsurveys10_translation_choicelimit.spec.ts',
        './web/tests/surveysandsegments/mngsurveys11_plcreatenedit_choicelimit.spec.ts',
        './web/tests/surveysandsegments/mngsurveys12_translationarchive_choicelimit.spec.ts',
        './web/tests/surveysandsegments/mngsurveys13_slbasics.spec.ts',
        './web/tests/surveysandsegments/mngsurveys14_slcreate.spec.ts', 
        './web/tests/surveysandsegments/mngsurveys15_slwithsegments.spec.ts',
        './web/tests/surveysandsegments/mngsurveys16_slwithsetup.spec.ts',
        './web/tests/surveysandsegments/mngsurveys17_slwithsetupnsegments.spec.ts',
        './web/tests/surveysandsegments/mngsurveys18_sledit.spec.ts',
        './web/tests/surveysandsegments/mngsurveys19_slcopynarchive.spec.ts',
        './web/tests/surveysandsegments/mngsurveys20_slcreatenedit_choicelimit.spec.ts',
        './web/tests/surveysandsegments/mngsurveys21_others.spec.ts',

        './web/tests/surveysandsegments/mngsegments01_plcreate.spec.ts',
        './web/tests/surveysandsegments/mngsegments02_pleditnarchive.spec.ts',
        './web/tests/surveysandsegments/mngsegments03_plcreatenedit_choicelimit.spec.ts',
        './web/tests/surveysandsegments/mngsegments04_slcreatenedit_choicelimit.spec.ts',
        
        './web/tests/search/search01_insightpages.spec.ts',
        './web/tests/search/search02_insights.spec.ts',
        './web/tests/search/search03_items.spec.ts',
        './web/tests/search/search04_savedinsights.spec.ts',
        './web/tests/search/search05_saveditems.spec.ts',
        './web/tests/search/search06_assigntags.spec.ts',
        './web/tests/search/search07_logdecisions.spec.ts',

        './web/tests/login/login01_expireduser.spec.ts',
        './web/tests/login/login02_forgotpassword.spec.ts',
        './web/tests/login/login03_invalid.spec.ts',
        './web/tests/login/login04_layout.spec.ts',
        './web/tests/login/login05_valid.spec.ts',

        './web/tests/systemconsole/sc01_company1.spec.ts',
        './web/tests/systemconsole/sc02_company2.spec.ts',
        './web/tests/systemconsole/sc03_user1.spec.ts',
        './web/tests/systemconsole/sc04_user2.spec.ts',
        './web/tests/systemconsole/sc05_user3.spec.ts',
        './web/tests/systemconsole/sc06_respondents.spec.ts',
        './web/tests/systemconsole/sc07_insightstab.spec.ts',

        './web/tests/companysettings/cs01_general.spec.ts',
        './web/tests/companysettings/cs02_tags.spec.ts',
        './web/tests/companysettings/cs03_attributes.spec.ts',
        './web/tests/companysettings/cs04_privacy.spec.ts',
        './web/tests/companysettings/cs06_ce.spec.ts',
        './web/tests/companysettings/cs07a_cus_csinm.spec.ts',
        './web/tests/companysettings/cs07b_cus_dcc.spec.ts',
        './web/tests/companysettings/cs07c_cus_lcc.spec.ts',
        './web/tests/companysettings/cs08_contract.spec.ts',
        './web/tests/companysettings/cs09_analytics.spec.ts',
    ]
} else if (objectiveType == "PnPTemplate") {
    specArray = [
        './web/tests/templates/temp01_common.spec.ts',
        './web/tests/templates/temp02_general.spec.ts',
        './web/tests/templates/temp03_globalSettings.spec.ts',
        './web/tests/templates/temp04_localeSettings.spec.ts'
    ]
} else if (objectiveType == "RnRTemplate") {
    specArray = [
        './web/tests/templates/temp01_common.spec.ts',
        './web/tests/templates/temp02_general.spec.ts',
        './web/tests/templates/temp03_globalSettings.spec.ts',
        './web/tests/templates/temp04_localeSettings.spec.ts'
    ]
} else if (objectiveType == "AnATemplate") {
    specArray = [
        './web/tests/templates/temp01_common.spec.ts',
        './web/tests/templates/temp02_general.spec.ts',
        './web/tests/templates/temp03_globalSettings.spec.ts',
        './web/tests/templates/temp04_localeSettings.spec.ts'
    ]
} else if (objectiveType == "LocaleGroup") {
    specArray = [
        './web/tests/setup/setup30_localegroup.spec.ts',
    ]
} else if (objectiveType == "Waves") {
    specArray = [
        './web/tests/waves/waves01.spec.ts',
        './web/tests/waves/waves02.spec.ts',
        './web/tests/waves/waves03.spec.ts',
        './web/tests/waves/waves04.spec.ts'
    ]
} else if (objectiveType == "ARIF2") {
    specArray = [
        './web/tests/companysettings/cs10_01_ariF2.spec.ts',
        './web/tests/setup/setup29_01_ariF2.spec.ts',
    ]
} else if (objectiveType == "ARIF4") {
    specArray = [
        './web/tests/companysettings/cs10_02_ariF4.spec.ts',
        './web/tests/setup/setup29_02_ariF4.spec.ts',
    ]
} else if (objectiveType == "ARIF5") {
    specArray = [
        './web/tests/companysettings/cs10_03_ariF5.spec.ts',
        './web/tests/setup/setup29_03_ariF5.spec.ts',
    ]
} else if (objectiveType == "ISPF2") {
    specArray = [
        './web/tests/companysettings/cs11_01_ispF2.spec.ts',
        './web/tests/inseasonpricing/inSeasonPricingF2.spec.ts',
    ]
} else if (objectiveType == "ISPF4") {
    specArray = [
        './web/tests/companysettings/cs11_02_ispF4.spec.ts',
        './web/tests/inseasonpricing/inSeasonPricingF4.spec.ts',
    ]
} else if (objectiveType == "ISPF5") {
    specArray = [
        './web/tests/companysettings/cs11_03_ispF5.spec.ts',
        './web/tests/inseasonpricing/inSeasonPricingF5.spec.ts',
    ]
} else if (objectiveType == "PnPMultiLocale") {
    specArray = [
        './web/tests/progress/gp18_multilocales.spec.ts',
    ]
} else if (objectiveType == "RnRMultiLocale") {
    specArray = [
        './web/tests/progress/gp18_multilocales.spec.ts',
    ];
} else if (objectiveType == "AnAMultiLocale") {
    specArray = [
        './web/tests/progress/gp18_multilocales.spec.ts',
    ]
} else {
    process.exit(1);
}

console.log('Specs to run:', specArray);

// CALLING UP OF ABOVE DECLARED SPEC FILES TO EXECUTE
export const config: WebdriverIO.Config = {
    specs: ['./web/tests/prereq/prerequisite.spec.ts'],

    exclude: [],

    suites: {
        smoke: ['./src/web/tests/**/login.e2e.ts']
    },

    // ============
    // Capabilities
    // ============

    maxInstances: 1,
    capabilities: macChromeCapabilities,
    
    // ===================
    // Test Configurations
    // ===================
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'https://localhost',
    waitforTimeout: 5000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    specFileRetries: 0,
    specFileRetriesDelay: 0,
    specFileRetriesDeferred: false,

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],
    
    mochaOpts: {
        compilers: ['tsconfig-paths/register'],
        ui: 'bdd',
        timeout: 20100000, // 335 MINUTES
        mochawesomeOpts: {
            includeScreenshots: true,
            screenshotUseRelativePath: true
        },
        // require: [
        //     'tsconfig-paths/register', 'src/web/pages/base/basePage'
        // ]
    },

    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.

    /*
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */

    // onPrepare: function (config, capabilities) {
    // },

    /*
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */

    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },

    /*
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */

    // beforeSession: function (config, capabilities, specs) {
    // },

    /*
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */

    // before: function (capabilities, specs) {
    //     require("./web/pages/base/basePage");
    // },

    /*
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */

    // beforeCommand: function (commandName, args) {
    // },

    /*
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */


    /*
     * THE BELOW LINES OF CODE TO LAUNCH THE APPLICATION
     */

    beforeSuite: async function (suite) {
        await browser.maximizeWindow();
        await browser.url('https://test-vcv.firstinsight.com/');
        await browser.pause(5000);

        const language = getLanguage();
        await lp.chooseLanguage(language);
        await browser.pause(5000);

        const userDetails = getUserCredentials();
        await lp.performLogin(userDetails.userName, userDetails.password);
        await browser.pause(10000);
    },

    /*
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */

    // beforeTest: function (test, context) {
    // },

    /*
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */

    // beforeHook: function (test, context) {
    // },

    /*
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */

    // afterHook: function (test, context, { error, result, duration, passed, retries }) {
    // },

    /*
     * Function to be executed after a test (in Mocha/Jasmine).
     */

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },

    /*
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */

    afterSuite: async function (suite: object) {
        await browser.closeWindow();
    },

    /*
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */

    // afterCommand: function (commandName, args, result, error) {
    // },

    /*
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */

    // after: function (result, capabilities, specs) {
    // },

    /*
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */

    // afterSession: function (config, capabilities, specs) {
    // },

    /*
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */

    // THIS FUNCTION IS TO LAUNCH THE ALLURE REPORT AND TO CONVERT THE REPORT AS PDF TO TRIGGER MAIL
    onComplete: function (exitCode, config, capabilities, results) {

        const reportError = new Error('Could not generate Allure report')
        const generation = spawn('allure', ['generate', 'allure-results', '--clean'], {
            stdio: 'inherit', // Optional: to inherit stdio from the parent process
            shell: true, // Optional: if you want to run in a shell
        });
        
        return new Promise<void>((resolve, reject) => {
            generation.on('exit', function (exitCode: number) {
                console.log(exitCode);

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                setTimeout(() => {
                    console.log(process.env.ENV)
                    const mail = execSync("npm run send-autotests-report-via-mail")
                    console.log("mail", mail.toString());
                    console.log("hosted", serve.toString());
                    resolve();

                }, 5000);

                setTimeout(() => {
                    console.log(process.env.ENV)
                    const consoleLog = execSync("npm run send-autotests-consolelog-via-mail")
                    console.log("consoleLog", consoleLog.toString());
                    console.log("hosted", serve.toString());
                    resolve();

                }, 5000);
                console.log("serve");
                const serve = exec("npm run start-allure-portnumber");
                console.log("serve");
                console.log('Allure report successfully generated');
            })
        })
    }

    /*
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */

    // onReload: function(oldSessionId, newSessionId) {
    // }

};