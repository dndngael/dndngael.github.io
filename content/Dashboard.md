---
selectedAdventure: "[[Candlekeep Mysteries]]"
---
# Ongoing Adventures
```base
filters:
  and:
    - file.folder.startsWith("1 Adventure")
    - file.tags.contains("adventure")
views:
  - type: cards
    name: View

```
---
### Adventure: `INPUT[suggester(optionQuery(#adventure), useLinks(partial)):selectedAdventure]`
> [!person]+ #### Player Characters
> ```base
> filters:
>   and:
>     - file.path.startsWith("1 Adventure")
>     - adventure == this.selectedAdventure
>     - file.tags.contains("pc")
> views:
>   - type: cards
>     name: Player Characters
>     order:
>       - file.name
>       - adventure
> 
> ```

> [!line]+ #### Recent Notes
> ```base
> views:
>   - type: cards
>     name: Table
>     sort:
>       - property: file.mtime
>         direction: DESC
>     limit: 5
>     cardSize: 120
> 
> ```
