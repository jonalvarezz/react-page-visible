# Page Visibility
There are two common approaches to know if your page is currently visible by the user: 
* [Focus event](https://developer.mozilla.org/en-US/docs/Web/Events/focus)
* [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API)

None of the approaches does cover all user cases. For instance, switching to a different application, in desktop enviroment, does not trigger the Visibility API but the focus event. In a mobile device is the opposite. [See difference table](https://page-visibility.now.sh/compat)

This demo was made to test the scenarios and differences between both approaches.

The implementation, which is a React Componener using render props, also introduces a new `active` status which is aimed to cover both approaches and give a consistent behaviour across browsers and mobile devices.

[See demo](https://page-visibility.now.sh)

## Development
This app is powered by [Next.js](https://nextjs.org).

Install dependencies
```
yarn
```

Start dev server:
```
yarn && yarn dev
```
