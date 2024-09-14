'use client'

export default function DropdownMenu() {
    return (
        <div className="dropdown" data-dropdown="true" data-dropdown-trigger="click">
            <button className="dropdown-toggle btn btn-light btn-icon-xs">
                Show Dropdown
                <i className="ki-outline ki-down dropdown-open:hidden">
                </i>
                <i className="ki-outline ki-up hidden dropdown-open:block">
                </i>
            </button>
            <div className="dropdown-content w-full max-w-56 p-4">
                The Tailwind CSS Dropdown component offers a sleek,
                user-friendly interface for presenting overlay content.
            </div>
        </div>
    )
}