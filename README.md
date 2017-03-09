# jPaginate

This is a jQuery plugin for paginating content in an html page. It's simple and very easy to use. It will paginate the children of a parent element. An example of the html syntax you have to use, is the following:

```html
<div class="pagination">
    <div class="pagination-item">
         any content here
     </div>
     <div class="pagination-item">
         any content here
     </div>
     <div class="pagination-item">
         any content here
     </div>
 </div>
```

## Usage

1. Load the jQuery library in your `<head>`:

  ```
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.4/jquery.min.js"></script>
  ```

2. Load the plugin, just before the closing `<body>` tag of the page you in which you want to use it.

  ```
  <script type="text/javascript" src="./jquery.jPaginate.js"></script>
  ```

3. Initialize the plugin on the element that you want to paginate

  ```javascript
  $('.element').jpaginate();
  ```

### Multiple instances

If you want to have more than one elements paginated in the same page, then give each one a unique id attribute and use that id as the selector. This way, you can set different options for each element.

```javascript
$('#element-1').jpaginate({
    items_per_page  : 2,
});

$('#element-2').jpaginate({
    items_per_page  : 3,
});
```

## Options

The plugin can be called with the following options:

Option             | Type    |  Default   | Description
:----------------- | ------- | :--------: | ------------------------------------
`pagination_class` | string  | pagination | The class for the pagination element
`items_per_page`   | int     |     5      | The number of items for each page
`prev_next`        | boolean |    true    | Show the previous and next controls
`prev_text`        | string  |    '«'     | Show the previous and next controls
`next_text`        | string  |    '»'     | Show the previous and next controls

An example with the default options:

```javascript
$( '.element' ).jpaginate( {
    pagination_class: "pagination",
    items_per_page  : 5,
    prev_next       : true,
    prev_text       : '«',
    next_text       : '»'
  } );
```
