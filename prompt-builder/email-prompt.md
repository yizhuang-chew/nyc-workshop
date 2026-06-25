# 1A: Create an Email Prompt

A "Citizen-First" approach means clear, timely, and empathetic communication. Our case
notes are often written in high-speed shorthand — efficient for us, but cold for the
citizen.

In this exercise you'll build a **Service Email Prompt** that acts as a "communication
bridge": it ingests raw intake notes and outputs a professional, structured "Next
Steps" email that helps Mdm Tan navigate her case journey.

## Exercise 1A-1: Create the Email Prompt

1. Click the **Setup** (gear) icon in the top-right corner and select **Setup**.
2. Type **Prompt** in the **Quick Find**.
3. Select **Prompt Builder** under the **Einstein Generative AI** group.
4. Click **New Prompt Template**. *Salesforce opens the New Prompt Template dialog.*
5. Enter the following:

   | Field | Value |
   | --- | --- |
   | Prompt Template Type | Service Email |
   | Prompt Template Name | Citizen Service FollowUp |
   | API Name | *(auto-generated)* |
   | Template Description | Drafts a personalized "Next Steps" email for the citizen based on their case notes. |
   | Case | Case |
   | Related Object | *(leave blank)* |

6. Click **Next**. *Salesforce displays the Prompt Builder interface.*
7. Enter the following prompt in the **Prompt Editor**:

   ```text
   You are a Service Officer working at the Public Service Division (PSD).
   Write a follow-up email to the citizen <Contact Name> regarding their recent
   case inquiry: <Case Subject>. Offer them guidance based on the identified needs
   in the case notes: <Case Description>.

   Use the following directions in generating the email:
   Length Limit: Less than 250 words.
   Format: Multi-paragraph with bullet points for clarity.
   Tone: Professional, empathetic, and supportive.
   Opening: Begin by acknowledging the challenges shared during the intake and thank
   them for reaching out to us.
   Content: Clearly list the "Next Steps" the citizen needs to take regarding their
   documents or agency visits.
   Closing: Let them know that the PSD is here to support them throughout this journey.
   Signature: <Sender Name>, Public Service Division.
   ```

8. Now substitute dynamic values for the **\<placeholder\>** keywords. Highlight
   **\<Contact Name\>**, delete the text, and click **Insert Resource > Case > Contact
   ID > Full Name**.
9. Do the same for each remaining placeholder:

   | Placeholder | Replacement |
   | --- | --- |
   | `<Contact Name>` | Case > Contact ID > Full Name |
   | `<Case Subject>` | Case > Subject |
   | `<Case Description>` | Case > Description |
   | `<Sender Name>` | Sender > Full Name |

10. The replaced fields appear in **blue**.
11. Click **Save**.
12. Test your prompt by entering **the Case Number created** (e.g. `00001014`) in the
    **Case** search box and click **Preview**.
13. Review the **Resolution** — the dynamically grounded prompt — and the generated
    email response.
14. Click **Activate** to make the prompt available for use.

## Exercise 1A-2: Test the Prompt in a Case

We've tested the prompt in Prompt Builder; now let's see how users will use it in their
daily work.

1. Return to the **Service** app (via the App Launcher, top-left).
2. Search for the **Case** you created and open the record.
3. On the **Feed** tab, click **Email**. *Salesforce opens the email editor.*
4. Click the **Einstein** button at the bottom.
5. Click in the **Start with pre-made instructions** text box. *A list of standard
   options plus the one we created appears.*
6. Select the **Citizen Service FollowUp** prompt. *Einstein executes the prompt and
   returns the completed email.*
7. Click the pop-out button for easier reading.
8. Notice the email has everything described in the prompt:
   - Acknowledges their challenges
   - Lists the Next Steps
   - Uses the proper closing
9. Click the **X** at the top-right — we don't want to actually send the email.

::: tip What you learned
You grounded a Service Email prompt in live Case data and ran it from the agent's
real workflow. Next, you'll generate a structured field automatically. 👇
:::
