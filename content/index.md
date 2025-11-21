---
{"publish":true,"title":"index","created":"2025-11-21T00:02:01.612-06:00","modified":"2025-11-21T13:48:41.635-06:00","cssclasses":""}
---

# Choose Your Adventure

| [[Faldara/Faldara]] | [[The Forgotten Realms]] |
|:-----------:|:------------------------:|
## Datacore Test
```datacorejsx
// A list of columns to show in the table.
const COLUMNS = [
    { id: "Name", value: page => page.$link },
    { id: "Title", value: page => page.value("title") }
];

return function View() {
    // Selecting `#game` pages, for example.
    const pages = dc.useQuery("@page and #Deity");

    // Uses the built in table component for showing objects in a table!
    return <dc.Table columns={COLUMNS} rows={pages} />;
}
```

```datacorejsx
// All datacore views should return a React component; in practice, this is going to be
return function View() {
    const pages = dc.useQuery("@page").length;

    return <p>You have {pages} pages in your vault!</p>;
}
```