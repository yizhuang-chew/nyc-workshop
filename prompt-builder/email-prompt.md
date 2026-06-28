# 1.2 Youth Outreach Email

A "Youth-First" approach means clear, timely, and personal communication. Our
engagement notes are often written in high-speed shorthand — efficient for us, but
impersonal for the young person.

Building on the Prompt Builder skills from Exercise 1.1, you'll now create a **Service
Email Prompt** that acts as a "communication bridge": it reads the youth's engagement
notes and outputs a warm, personalized outreach email that recognizes their journey and
invites them to their next opportunity.

## 1.2.1 Create the Email Prompt

1. Click the **Setup** (gear) icon in the top-right corner and select **Setup**.
2. Type **Prompt** in the **Quick Find**.
3. Select **Prompt Builder** under the **Einstein Generative AI** group.
4. Click **New Prompt Template**. *Salesforce opens the New Prompt Template dialog.*
5. Enter the following:

   | Field | Value |
   | --- | --- |
   | Prompt Template Type | Service Email |
   | Prompt Template Name | Youth Outreach FollowUp |
   | API Name | *(auto-generated)* |
   | Template Description | Drafts a personalized outreach email to a youth based on their profile notes. |
   | Case | Case |
   | Related Object | *(leave blank)* |

6. Click **Next**. *Salesforce displays the Prompt Builder interface.*

   ![New Service Email prompt template](/screenshots/email-new-prompt.png)

7. Enter the following prompt in the **Prompt Editor**:

   ```text
   You are an Engagement Officer at the National Youth Council (NYC).
   Write a follow-up outreach email to the youth <Contact Name> regarding their recent
   engagement: <Case Subject>. Personalize it using their engagement history and
   identified interests in their profile notes: <Youth Notes>.

   Use the following directions in generating the email:
   Length Limit: Less than 250 words.
   Format: Multi-paragraph with bullet points for clarity.
   Tone: Warm, encouraging, and personal — speak to a young person, not at them.
   Opening: Recognize a specific contribution or milestone from their engagement history
   and thank them for their involvement with NYC.
   Content: Clearly list the "Next Steps" or opportunities the youth can take up (e.g.
   leadership programmes, upcoming projects), based on their interests and journey.
   Closing: Let them know NYC is here to support their growth and that we'd love to have
   them continue the journey with us.
   Signature: <Sender Name>, National Youth Council.
   ```

8. Now substitute dynamic values for the **\<placeholder\>** keywords. Highlight
   **\<Contact Name\>**, delete the text, and click **Insert Resource > Case > Contact
   ID > Full Name**.
9. Do the same for each remaining placeholder:

   | Placeholder | Replacement |
   | --- | --- |
   | `<Contact Name>` | Case > Contact ID > Full Name |
   | `<Case Subject>` | Case > Subject |
   | `<Youth Notes>` | Case > Contact ID > Description |
   | `<Sender Name>` | Sender > Full Name |

10. Confirm each placeholder has been replaced with the grounded field.

    ![Prompt with grounded merge fields inserted](/screenshots/email-prompt-inserted.png)

11. Click **Save**.
12. Test your prompt by entering **the Case Number created** (e.g. `00001034`) in the
    **Case** search box and click **Preview**.
13. Review the **Resolution** — the dynamically grounded prompt — and the generated
    email response.

    ![Email prompt preview](/screenshots/email-prompt-preview.png)

14. Click **Activate** to make the prompt available for use.

## 1.2.2 Test the Prompt on the Engagement Record

We've tested the prompt in Prompt Builder; now let's see how users will use it in their
daily work.

1. Return to the **Service Console** app (via the App Launcher, top-left).
2. Search for the **Case** (engagement record) you created and open it.
3. On the **Feed** tab, click **Email**. *Salesforce opens the email editor.*
4. Click the **Draft with AI** button at the bottom.

   ![Draft with AI on the Case email](/screenshots/email-draft-with-ai.png)

5. Click in the **Start with pre-made instructions** text box. *A list of standard
   options plus the one we created appears.*
6. Select the **Youth Outreach FollowUp** prompt. *Einstein executes the prompt and
   returns the completed email.*

   ![Generated Youth Outreach FollowUp email](/screenshots/email-outreach-result.png)

7. Click the pop-out button for easier reading.
8. Notice the email has everything described in the prompt:
   - Recognizes a specific contribution from their history
   - Lists relevant opportunities / next steps
   - Uses a warm, encouraging closing
9. Click the **X** at the top-right — we don't want to actually send the email.

::: tip Exercise 1 complete
You've grounded two prompts in live youth data — one to enrich the Smart Youth Profile,
one to draft personalized outreach. Next, you'll give these capabilities to an autonomous
agent that nominates youth leaders and reviews tiers. 👇
:::
