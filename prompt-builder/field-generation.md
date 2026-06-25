# 1B: Create a Field Generation Prompt

Field Generation prompts dynamically generate custom field values on a record based on
the record's data. Instead of an officer reading pages of intake notes, the prompt
intelligently "scans" the text to fill critical tracking fields automatically — saving
10–15 minutes of manual data entry per case.

In this exercise you'll create a **Detailed Case Profile**: instead of leaving the
field blank or filled with messy shorthand, the prompt extracts the case details into a
clean, structured summary.

## Exercise 1B-1: Create the Generated Case Profile Field

First, set up a new custom field on the Case object to receive the generated results.

1. Continue from the **created Case**.
2. Click the **Setup** (gear) icon and select **Edit Object**. *Salesforce opens the
   Case object in Setup.*
3. Click the **Fields & Relationships** tab on the left.
4. Click **New**. *Salesforce navigates to the New Custom Field page.*
5. Select the **Text Area (Long)** data type and click **Next**.
6. Enter the following:

   | Field | Value |
   | --- | --- |
   | Field Label | Generated Case Profile |
   | Length | 1000 |
   | # Visible Lines | 5 |
   | Field Name | *(auto-generated)* |
   | Description | AI Generated Case Profile |
   | Help Text | *(leave blank)* |

7. Click **Next** through the remaining steps, then **Save**.
8. Refresh the browser.

## Exercise 1B-2: Create the Field Generation Prompt

1. Click the **Setup** (gear) icon and select **Setup**.
2. Type **Prompt** in the **Quick Find** and select **Prompt Builder**.
3. Click **New Prompt Template**.
4. Enter the following:

   | Field | Value |
   | --- | --- |
   | Prompt Template Type | Field Generation |
   | Prompt Template Name | Generate Case Profile |
   | API Name | *(auto-generated)* |
   | Template Description | Automatically extracts details from case notes. |
   | Object | Case |
   | Object Field | Generated Case Profile |

   ::: warning
   If the **Generated Case Profile** field does not appear, clear your cache.
   :::

5. Click **Next**.
6. Enter the following prompt in the **Prompt Editor**:

   ```text
   Analyze the information provided in the Case record: <Case Record>
   Generate a structured Case Profile using the following standardised headers.
   KEY CHALLENGES: Summarise the main pain points facing the citizen (e.g., financial
   strain, identity loss, health issues).
   PRIMARY AGENCIES: Identify the relevant Singapore government agencies involved
   (e.g., ICA, MSF, HDB, CPF).
   DOCUMENT CHECKLIST: Extract a bulleted list of all missing, damaged, or required
   documents mentioned in the notes.
   ACTION PLAN: List the immediate next steps required by the officer or the citizen
   to move the case forward.
   URGENCY TIER: Assign a priority of Emergency, Urgent, or Routine based on the
   presence of deadlines, safety risks, or financial arrears.
   Constraint: If a specific header has no relevant information in the notes, state
   'No information provided' for that section.
   Include a break line after each section.
   Keep the entire response within 1000 characters including break lines and spaces.
   Do not include NRIC or sensitive personal identifiers in the generated summary.
   ```

   ::: tip
   Feel free to play around with the instructions to craft a summary suitable for your
   needs.
   :::

7. Substitute the placeholder: highlight **\<Case Record\>**, delete the text, and
   click **Insert Resource > Case > Record Snapshot**.
8. Click **Save**.
9. Test by entering the **Case Number** (e.g. `00001014`) in the **Case** search box.
10. Review the **Resolution**.
11. Click the **Models** dropdown and select **Anthropic Claude Sonnet 4**, then click
    **Preview** to run the prompt.
12. Try other LLMs and **Save** the one you prefer.
13. Click **Activate**.

## Exercise 1B-3: Assign the Prompt to the Field

Now connect the field to the prompt so users can populate it automatically.

::: details Assumptions
- The **Generated Case Profile** field is created on the Case object
- The **Generate Case Profile** prompt is activated
:::

1. Go to the **Service** app and open the **Case** record detail.
2. Refresh the browser. *You should see the new **Generated Case Profile** field in the
   record detail.*
3. Click the **Setup** (gear) icon and select **Edit Page**. *The Lightning App Builder
   opens.*
4. Search for **Einstein Summary** under Components on the left.
5. **Drag and drop Einstein Summary** onto the middle of the page (after the Case Header).
6. Check that the **Generate Case Profile** prompt is selected as the Prompt Template on
   the right panel.
7. Click **Save**.
8. When prompted, click **Activate**.
9. In the pop-up, click **Assign as Org Default**.
10. Select **Desktop** and click **Next** / **Save**.
11. Click **Back** to return to the record detail view.
12. Click the **Generate Case Profile** button. *Agentforce executes the prompt and
    shows the results.*
13. Click the **copy** button to copy the results into the field. *The results are
    posted to the **Generated Case Profile** field.*

::: tip Exercise 1 complete
You've grounded two prompts in live Case data — one for email, one for field
generation. Next, you'll give these capabilities to an autonomous agent. 👇
:::
