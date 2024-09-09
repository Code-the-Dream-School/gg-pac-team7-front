## Project Overview
**Name**: Node/React Practicum Front-End  
**Description**: This project is a React-based web application that connects volunteers with ecological and environmental protection programs. The frontend is built using modern web technologies and provides an easy-to-use interface for users to explore opportunities and get involved in ecological initiatives.

## Technology Stack

- **React**: A JavaScript library for building user interfaces.
- **Vite**: For fast and efficient build tooling.
- **React Router**: For handling navigation between different pages.
- **Tailwind CSS**: A utility-first CSS framework for quickly styling components.
- **Heroicons**: For adding icons throughout the application.
- **EmailJS**: Used to handle form submissions and send emails directly from the frontend.
- **Google Maps API**: To display maps and show the location of volunteer opportunities.

## Custom Components

The project uses several reusable custom components to ensure consistent design and structure throughout the app.

#### Content сontainer:
This element is implemented using the **ContentContainer** component. It is used to wrap content with consistent padding, max-width, and an optional heading.

```jsx
import ContentContainer from "../components/ContentContainer";

function ContactUs() {
  return (
    <ContentContainer heading="Contact Us">
      <p className="mb-4">
        Text...
      </p>
    </ContentContainer>
  );
}

export default ContactUs;
```
**Props**:
`heading`: Optional. The heading text to be displayed at the top of the container.
`className`: Optional. Additional classes to customize the container's styles.
`children`: Required. The content to be wrapped inside the container.

---

#### Button: 
This element is implemented using the **Button** component. It can be used to create buttons with consistent styling across the application.

```jsx
import Button from "../components/Button"; 

<Button>Sample Button</Button>
```
**Props**:
`type`: Optional. Specifies the type of the button (e.g., "submit", "reset", "button").
`children`: Required. The content to be displayed inside the button.
`className`: Optional. A string of additional CSS classes to apply.
`...props`: Optional. Any other valid attributes or event handlers.

---

#### Link: 

This element is implemented using the **BaseLink** component. It creates consistent links throughout the application.

```jsx
import BaseLink from "../components/BaseLink";

<BaseLink to="/">Sample Link</BaseLink>
```

**Props**:
`to`: Required. The destination URL for the link.
`children`: Required. The content to be displayed inside the link.
`className`: Optional. A string of additional CSS classes to apply.

---

#### Input: 

This element is implemented using the **InputField** component. Note: This component is specifically designed for input fields where the type attribute is used for textual data entry (e.g., "text", "email", "password"). It is not suitable for input types such as "button", "checkbox", etc.



```jsx
import InputField from "../components/InputField";
              
<InputField label="Email" id="email" type="email" placeholder="Placeholder" />
```

**Props**:
`label`: Required. The label text for the input field.
`id`: Required. The id attribute for the input element.
`type`: Optional. The type of the input (e.g., "text", "email", "password").
`placeholder`: Optional. The placeholder text for the input field.
`hint`: Optional. A hint text displayed below the input field.
`className`: Optional. A string of additional CSS classes to apply.

---

#### Alert: 

This element is implemented using the **Alert** component. It displays alerts with support for an optional error type. If no type is specified, the alert defaults to success.

```jsx
import Alert from "../components/Alert";
              
<Alert title="Success">Sample success message</Alert>
<Alert type="error" title="Error">Sample error message</Alert>
```

**Props**:
`type`: Optional. Specifies the type of alert. If set to error, the alert will be styled accordingly. If omitted, the alert defaults to success.
`title`: Optional. The title of the alert.
`children`: Optional. The content to be displayed inside the alert.

---

## Setting up local development environment

1. Clone this repository to the folder that was already created for both the front-end and back-end repos
2. Run `npm install` to install dependencies
3. Pull the latest version of the `main` branch (when needed)
4. Run `npm start` to start the development server
5. Open http://localhost:3000 with your browser to see the data received the back-end server.
6. Now you have your front-end and back-end running locally!

#### Running the front-end server in Visual Studio Code
Note: In the below example, the group's front-end repository was named `bb-practicum-team1-front` and the back-end repository was named `bb-practicum-team-1-back`.  Your repository will have a different name, but the rest should look the same.
![vsc running](images/front-end-running-vsc.png)

#### Running the front-end server in the browser
![browser running](images/front-end-running-browser.png)
