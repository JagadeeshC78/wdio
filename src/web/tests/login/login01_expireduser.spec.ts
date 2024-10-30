import { getUserRole, getOs, getLanguage, getObjective } from '../../../config/environmentVariablesSetup'
import { companySelection } from 'src/config/chooseCompany';

import lp from '@WebPages/login/login.page';

import logcon from 'src/web/constant/login';

describe('Login 01 : verify reset expired password scenarios', async () => {

    const osValue = getOs();
    const spectCompanyDetail = companySelection["login"];
    const company = spectCompanyDetail[osValue];

    const pass7Chars = "a1!abcd";
    const passNoAlpha = "12345678!";
    const passNoNum = "abcdefgh!";
    const passNoSpecial = "abcdefgh5";
    const passExpired = "Test2012!!";
    const validPass = "Test2013!!";

    const eUser = "zEuser1@firstinsight.com";

    it('change language', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.signOff();
                if (["Français"].includes(getLanguage())) {
                    await lp.chooseLanguage("Français");
                }
            }
        }
    });

    it('01 : tests password reset using a 7 character', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                await lp.performLogin(eUser, passExpired);
                if (["English"].includes(getLanguage())) {
                    expect(lp.hasPasswordInformationMessage(logcon.eEXP));
                    await lp.resetAPassword(pass7Chars, pass7Chars);
                    expect(lp.loginErrMsg(logcon.eLT8));
                } else if (["Français"].includes(getLanguage())) {
                    expect(lp.hasPasswordInformationMessage(logcon.fEXP));
                    await lp.resetAPassword(pass7Chars, pass7Chars);
                    expect(lp.loginErrMsg(logcon.fLT8));
                }
            }
        }
    });

    it('02 : tests password reset using a password with no alpa characters in it, which is invalid', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                //await lp.performLogin(eUser, passExpired);
                await lp.resetAPassword(passNoAlpha, passNoAlpha);
                if (["English"].includes(getLanguage())) {
                    await lp.loginErrMsg(logcon.eWRSYN);
                } else if (["Français"].includes(getLanguage())) {
                    await lp.loginErrMsg(logcon.fWRSYN);
                }
            }
        }
    });

    it('03 : tests password reset using a password with no alpa numbers in it, which is invalid', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                //await lp.performLogin(eUser, passExpired);
                await lp.resetAPassword(passNoNum, passNoNum);
                if (["English"].includes(getLanguage())) {
                    await lp.loginErrMsg(logcon.eWRSYN);
                } else if (["Français"].includes(getLanguage())) {
                    await lp.loginErrMsg(logcon.fWRSYN);
                }
            }
        }
    });

    it('04 : tests password reset using a password with no special characters in it, which is invalid', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                //await lp.performLogin(eUser, passExpired);
                await lp.resetAPassword(passNoSpecial, passNoSpecial);
                if (["English"].includes(getLanguage())) {
                    await lp.loginErrMsg(logcon.eWRSYN);
                } else if (["Français"].includes(getLanguage())) {
                    await lp.loginErrMsg(logcon.fWRSYN);
                }
            }
        }
    });

    it('05 : tests password reset using the previous password, which is invalid', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                //await lp.performLogin(eUser, passExpired);
                await lp.resetAPassword(passExpired, passExpired);
                if (["English"].includes(getLanguage())) {
                    await lp.loginErrMsg(logcon.eOLDPASS);
                } else if (["Français"].includes(getLanguage())) {
                    await lp.loginErrMsg(logcon.fOLDPASS);
                }
            }
        }
    });

    it('06 : tests password reset using a valid password', async () => {
        if (["LeftMenuFeatures"].includes(getObjective())) {
            if (["SYSAD", "SALAD", "ACCAD"].includes(getUserRole())) {
                //await lp.performLogin(eUser, passExpired);
                await lp.resetAPassword(validPass, validPass);
            }
        }
    });

});