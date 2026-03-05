---
{"publish":true,"aliases":"The Apotheon","created":"2025-11-25T23:26:43.924-06:00","modified":"2026-03-04T22:21:39.353-06:00","tags":["#Character","#NPC"],"cssclasses":""}
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
> # Apotheon
> 
> ###### Bio
> | | | 
> |-|-|
> | **Aliases** | The Apotheon |
> | **Ancestry** | Unknown |
> | **Heritage** | \- |
> | **Gender** | Man |
> | **Pronouns** | He/Him |
> 
> ###### Info
> | | | 
> |-|-|
> | **Condition** | Unknown |
> | **Mask** | Red mask with golden, glittering embellishments |

:::h
> [!infobox]+
> ###### DM Info
> | | | 
> |-|-|
> | **Alignment** | True Neutral |
> | **Current Location** | `=this.location` |
> | **Languages** | Common |
> | **Age** | Ancient |
> | **Sexuality** | `=this.sexuality` |
> | **Occupations** | `=this.occupation` |
> | **Organization** | `=this.organization` |
> | **Religions** | `=this.religion` |
> | **Owned Locations** | `=this.ownedlocation` |
> | **Last Location** | `=this.lastlocation` |

:::

# **Apotheon** <span style="font-size: medium">"uh-PAH-THEE-ahn"</span>

> [!metadata|rumour]- Information and Rumors
>  | Name | Subject | Origin | Notes |
> | ---- | ------- | ------ | ----- |
> 

## Overview

Seen in a vision at the hidden cavern in the [[Faldara/Places/Lazuli Grotto]], The Apotheon is a spectral figure made up of dark, swirling red and black vapor in the form of a humanoid man. He wears a black cloak, hiding any discernable features other than a red mask with magnificent, glittering golden markings. Behind the mask are deep purple eyes full of sadness.

## Notes

- The Apotheon pleaded to you in a [[Faldara/Information/Vision in the Lazuli Grotto\|vision]] to save him from imprisonment.
