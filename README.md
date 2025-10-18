# Temperature Converter

A simple web-based temperature converter that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin.

## Features

- Convert temperature from Celsius to Fahrenheit and Kelvin.
- Convert temperature from Fahrenheit to Celsius and Kelvin.
- Convert temperature from Kelvin to Celsius and Fahrenheit.
- Real-time conversion while typing input.
- Reset button to clear all inputs.
- Clean and responsive UI design with CSS styling.

## Technologies Used

- HTML for structure and input forms.
- CSS for styling the layout, buttons, and inputs.
- JavaScript for the conversion logic and event handling.

## Installation

1. Clone or download this repository to your local machine.
2. Open the `temp.html` file in a modern web browser.

## Usage

1. Enter a temperature value in any of the three input fields: Celsius, Fahrenheit, or Kelvin.
2. The other two fields will automatically update with converted values.
3. Use the "Reset" button to clear all fields.

## Project Structure

- `temp.html` — Contains the HTML markup.
- `temp.css` — Stylesheet for UI design.
- `temp.js` — JavaScript file handling the temperature conversion logic.

## How it Works

The conversion formulas used in the JavaScript file are:

- Celsius to Fahrenheit: \(F = C \times \frac{9}{5} + 32\)
- Celsius to Kelvin: \(K = C + 273.15\)
- Fahrenheit to Celsius: \(C = (F - 32) \times \frac{5}{9}\)
- Kelvin to Celsius: \(C = K - 273.15\)

Input event listeners update the other temperature fields dynamically to reflect the accurate conversions.

## License

This project is open source and free to use.

