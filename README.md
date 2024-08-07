# Arrays with Names

This project is a simple HTML page that displays a list of names and allows users to add new names or delete all names. The page is styled using embedded CSS and includes JavaScript for interactivity.

## Features

- Display a list of predefined names.
- Add new names to the list using a form.
- Delete all names from the list with a button click.
- Print a mark sheet for a name, date, and marks entered by the user.

## Files

- `index.html`: The main HTML file containing the structure of the page.
- [`style.css`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%20HW%2FADD%20TO%20MY%20PORTFOLIO%2FArrays%202%2Fstyle.css%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\tumba\OneDrive\Desktop\MIT HW\ADD TO MY PORTFOLIO\Arrays 2\style.css"): The CSS file for styling the page (linked in the HTML).
- [`script.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%20HW%2FADD%20TO%20MY%20PORTFOLIO%2FArrays%202%2Fscript.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Users\tumba\OneDrive\Desktop\MIT HW\ADD TO MY PORTFOLIO\Arrays 2\script.js"): The JavaScript file for adding interactivity (linked in the HTML).

## HTML Structure

The HTML file includes the following key elements:

- A container div with the class [`container`](command:_github.copilot.openSymbolFromReferences?%5B%22container%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Ctumba%5C%5COneDrive%5C%5CDesktop%5C%5CMIT%20HW%5C%5CADD%20TO%20MY%20PORTFOLIO%5C%5CArrays%202%5C%5CArrays2.html%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%2520HW%2FADD%2520TO%2520MY%2520PORTFOLIO%2FArrays%25202%2FArrays2.html%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%20HW%2FADD%20TO%20MY%20PORTFOLIO%2FArrays%202%2FArrays2.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A16%7D%7D%5D%5D "Go to definition") for styling.
- A heading (`<h1>`) and a paragraph (`<p>`) for the title and description.
- An unordered list (`<ul>`) with the id [`names-list`](command:_github.copilot.openSymbolFromReferences?%5B%22names-list%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Ctumba%5C%5COneDrive%5C%5CDesktop%5C%5CMIT%20HW%5C%5CADD%20TO%20MY%20PORTFOLIO%5C%5CArrays%202%5C%5CArrays2.html%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%2520HW%2FADD%2520TO%2520MY%2520PORTFOLIO%2FArrays%25202%2FArrays2.html%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%20HW%2FADD%20TO%20MY%20PORTFOLIO%2FArrays%202%2FArrays2.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A62%2C%22character%22%3A1%7D%7D%5D%5D "Go to definition") to display the names.
- A form (`<form>`) with an input field and a submit button to add new names.
- A button to delete all names.

## CSS Styling

The embedded CSS styles the various elements on the page:

- The container is styled with a flexbox layout, centered content, and a black background.
- The heading is styled with a black background, white text, and a border.
- The input field and buttons are styled with padding, border-radius, and specific colors.
- The names list items are styled with bold text and a specific color.

## JavaScript Functionality

The JavaScript code provides the following functionality:

- [`getNames()`](command:_github.copilot.openSymbolFromReferences?%5B%22getNames()%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Ctumba%5C%5COneDrive%5C%5CDesktop%5C%5CMIT%20HW%5C%5CADD%20TO%20MY%20PORTFOLIO%5C%5CArrays%202%5C%5CArrays2.html%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%2520HW%2FADD%2520TO%2520MY%2520PORTFOLIO%2FArrays%25202%2FArrays2.html%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%20HW%2FADD%20TO%20MY%20PORTFOLIO%2FArrays%202%2FArrays2.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A86%2C%22character%22%3A17%7D%7D%5D%5D "Go to definition"): Returns an array of predefined names.
- [`printMarkSheet(name, date, marks)`](command:_github.copilot.openSymbolFromReferences?%5B%22printMarkSheet(name%2C%20date%2C%20marks)%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Ctumba%5C%5COneDrive%5C%5CDesktop%5C%5CMIT%20HW%5C%5CADD%20TO%20MY%20PORTFOLIO%5C%5CArrays%202%5C%5CArrays2.html%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%2520HW%2FADD%2520TO%2520MY%2520PORTFOLIO%2FArrays%25202%2FArrays2.html%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%20HW%2FADD%20TO%20MY%20PORTFOLIO%2FArrays%202%2FArrays2.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A90%2C%22character%22%3A17%7D%7D%5D%5D "Go to definition"): Logs the name, date, and marks to the console.
- [`addName()`](command:_github.copilot.openSymbolFromReferences?%5B%22addName()%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5Ctumba%5C%5COneDrive%5C%5CDesktop%5C%5CMIT%20HW%5C%5CADD%20TO%20MY%20PORTFOLIO%5C%5CArrays%202%5C%5CArrays2.html%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%2520HW%2FADD%2520TO%2520MY%2520PORTFOLIO%2FArrays%25202%2FArrays2.html%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Ftumba%2FOneDrive%2FDesktop%2FMIT%20HW%2FADD%20TO%20MY%20PORTFOLIO%2FArrays%202%2FArrays2.html%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A96%2C%22character%22%3A17%7D%7D%5D%5D "Go to definition"): Prompts the user to enter a name, date, and marks, and prints the mark sheet.
- Event listeners for the form and delete button to handle adding and deleting names.

## Usage

1. Open the `index.html` file in a web browser.
2. The page will display a list of predefined names.
3. Use the input field and "Add person information" button to add new names to the list.
4. Click the "Delete All Names" button to clear the list of names.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
