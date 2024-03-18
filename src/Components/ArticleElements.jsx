

const ArticleElements = ({ heading, content, example }) => {
    return (
        <>
            <section className="grid md:grid-cols-12">
                <article className="border m-3 p-3 rounded-lg border-emerald-400 shadow-lg md:col-span-9">
                    <p className="text-lg font-medium">{heading}</p>
                    <p>{content}</p>
                </article>
                <div className="border m-3 p-3 rounded-lg text-center border-emerald-400 shadow-lg md:col-span-3">
                    <p>Example</p>
                    <p>{example}</p>
                </div>
            </section>
        </>
    );
};

export default ArticleElements;