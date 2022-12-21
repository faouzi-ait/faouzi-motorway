# Motorway UI Test

### 1. User Interface

The UI uses a responsive 3 columns grid layout (css grid) that re-adjusts to a 2 and then a single column as the screen size gets smaller.

The modal is a custom made & responsive CSS react component taking 2 props (current item selected and close function).

I also used axios as a library along with async await features to refactor and optimize the API calls.

### 2. API Calls Performance

I used the existing endpoint to make a second one without the timeout function. I then used the console.time & console.timeEnd functions to conpare the two endpoints. It demonstrated that the second endpoint is faster than the first one.

### 3. Forms

The form uses a couple of bootstrap classes for the very basic alignment of the form items, the form was also built using custom re-usable components like the gallery.

The form validation is done using a third party library called react-hook-form, it is a very efficient and flexible library that streamlines the form validation process.

## Notes

You can use the chrome browser to test the application.

Thank you.
