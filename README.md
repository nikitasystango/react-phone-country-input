# React Phone Country Input

This npm is used for getting phone code of countries with its phone input mask.
## Install

```bash
npm i -S react-country-input
yarn add react-country-input
```
---

# Using it
```js live=true
<ReactCountryInput />
```
## Usage
You need to import ReactCountryInput from package react-country-input with the props using bellow

Code Example:
```js live=true
import ReactCountryInput from "react-country-input";
<ReactCountryInput
  phoneNumber={phoneNumber}
  setPhoneNumber={setPhoneNumber}
  countryCode={countryCode}
  setCountryCode={setCountryCode}
  placeholder={placeholder}
/>
```
### Component Props

Properties used to customise the rendering:

| Name | Type | Description |
|:---- | ---- | ------ |
| phoneNumber | string | showing input phone number with phone input mask |
| setPhoneNumber | func | callback function return phone input value with masking |
| countryCode | string | selected country phone code.
| setCountryCode | func | callback function return selected country phone code in string |
| placeholder | string | *optional* ,change the value of phone input placeholder |
| classname | string | *optional* ,change the phone input styling |
## Notes on Requirements
At least `React@16.4.1` is required due to `hooks` usage in the dependency 

## Notes

Pre `1.0.0` and `React < 16.4.1` support details in [0.14.0](https://github.com/dozoisch/react-google-recaptcha/tree/v0.14.0).

[travis.img]: https://travis-ci.org/dozoisch/react-google-recaptcha.svg?branch=master
[travis.url]: https://travis-ci.org/dozoisch/react-google-recaptcha
[npm.img]: https://badge.fury.io/js/react-google-recaptcha.svg
[npm.url]: http://badge.fury.io/js/react-google-recaptcha
[npm.dl.img]: https://img.shields.io/npm/dm/react-google-recaptcha.svg
[npm.dl.url]: https://www.npmjs.com/package/react-google-recaptcha
[deps.img]: https://david-dm.org/dozoisch/react-google-recaptcha.svg
[deps.url]: https://david-dm.org/dozoisch/react-google-recaptcha

[reCAPTCHA]: https://developers.google.com/recaptcha/docs/display
[signup]: http://www.google.com/recaptcha/admin
[docs]: https://developers.google.com/recaptcha
[docs_theme]: https://developers.google.com/recaptcha/docs/faq#can-i-customize-the-recaptcha-widget
[js_api]: https://developers.google.com/recaptcha/docs/display#js_api
[rb]: https://github.com/react-bootstrap/react-bootstrap/
[reCAPTCHA secure-token]: https://developers.google.com/recaptcha/docs/secure_token
[reCAPTCHA hl]: https://developers.google.com/recaptcha/docs/language
## License
[MIT](http://vjpr.mit-license.org)