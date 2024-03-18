import ReactUser from "../Components/ReactUser";


const ReactBasic = () => {
    return (
        <>
            <article className="border m-3 p-3 rounded-lg border-emerald-400 shadow-lg">
                <h1 className="text-lg font-medium">What is React and why is it used ?</h1>
                <p>React is a JS library for building user interfaces. It is used for creating reusable UI Components that efficiently update and render when data changes. React helps in building single page applications (SPAs) for a seamless user experience.</p>
            </article>
            <ReactUser userName={"Coders"}></ReactUser>
        </>
    );
};

export default ReactBasic;