# Exercise 2: Agent Builder

## Overview

Today we'll build an autonomous, employee-facing agent in the **new Agentforce Builder**
to support NYC engagement officers. Its mission is to handle the "administrative tail" of
youth engagement: it doesn't just draft emails, it reasons over criteria to **nominate
youth leaders**, reviews **T1/T2** tiers, and drafts the **promotion/demotion
notifications** for approval.

You will:

- **2.1 — Create a New Agent in Agentforce Builder:** create the agent in Agentforce
  Studio, explore Canvas and Agent Script, configure its system messages and Agent Router,
  then commit and activate it.
- **2.2 — Youth Leader Nomination:** add a custom **subagent** with the actions to look up
  a youth and enrich their profile — watching the reasoning engine decide when to assess,
  recommend a tier action, and pull up the profile.

::: tip Subagents vs. Actions
Think of a **subagent** as a focused area of expertise (e.g. "Youth Leader Nomination")
that the **Agent Router** transitions to, and an **action** as a specific task it can
perform (e.g. "Draft Nomination Notification").
:::

Continue to **2.1 Create a New Agent in Agentforce Builder** below.
