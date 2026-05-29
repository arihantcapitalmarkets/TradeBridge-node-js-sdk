class LedgerReportResponse {

  constructor(response) {

    this.infoID = response.infoID;
    this.infoMsg = response.infoMsg;
    this.timestamp = response.timestamp;

    this.data = {

      availableFunds: response.data?.availableFunds,
      cashMarClosingBal: response.data?.cashMarClosingBal,
      openingBal: response.data?.openingBal,
      closingBal: response.data?.closingBal,
      regClosingBal: response.data?.regClosingBal,
      comClosingBal: response.data?.comClosingBal,
      isMTFSetOff: response.data?.isMTFSetOff,
      mtfClosingBal: response.data?.mtfClosingBal,

      basicDtls: response.data?.basicDtls
        ? {
            "Client ID": response.data.basicDtls["Client ID"],
            To: response.data.basicDtls["To"],
            Date: response.data.basicDtls["Date"]
          }
        : null,

      ledgerData: response.data?.ledgerData?.map(ledger => ({

        date: ledger.date,
        settlementNo: ledger.settlementNo,
        bankName: ledger.bankName,
        balance: ledger.balance,
        transDte: ledger.transDte,
        exch: ledger.exch,
        accountNo: ledger.accountNo,
        ledgerType: ledger.ledgerType,
        from: ledger.from,
        refId: ledger.refId,
        debit: ledger.debit,
        credit: ledger.credit,
        desc: ledger.desc,
        bookType: ledger.bookType

      })) || []

    };

  }

}

module.exports = LedgerReportResponse;