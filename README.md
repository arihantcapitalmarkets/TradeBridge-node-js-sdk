# TradeBridge Node.js SDK

The TradeBridge Node.js SDK provides a simple way to integrate with TradeBridge APIs and access authentication, portfolio, order, reports, chart, and contract master services.

---

# Prerequisites

Before using the SDK, ensure you have:

- Node.js installed (v18 or later recommended)
- A valid TradeBridge API Key
- Valid Client Credentials
- Internet connectivity to access TradeBridge APIs

---

# Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

# SDK Configuration

Open the example file:

```text
src/example/Example.js
```

Update the API Key:

```javascript
const api = new TradeBridgeClient({
    baseURL: "https://tradebridge.arihantplus.com",
    apiKey: "YOUR_API_KEY",
    source: "SDK"
});
```

Replace:

```text
YOUR_API_KEY
```

with the API Key provided by Arihant.

---

# Authentication

Most APIs require a valid Access Token.

## Step 1: Login

Open:

```text
src/example/Example.js
```

Uncomment:

```javascript
await loginAPI();
```

Run:

```bash
npm start
```

The response will contain:

```text
txnId
```

Copy the `txnId`.

---

## Step 2: Verify OTP

Update the Verify OTP request with:

```javascript
userId
txnId
otp
```

Uncomment:

```javascript
await verifyOtpAPI();
```

Run:

```bash
npm start
```

The response will contain:

```text
accessToken
refreshToken
```

Copy the Access Token.

---

## Step 3: Configure Access Token

Update:

```javascript
const token = "YOUR_ACCESS_TOKEN";
```

Replace:

```text
YOUR_ACCESS_TOKEN
```

with the token received from OTP verification.

For authenticated APIs:

```javascript
api.setAccessToken(token);
```

---

# Running API Examples

All API examples are available in:

```text
src/example/Example.js
```

Only uncomment the API you want to test.

Example:

```javascript
async function run() {
    try {

        // await loginAPI();
        // await verifyOtpAPI();

        await holdingsAPI();

        // await orderBookAPI();
        // await positionBookAPI();
        // await tradeHistoryAPI();
        // await historicalCandleDataAPI();

    } catch (error) {
        console.error(error);
    }
}
```

Run:

```bash
npm start
```

---

# Updating Request Parameters

Before running an API, update the request parameters according to your account and use case.

Common parameters include:

```text
userId
password
otp
txnId
accessToken
refreshToken
symbol
exchange
instrument
excToken
quantity
price
orderId
fromDate
toDate
```

Refer to the corresponding API example in:

```text
src/example/Example.js
```

---

# Typical Usage Flow

```text
1. Configure API Key
2. Run Login API
3. Copy txnId
4. Run Verify OTP API
5. Copy accessToken
6. Update accessToken in Example.js
7. Uncomment the API you want to test
8. Run npm start
9. The response will be printed in the console
```
---

# Notes

- Ensure a valid Access Token is configured before calling authenticated APIs.
- Access Tokens may expire and need to be regenerated using Login and OTP verification.
- All request and response examples are available in:

```text
src/example/Example.js
```

- Update request values before execution based on your trading account and requirements.
