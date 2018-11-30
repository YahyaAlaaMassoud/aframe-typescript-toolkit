# A-Frame + Typescript

This document will describe how to use the `aframe-typescript-toolkit` to create custom, shareable A-Frame components and systems using Typescript. This repository offers wrapper classes for A-Frame building blocks such as Components and Systems, making it easy to build A-Frame code that looks and feels like idiomatic Typescript code.

Also included is a command line tool which can be invoked to generate easily extendable templates upon which to build your A-Frame components.

---

## Using the command line tool (CLI)

You can install the CLI globally, or run it locally from repository source.

Install it globally:

```npm install -g aframe-typescript-toolkit```

Then run it:
```
aframe-typescript-toolkit
```

To run it locally:

1. Install the dependencies:
```npm install```

2. Run the cli:
```npm run cli```

Once invoked, the CLI will ask you what type of A-Frame component template to generate:

```
? What A-Frame Typescript template would you like to start with? (Use arrow keys)
❯ component
  system
```

```
? What A-Frame Typescript template would you like to start with? component
? Project name: awesome-component
```

In the above example, a directory called `awesome-component` will be created containing all the code you need to develop a typescript A-Frame component, including a live development server. The file structure looks like this: 
```
awesome-component
│   README.md
│   package.json    
│   webpack.config.js
│   tsconfig.json
│
└───src
    │   index.html
    │   index.ts
```

---

## Running a generated template

1. Change directory into the generated component and install the dependencies:

```
cd awesome-component
npm install
```

2. Start the development server:

```
npm run start
```

When the development server starts, your browser will automatically open to port `3000` and you will be able to start using the template component right away.

## Customizing the component
Click on the video below to see how you can edit the program in Visual Studio Code and watch your changes be dynamically applied without explicitly reloading the browser:

[![A-Frame Typescript Toolkit](https://img.youtube.com/vi/bazU6D-LYDI/0.jpg)](https://www.youtube.com/watch?v=bazU6D-LYDI "A-Frame Typescript Toolkit")

### Exporting Custom Components
Seeing your component run locally is great. Now it is time to export it so it can be used by others. There are many ways to do this. One free and convenient way is through GitHub and [JSDelivr](https://www.jsdelivr.com/).

#### 1. Publish your project to GitHub 
See [GitHub's docs](https://help.GitHub.com/) if you are not familiar with this process. 

#### 2. Create a CDN for your component class
After building expose your `dist/index.js` file to a CDN like https://www.jsdelivr.com/ and it can be used in any A-Frame project like a traditional A-Frame component (or system).

---
## Using the toolkit without the CLI

See the [wiki](https://github.com/olioapps/aframe-typescript-toolkit/wiki/Creating-an-AFrame-typescript-project-without-using-the-CLI) for instructions on using the toolkit without the CLI to create Typescript A-Frame classes and components. 

---

## A-Frame Typescript Classes 

Discussed below are the building blocks of the Typescript toolkit for A-Frame. 

### EntityBuilder
Entity builder allows you to create A-Frame entities, set attributes, and attach them to the scene other A-Frame elements. 
```javascript
import { EntityBuilder } from "aframe-typescript-toolkit"

const scene = document.getElementById("scene")

EntityBuilder.create("a-text", {
    id: "hello-text",
    value: "Hello Word!",
    color: "blue",
    position: "-1 2 0",
}).attachTo(scene)
```
See the docs for additional information on [EntityBuilder](dist/docs/classes/_entity_builder_.entitybuilder.html)

### ComponentWrapper
The ComponentWrapper is a base class for creating strongly typed A-Frame components. Component lifecycle methods such as init(), tick(), and others are provided, and can be overridden to suit your component's specific behavior.

See the [example](examples/position_logger_component) as well as the [ComponentWrapper docs](dist/docs/classes/_aframe_wrapper_.componentwrapper.html) for more details. 

### SystemWrapper
The SystemWrapper allows you to create typescript A-Frame systems. Components can subscribe themselves to a system, allowing the system to reference its components.

See the [example](examples/sphere_registry_system) as well as the [SystemWrapper docs](dist/docs/classes/_aframe_wrapper_.systemwrapper.html) for more details. 

---

## Examples 
### [Position Logger](https://GitHub.com/olioapps/aframe-typescript-toolkit/tree/master/examples/position_logger_component)
Position Logger A-Frame Component is a complete example of how to use an A-Frame component using `ComponentWrapper`


### [Sphere Registry System](https://GitHub.com/olioapps/aframe-typescript-toolkit/tree/master/examples/sphere_registry_system)
 Sphere Registry A-Frame System is a complete example of a how to create an A-Frame system using `SystemWrapper`

---

## Contact
We are interested in hearing your questions and feedback.

Email: [vr@olioapps.com](vr@olioapps.com)

---

## Additional Reading 
- [aframe-typescript-toolkit Docs](dist/docs/index.html)
- [A-Frame](https://aframe.io/)
- [Typescript](https://www.typescriptlang.org/docs/home.html)

---

## License
This program is free software and is distributed under an MIT License.
