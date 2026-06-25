# Exercise 0: Pre-Setup Checklist

Before you start the hands-on exercises, complete the setup below to claim your
environment and prepare the sample data.

## 1: Download Workbook

1. Download a copy of this **workbook**.
2. Keep it on a tab — you'll need it for reference and for copying details during the
   session.

## 2: Claim Environment

1. Go to [https://orgfarm.salesforce.com/signup](https://orgfarm.salesforce.com/signup)
2. Fill in this Event Code: **FWCPW65Y**
3. Fill in the remaining details and click **Submit**.
4. Select **Open Your Salesforce Org** in the pop-up window.

## 3: Create Contact

1. Load the Salesforce org.
2. Select **Service** in the dropdown in the top-left corner. This is your **Service Console**.
3. Select **Contacts** in the tabs.
4. Click **New** to create a new Contact.
5. Fill in the following details:

   | Field | Value |
   | --- | --- |
   | First Name | Carole |
   | Last Name | Tan |
   | Account | salesforce.com |
   | Email | {Your own email} |

6. Click **Save**. A new contact called **Carole Tan** has been created.

## 4: Create Case

1. Select **Cases** in the tabs.
2. Click **New** to create a new Case.
3. Fill in the following details:

   | Field | Value |
   | --- | --- |
   | Contact Name | Carole Tan |
   | Case Origin | Email |
   | Subject | Urgent ID Restoration and Financial Assistance for Carole Tan |
   | Description | *(see the sample intake note below)* |

   ::: details Sample Case Description (paste into the Description field)
   Mdm Tan (67yo) walk-in, highly distressed, tearful at times. The IC Issue: Client
   pulled out NRIC—it's in bad shape. Chip is likely dead, surface is peeling/cracked.
   Tried to go to the bank earlier, but teller rejected the card. Said they couldn't
   verify her. Singpass: Tried to log in to check CPF/Bank app. Account is locked
   (probably too many wrong password attempts). She doesn't remember her password.
   Can't reset via face scan because "it doesn't work on my phone." Financial
   Situation: Crying because she has "no money for market." Cash on hand: Very low
   (implies <$20). Low Liquidity/Savings: bank balance is "very low." Income Gap:
   Current income (CPF Life/Silver Support) is insufficient for cost of living. Needs
   ComCare to bridge the gap. Household: Lives in Redhill. Mentioned a "red bill"
   (arrears) but doesn't have it with her. Barriers: Cost — shock at $60 IC
   replacement. Mobility — ICA building "too far." Tech — completely blocked by
   digital systems. Action Plan: 1) Emergency Financial Bridge — escort to SSO, request
   interim assistance. 2) Identity Unlock — trip to ICA, surrender damaged IC, request
   $60 waiver. 3) Digital & Financial Access — reset Singpass at counter, withdraw
   cash, print 3 months' bank statements. 4) ComCare Full Submission — consolidate
   documents and finalise SMTA application.
   :::

4. Click **Save**. A **new case** has been created.

## 5: Turn on Einstein

1. Click the **Setup** (gear) icon in the top-right corner and select **Setup**.
2. Type **Einstein Setup** in the **Quick Find**.
3. Select **Einstein Setup**.
4. Check that **Turn on Einstein** is **On**. Otherwise, toggle it On.

## 6: Grant Permissions

1. Type **Users** in the **Quick Find** and select **Users**.
2. Select **EPIC, OrgFarm** (your login user).
3. Scroll down to **Permission Set Assignments** and click **Edit Assignments**.
4. Assign the following permissions:
   - Einstein Service Email Assistant User
   - Einstein for Service Innovations
   - Prompt Template User

## 7: Transition to Lightning Editor

1. Type **Release Updates** in the **Quick Find**.
2. Search for **Transition to the Lightning Editor for Email Composers in Email-to-Case**.
3. Click **Get Started**.
4. Click **Enable Test Run**.
5. Mark Steps 1 to 3 as **Complete** and click **Done**.
6. Check both boxes and click **Confirm**.
7. Refresh your browser.

::: tip You're ready!
With your org claimed, sample Contact/Case created, and Einstein enabled, continue to
**Exercise 1: Prompt Builder**.
:::
