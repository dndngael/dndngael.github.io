---
{"publish":true,"aliases":"\\-","created":"2025-11-25T23:26:43.982-06:00","modified":"2026-03-04T22:21:44.182-06:00","tags":["#Character","#NPC"],"cssclasses":""}
---

:::h
> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Publish** | `INPUT[toggle:dg-publish]`
>> **Star** | `INPUT[toggle:starred]`
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
> 
>> [!metadata|metadataoption]- Bio
>> #### Bio
>>  |
>> ---|---|
>> **Pronounced** |  `INPUT[textArea:pronounced]` |
>> **Aliases** | `INPUT[list:aliases]` |
>> **Ancestry** | `INPUT[Ancestry][suggester:ancestry]` |
>> **Heritage** | `INPUT[Heritage][suggester:heritage]` |
>> **Creature Type** | `INPUT[textArea:ancestry]` |
>> **Creature Sub-Type** | `INPUT[textArea:heritage]` |
>> **Gender** | `INPUT[Gender][:gender]` |
>> **Pronouns** | `INPUT[Pronouns][:pronouns]` |
>> **Age** | `INPUT[Age][:age]` |
>> **Sexuality** | `INPUT[Sexuality][:sexuality]` |
>> **Alignment** | `INPUT[Alignment][:alignment]` |
>
>> [!metadata|metadataoption]- NPC Info
>> #### NPC Info
>>  |
>>---|---|
>> **Languages** | `INPUT[Language][inlineListSuggester:language]` |
>> **Ideals** | `INPUT[textArea:ideals]` |
>> **Flaws** | `INPUT[textArea:flaws]` |
>> **Fears** |  `INPUT[textArea:fears]` |
>> **Mannerisms** |  `INPUT[textArea:mannerisms]` |
>> **Occupations** | `INPUT[Occupation][inlineListSuggester:occupation]` |
>> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Religions** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):religion]` |
>> **Owned Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):ownedlocation]` |
>> **Current Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Last Known Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):lastlocation]` |
>> **Condition** | `INPUT[Condition][:condition]` |
>> **Mask** |  `INPUT[textArea:mask]` |
>
>> [!metadata|metadataoption]- Party Info
>> #### Party Info
>>  |
>> ---|---|
>> **Traveling With** | `INPUT[inlineListSuggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Party 1 Relation** | `INPUT[Party1Relation][:party1relation]` |

:::

> [!infobox]+
> # Lurvius
> ![[4 Assets/LurviusWithMask.png]]
> ###### Bio
> | | | 
> |-|-|
> | **Aliases** | \- |
> | **Ancestry** | Elf |
> | **Gender** | Man |
> | **Pronouns** | He/Him |
> | **Age** | Adult |
> 
> ###### Info
> | | | 
> |-|-|
> | **Organization** | [[Faldara/Groups/Dawn's Bane\|Dawn's Bane]] |
> | **Last Location** | [[Faldara/Places/Lowgates\|Lowgates]],[[Faldara/Places/Vualio City\|Vualio City]] |
> | **Condition** | Healthy |
> | **Mask** | \- |

:::h
> [!infobox]+
> ###### DM Info
> | | | 
> |-|-|
> | **Alignment** | Neutral Good |
> | **Current Location** | [[Faldara/Places/Lowgates\|Lowgates]],[[Faldara/Places/Vualio City\|Vualio City]] |
> | **Languages** | Common,Elvish,Celestial |
> | **Heritage** | Eladrin |
> | **Sexuality** | Straight |
> | **Occupations** | Adventurer |
> | **Religions** | `=this.religion` |
> | **Owned Locations** | `=this.ownedlocation` |

:::

# **Lurvius** <span style="font-size: medium">"loor-VEE-oos"</span>

> [!metadata|rumour]+ Information and Rumors
>  | Name | Subject | Origin | Notes |
> | ---- | ------- | ------ | ----- |
> 

## Overview

Astra is an elf and member of the party [[Faldara/Groups/Dawn's Bane]]. He has medium long, blonde dreads tied up in a half-bun.

## Notes
- You met Lurvius during the pre-[[Faldara/Information/La Festo de Maskoj\|festival]] games.

:::h
- Born on [[Faldara/Information/Mallumo]].

> [!column|2 no-title]
>
> 
>> [!metadata|ideals] Ideals
> `=this.ideals`
>
>> [!metadata|flaws] Flaws
> `=this.flaws`
> 
>> [!metadata|fear] Fears
> `=this.fears`
>
>> [!metadata|mannerism] Mannerisms
> `=this.mannerisms`

## Goals
### Example #1

> [!kirk|info] Prompt (Remove me)
> Unravel the aspirations that drive this NPC forward. What are their primary goals, desires, or ambitions? Explore the motivations behind their actions, whether it's seeking power, redemption, love, revenge, or a sense of belonging. Delve into the depth of their aspirations, considering how these goals shape their decisions and interactions within the world. What drives this NPC and what steps might they take to achieve their life's purpose?

:::