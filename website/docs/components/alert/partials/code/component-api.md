Here is the API for the component:

<Doc::ComponentApi as |C|>
  <C.Property @name="type" @required="true" @type="enum" @value="page, inline, compact">
    Sets the type of alert.
  </C.Property>
  <C.Property @name="color" @type="enum" @value="neutral, highlight, success, warning, critical" @default="neutral">
    Sets the color scheme for `background`, `border`, `title`, and `description`, which **cannot** be overridden. `color` results in a default `icon`, which **can** be overridden.
  </C.Property>
  <C.Property @name="icon" @type="string | false">
    Override the default `icon` name, which is determined by the `color` argument. You can use any [Flight](https://flight-hashicorp.vercel.app/) icon name or pass `false` for no icon.
  </C.Property>
  <C.Property @name="onDismiss" @type="function">
    The alert can be dismissed by the user. When a function is passed, the "dismiss" button is displayed.
  </C.Property>
  <C.Property @name="...attributes">
    `...attributes` spreading is supported on this component.
  </C.Property>
</Doc::ComponentApi>

#### Contextual components

Title, description, actions and generic content are passed into the alert as yielded components, using the `Title`, `Description`, `Button`, `Link::Standalone`, `Generic` keys.

<Doc::ComponentApi as |C|>
  <C.Property @name="<[A].Title>" @type="yielded component">
    It is a container that yields its content inside the `"title"` block (the content inherits its style). It accepts `...attributes` spreading.
  </C.Property>
  <C.Property @name="<[A].Description>" @type="yielded component">
    It is a container that yields its content inside the `"description"` block (the content inherits its style). It accepts `...attributes` spreading. It can be used to pass content more complex than a simple string (eg. logic/conditionals, HTML elements, other Ember components, etc.) inside the "description" block. _Notice: for a few simple HTML elements (like `strong`, `em`, `a`, `code/pre`) we apply styling. If you use other elements you will need to take care of styling them accordingly._
  </C.Property>
  <C.Property @name="<[A].Button>" @type="yielded component">
    It is a yielded `HDS::Button` component, so it exposes exactly [the same API of the `Button` component](/components/button/), apart from the `@size` argument that is pre-defined to be `small`, and the `@color` argument that accepts only `secondary` or `tertiary`.
  </C.Property>
  <C.Property @name="<[A].Link::Standalone>" @type="yielded component">
    It is a yielded `HDS::Link::Standalone` component, so it exposes exactly [the same API of the `Link::Standalone` component](/components/link/standalone/), apart from the `@size` argument that is pre-defined to be `small`.
  </C.Property>
  <C.Property @name="<[A].Generic>" @type="yielded component">
    It is a very simple component that yields its content. _Notice: generic the content will appear at the bottom, after title, description and actions, and the developer will need to take care of spacing, layout and styling of the custom content in this case._ **Important**: this method should be used only in special cases and as an escape hatch. If you find yourself in need to use it, we suggest to speak with the design system team to check that the solution is conformant and satifies the accessibility criteria.
  </C.Property>
</Doc::ComponentApi>

For more details about how to invoke these contextual components see the sections ["How to use > Description"](#how-to-use-description), ["How to use > Actions"](#how-to-use-actions) and ["How to use > Generic content"](#how-to-use-generic) below.