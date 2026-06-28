# 2.1 Create a New Agent in Agentforce Builder

In this exercise we create an Agentforce agent in the **new Agentforce Builder**, explore
the **Canvas** and **Agent Script** views, configure its system messages, then commit and
activate it.

## 2.1.1 Enable Agentforce

1. Open the **Setup** menu and click **Setup**.
2. In the Setup **Quick Find**, search for **Agentforce Agents** and click **Agentforce
   Agents** (under **Agent Studio**).

   ![Agentforce Agents in Setup](/screenshots/agent-setup.png)

3. Turn on the **Agentforce** toggle.

   ![Toggle Agentforce on](/screenshots/agent-toggle.png)

::: tip
Einstein should already be on from Exercise 0. If not, search **Generative AI** in Quick
Find, open **Einstein Setup**, and turn on the **Turn on Einstein** toggle first.
:::

## 2.1.2 Create the Agent

1. Open the **App Launcher** and select the **Agentforce Studio** app.

   ![Agentforce Studio app](/screenshots/agent-studio-app.png)

2. Click **New Agent**.
3. Select the **Agentforce Employee Agent** template and click **Next**.

   ![Select the Agentforce Employee Agent template](/screenshots/agent-select-template.png)

4. In the **Name your agent** modal, enter:

   | Field | Value |
   | --- | --- |
   | Agent Name | NYC Youth Engagement Assistant |
   | API Name | NYC_Youth_Engagement_Assistant |

5. Click **Let's Go**.
6. Take a moment to explore the Builder's three areas:
   - the **navigation explorer** (left)
   - the main **editor view** (centre)
   - the **Agentforce Authoring Agent** (right)

   ![The new Agentforce Builder](/screenshots/agent-builder.png)

7. Click **Save** (or `Ctrl + S` / `Cmd + S`).

## 2.1.3 Explore Canvas & Agent Script

1. Click **Agent Definition** for an overview of the agent.
2. Click **Canvas**, then select **Script** — this opens the configuration in **Agent
   Script**. You can work either in the canvas or in script mode.
3. Switch back to **Canvas**.
4. Click **System** in the explorer to view the agent-level **Instructions**, **Welcome
   Message**, and **Error Message**. For example, change the **Welcome Message** to:

   > Hi, I'm the NYC Youth Engagement Assistant. How can I help you today?

   ![Change the welcome message](/screenshots/agent-welcome-message.png)

5. Click **Save**.

## 2.1.4 Understand the Agent Router

1. Click **Agent Router** in the explorer, then **Agent Router** again to view its two
   areas: the instructions sent to the LLM, and the actions it can use.

   ::: tip
   The **Agent Router** is the entry point for every agent conversation. It should only
   contain **transition** actions that route the user to the right subagent.
   :::

2. Click **Variables** in the explorer to view global variables — `linked` variables are
   system-set; `mutable` ones can be changed by the agent.

::: warning Youth-specific questions come later
Right now the agent has no subagents or actions to answer questions about a youth (like
*"What tier is Yi Zhuang Chew in?"*). You'll add those capabilities in **Exercise 2.2** —
then the agent can reason over real youth data.
:::

## 2.1.5 Test in Preview

1. Click **Preview**.
2. Enter a general question the agent can answer, for example:
   - `What can you help me with?`
3. Press **Enter**.
4. In the **Interaction Details** panel on the right, expand the reasoning to see how the
   Agent Router handled the request.

   ![Agent preview with Interaction Details](/screenshots/agent-preview.png)

## 2.1.6 Commit & Activate

1. Click **Commit Version** (top right) and confirm to save a version of the agent.

   ![Commit a version](/screenshots/agent-commit.png)

2. Click **Activate**. Confirm if prompted.

   ![Activate the agent](/screenshots/agent-activate.png)

## 2.1.7 Grant Agent Access

In the new Agentforce Builder, you grant agent access by assigning the agent's
**permission set** to users.

1. From **Setup**, search **Users** in Quick Find and open the **EPIC, OrgFarm** user
   record.
2. Click **Permission Set Assignments > Edit Assignments**, and add:
   - **Agentforce Agent NYC_Youth_Engagement_Assistant** (the permission set generated for
     this agent)
3. Click **Save**.

## 2.1.8 Grant Agent Access on the Permission Set

1. From **Setup**, search **Permission Sets** in Quick Find and select **Permission
   Sets**.
2. Open the **Agentforce Agent NYC_Youth_Engagement_Assistant** permission set.

   ![The agent permission set](/screenshots/agent-permission-set.png)

3. Click **Agent Access**.
4. Click **Edit**.
5. Add the **NYC Youth Engagement Assistant** agent and click **Save**.

   ![Grant agent access on the permission set](/screenshots/agent-access.png)

## 2.1.9 Open the Agent in the Console

1. Open the **App Launcher** and return to the **Service Console** app.
2. Refresh the app and check that the **Agentforce** icon now appears in the utility bar.
3. Click the **Agentforce** icon and select **NYC Youth Engagement Assistant**.

   ![Select the agent in the console](/screenshots/agent-select-console.png)

4. Confirm the agent responds to a general question, e.g.:
   - `What can you help me with?`

We'll come back here after **Exercise 2.2** to ask youth-specific questions once the
agent has the topics and actions to answer them.

::: tip What you learned
You created an agent in the new Agentforce Builder, explored Canvas and Agent Script,
configured its system messages and Agent Router, committed a version, and activated it.
Next, you'll add a subagent and actions so it can reason over real youth data. 👇
:::
