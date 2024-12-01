import SidebarNav from './sidebar-nav'

export default function Sidebar({ docs, topics }) {
    return (
        <div id="hs-application-sidebar" className="hs-overlay  [--auto-close:lg]
        hs-overlay-open:translate-x-0
        -translate-x-full transition-all duration-300 transform
        w-[260px] h-full
        hidden
        fixed inset-y-0 start-0 z-[60]
       border-e border-gray-200
        lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
        dark:bg-gray-800 dark:border-gray-700" role="dialog" tabindex="-1" aria-label="Sidebar">
            <div className="relative flex flex-col h-full max-h-full">
                <div className="px-6 pt-4">
                    <a className="" href="/" aria-label="">
                        <img
                            className="hidden dark:block w-32 sm:w-48"
                            src={"/logo-dk.svg"}
                            alt="App Logo"
                        />
                        <img
                            className="block dark:hidden w-32 sm:w-48"
                            src={"/logo-lt.svg"}
                            alt="App Logo"
                        />
                    </a>
                </div>
                <SidebarNav docs={docs} topics={topics} />

            </div>
        </div>
    )
}