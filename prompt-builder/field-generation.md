# 1.1 Smart Youth Profile (Field Generation)

Field Generation prompts dynamically generate custom field values on a record based on
the record's data. Instead of an officer reading through scattered engagement notes,
the prompt intelligently "scans" the text to keep the youth's profile current —
capturing **designation changes, role updates, and start/end dates** automatically.

This is the heart of **Smart Profile Maintenance**: instead of leaving the profile to
drift out of date, our prompt extracts a clean, structured summary that's ready to use
for future engagements and nominations.

We'll build the prompt up in **levels** so you can see how the output changes as we add
more to it. After each level you'll **Preview** the prompt and observe the difference:

1. **Level 1 — A Simple Instruction:** see the prompt run (and guess).
2. **Level 2 — Ground in the Youth:** add real record data.
3. **Level 3 — Add Structured Instructions:** shape it into a clean profile.
4. **Level 4 — Add a Web Search Action:** enrich it from the web.

::: tip How to read each level
Each level shows you the **prompt to use** and then asks you to **Preview & Observe**.
Don't skip the preview — the whole point is to *see* how the same prompt gets better as
we add grounding and instructions.
:::

## 1.1.1 Create the Smart Youth Profile Field

The profile describes the youth, so we create the field on the **Contact (Youth)**
object to receive the generated results.

1. Open the **Contact** record for **Yi Zhuang Chew**.
2. Click the **Setup** (gear) icon and select **Edit Object**. *Salesforce opens the
   Contact object in Setup.*

   ![Edit the Contact object](/screenshots/pb-edit-contact-object.png)

3. Click the **Fields & Relationships** tab on the left.
4. Click **New**. *Salesforce navigates to the New Custom Field page.*
5. Select the **Text Area (Long)** data type and click **Next**.
6. Enter the following:

   | Field | Value |
   | --- | --- |
   | Field Label | Smart Youth Profile |
   | Length | 1000 |
   | # Visible Lines | 25 |
   | Field Name | *(auto-generated)* |
   | Description | AI-enriched Smart Youth Profile |
   | Help Text | *(leave blank)* |

7. Click **Next** through the remaining steps, then **Save**.
8. Refresh the browser.

![Smart Youth Profile custom field](/screenshots/pb-add-field.png)

## 1.1.2 Create the Field Generation Prompt

1. Click the **Setup** (gear) icon and select **Setup**.
2. Type **Prompt** in the **Quick Find** and select **Prompt Builder**.

   ![Open Prompt Builder in Setup](/screenshots/pb-prompt-builder-setup.png)

3. Click **New Prompt Template**.
4. Enter the following:

   | Field | Value |
   | --- | --- |
   | Prompt Template Type | Field Generation |
   | Prompt Template Name | Enrich Youth Profile |
   | API Name | *(auto-generated)* |
   | Template Description | Enriches the youth profile from engagement notes and the web. |
   | Object | Contact |
   | Object Field | Smart Youth Profile |

   ::: warning
   If the **Smart Youth Profile** field does not appear, clear your cache.
   :::

5. Click **Next**. *Salesforce displays the Prompt Builder interface — this is where we'll
   build the prompt up level by level.*

![New Field Generation prompt template](/screenshots/pb-new-prompt-template.png)

## 1.1.3 Level 1 — A Simple Instruction

Let's start with the simplest possible prompt, with **no grounding at all**, just to see
the prompt mechanism working.

1. Enter the following in the **Prompt Editor**:

   ```text
   Write a short profile summary for a youth volunteer.
   ```

2. Click **Save**.

::: details Preview & Observe
3. Click **Preview**.
4. Enter the **Contact** (e.g. `Yi Zhuang Chew`) in the **Contact** search box.

   ![Enter the Contact in the preview](/screenshots/pb-contact-input.png)

5. Click **Preview** again to run the prompt.
6. Review the **Resolution** and the generated **Response**.

   ![Level 1 preview — generic output](/screenshots/pb-level1-preview.png)

**What to notice:** the prompt runs and produces a profile — but it's completely
**generic**. The model is *guessing*, because it knows nothing about Yi Zhuang Chew. It
could be about anyone. This is what an *ungrounded* prompt looks like.
:::

## 1.1.4 Level 2 — Ground in the Youth

Now we connect the prompt to live record data so it speaks from facts, not assumptions.
We ground it in **two** sources: the **youth's own Contact record** — including their
engagement notes in the Description — and their related **engagement records (Cases)**
for the current action in play.

1. In the **Prompt Editor**, type the first line:

   ```text
   Write a short profile summary for this youth:
   ```

2. On the next line, click **Insert Resource > Contact > Record Snapshot**. This physically
   inserts the youth's record snapshot:

   ```text
   {!$RecordSnapshot:Contact.snapshot}
   ```

3. Type the next line:

   ```text
   Taking into account their related engagement records:
   ```

4. On the next line, click **Insert Resource > Contact > Cases**. This physically inserts
   the related list of engagement records:

   ```text
   {!$RelatedList:Contact.Cases}
   ```

5. Confirm the prompt is now grounded in the youth *and* their related engagement records.
6. Click **Save**.

::: details Preview & Observe
7. With the **Contact** still selected, click **Preview**.
8. Review the **Resolution** — notice both the youth's details and their real engagement
   notes are now merged into the prompt — and the generated **Response**.

   ![Level 2 preview — grounded output](/screenshots/pb-level2-preview.png)

**What to notice:** the summary is now about *Yi Zhuang Chew specifically* — it
references their real identity, roles, projects, and history. Same simple instruction,
but **grounding** turned a generic guess into a factual summary.
:::

## 1.1.5 Level 3 — Add Structured Instructions

The grounded output is factual, but it's a loose paragraph. Now we add **instructions**
to shape it into a clean, consistent, structured profile.

1. Replace the **Prompt Editor** contents with the fuller instruction set below. The two
   grounded resources stay the same — insert them with **Insert Resource** (don't type the
   merge fields by hand): **Contact > Record Snapshot** for the youth and **Contact >
   Cases** for the engagement records.

   ```text
   You are an engagement analyst at the National Youth Council (NYC). Produce a clear,
   decision-ready Smart Youth Profile for this youth:
   {!$RecordSnapshot:Contact.snapshot}

   And their related engagement records:
   {!$RelatedList:Contact.Cases}

   Format the output as clearly labelled sections. For each, put the SECTION HEADER on its
   own line in uppercase, then the SECTION BODY on the lines below it, then a blank line
   before the next section.

   CURRENT DESIGNATION
   The youth's most recent role/designation based on the latest signal in the notes (e.g.
   General Volunteer, Project Crew, Team Lead).

   ROLE HISTORY
   Each past and current role as a bulleted timeline with start and end dates where
   available (use 'Ongoing' if no end date, 'Date not captured' if missing).

   ENGAGEMENT SUMMARY
   Recent engagement and contributions (events facilitated, volunteers mentored,
   representation, attendance/impact).

   INTERESTS & ASPIRATIONS
   Stated interests or opportunities the youth has expressed interest in.

   TIER & REVIEW FLAG
   The current tier (T1/T2) and any flag for promotion, demotion, or nomination, with the
   reason.

   NOMINATION ASSESSMENT
   Assess the youth against the nomination criteria and state whether they MEET or DO NOT
   MEET each one: (1) consistent engagement / attendance, (2) leadership role history,
   (3) mentoring or facilitation impact, (4) expressed interest in growth opportunities.
   Conclude with an overall recommendation: Promote (T2 to T1), Hold, or Demote, with a
   one-line reason.

   WEB INSIGHTS
   Any relevant public information found in the web search results — for example current
   role, organisation, education, achievements, or public profiles. If nothing relevant is
   found, state 'No public information found'.

   RECORD UPDATE FLAG
   Compare the web insights against the youth's record. If anything differs or looks out of
   date, flag it and recommend updating the record. If everything aligns, state 'No update
   needed'.

   RECOMMENDED PROGRAMMES
   2-3 suitable NYC programmes or opportunities (e.g. leadership exchange, facilitation
   training, mentorship tracks), each with a one-line reason.

   NEXT STEPS
   A short bulleted checklist of follow-ups for the officer.

   Rules:
   - Base every claim on the notes or the web results; do not invent facts.
   - If a section has no relevant information, write 'No information provided'.
   - Keep the whole response under 2500 characters.
   - Do not include sensitive personal identifiers.
   ```

2. Click **Save**.

::: details Preview & Observe
3. With the **Contact** still selected, click **Preview**.
4. Review the generated **Response**.

   ![Level 3 preview — structured profile](/screenshots/pb-level3-preview.png)

**What to notice:** the output is now a **structured profile** with consistent headers —
Current Designation, Role History with dates, Engagement Summary, Interests, and a Tier
& Review flag. Same grounded data, but **instructions** made it usable and repeatable.
:::

## 1.1.6 Level 4 — Add a Web Search Action

Finally, we enrich the profile from the **web** — for example, public designation or role
signals about the youth — by adding a **web search action** to the prompt.

1. Place your cursor directly **after the related engagement records line**
   (`{!$RelatedList:Contact.Cases}`) and add a guardrail line so the model treats web
   results carefully. On a new line there, type:

   ```text
   WEB CONTEXT
   Use the following web search results to corroborate, enrich, and fact-check the profile
   where relevant:
   ```

2. With your cursor on the next line (still right after the related records section),
   open **Insert Resource**, scroll down to **Configure**, and select **Configure
   Action**.

   ![Insert Resource — Configure Action](/screenshots/pb-configure-action.png)

3. Select **Search the Web**.

   ![Select Search the Web](/screenshots/pb-search-the-web.png)

4. For the **search input**, enter the query below — first and last name plus a locality
   hint (a plain full-name search often returns no results):

   ```text
   {!$Input:Contact.LastName} {!$Input:Contact.FirstName} Singapore
   ```

5. Set the **Search Provider** to **Openai**.
6. Click **Apply and Insert**. *The web search action is inserted after your guardrail
   line.*

   ![Apply and Insert the web search action](/screenshots/pb-web-search-apply-insert.png)

7. Click **Save**.

::: details Preview & Observe
8. With the **Contact** still selected, click **Preview**.
9. Review the updated **Resolution** (it now includes web context) and the generated
   **Response**.

   ![Level 4 preview — web-enriched profile](/screenshots/pb-level4-preview.png)

**What to notice:** the profile is now enriched with corroborating detail pulled from the
web — beyond what the engagement notes alone contained. This is the difference between an
*internal* profile and a *Smart* profile.
:::

## 1.1.7 Choose a Model & Activate

1. Click the **Models** dropdown and select **Anthropic Claude Haiku 4.5**, then click
   **Preview** to run the prompt.

   ![Change the model](/screenshots/pb-change-model.png)

2. Try other LLMs and **Save** the one you prefer.
3. Click **Activate**.

## 1.1.8 Assign the Prompt to the Field

Now connect the field to the prompt so officers can enrich the profile automatically.

::: details Assumptions
- The **Smart Youth Profile** field is created on the Contact object
- The **Enrich Youth Profile** prompt is activated
:::

1. Go to the **Service Console** app and open the **Contact (Youth)** record detail.
2. Refresh the browser. *You should see the new **Smart Youth Profile** field in the
   record detail.*
3. Click the **Setup** (gear) icon and select **Edit Page**. *The Lightning App Builder
   opens.*

   ![Edit the Contact record page](/screenshots/pb-edit-page.png)

4. Search for **AI Summary** under Components on the left.
5. **Drag and drop AI Summary** onto the middle of the page (after the Contact Header).

   ![Drag and drop the AI Summary component](/screenshots/pb-ai-summary-drag.png)

6. Check that the **Enrich Youth Profile** prompt is selected as the Prompt Template on
   the right panel.
7. Click **Save**.
8. Click **Back** to return to the record detail view.
9. Click the **Enrich Youth Profile** button. *Agentforce executes the prompt and
   shows the results.*

   ![Enrich Youth Profile button on the record](/screenshots/pb-enrich-button.png)

10. Click the **copy** button to copy the results into the field. *The enriched profile
    is posted to the **Smart Youth Profile** field.*

::: tip What you learned
You built a Field Generation prompt up in levels — watching it go from a generic guess,
to a grounded factual summary, to a structured profile, to a web-enriched **Smart Youth
Profile** — and then used it to populate the field on the Youth. You saw firsthand how
**grounding** and **instructions** each change the output. Next, you'll apply the same
Prompt Builder skills to draft personalized outreach. 👇
:::
