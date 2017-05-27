### Bug in IE11

IE11 bug where production builds throw an error when using "transform-react-inline-elements"
Development builds work fine due to the fact that these transforms do not run in dev

Try `yarn run prod` for production builds
Try `yarn run dev` for development builds

`open index.html` to test the app
