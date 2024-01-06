# Full Website Documentation and Maintenence Guide
This file contains all information about the website, including what each file does, how to clone the repository, commit and push changes, test the website, and more. Please just read each section carefully before pushing changes to the main branch. Should you have any additional questions not answered by this README.md, contact me at pooja.ginjupalli@stonybrook.edu!

## Cloning The Repository
This file will be using VSCode as its IDE. If you are using anything else, it is up to you to recognize and solve any differences in software (so I recommend just using VSCode). Also, we will be cloning this repo instead of setting up a remote connection because adding and removing files will be easier. Follow these steps to set up a clone:
 1. Open VSCode. Make sure you've connected your Github to VSCode.
 2. Enter Git: Clone
 3. Select Open from Github
 4. Select this repository to clone. *Note: If this repository is not here, it means you either are not a member of the AI-Community-SBU Repo or do not have permission to edit this repo. Contact the E-Board to get access.
 5. You will be asked to select a folder on your device to clone all of the files to. Select one or make a folder if you do not have one. Click OK.

## Testing Changes
Before pushing any changes to the main branch, you must test every new feature you add. You can set up a live server in VSCode which shows your changes in action without committing them. To do this, follow these steps:
 1. Go to the vite.config.ts file.
 2. Here, make sure the 'base' property has the attribute "". It should look like 'base: ""'. Note that the 'base' property should normally look like 'base: "/AI-Community" and we are changing it only to test our website before committing changes. Whenever you are pushing changes to the main branch, change the 'base' property back to 'base: /AI-Community".
 3. Open the terminal (Click View --> Terminal or CTRL+`)
 4. Type in 'npm run dev'. This will open a live server in your default browser. Any changes you make now will automatically update in this live server.

## Committing and Pushing Changes
Whenever you make any changes, those changes stay on your local computer until you push them onto the main branch. Follow these steps to commit and push your changes:
 1. Go to the Source Control panel (CTRL + Shift + G).
 2. Type in a simple message detailing what you changed (e.g. Added Deep Learning Event)
 3. Click 'Commit'. This is essentially a save button. All of your changes are saved in a cloud but are not shown on the main branch. You can make as many commits as you want before officially pushing them.
 4. When you are done making commits and there are no changes left, click 'Sync Changes' to push all of your code to the main branch (Make sure you've changed the 'base' property to '/AI-Community'!)
 5. On Github, go to the repository and click the Actions tab.
 6. By pushing your changes, you started a new workflow which, upon completion, will update the website with your changes. If the workflow fails, it means there are errors in your changes (a workflow will fail from a warning in your code, even though it might compile correctly). Fix these errors and push the code again until you have a successful workflow.

## Organization
Since the website relies on many different files, it is essential to keep things organized. That is why you'll see folders like 'components', 'pages', 'assets', etc. This section goes into what each folder holds and how they relate to each other, along with big files like 'index.html', 'main.tsx', and 'App.tsx'. 

### index.html
When we are hosting our website on GitHub pages, GitHub automatically looks for a file called 'index.html' to build the website with. However, we don't want to code everything in one file because that would be anarchy. So, we use our 'index.html' file as a wrapper for the website. If you look closely, you'll see there is a link to a script called 'main.tsx' in this file, so when GitHub finds this 'index.html' file, it gets redirected to the 'main.tsx' file which holds our website. Do not change any code here unless you know for certain what you are doing.

### main.tsx
So, our website gets redirected to this file which is then used to build our website. Most of the code you'll see is fancy React stuff, but the important part is that the <App/> is what the entire website is being built with. For example, a p-tag outputs text. Well, this <App/> tag outputs our whole website. All of the code in the entire repository is meant to build this tag which is then used to build our website. If you think about it, the 'main.tsx' file could also be perceived as a wrapper.

### App.tsx
OK, I've described earlier how this file makes a tag called <App/> which holds our entire website. However, if you look at the code inside here, it's very empty. That is because whatever you add here will show up on every single page of the website. For example, on every page, you'll see a Navbar and a Footer. So, how do we see each page? Well, that's all done by the Navbar tag.

### Navbar
If you go to the components folder, you'll find a folder containing the HTML code for the Navbar and the CSS styling that goes along with it. The Navbar, upon clicking a button within it, will show the corresponding page. Details of how to add or remove pages can be found in the comments in this file.

### 'pages' Folder
Each .tsx file you see is coded to make a new tag. For example, the Navbar.tsx file has the code to make the <Navbar/> tag. The 'pages' folder contains code for the tags for each page. So, the code in the 'Home.tsx' file contains the code for the <Home/> tag.

### 'components' Folder
Along with files to create the tags for each page of the website, we also have files that create mini parts of each page. For example, the homepage has a section with a title and a short paragraph to the side of it. These sections are also tags that are coded in the 'TextSection.tsx' file. That is what this folder contains. This folder contains mini parts that can be used in any page and acts as the building blocks to make a webpage.

### 'assets' Folder
As you know, the website relies on many graphics. The assets folder stores these videos and images and organization them depending on where each file will be used. When adding files, make sure to add them to the correct location to keep things organized!

## Updating Events, Photos, Articles, and E-Board Information
You will be responsible for keeping the website up-to-date on any events or resources we offer. The code has already been optimized to make updating as easy as possible with little to no copying and pasting. To make day-to-day changes, go to the Constants.tsx file. This should be located in the src folder. The Constants file should already have comments detailing how to update each topic.

The main takeaway from reading this is to understand that everyday changes are made through the Constants.tsx file. You do not need to worry about changing any CSS or HTML unless you want to update the design of the website.

## Additional Details
There are many comments within the code to answer more in-depth questions like "What does this *insert obscure file* do?". If you want to make changes, use, or delete any files, make sure to read these comments completely. If you are ever confused, remember that you can reach out to the E-Board and previous webmasters. Hope you have fun and good luck!




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
