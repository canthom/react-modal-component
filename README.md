# A simple Modal component for React

[Looking for the lastest version ?](https://github.com/canthom/react-modal-component)

## Prerequisites

- [NodeJS](https://nodejs.org/en/) (version 16.8 or better)
- [NPM](https://www.npmjs.com/) (version 7.22.0 or better)
- [React](https://fr.reactjs.org/) (version 18 or better)

## How to install the Modal to your project

- Inside your project, the `npm i modal-comp-for-react` command will allow you to install the component.
- In your App, you need to declare a state for the modal in the parent element.
  ```
  const [popupActive, setPopupActive] = useState(false);
  ```
- Then, you can import the element from the node module
  ```
  import { Popup } from 'modal-comp-for-react';
  ```
- When you create the <Popup /> component in your app, you need two mandatories props
  ```
  showPopup={popupActive}
  closePopup={() => setPopupActive(false)}
  ```

## How to customize the Modal ?

- You can pass any children you want inside the component ?
  ```
  <Popup
    showPopup={popupActive}
    closePopup={() => setPopupActive(false)}
    >
      Employee Created!
  </Popup>
  ```
- By default, there is an overlay behind the popup. You can remove it by changing the overlay props to false
  ```
  <Popup
   showPopup={popupActive}
   closePopup={() => setPopupActive(false)}
   overlay={false}
   >
     Employee Created!
  </Popup>
  ```
