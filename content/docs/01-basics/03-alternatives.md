---
title: 'Alternatives'
---

## Alternatives

Preset isn't the first tool scaffolding tool to see the day.

Alternatives are available, each having their pros and cons. But Preset is the first one to actually focus on **modifying existing projects**. The projects listed below are scaffolding tools that you may want to know about.

### SAO

[SAO](https://github.com/saojs/sao) inspired Preset quite a bit. It looks similar on paper, but there is a fundamental difference: SAO was made for scaffolding, while Preset is meant for editing already scaffolded projects—even though it can do both.

While SAO is useful, it doesn't answer the same needs. It is closer to [Yeoman](http://yeoman.io/).

### Yeoman

[Yeoman](http://yeoman.io/) is another scaffolding tool with a great and mature ecosystem. Though, similarly to SAO, it does not answer to the same needs.

The main con with Yeoman is that it is quite complex to dive into. Additionally, generators need to be manually installed—Yeoman does not do it for you.

### Plop

[Plop](https://github.com/plopjs/plop) is a generator that is meant to be installed as a project dependency. Plop looks for a `plopfile` in the project it is installed, which defines all of the generators it has access to.

Everything is local to a project... which means Preset could actually be used to scaffold a `plopfile`.
