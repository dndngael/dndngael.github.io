---
{"publish":true,"created":"2025-11-25T23:26:38.789-06:00","modified":"2026-03-04T22:21:42.519-06:00","tags":["#Location","#District"],"cssclasses":""}
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
> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[textArea:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Type** | `INPUT[DistrictType][inlineListSuggester:districttype]` |
> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |

:::

> [!infobox]+
> # High Hill
> ![[4 Assets/high_hill.png]]
> ###### Info
> |||
> |---|---|
> |**Type** | Residential,Financial,Educational,Historical,Cultural |
> |**Location** | [[Faldara/Places/Vualio City\|Vualio City]] |

# **High Hill**

:::h
> [!recite]- Introduction
> A script for the GM to read when the party arrive to this location for the first time.

> [!metadata|map]- Map
> ```leaflet
> id: TBD
> image: [[high_hill_no_text.png]]
> lock: true
> recenter: true
> noScrollZoom: false
> ### Use this [LINK](https://docs.google.com/spreadsheets/d/1jKQxktYSUFcCJhEkAAPr1wMVBTqUdpEfA5XveUXI17I/edit?usp=sharing) to work out your map's bounds.
> ### bounds: [[0,0], [0, 0]] (Remove the ### and these parentheses with the content within from this line to enable the bounds)
> height: 600px
> width: 640px
> lat: 0
> long: 0
> minZoom: 1
> maxZoom: 6.5
> defaultZoom: 1
> zoomDelta: 0.5
> unit: miles
> scale: 1
> darkMode: false
> ```

> [!metadata|location]- Locations
>  | Name | Aliases | Type | Organization(s) |
> | ---- | ------- | ---- | --------------- |
> 

> [!metadata|organizations]- Organizations
>  | Name | Aliases | Type |
> | ---- | ------- | ---- |
> 

> [!metadata|characters]- Characters
>  | Name | Aliases | Occupations | Organizations |
> | ---- | ------- | ----------- | ------------- |
> 

> [!metadata|rumour]- Rumours
>  | Name | Accuracy | Notes |
> | ---- | -------- | ----- |
> 

:::

## Overview 

The High Hill district is the most prestigious part of [[Faldara/Places/Vualio City\|Vualio]], rising on elevated ground west of [[Faldara/Places/Kruma River\|the river]]. Nobles, high-ranking officials, and the royal family reside here in opulent estates, hidden behind high walls and intricate gardens.

Castle of Vualio: The Castle of Vualio sits in the middle of High Hill, dominating the skyline. It is a grand structure of pale stone, with spires that reach toward the sky. The castle serves as the seat of [[Reĝo Verkom]] and the royal family, as well as a central hub of [[Faldara/Groups/Vualio\|government]] and administration.

Noble Estates: The sprawling manors of [[Faldara/Groups/Nobility\|the nobility]], each a testament to wealth and power, dot the district. The [[Faldara/Groups/Decidantoj]], as well as other influential figures, call this district home.

Temples to [[Faldara/People/Vual]]: High Hill is also home to the grandest temples dedicated to Vual and [[Faldara/Groups/The Masked Ones]], where the nobility come to worship and seek guidance from the Decidantoj.

:::h
## Keyed Locations

> [!kirk|info] Prompt (Remove me)
Develop detailed descriptions for the keyed locations within the district. Define each area, within the district with distinct characteristics. Include information on the purpose, size, architectural style, notable features, and potential interaction within each area. Describe the ambiance, significance, potential activities, or any interactive elements that might engage the inhabitants or visitors. How does each keyed location contribute to the district's identity and offer potential for storytelling or exploration?

### Example


## Current Events

> [!kirk|info] Prompt (Remove me)
> Zoom into the present moment within this district. What's currently unfolding within its bounds? Describe ongoing developments, changes, or challenges affecting the district. Are there new projects, social shifts, economic changes, or cultural movements making waves? Furthermore, what are the immediate concerns or goals specific to this district? How are these current events shaping the daily life and future trajectory of this area within the larger settlement?

## History

> [!kirk|info] Prompt (Remove me)
> Uncover the historical narrative woven into the fabric of this district. Trace its origins, significant events, and transformations that have shaped its identity over time. What were the founding elements that led to the establishment of this district? Detail the key milestones, shifts in demographics, architectural changes, or impactful events that have influenced its development. How has the district evolved from its inception to its present-day form, and what historical legacy does it carry within the settlement?

## Notes

:::