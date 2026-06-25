# 2B: Enhance Agent with New Topics & Actions

To give your Employee Agent more skills, you define its **Topics** (areas of expertise)
and **Actions** (its hands and feet).

## Exercise 2B-1: Add a New Topic to the Agent

1. **Open Agent Builder:** go to **Setup > Agentforce Agents** and click your **PSD
   Case Assistant**.
2. Click **Open in Builder**.
3. **Deactivate** the agent to make changes.
4. In the left-hand **Topics** panel, click **New**, then **New Topic**.
5. Click **Next**.
6. Fill in the following details:

   | Field | Value |
   | --- | --- |
   | Name | Case Follow-up |
   | Classification Description | Use this topic when a user needs to draft a follow-up email to a citizen regarding their case status, missing documents, or next steps. |
   | Scope | Drafting follow-up emails, identifying missing documents for Case records, and summarizing next steps for citizen interactions. |

7. Click **Add Instructions** and provide the following instructions (guardrails for how
   the agent works):

   | # | Instruction |
   | --- | --- |
   | 1 | Identify the Case to follow up on. If you don't have sufficient details, prompt the user for Case Number, Case Contact, or other relevant details. |
   | 2 | Call **Query Records** to get Case ID. |
   | 3 | Call **Query Records** to get Current User ID. |
   | 4 | Call the **Citizen Service FollowUp** action to draft the email content. |

8. Save the topic by clicking **Next** and **Finish**.

## Exercise 2B-2: Link Actions for the Topic

1. Click **This Topic's Actions**, then **Add from Asset Library**.
2. Check the following actions:
   - **Identify Record by Name**
   - **Query Records**
   - **Draft or Revise Email**
3. Click **Finish**.
4. Click **This Topic's Actions** again, then **Create New Action**.
5. In the **Create an Agent Action** pop-up:
   - Select **Prompt Template** under Reference Action Type
   - Select **Citizen Service FollowUp** under Reference Action
6. Click **Next**.
7. Fill in the following details:

   | Field | Value |
   | --- | --- |
   | Agent Action Instructions | Use this action to draft the follow-up email. |
   | Loading Text | Drafting Email... |
   | Inputs → Case → Instructions | Case Record |
   | Inputs → Sender → Instructions | User Record |

8. Click **Finish**. The agent is now equipped to draft a follow-up email.
9. Click the **Refresh** button on the **Conversation Preview**.
10. Test chatting with the agent. Enter the following and press Return:
    - `Draft Follow-Up for Carole Tan's Case.`
11. **Activate** the agent. Click **Ignore & Activate** if prompted.

## Exercise 2B-3: Test the New Topic in the Employee Console

1. Return to the **Service** app.
2. Refresh the app — the **Agentforce** icon appears.
3. Click the **Agentforce** icon.
4. Open the created Case and ask:
   - `Draft follow-up for Carole Tan's case`
5. You can chat to refine the email further, e.g.:
   - `Can you revise this draft to mention we will arrange for a home visit on 2nd Feb?`

::: tip 🎉 Workshop complete
You've completed the basics of creating an agent and adding your own custom topics and
actions. See **Resources** to continue your Agentblazer journey.
:::
