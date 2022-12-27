# Basic SSG Next.js app for learning the framework

Next.js can apply SSR during development. During build and deploy, SSG can be implemented to improve performance. Next.js resolves SEO and performance issues by not placing heavy emphasis of your app on the client-side, which is the process of CRA react. This tutorial is to run through basic principles in creating a SSG next.js application.

## Source: Net Ninja 2021 Next.js Tutorial

[Youtube Video Here](https://www.youtube.com/watch?v=A63UxsQsEbU&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw&index=1)

### Setup

1. In terminal of new proj folder, run: npx create-next-app name-of-proj
2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

4. [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

5. The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

6. This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Pages folder

- Each page should have its own React components.
- By default, index.js is the homepage component. App.js is the root component.
- Public folder is where all the media assets go. Likewise, styles folder for style sheets and components.

When you create a new component in pages folder, the api will create a route. E.g. if you created an about.js file, Next.js would create a route '/about' for your app. The exception is index.js, which would be just '/'. If you create a subfolder in pages folder, then the resultant filepath would be a concatenation of forward slash subfolder name and endpoint filepath name e.g. localhost:3000/ninjas/test => pages/ninjas/Test.js

The exception to this would be if you placed another index.js file in the ninjas subfolder. This creates a root path for that folder e.g. localhost:3000/ninjas/

## Reusable Components

Components which we want to reuse across routes such as navigation component, or a card component are not saved in the pages folder. Create a new folder in the root directory and add these components there. Add these files with regular import export statements like in CRA. Then add to the component where you want the reusable code to be displayed.

## Linking between Pages (post Next.js v.13)

Note that we do not use anchor tags in Next.js. We use the link component. The link component allows for client side navigation as opposed to SSR which results in a more performant user experience. Add the following line to the top of your component such as in a reusable Navigation component file: import Link from 'next/link';
Then add Link tags in the return statement each with a href attr e.g. href="/" or "/about".

### Use a Layout template component

To be more maintainable and scalable, we could create a Layout.js file which outputs nav and footer component, then between them a children prop which is derived from the \_app.js file. In this file, we have the Layout component with nested Component component. This contains an obj with pageProps spread into the obj. Where and how pageProps and Component component are created and manipulated is abstracted and not explained in the video.

## Styling

In this tutorial, we imported a global stylesheet into the app component in order for the global styles to take effect. What if we want locally scoped CSS for a component?

We can use CSS modules which target a specific component and Next.js will assign prefixes to the classes so that they become scoped to the component only. In a default Next.js app, there is a Home.module.css file which is being imported in the index.js component. It is accessed via a keyname of styles. The naming convention is '.module.css'. To apply the styles, add a className attr to a tag within the render statement, then in curly brackets, add the keyname, dot notation and then the classname selector e.g. className={styles.container}. You have to use class selectors, not element or combination selectors.

## 404 Page

Next.js provides some features for customising your app's 404 page. .404.js is a specific filename just like index.js. Instead of returning a route it returns this templated page should a user try to navigate to a page that doesn't exist.

### Redirecting after timeout

You may use a redirect after a time interval for example after a user successfully fills in a webform and is served the successful form submission page. Then, they should be taken to another page such as the homepage. The 404 page contains code to redirect the user with useEffect React Hook, useRouter Next Hook and setTimeout plain JS method.

## Media Assets

Place all media in the public folder. This way, you don't have to seek out the filepath from the image to the component where it is being imported. When you use the image tag and src attr, one forward slash means it will look for the asset in the public folder.

Use the Image tag instead (see docs on how to import) as it includes SEO suggestions and built in lazy loading.

## Metadata

Next.js has support for including metadata in the head tags of a html page. You could add a Head tag to the index.js homepage. Remember to Import Head from 'next/head' at the top of the script. Then add a title tag, meta tag etc. nested within the Head tag. In the video, this Head tag and import statement were copied over to each page route manually.

## Fetching Data

In React, data requests are made client side. But in Next.js we want to fetch the data server side, then serve the files to the client pre-rendered. We can use a Next.js method called getStaticProps. We use an export statement to access it. getStaticProps is an async function which runs only on build time, as the app gets built and the components are rendered. So don't write code in the function body where you expect it to run in the browser. Also, don't pass any sensitive information that shouldn't be available on the client in props.

## Dynamic Routes

If we need to create templated pages for say, a user page from a list of fetched data, Next.js still needs to build a separate page with the route of the user e.g. user/1, user/2 etc. Refer to `[id].js` file.
