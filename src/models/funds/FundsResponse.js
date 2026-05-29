class FundsResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {
      funds: {
        mfAmt: response.data?.funds?.mfAmt,
        realMTM: response.data?.funds?.realMTM,
        sellExp: response.data?.funds?.sellExp,
        spanMargn: response.data?.funds?.spanMargn,
        payout: response.data?.funds?.payout,
        cashBal: response.data?.funds?.cashBal,
        ipoAmt: response.data?.funds?.ipoAmt,
        remarksAmnt: response.data?.funds?.remarksAmnt,
        buyExp: response.data?.funds?.buyExp,
        spanMrgnNRML: response.data?.funds?.spanMrgnNRML,
        delivryMrgn: response.data?.funds?.delivryMrgn,
        lien: response.data?.funds?.lien,
        payin: response.data?.funds?.payin,
        margnUsed: response.data?.funds?.margnUsed,
        ttlCashBal: response.data?.funds?.ttlCashBal,
        elmMargn: response.data?.funds?.elmMargn,
        cncVarMargn: response.data?.funds?.cncVarMargn,
        netCashAvail: response.data?.funds?.netCashAvail,
        unrealMTM: response.data?.funds?.unrealMTM,
        varMargn: response.data?.funds?.varMargn,
        expMargn: response.data?.funds?.expMargn,
        t1GrossCollatrl: response.data?.funds?.t1GrossCollatrl,
        cncElmrMargn: response.data?.funds?.cncElmrMargn,
        grossExp: response.data?.funds?.grossExp,
        brokeragePrsnt: response.data?.funds?.brokeragePrsnt,
        collateralVal: response.data?.funds?.collateralVal,
        brnchAdhoc: response.data?.funds?.brnchAdhoc,
        cncUnRealMTM: response.data?.funds?.cncUnRealMTM,
        unbookPNL: response.data?.funds?.unbookPNL,
        scrpBsktMrgn: response.data?.funds?.scrpBsktMrgn,
        notnalCash: response.data?.funds?.notnalCash,
        cncRealMTM: response.data?.funds?.cncRealMTM,
        spanMrgnMIS: response.data?.funds?.spanMrgnMIS,
        realizedPNL: response.data?.funds?.realizedPNL,
        cncCredit: response.data?.funds?.cncCredit,
        adhocMargn: response.data?.funds?.adhocMargn,
        premiumPrsnt: response.data?.funds?.premiumPrsnt,
        remarks: response.data?.funds?.remarks,
        dirctColatrl: response.data?.funds?.dirctColatrl
      }
    };

  }

}

module.exports = FundsResponse;