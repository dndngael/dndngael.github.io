---
{"publish":true,"created":"2025-11-25T23:26:41.414-06:00","modified":"2026-03-04T22:21:49.867-06:00","tags":["#Rumour","#Quest"],"cssclasses":""}
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
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>> **Subject** | `INPUT[inlineListSuggester(optionQuery("Campaign"), useLinks(partial)):subject]` |
>> **Origin** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):origin]` |
>> **Related Sessions** | `INPUT[inlineListSuggester(optionQuery(#SessionNote AND !"z_Templates"), useLinks(partial)):session]` |
>> **Accuracy** | `INPUT[RumourAccuracy][:accuracy]` |
>> **Adventure** | `INPUT[Null][suggester(optionQuery(#Adventure AND !"z_Templates"), useLinks(partial)):adventure]` |
>> **Status** | `INPUT[Status][:status]` |
>> **Session Completed** | `INPUT[Null][suggester(optionQuery(#SessionNote AND !"z_Templates"), useLinks(partial)):session]` |
>> **Outcome** |  `INPUT[textArea:outcome]` |

:::

> [!infobox]+
> #### Rumor Info
> |||
> |---|---|
> |**Subject** | [[Faldara/Places/Tur'Farinil\|Tur'Farinil]] |
> |**Origin** | [[Faldara/People/Farinia\|Farinia]] |
> |**Related Session** | [[1 Adventures/Adventures in Vualio/SPP3 4eva/Sessions/Session 11\|Session 11]] |
> |**Adventure** | [[5 Templates/Adventure\|Adventure]] |
> |**Status** | ⏳ |
> 

:::h
**Accuracy**: `=this.accuracy`

:::

# **The Riddle of Tur'Farinil**

The loom is tangled. Threads fray before they are woven
You seek what is hidden, but the path is broken
One who is lost remembers the altar
One who is blind sees the way
One who believes must be unmade
Return to the root and the door shall yield

:::h
#### Outcome
`=this.outcome`

:::

> [!metadata|sessionlogs] Related Sessions
> | Title | SessionDate | Summary |
> | ----- | ----------- | ------- |
> 
