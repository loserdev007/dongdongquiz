import './Blog.css'
import React from 'react';

const Blog = () => {
   return (
      <div className='vh-100 vw-100 p-5 d-flex justify-content-center align-items-center flex-column'>
         <h3 className='text-white'>
            Q1. What is the purpose of react router?
         </h3>
         <p className='text-white'>
            A1. React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
         </p>
         <h3 className='text-white'>
            Q2. How does contextApi work?
         </h3>
         <p className='text-white'>
            A2. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page.
         </p>
         <h3 className='text-white'>
            Q3. What is useRef?
         </h3>
         <p className='text-white'>
            A3. When using JavaScript, in situations where we need to select a particular DOM, we use the same DOM Selector function to select the DOM.getElementByIdquerySelector Even in projects that use Reacts, sometimes you have to select the DOM yourself. For example, you need to get the size of a particular element, you need to get or set the scrollbar position, or you need to set the focus, and so on. Additionally, you may encounter situations where you need to select a DOM because it applies to a specific DOM even when you need to use an HTML5 Video-related library such as Video.js, JWPlayer, or an external library such as D3, chart.js. In that case, I use something called in React.ref
         </p>
      </div>
   );
};

export default Blog;