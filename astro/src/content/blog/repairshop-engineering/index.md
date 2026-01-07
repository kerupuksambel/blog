---
title: "What a repairshop taught me about engineering"
draft: false
date: "2024-01-01T00:00:00Z"
pubDate: "2026-01-06T19:00:00+07:00"
description: "A small lesson upon an incident in a repairshop."
slug: "repairshop-engineering"
heroImage: "./hero.png"
---

<!-- ![Hero](./hero.png) -->

A few weeks ago, my motorcycle tire went flat, so I brought it to a tire repair shop. For the context, it was quite late at night, and the repairman (and I too!) was feeling tired at that time. Upon seeing the repair shop (delightfully), I went there and ask the repairman. Here's how our conversation went roughly:

```
🙂 : "Sir, please repair my tire, seems like it's leaking"
👷‍♂️ : "OK, wait a minute"
```
*15 minutes, after he tinkered and breaking down the tire*
```
👷‍♂️ : "OK so this tire is cooked, the valve is already beyond repair, nothing I can do to fix this"
🙂 : "Wait sir, do you mean I can't use this anymore??"
👷‍♂️ : "Yeah, please feel free to bring it home though"
🙂 : "My place is around 3km from here... Anything I can do to fix this?"
👷‍♂️ : "Nah man you're cooked lol"
```
*another 20 minutes with him doing nothing, and I frantically looking for any nearby repair shop or even a place I can use to put my vehicle temporarily*
```
👷‍♂️ : "Man it's quite late here, let's just change your inner tire with a used tire and call it a day"
🙂 : (Wait, you can do THAT????) "Ah okay then sir, please do it"
```
*5-7 minutes of changing the tire, paying, and going home*

---

Even after some days (and even weeks), I still thought about that event occassionally, but in a different point of view;

> As an engineer, isn't this scenario quite familiar?

Let's just imagine the somehow analogous situation; you, as an engineer, and a client that needs a solution. 

They gave you a problem to be solved. You analyze the problem and the possible solutions, and during your technical analysis, you saw that the intended solution is impossible to be done given the constraint from the client, and instead of looking for alternatives, you just said "nah this is impossible, I can't do this". 

At best, they can just say "oh ok" and moving forward. At worst? Expect you're getting bad rep if your client is a blabbermouth. 

But imagine if you can reword your findings as **"Sorry, but this problem seems to be impossible if we insisted to use X, however, we could use Y as its replacement, in which would be faster and cheaper to implement, with some minor tradeoffs such as..."**. You then could be labelled as "innovative" and "out of the box thinker". No drama, no irritated parties, no days of emotion-laced meetings.

---

Clients usually don't really know (and don't wanna know) what's under the hood. 

They don't care if you use Redis, PostgreSQL, or even directly reading a TXT file inside the server. They don't care if you use ECS instances, Kubernetes, or even if you Ngrok-ed your local computer to serve your app. They don't care if you use CodeBuilder, GitHub Action, or if you FTP-ed your instance and manually copy-and-pasted your newest patch to your codebase (seriously, some people still do this).

They cared about one thing; anything that works for them, solving their problem with as little as problem (both in the present and in the future) caused, while costing as little as possible, that'll do.

And that's our tasks as engineer. **Not to impress ourselves with stellar techstacks, but to impress the user with stellar solution.**