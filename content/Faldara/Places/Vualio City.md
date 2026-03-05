---
{"publish":true,"aliases":"Vualio","created":"2025-11-25T23:26:52.641-06:00","modified":"2026-03-04T22:21:52.785-06:00","tags":["#Location","#Settlement"],"cssclasses":""}
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
>> **Pronounced** |  `INPUT[textArea:pronounced]`
>> **Aliases** | `INPUT[list:aliases]` |
>> **Type** | `INPUT[SettlementType][:settlementtype]` |
>> **Terrain** | `INPUT[Terrain][inlineListSuggester:terrain]` |
>> **Defenses** | `INPUT[Defense][:defense]`
>> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>
>> [!metadata|metadataoption]- Demographics
>> #### Demographics
>>  |
>> ---|---|
>> **Dominion** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
>> **Rulers** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):ruler]` |
>> **Leaders** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):leader]` |
> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Government Type** | `INPUT[GovernmentType][inlineListSuggester:governmenttype]` |
>> **Population** |  `INPUT[textArea:population]`
>
>> [!metadata|metadataoption]- Commerce
>> #### Commerce
>>  |
>> ---|---|
>> **Imports** | `INPUT[Goods][inlineListSuggester:import]` |
>> **Exports** | `INPUT[Goods][inlineListSuggester:export]` |

::: 

> [!infobox]+
> # Vualio City
> ![[4 Assets/vualio no districts.png]] ![[4 Assets/vualio districts.png]]
> ###### Info
> |||
> |---|---|
> |**Aliases** | Vualio |
> |**Type** | Metropolis |
> |**Terrain** | Urban,River,Farmland |
> |**Defenses** | Strong |
> |**Location** | [[Faldara/Places/Miro Duchy\|Miro Duchy]],[[Faldara/Places/Faldara\|Faldara]] |
> ###### Demographics
> |||
> |---|---|
> |**Dominion** | [[Faldara/Groups/Vualio\|Vualio]] |
> |**Government Type** | Theocracy,Monarchy |
> |**Population** | 50,000 |

# **Vualio City** <span style="font-size: medium">"voo-AHL-ee-oh"</span>

:::h
> [!recite]- Introduction
> A script for the GM to read when the party arrive to this location for the first time.

> [!metadata|map]- Map
> ```leaflet
> ### Video Tutorial: https://youtu.be/8MI5JyiH-Wo?si=Maf5DPyZYGhtAPU1
> id: TBD
> image: [[vualio no districts.png]]
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

:::

> [!metadata|district]- Districts
>  | Name | Aliases | Type |
> | ---- | ------- | ---- |
> 

> [!metadata|location]- Locations
>  | Name | Aliases | Type | Location |
> | ---- | ------- | ---- | -------- |
> 

> [!metadata|organizations]- Organizations
>  | Name | Aliases | Type |
> | ---- | ------- | ---- |
> 

> [!metadata|characters]- Characters
>  | Name | Aliases | Occupations | Organizations |
> | ---- | ------- | ----------- | ------------- |
> 

:::h
> [!metadata|rumour]- Rumours
>  | Name | Accuracy | Notes |
> | ---- | -------- | ----- |
> 

:::

## Overview

Vualio, the heart of the [[Faldara/Groups/Vualio\|Kingdom of Vualio]], stands proudly inland, positioned along the flow of the [[Faldara/Places/Kruma River]] as it winds from the [[Faldara/Places/Mistwind Forest]] in the north through the city and down toward the [[Faldara/Places/Shadowbark Copse]] in the southwest. Encircled by natural beauty, Vualio is a city of contrasts: ancient traditions and religious fervor meet with thriving commerce and stark divisions between the wealthy and the impoverished.

The city is organized in circular pattern, with prominent gates and bridges that serve as entry points into the different districts. The city walls are tall and imposing, reinforced after years of maintaining control and security in the kingdom. A large farmland region encircles the city from the east to the southwest, vital for feeding the populace. However, within the walls, each district reflects a unique aspect of Vualio’s culture and society.

## Life in Vualio

Vualio is a city marked by contrasts. In the western part of the city, wealth and power are concentrated, with the nobility and [[Faldara/Groups/The Masked Ones\|clergy of Vual]] living in splendor. To the east, the bustling markets of the [[Faldara/Places/Lowgates]] and the spiritual serenity of [[Faldara/Places/Vual's Vale]] create a sense of vibrant, yet controlled, life.

:::h
However, beneath this surface is tension. The South Slums fester in neglect, and the citizens there often feel alienated by the kingdom's rigid caste system and the dominance of The Masked Ones. Still, for most of the city's inhabitants, life is dictated by the rhythms of the seasons, the festivals of Vual, and the ever-present cycle of the masking ceremonies.

:::