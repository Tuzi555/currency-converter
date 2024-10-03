# CZK Currency Convertor

A simple currency convertor using exchange rates from the CNB

## Tech Stack

-   bun - as a package manager
-   vite - dev server and bundling
-   react - ui framework
-   tanstack query - async state manager
-   styled-components - styling

### Note on forms

There is one simple form in this project. I did not bring in any library to handle the form just because it felt as an overkill. Instead I made it a simple uncontrolled form to leverage the browser form APIs.

As for the styling of the select options I left it as a default for every browser to render its version. I did not want to go through the hustle of creating my own select options menu from scratch and bringing in a headless ui library for one element felt also as an overkill.
