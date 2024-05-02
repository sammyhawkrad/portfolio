import data from "../assets/data.json";


export default function About() {
    return (
        <>
        <main>
            <section className="flex flex-col md:flex-row items-center md:justify-between lg:justify-around mb-10">
                <div className="md:w-2/4 mb-10">
                <h2 className="text-4xl font-medium">{`Hello, I'm ${data.name}, a ${data.role}.`}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg pt-10" dangerouslySetInnerHTML={{ __html: data.about.replace(/\n/g, '<br>') }}></p>
                </div>
                <div><img src="sam.jpg" alt="Picture of Samuel"  className="grayscale hover:grayscale-0 w-72 lg:w-fit"/></div>
            </section>
        </main>
        </>
    );
}