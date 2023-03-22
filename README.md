# Health Statisticians application

The aim of this exercise is to create single web application that will consume data from remote API and will render pulled data in charts

# Image of mockup

Below an aproximate of how the final result should looks like:

![Mockup of final page](/documentation/mock-ui.png)

# Tasks

Divided in two types:

### Objective tasks

- [x] The page will consist from page header and content area
- [x] Page header contains only title
- [x] Content area contains two cards with charts (any chart type is possible) with dummy avatar and dummy button as per picture
- [x] Above charts, there is a space (a panel) for Page title and dummy buttons (as per design, without any logic behind)
- [ ] [OPTIONAL] Add a heart icon (not on design below/mockup!) to cards which allows visitors to select card as a favorite (use [trpc](https://trpc.io/) for this feature)
- [ ] Deploy application on [vercel](https://vercel.com/) (free tier, custom domain not required)
- [ ] Share url for live demo. (?? ask about this task)

### Learning tasks

- [x] Use [ant.d](https://ant.desing) library for UI and components on the page
- [x] Use remote API for data - [https://coronavirus.data.gov.uk/details/developers-guide/main-api](https://coronavirus.data.gov.uk/details/developers-guide/main-api)
- [x] Use [g2.antv](https://g2.antv.vision/en/examples/gallery) for render charts (any chart types can be used, up to your selection)
- [ ] [OPTIONAL] Use [trpc](https://trpc.io/) library for backend services and endpoints
- [ ] use db up to your selection (eg., https://railway.app/)

### Issues

- [ ] Hover change color of all action icons on Card

### Nice to have

- [ ] Update fonts, check handling fonts.
- [ ] @antv/g2 is a heavy package, see how to make it light.
- [ ] Add Loader component -spinners- to be displayed while charts are loading.
- [ ] Unify styles.
