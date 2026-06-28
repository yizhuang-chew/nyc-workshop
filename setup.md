---
next:
  text: 'Exercise 1: Prompt Builder'
  link: '/prompt-builder/overview'
---

# Exercise 0: Pre-Setup Checklist

Before you start the hands-on exercises, complete the setup below to claim your
environment and prepare the sample data.

In this workshop, a **youth** is represented as a **Contact** and an **engagement
record** is represented as a **Case**. This lets us reuse standard Salesforce objects
while we focus on the AI.

## 1: Keep This Workbook Open

1. Keep this tab open — you'll use it as your workbook throughout the session.
2. You'll refer to it and copy details from it as you work through the exercises.

## 2: Claim Environment

1. Go to [https://orgfarm.salesforce.com/signup](https://orgfarm.salesforce.com/signup)
2. Fill in the **Event Code** (your facilitator will share this during the session).
3. Fill in the remaining details and click **Submit**.
4. Select **Open Your Salesforce Org** in the pop-up window.

## 3: Create the Youth Contact

1. Load the Salesforce org.
2. Open the **App Launcher** (top-left) and select **Service Console**. This is the app
   you'll work in throughout the workshop.

   ![Open the Service Console app](/screenshots/pre-service-console.png)

3. Select **Contacts** in the tabs.
4. Click **New** to create a new Contact.
5. When prompted to choose a record type, select **Customer Contact** and click **Next**.
6. Fill in the following details:

   | Field | Value |
   | --- | --- |
   | First Name | *(your own first name)* |
   | Last Name | *(your own last name)* |
   | Account | Savory Street Co. |
   | Email | {Your own email} |
   | Description | *(see the sample engagement notes below)* |

   ::: tip Use your own name
   Enter **your own name** as the youth — later, the **web search action** will look you
   up online, so using a real name makes the demo come alive. Throughout the rest of this
   guide we use **Yi Zhuang Chew** as the example — just substitute your own name wherever
   you see it.
   :::

   ![Enter the Contact details](/screenshots/pre-new-contact.png)

   ::: details Sample Engagement Notes (paste into the Contact Description field)
   YZ, 19. been around since early 2023 i think? central district chapter. started off
   just a general vol — that youth corps cleanup thing at the start, did that til around
   jun. then we bumped her up to project crew for kampong glam heritage (2nd half 2023).
   ppl liked her, "rallies the newbies" per shanti's note. jan this yr she basically runs
   green commons now = team lead, still ongoing. signs her emails "Youth Lead, Green
   Commons" lol already gave herself the title

   last qtr: ran 3 workshops (~24hrs facilitation?), had like 5 new vols under her,
   crewed ~12 ppl at the green commons launch. also went to the inter-council youth
   dialogue in mar as our rep. shows up to basically everything, attendance 95%+

   keeps bugging me abt the regional youth leadership exchange — rlly wants in. also
   mentioned wanting to do facilitation/programme design training, and "run my own
   community project end to end" within the yr. good mentor instinct

   currently T2. imo strong T1 case — leadership + mentoring + rep duties. should flag her
   for the regional exchange nomination. todo: confirm she's keen, tidy up her role dates
   (never logged properly), get her facilitation hrs on record, route nomination for
   approval
   :::

7. Click **Save**. A new youth contact called **Yi Zhuang Chew** has been created.

![Contact Description with the sample notes](/screenshots/pre-contact-description.png)

## 4: Create the Engagement Record (Case)

We'll also log a lightweight **engagement record** (Case) against the youth. The youth's
full history lives on the Contact; the Case just captures the current engagement action.

1. Select **Cases** in the tabs.
2. Click **New** to create a new Case.
3. Fill in the following details:

   | Field | Value |
   | --- | --- |
   | Contact Name | Yi Zhuang Chew |
   | Case Origin | Email |
   | Subject | Youth Engagement Review — Yi Zhuang Chew (Leadership Track) |

4. Click **Save**. A **new engagement record** has been created.

![Create the engagement Case](/screenshots/pre-new-case.png)

## 5: Turn on Einstein

1. Click the **Setup** (gear) icon in the top-right corner and select **Setup**.
2. Type **Einstein Setup** in the **Quick Find**.
3. Select **Einstein Setup**.

   ![Einstein Setup in Quick Find](/screenshots/pre-einstein-setup.png)

4. Check that **Turn on Einstein** is **On**. Otherwise, toggle it On.

![Turn on Einstein](/screenshots/pre-turn-on-einstein.png)

## 6: Grant Permissions

1. Type **Users** in the **Quick Find** and select **Users**.
2. Select **EPIC, OrgFarm** (your login user).
3. Scroll down to **Permission Set Assignments** and click **Edit Assignments**.
4. Assign the following permissions:
   - Einstein Service Email Assistant User
   - Einstein for Service Innovations
   - Agentforce Coworker Admin
   - Agentforce Coworker User

![Permission set assignments](/screenshots/pre-permissions.png)

## 7: Turn on Email-to-Case

1. Type **Email-to-Case** in the **Quick Find** and select **Email-to-Case**.
2. Click **Continue**.
3. Click **Edit**.
4. Check **Enable Email-to-Case** and click **Save**.

![Enable Email-to-Case](/screenshots/pre-email-to-case.png)

## 8: Transition to Lightning Editor

1. Type **Release Updates** in the **Quick Find**.
2. Search for **Transition to the Lightning Editor for Email Composers in Email-to-Case**.

   ![Transition to the Lightning Editor release update](/screenshots/pre-transition-lightning.png)

3. Click **Get Started**.
4. Click **Enable Test Run**.
5. Mark Steps 1 to 3 as **Complete** and click **Done**.
6. Check both boxes and click **Confirm**.

   ![Lightning Editor test run enabled](/screenshots/pre-lightning-editor-run.png)

7. Refresh your browser.

## 9: Turn on Data 360

1. In the Setup **Quick Find**, type **Data Cloud Setup** and select it.

   ![Data Cloud Setup](/screenshots/pre-data-cloud-setup.png)

2. Click **Set Up Data Cloud** (or **Get Started**).

   ![Data Cloud Get Started](/screenshots/pre-data-cloud-get-started.png)

3. Follow the prompts to provision **Data 360 / Data Cloud** for the org.

::: tip
Provisioning can take a few minutes — kicking it off now lets it finish in the background
while you work through the exercises. Data 360 isn't required for the prompt and agent
exercises, but it's used by **Exercise 3: Agentforce Coworker**.
:::

::: tip You're ready!
With your org claimed, the Yi Zhuang Chew youth Contact and engagement Case created, and
Einstein enabled, continue to **Exercise 1: Prompt Builder**.
:::
