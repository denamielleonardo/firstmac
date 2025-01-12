# Project Setup

## Prerequisites

Before setting up the project, ensure you have the following installed on your system:

- **Angular** version 12.2.4 or higher
- **Node** version v14.15.0 or higher

## Repository Setup

1. Clone the repository:
   git clone https://github.com/denamielleonardo/firstmac.git

2. After cloning, switch to the development branch:
   git checkout development

3. Install the required dependencies:
   npm install

4. Start the development server:
   ng serve

# Architecture Overview

## **Pipes for Sorting, Calculation, and Searching**

The project utilizes **Angular Pipes** to manage some of the key functionalities such as:

- **Sorting**: A custom pipe is implemented to handle the sorting of product lists based on various criteria like price, name, or discount.
- **Calculation**: Pipes are used for calculating prices and discounts.
- **Searching**: Another pipe is used to filter or search through the product list by various attributes like name.

## **State Management with NgRx**

The project uses **NgRx** for state management to handle the global state in the application. The key NgRx packages used include:

- **@ngrx/store**: To manage the app's state in a single store.
- **@ngrx/effects**: For managing side effects and asynchronous actions (e.g., API calls).
- **@ngrx/entity**: To simplify handling entities such as products.
- **@ngrx/router-store**: To sync the router state with the NgRx store.

## **Unit Testing with Jasmine and Karma**

The project utilizes **Jasmine** for writing unit tests and **Karma** as the test runner. The key configurations for testing are:

- **Jasmine**: Used for writing test cases and assertions.
- **Karma**: Used to run the tests and integrate with various browsers.

To run the unit tests, simply execute:
ng test
