# react-native-tech-test

This test is aimed at software developers with a background in React Native.

## Submitted solution


|List screen|Details screen|
|----|----|
|![simulator_screenshot_176A7A7F-B2D6-490D-89E6-8ED6A317AB6F](https://github.com/user-attachments/assets/b8d0cebb-380e-450a-96b3-bf99c34e9f4c)|![simulator_screenshot_87EDF512-3AA2-4145-A7B3-294DFEBFA359](https://github.com/user-attachments/assets/6165cc6d-30f5-4f10-ac40-013b41853c24)|

For a summary of the approach and intermediary screenshots please see the [closed issues](https://github.com/stefankreitmayer/react-native-tech-test/issues?q=is%3Aissue+is%3Aclosed).

### Installation

This project uses `bun` as opposed to `yarn` or `npm`.

```shell
# Install bun package manager
curl -fsSL https://bun.sh/install | bash
```

More info on installing bun at [documentation](https://bun.sh/docs/installation).

To install the dependencies:

```shell
bun install
```

### Running the app

The following command opens the app in Expo Go (tested on iOS simulator)

`bun start`

### Running the tests

Run the following command to execute the tests:

`bun run test`

(Not to be confused with `bun test`, which uses Bun's internal test framework instead of Jest.)

To clear the Jest cache before running the tests:

`bunx jest --clearCache && bun run test`

---

original README below

***

## Setup

Please create a fork of this repo and make sure it is public. Click the Fork button in the top right of the repo, as shown in this image.

![Screenshot 2023-06-16 at 15 55 52](https://github.com/asquareduk/react-native-tech-test/assets/17218062/daa4f402-480a-47c5-9a9f-95728238575d)

## Introduction

This challenge will require you to use TypeScript and React Native to build out a couple of screens that display data from an API.

The API we will use for this (because it's free and doesn't require any authentication) is [TheCocktailDB API](https://www.thecocktaildb.com/api.php).

You either use Expo or the React Native CLI, whatever you're most comfortable using, and please use function components/hooks for all of your React components where possible.

Please consider best practices for usability, performance, code quality, and ideally commit often with descriptive commit messages.

## The Challenge

This app will have 2 screens:

- A list screen that displays a list of drinks
- A detail screen that displays details about a specific drink

We don't have any strict design for either of the screens, but try to make them look nice.

The list screen should display a list of drinks, including the drink's image, the name of the drink, and a description (limited to one line, with ellipsis if the description is too long).

You should display only 10 drinks from the API.

Optional bonus point: add some kind of user interface to display more drinks.

Optional bonus point: add a loading state while drinks are loading.

Tapping on one of the drinks in this list should take you to the detail screen for this drink.

The detail screen should display the drink's image, name of the drink, alcohol by volume (abv), tagline, full description, and one other piece of data of your choice.

## Submission

When you are done, commit and push everything to your own repository and send us a link to the resposity via email. If you have problems forking this repo or any issues with getting your submission up on GitHub then please zip up your technical test folder and send it to us via email.
