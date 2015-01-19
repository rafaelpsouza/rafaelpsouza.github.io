---
layout: post
title:  "Software Engineering and Proofs of Concept"
date:   2015-01-18 23:00:00
description: Softwares are naturally complex and one of the biggest challenges in the Software Engineering is dealing with this complexity. As it’s a complex problem solving activity, often it’s necessary to make assumptions in the Software Development. There are some ways to verify and test those assumptions and, in this current post, I’ll talk about Proofs of Concept.
categories:
- design
permalink: Software Engineering and Proofs of Concept
---

Softwares are naturally complex and one of the biggest challenges in the Software Engineering is dealing with this complexity. As it’s a complex problem solving activity, often it’s necessary to make assumptions in the Software Development. There are some ways to verify and test those assumptions and, in this current post, I’ll talk about Proofs of Concept.

## What is a POC?

A Proof of Concept (POC) can be defined as a partial and reduced implementation of some idea or method aiming to check its feasibility. In the Software Engineering the POCs can be used as a simple way to test assumptions. For instance:

- Check if some library or framework can solve a giving problem;
- Check if the integration between two different technologies is achievable.

The POCs may also be used to [simplify/isolate](http://www.ted.com/talks/eric_berlow_how_complexity_leads_to_simplicity) some complexity or to sample a software functionality (specially non-functional requirements). Example:

 - A Proof of Concept of a new software communication protocol;
 - A Proofs of Concept of the main architecture components;
 - A Proof of Concept of the software serialization.

## Why to use Proof of Concepts?

In the Software Development the main advantages of building POCs are:

**Risk Reduction:** validate a concept with a reduced experiment before investing a lot of effort/money to develop it;

**Estimates reliability:** A amplified vision of the complexity is giving when the concept/framework/technology is experimented.

**Complexity isolation:** sometimes its necessary to isolate a piece of software aiming to have a deeply understanding of this or to help to find some issue.


## Kinds of POCs:

In Software Engineering the POCs can be classified as:

[Spikes](http://www.extremeprogramming.org/rules/spike.html): A practice from Extreme Programming where the goal is reducing the risk of a technical problem or increase the reliability of an estimate;

[Prototype/Mockup](http://en.wikipedia.org/wiki/Mockup): It's a whole system simulation normally used to validate the user interfaces showing how the software will look like

[Pilot](http://searchcio.techtarget.com/definition/pilot-program-pilot-study): It's a software pre-version with a subset of features, users and resources. The goal is learn how a large-scale project might work in practice.