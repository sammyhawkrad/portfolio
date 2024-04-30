export default function Footer() {
    //current year
    const year = new Date().getFullYear();

    return (
        <>
        <footer id="footer" className="flex flex-col-reverse md:flex-row items-center justify-between md:p-5 mt-20 gap-2">
            <p className="text-blue-600 text-md">&copy; Samuel Darkwah Manu &mdash; {year} 
                <span className="text-xs text-gray-400"> <br />design inspiration: Feyza Okumus CC BY 4.0</span> 
            </p>
            <div className="flex justify-end gap-2 md:gap-5">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/sammyhawkrad">Github</a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/sammyhawkrad">LinkedIn</a>
                <a target="_blank" rel="noopener noreferrer" href="https://x.com/sammyhawkrad">Twitter</a>
            </div>
        </footer>
        </>
    );
    }
