// Define a functional component for the navigation bar
export default function Navbar(){
    return(
        // Wrapper div for the entire navbar
        <div>
            {/* Unordered list for navigation items */}
            <ul className="flex justify-end space-x-10 pt-10 pr-10">
                {/* Navigation item for Works */}
                <li className="font-bold space-between">Works</li>
                {/* Navigation item for Blog */}
                <li className="font-bold space-between">Blog</li>
                {/* Navigation item for Contact */}
                <li className="font-bold">Contact</li>
            </ul>
        </div>
    );
}