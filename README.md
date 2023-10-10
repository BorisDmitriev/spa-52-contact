# SPA-React-Component-ContactForm

### Exercise

Create a React component called `ContactForm` that includes a form for entering name, email address, and message. The component should meet the following requirements:

1.  All input fields must be controlled components that reflect the state of the component. Labels should read: "Name", "Email" and "Message".
2.  When the user submits the form, an alert box should be displayed that includes the entered name, email address, and message.
Format: 
```
Name: xyz
Email: xyz
Message: xyz
```
Note: A line break (new line) inside an alert/string can be achieved with `\n`.

4.  When the user submits the form, the input fields should be reset.
5.  When the user opens the form, the input field for name should be automatically focused.
6.  When the user submits the form, an API request should be sent to `https://reqres.in/api/users` to save the input. Use the `fetch` function to send the request.

### Tips

1.  Use the `useState` hook to store the state of the component.
2.  Use the `useRef` hook to create a reference to the input field for name.
3.  Use the `handleChange` function to update the state of the component when the input fields change.
4.  Use the `handleSubmit` function to display the alert box, reset the input fields, and send the API request.
5.  Use and `useEffect` to automatically focus the input field for name.
