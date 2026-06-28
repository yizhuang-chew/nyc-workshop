# 3.1 Agentforce Coworker

**Agentforce Coworker** lets your agent work alongside officers as a coworker — surfaced
through the **Agentforce Coworker** button next to the app's search bar. It interprets a
question, delegates it to your **NYC Youth Engagement Assistant**, runs the right subagent
and actions, and returns a grounded answer inline.

::: tip Prerequisite
Complete **2.1** and **2.2** first — Agentforce Coworker delegates to the agent you built, so
anything you added to it automatically becomes available here, no separate configuration
required.
:::

## 3.1.1 Set Up Agentforce Coworker

::: tip Permission set already assigned
The **Agentforce Coworker Admin** and **Agentforce Coworker User** permission sets were
assigned to your user back in **Exercise 0**, so you can go straight to turning the
feature on.
:::

### Turn on Agentforce Coworker

1. In the Setup **Quick Find**, search for **Agentforce Coworker** and select **Get
   Started with Agentforce Coworker**, then click **Get Started**.

   ![Get Started with Agentforce Coworker](/screenshots/cw-get-started.png)

2. Under **Turn On Agentforce Coworker**, click **Turn On** and **Confirm**.

   ![Turn on Agentforce Coworker](/screenshots/cw-turn-on.png)

   ::: warning
   It takes a few minutes to provision Agentforce Coworker.
   :::

### Turn on the End User Experience

1. Turn on **End User Experience**.
2. Turn on **Global Search Bar**.
3. Under **Global Search Bar**, click **Manage**.
4. Accept the **Terms and Conditions** and click **Turn On**.

   ![Turn on the End User Experience](/screenshots/cw-end-user-experience.png)

## 3.1.2 Use Agentforce Coworker

1. Open the **App Launcher** and navigate to the **Service Console** app.
2. Click the **Agentforce Coworker** button located next to the search bar.

   ![Agentforce Coworker next to the search bar](/screenshots/cw-search-bar.png)

3. **First, ask without delegating.** Enter the request on its own:
   - `Pull up Yi Zhuang Chew's profile and tell me if they qualify for nomination.`

   Notice the response is generic or unsure — Coworker answers on its own and doesn't reach
   into your agent's data and actions.

   ![Coworker's generic response without delegating](/screenshots/cw-review.png)

4. **Now ask again, explicitly pointing it at the NYC agent.** Coworker only delegates to
   your agent when you tell it to:
   - `Use the NYC Youth Engagement Assistant: Pull up Yi Zhuang Chew's profile and tell me if they qualify for nomination.`

   ![Ask Coworker to use the NYC agent](/screenshots/cw-nyc-agent.png)

5. Review the response. Coworker pulls something up both times — but this time, because the
   request was routed to your agent, it runs the **specific** dictated actions (Identify →
   Query → Enrich Youth Profile) and returns the real profile with its nomination
   assessment. Without delegation, you got a more **generic** answer.

::: tip Why the difference?
The first prompt let Coworker answer by itself — generic, no access to your CRM. The
second **delegated** to the NYC Youth Engagement Assistant, which ran your subagent and
actions to return a grounded, factual answer.
:::

### How it works

Agentforce Coworker is the front door, but it doesn't answer on its own. When you submit a
question it:

1. **Interprets your request.** When you point it at the NYC Youth Engagement Assistant,
   it hands the request to that agent.
2. **Delegates to your NYC Youth Engagement Assistant.** Its **Agent Router** classifies
   the request and routes it to the right subagent — like **Youth Leader Nomination**.
3. **Runs the subagent's actions** (Query Records, Enrich Youth Profile, etc.) to assemble
   the answer from live CRM data.
4. **Returns the grounded response** back to the Agentforce Coworker panel, inline next to the
   search bar.

### Now make it your own

Agentforce Coworker is essentially your **Copilot** — it works alongside you in plain
language, drawing on everything your agent can do. Try a few prompts of your own and see
how it responds. For example:

- `Should we nominate Yi Zhuang Chew for the Regional Youth Leadership Exchange?`
- `Summarise this youth's engagement history.`
- `Which NYC programmes would suit them best?`
- Ask it something specific to *your* youth or your own follow-up question.

Notice that anything you build into the NYC Youth Engagement Assistant — new subagents,
actions, or instructions — instantly shows up here, with no extra configuration.

::: tip 🎉 You've reached the finish line
You accessed Agentforce Coworker inside the Service Console via the **Agentforce Coworker**
button. Your NYC Youth Engagement Assistant now works alongside your team as a coworker —
no new build required. See **Resources** to continue your Agentblazer journey.
:::
