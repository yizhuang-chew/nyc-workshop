# 2A: Create a New Agent with Default Topics

In this exercise we start with an agent equipped with standard actions.

## Exercise 2A-1: Turn on Agents

1. Click the **Setup** (gear) icon and select **Setup**.
2. Enter **Agent** in the **Quick Find**.
3. Select **Agentforce Agents** under the **Agent Studio** group.
4. Toggle the **Enable** button for **Agentforce** at the top of the interface.

## Exercise 2A-2: Create a New Agent

1. Click the **New Agent** button.
2. Select **Agentforce Employee Agent** and click **Next**.
3. **General FAQ** is selected by default — remove it by clicking the **Added** button.
   We'll add topics in later steps.
4. Click **Next**.
5. Use these settings for the agent:

   | Field | Value |
   | --- | --- |
   | Name | PSD Case Assistant |
   | API Name | PSD_Case_Assistant |
   | Description | A specialized assistant designed to help PSD officers manage citizen service journeys, summarize inter-agency intake notes, and draft follow-up communications. |
   | Role | Public Service Case Management Specialist |
   | Company | Public Service Division (Singapore) |
   | Keep a record of conversations with Enhanced Event Logs | **Checked** |

6. Leave everything else as is and click **Next**.
7. Data Cloud and Data Libraries won't be used in this workshop. Click **Create**.

## Exercise 2A-3: Add Default Topics to the New Agent

1. Under **Topics**, click **New**.
2. Click **Add from Asset Library**.
3. Check the following topics:
   - **Single Record Summary**
   - **General CRM**
   - **Employee Case Management**
4. Click **Finish**. The agent now has basic topics and actions for CRM questions.
5. Click the **Refresh** button on the **Conversation Preview**.
6. Test chatting with the agent. Enter the following and press Return:
   - `Can you tell me about Carole Tan's cases?`

   Try other questions too:
   - `Give me a summary of the case`
   - `Do I have any open cases?`
   - `Can you close Case 1008?` (Case Status: Closed, Case Reason: Existing problem)
   - `Can you book a flight for Carole Tan to London?`
7. Scroll through the **Workspace** to see what the agent did.

## Exercise 2A-4: Grant Access to the New Agent

1. **Activate** the agent.
2. If prompted, confirm.
3. Click on **PSD Case Assistant** in the Agent list.
4. Click **Agent Access**.
5. Select **Profiles with Agent Access**.
6. Click **Add**.
7. Check **System Administrator**.
8. Click **Add**.

## Exercise 2A-5: Test the New Agent in the Employee Console

1. Return to the **Service** app.
2. Refresh the app — a new **Agentforce** icon appears.
3. Click the **Agentforce** icon.
4. You can now work with Agentforce within the Case Console.
5. Open the created Case and ask:
   - `Tell me about this case`

::: tip What you learned
You stood up an autonomous Employee Agent with default topics and tested it live. Next,
you'll teach it a custom skill. 👇
:::
