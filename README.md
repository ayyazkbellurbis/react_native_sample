This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


# Sample React Native Project

This project is a React Native application structured according to clean architecture principles. It includes features such as dependency injection, reactive programming, and modular design to ensure maintainability and scalability.

## Project Structure

The project is organized as follows:

```
src
├── App.tsx
├── assets
├── components
│   └── ErrorBoundary.tsx
├── modules
│   ├── entities
│   ├── presentation
│   │   └── screens
│   │       ├── Homescreen.tsx
│   │       └── Profilescreen.tsx
│   ├── repositories
│   │   ├── ISampleRepository.ts
│   │   └── SampleRepository.ts
│   ├── redux
│   └── usecases
├── utils
│   ├── inversify.config.ts
│   ├── observer.ts
│   └── types.ts
```

### Root

- **App.tsx**: The main entry point of the application.

### Assets

- **assets**: Directory for storing images, fonts, and other static resources.

### Components

- **components/ErrorBoundary.tsx**: A component to handle errors and display fallback UI.

### Modules

#### Entities

- **entities**: Contains entity models representing the core business objects.

#### Presentation

- **presentation/screens**: Contains the UI screens of the application.
  - **Homescreen.tsx**: Home screen component.
  - **Profilescreen.tsx**: Profile screen component.

#### Repositories

- **repositories/ISampleRepository.ts**: Interface for the sample repository.
- **repositories/SampleRepository.ts**: Implementation of the sample repository.

#### Redux

- **redux**: Contains Redux store configuration and slices.

#### Usecases

- **usecases**: Contains the business logic of the application.

### Utils

- **utils/inversify.config.ts**: Configuration for InversifyJS, a dependency injection library.
- **utils/observer.ts**: Contains utilities for reactive programming.
- **utils/types.ts**: Type definitions used throughout the application.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)

### Installation

1. Clone the repository:

\`\`\`bash
git clone <repository-url>
cd sample
\`\`\`

2. Install dependencies:

\`\`\`bash
yarn install
\`\`\`

3. Run the application:

\`\`\`bash
yarn react-native run-android
# or
yarn react-native run-ios
\`\`\`

### Folder Structure

- **src**: Main source code directory.
- **assets**: Static resources.
- **components**: Reusable components.
- **modules**: Feature-based modules.
- **utils**: Utility functions and configuration files.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
