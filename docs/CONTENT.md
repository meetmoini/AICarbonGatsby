# Content

## File Structure

All markdown files live inside of the `src/pages` folder and follow the site navigation. Please see related information regarding [modifying the navigation panel](#modifying-the-navigation-panel)

In general, follow these guidelines:

- Single pages should be placed in `src/pages` with an appropriate name,`design-system.mdx`, that resolves to an appropriate url, `site.com/design-system`.
  - Avoid nesting pages inside folders of the same name, this results in duplication in the url.
  - Do not: `./src/pages/design-system/design-system.mdx`. the resulting url configuration would need to be `path: /design-system/design-system` resulting in `site.com/design-system/design-system`.
  - It is possible to configure a section folder with an `index.mdx` file, but this is discouraged. It's easy to get lost in many open files all named `index.mdx`.
- Images used on the homepage, on multiple pages, or in components should be placed in `./src/images`.
  - Single pages (like `./src/pages/design-system.mdx`) utilizing images should also place their images in `./src/images`
- Section folders should have one `images` folder inside them. Images for _all containing pages_ should be housed here. This same logic applies to tabbed pages.

## Modifying the navigation panel

The left navigation is built from a file containing entries for each section and link.

### File location

```
src
├── data
   ├── nav-items.yaml
```

### Example

```yaml
- title: Design Principles
  pages:
    - path: /design-principles
- title: Team
  pages:
    - title: Designers
      path: /team/design-team
    - title: Design Disciplines
      path: /team/design-disciplines
    - title: Designer Onboarding
      path: /team/designer-onboarding
```

Note that the `path` set here is a direct representation of the URL. For this reason, we should not put content .mdx files inside a folder of the same name as the .mdx file.

## Frontmatter

The top of each markdown file has required frontmatter fields to display the header for the page.

```
---
title: Page title
tabs: ['Tab 1', 'Tab 2', 'Tab 3'']
---
```

Required fields are:

- `title`: The title of the page

Non-required fields are:

- `tabs`: An array of the page tabs (in the desired order), tab name should match markdown file name.

## Custom Markdown Components

The AI Applications Design website is built off the Gatsby theme [`gatsby-theme-carbon`](https://github.com/carbon-design-system/gatsby-theme-carbon). There is a selection of custom components available for use, view them on the `gatsby-theme-carbon` documentation website:

https://gatsby-theme-carbon.now.sh/

## Basic formatting

    ## This generates an H2 heading

    ### This generates an H3 heading

    #### This generates an H4 heading

    **This is bold text.**

    _This is italic text._

    This is a normal paragraph with a [link](http://www.link.com).

    > This is a block quote.

### Link

You can create an inline link by wrapping link text in brackets [ ], and then wrapping the URL in parentheses ( ).

`[AI Applications Design Site](https://ibm.biz/iot-design-site)`

If you need a link to open in a new window you will have to use standard html to target the new window.

`<a href="https://ibm.biz/iot-design-site" target="_blank">AI Applications Design Site</a></p>`

### Capitalization

We use the Carbon standard for capitalization, which is to use sentence-style capitalization for everything except proper names, such as product names. And everything means everything - page titles, section headers, column headers, and navigation items. You might spot some inconsistencies while we're developing the site, but please keep the stanard in mind when you contribute.

### Lists

    * This is a bulleted list
    * List item 2

    1. This is an ordered list
    2. List item 2

### Tables

To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. You can optionally add pipes on either end of the table.

Tip: Creating tables with hyphens and pipes can be tedious. To speed up the process, try using the [Markdown Tables Generator](http://www.tablesgenerator.com/markdown_tables). Build a table using the graphical interface, and then copy the generated Markdown-formatted text into your file.

    | COL 1      | COL 2   |  COL 3     |
    |------------|---------|------------|
    | Row 1A     | Row 1B  | Row 1C     |
    | Row 2A     | Row 2B  | Row 2C     |
    | Row 3A     | Row 3B  | Row 3C     |

### Code & syntax highlighting

We support inline code and code blocks.

    Inline `code` has `back-ticks` around it.


    ```
    Blocks of code are fenced by lines with three back-ticks

    ```
