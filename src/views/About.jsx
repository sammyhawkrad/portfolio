import data from "../assets/data.json";


export default function About() {
    return (
        <>
        <main className="max-w-5xl mx-auto">
            <section className="flex flex-col md:flex-row items-center md:justify-between lg:justify-between mt-10 mb-10">
                <div className="md:w-3/5 mb-10">
                <h2 className="text-4xl font-medium">{`Hello, I'm ${data.name}, a ${data.role}.`}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg pt-10" dangerouslySetInnerHTML={{ __html: data.about.replace(/\n/g, '<br>') }}></p>
                </div>
                <div><img src={data.image} alt="Picture of Samuel"  className="hover:grayscale w-72 lg:w-fit md:max-h-[28rem] 2xl:max-h-full"/></div>
            </section>
            <section>
                <div>
                    <h3 className="font-medium underline underline-offset-8 py-4">Education</h3>
                    <p className="text-gray-600 dark:text-gray-400 pb-2">MSc. Cartography, TU Munich | TU Wien | TU Dresden | UTwente, Germany, Austria &amp; The Netherlands (in pursuit)</p>
                    <p className="text-gray-600 dark:text-gray-400 pb-2">BSc. Development Planning, Kwame Nkrumah University of Science and Technology, Ghana</p>
                </div>
                <div></div>
            </section>
            <section className="md:flex md:flex-col md:gap-10 md:mt-10">
                <div className="md:flex md:justify-start md:items-start md:gap-20">
                    <h3 className="font-medium underline underline-offset-8 py-4 md:pt-0 md:min-w-[11rem]">Programming Languages</h3>
                    <p className="text-gray-600 dark:text-gray-400">JavaScript, TypeScript, Python, Java, HTML, CSS, SCSS, SQL </p>
                </div>
                <div className="md:flex justify-start items-start gap-20">
                    <h3 className="font-medium underline underline-offset-8 py-4 md:pt-0 md:w-[11rem]">Tools &amp; Technologies</h3>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400">
                            <span className="italic">Web Development</span> - Vue, React, Node, Express, FastAPI, Git, Tailwind, Bootstrap, MongoDB, PostreSQL
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 my-2">
                            <span className="italic">Cartography & GIS</span> - QGIS, ArcGIS, Leaflet, Geoserver, PostGIS
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                            <span className="italic">Data Science</span> - Power BI, Tableau, Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, MySQL, SQL Server
                        </p>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}