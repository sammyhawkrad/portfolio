import data from "../assets/data.json";

export default function Footer() {
    //current year
    const year = new Date().getFullYear();
    const { name, contact } = data;

    return (
        <>
        <footer id="footer" className="flex flex-col-reverse md:flex-row items-center justify-between md:p-5 mt-20 gap-2">
            <p className="text-blue-600 text-md dark:text-white">&copy; {name} &mdash; {year} 
                <span className="text-xs text-gray-400"> <br />{`design inspiration: Feyza Okumus CC BY 4.0 ${name==='Samuel Darkwah Manu'? '': ' | developed by: Samuel Darkwah Manu'}`}</span> 
            </p>
            <div className="flex justify-end gap-2 md:gap-5">
                <a target="_blank" rel="noopener noreferrer" href={contact.github}>Github</a>
                <a target="_blank" rel="noopener noreferrer" href={contact.linkedin}>LinkedIn</a>
                <a target="_blank" rel="noopener noreferrer" href={contact.twitter}>X (Twitter)</a>
            </div>
        </footer>
        </>
    );
    }
