import ArticleElements from "../Components/ArticleElements";
import ReactUser from "../Components/ReactUser";


const ReactBasic = () => {
    const jsxText = <p>Hello, Developers</p>;
    const compoText = <p>Hello, Programmer</p>;
    return (
        <>
            <section className="grid md:grid-cols-12">
                <article className="border m-3 p-3 rounded-lg border-emerald-400 shadow-lg md:col-span-9">
                    <p className="text-lg font-medium">What is React and why is it used ?</p>
                    <p>React is a JS library for building user interfaces. It is used for creating reusable UI Components that efficiently update and render when data changes. React helps in building single page applications (SPAs) for a seamless user experience.</p>
                </article>
                <div className="border m-3 p-3 rounded-lg text-center border-emerald-400 shadow-lg md:col-span-3">
                    <p>Example</p>
                    <ReactUser userName={"Coders"}></ReactUser>
                </div>
            </section>
            <ArticleElements heading={"What is JSX in React ?"} content={"JSX is a syntax extension for Javascript. It allows you to write HTML elements and components in a JavaScript file. JSX is a syntax sugar that gets compiled into JavaScript"} example={jsxText}
            ></ArticleElements>
            <ArticleElements heading={"What are the components in React ?"} content={"Components are the building block of a react application. They are reusable, self contained pieces of code that manage their state and UI. Components can be either functional or class-based."} example={compoText}></ArticleElements>
        </>
    );
};

export default ReactBasic;