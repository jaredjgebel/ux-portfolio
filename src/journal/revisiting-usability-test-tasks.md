---
title: Revisiting Usability Test Tasks
description: As a part of an online course in a UX specialization, I conducted a usability test. I chose to test the search feature of...
layout: ../_includes/layouts/journal-post.njk
---

# Revisiting Usability Test Tasks

August 2022

As a part of an online course in a UX specialization, I conducted a remote usability test. I chose to test the search feature of the flight booking website[ Momondo.com](http://www.momondo.com). In this post, I’ll be comparing some general approaches to writing tasks for usability tests. I'll also describe how I would change the tasks if I were doing the assignment over again.

## Methods

For the assignment, we were tasked with conducting a formative qualitative usability test of an existing travel booking website. Qualitative tests have a few goals:

- Identifying how the design facilitates or hinders the most important user objectives
- Observing participant behavior to understand why certain issues are occurring on the site
- Serving as visceral artifact to emphasize the importance of user-centricity with stakeholders

The goal of this test was to assess the usability of Momondo.com’s flight search function. To that end, test participants completed tasks that aligned with essential user goals relating to searching. I made some assumptions about what specific factors would be most important to users as they search for flights. In real-world circumstances, the tasks ideally would be informed by additional research or analytics to discern what users are having trouble with on the site.

## Overall considerations for conducting the test

### Incorporating one scenario or multiple scenarios

In usability tests, a scenario grounds the tasks in a certain context. The course instructor included pre-written tasks for a generic flight travel service, but I wrote my own tasks. While the instructor’s tasks all fell under the umbrella of a single scenario, I created a scenario for each individual task.

Each approach has tradeoffs. If a single scenario is used for all tasks, the participant has more mental space to focus on what they’re doing. Having a running storyline gives the test cohesion. On the other hand, if the participant has a negative reaction to the scenario, it could affect their performance for the entirety of the test. When there’s a different scenario for each task, the participant is less likely to have a negative reaction to all of the tasks, but they need to keep more in mind.

If I was completing the project again, I would stick to my approach. It makes sense in the context of doing multiple searches to book flights for different trips. Ultimately, the context of the participant and application are the most important factors.

### Including a partially open-ended task

There are a few different ways to structure a usability test task. In _Think Like a UX Researcher_, the authors distinguish several types of tasks, ranging from completely closed-ended (the researcher defines a task with a single correct answer) to completely open-ended (the participant defines and completes the task). My test included tasks primarily on the closed-ended side of the spectrum.

“Part self-generated”<sup>1</sup> tasks define the overall task while letting the user complete it in a way they would for themselves. For example, a part self-generated task for a food delivery service might read ”Order dinner for yourself” while allowing the participant to choose the restaurant and delivery time.

Including one of these tasks for this test would confer a few advantages. First, it would provide an opportunity to observe how the participant thinks about the task criteria. Secondly, we’re increasing the participant’s engagement with the task. Since I was trying to test specific elements of the search feature, it wouldn’t have been useful for more than one or two questions. In general, the use of these questions depends on how much data the researcher has about usability and their certainty about the importance of testing specific problems.

## Editing The Tasks

I’ll go through three of the six total tasks in the usability test. For each, I’ll describe how I would change them, after having conducted the test and researched the topic in more depth.

### Finding a flight as soon as possible

Task 2 of 6

> You live in Wichita, Kansas and you need to get to Myrtle Beach, South Carolina for a family emergency as quickly as possible.
>
> - The current date is April 4, 2022, so you need to fly out tomorrow, April 5.
> - Since time is of the essence, you want to find a flight that will get in as soon as possible.
> - You’re not sure when you’re coming home, so you just need a one-way ticket.

#### What I would change

I made a significant mistake by “risking an emotional reaction”<sup>2</sup> in using the term “family emergency.” There are other ways to phrase the task without potentially dredging up a participant’s unpleasant or even traumatic memories. Since it was only the second task, a negative reaction could have clouded the rest of the session.

Including dates in the task is unnecessary, when using the current date would work just as well. After editing these details, we’re left with a task that more neutrally and succinctly reaches the testing goal.

#### Revised task

> You urgently need to fly from Wichita, Kansas to Myrtle Beach, South Carolina. Find a one-way flight that will arrive in Myrtle Beach as soon as possible.

### Finding flights for a weekend trip

Task 4 of 6

> You’re planning on flying from your home city of Baltimore, Maryland, to Austin, Texas for a wedding.
>
> - You need to leave on May 13, 2022 after 3:00pm, and you need to be back on May 16 by 2:00 pm.
> - Each flight leg should have no more than one layover and a total travel time of less than 6 hours.
> - You’d like to get the cheapest flight that fits these requirements.

#### What I would change

It’s standard testing practice to avoid using words in the tasks that are also in the interfaces. Here, “cheapest” is the exact word used in a prominent button to sort by price, so I would avoid that in the task language. In addition, the layover and total travel time parameters weren’t connected to the scenario. I pointed the directions directly at arbitrary features.

This is an opportunity to administer a more open-ended task. By this point, the participants are acclimated to the test format but not quite fatigued. Because they've already used some of the features, it wouldn't be an exact representation of real-world behavior. However, it would be an opportunity to observe their thought process and hear the reasoning behind their choices.

#### Revised task

> You’re planning on flying from your home city of Baltimore, Maryland, to Austin, Texas for a wedding.
>
> - You need to leave on May 13, 2022.
> - You need to come back on May 16.
>
> For this task, pretend as though you were taking this trip yourself. Choose a flight that suits your needs and preferences.

### Finding flights for a family vacation

Task 6 of 6

> You live in New York, and you want to go to West Palm Beach, Florida on vacation. You’ll be going with your spouse and two children, ages 10 and 12, while they’re on spring break.
>
> - You can travel from any of the airports in the New York area, except LaGuardia.
> - You have a little flexibility, so you’d like to leave sometime during the week of July 11, 2022, and stay for one week.
> - Your total budget for the flight is $2,000, but you could go up to $2,500 if you have to.
> - You’d prefer the departing flight to be after 10am, and to arrive at your destination by 8pm.
> - You’d prefer for all four of you to get Premium Economy tickets for the extra room.

#### What I would change

This was the final and most difficult task of the set. I wanted to test the search’s performance when several filters were applied. In retrospect, I went overboard. Watching my participants struggle to enter all the requirements this late into the test made that fact abundantly clear.

Furthermore, is the scenario realistic? Some people may have that many travel requirements, but without more data I wouldn’t know if there was a user segment to justify the question. On top of that, the task assumes that the participant is familiar with airports of the New York metro area.

Instead, I would focus on commonly-used features that hadn't been tested yet: traveling in a group, flying with children, and having multiple airport options.

#### Revised task

> Find a round-trip flight from New York City to West Palm Beach, Florida for a vacation.
>
> - Your party will have a total of two adults and two children
> - You can leave from John F. Kennedy International Airport or Newark Liberty International Airport
> - You have a budget of $2,500 for the flights

## Focusing on the format now to enable flexibility

Qualitative research, including qualitative usability testing, requires flexibility. It's hard to know beforehand what unexpected issues would be fruitful to explore. By being intentional about each task goal and format before starting, we can concentrate on the content of a task written on-the-fly. I’ll continue to develop my approach so I can focus on the primary goal of testing: gathering information on problems in site usability.

## Sources/Further Reading

<sup>1</sup><em><a href="http://uxresearchbook.com/">Think Like a UX Researcher: How to Observe Users, Influence Design, and Shape Business Strategy</a>.</em> David Travis and Philip Hodgson, 2019. Taylor & Francis Group.

<sup>2</sup><em><a href="https://www.nngroup.com/articles/better-usability-tasks/">Write Better Qualitative Usability Tasks: Top 10 Mistakes to Avoid</a></em>. Amy Schade, 2017. Nielsen Norman Group.

_[Turn User Goals into Task Scenarios for Usability Testing](https://www.nngroup.com/articles/task-scenarios-usability-testing/)_. Marieke McCloskey, 2014. Nielsen Norman Group.

_[Writing Tasks for Quantitative and Qualitative Usability Studies](https://www.nngroup.com/articles/test-tasks-quant-qualitative/)._ Kate Moran, 2018. Nielsen Norman Group.

_[Rocket Surgery Made Easy](http://sensible.com/rocket-surgery-made-easy/)_. Steve Krug, 2010. Pearson Education Inc.
