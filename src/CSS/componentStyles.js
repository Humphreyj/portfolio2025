export const componentStyles = {
    avatarStyles: {
        avatarClass:
            'flex items-center justify-center mx-auto rounded-full shrink-0 ring-1 size-14 ring-gray-cool-300 dark:bg-gray-700',
    },
    cardStyles: {
        containerClass:
            'border bg-white rounded-lg border-gray-300 shadow shadow-gray w-full min-h-36 dark:bg-cardBackgroundDark dark:border-gray-600',
        cardTitleText: 'w-fit py-2 font-medium text-2xl dark:text-white',
        cardContentText: '',
    },
    buttons: {
        defaultButton:
            'border border-gray-700 rounded-lg bg-primary-500 dark:bg-blue-600 text-white dark:text-gray-100 py-1 px-2 shadow drop-shadow hover:shadow-lg hover:drop-shadow-md',
        dangerButton:
            'border border-gray-700 rounded-lg bg-red-500 text-white py-1 px-2 shadow drop-shadow hover:shadow-lg hover:drop-shadow-md',
        disabledButton:
            'border border-gray-700 rounded-lg bg-gray-200 text-gray-500 py-1 px-2 shadow drop-shadow opacity-75 disabled cursor-not-allowed',
    },
    sidebar: {
        backdropClass:
            'absolute w-screen h-screen md:hidden z-[5] bg-black opacity-45',
        containerClass:
            'min-w-40 overflow-x-hidden min-h-screen h-full absolute md:relative bg-sidebarBackground dark:bg-sidebarBackgroundDark py-3 px-2 z-10 border-r',
        titleClass: 'primary-text font-bold font-display text-xl mb-4',
        navContainerClass: 'flex-col-is-js gap-2',
        navLinkClass:
            'text-lg text-gray-800 dark:text-gray-200 font-display min-w-32 p-1 rounded-md hover:bg-gray-300 hover:dark:bg-gray-500 hover:bg-opacity-70',
    },
    modal: {
        backdropClass: 'absolute w-screen h-screen z-[11] cursor-pointer ',
        containerClass:
            'w-max min-w-40 overflow-x-hidden min-h-30 z-[12] absolute bg-sidebarBackground dark:bg-sidebarBackgroundDark rounded-md p-2',
    },
    notificationModal: {
        containerClass:
            'p-1 mb-2 border-b-2 border-gray-600 dark:border-gray-100 rounded-md cursor-pointer hover:bg-black hover:bg-opacity-20 hover:dark:bg-white hover:dark:bg-opacity-20',
        iconClass:
            'absolute top-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full -right-1 -top-2',
    },
    textInput: {
        containerClass: 'flex-col-is-js w-full',
        labelClass:
            'font-bold text-gray-900 mb-1 dark:text-white dark:opacity-95',
        inputClass:
            'border p-1 border-gray-700 dark:border-gray-600 shadow-md rounded-md w-full dark:bg-gray-700 text-lg primary-text dark:shadow-slate-900',
        optionsClass:
            'border absolute bg-appBackground dark:bg-appBackgroundDark border-t-0 overflow-y-scroll border-gray-cool-300 h-32 w-full rounded-lg  z-10 p-1  mt-[-.2rem]',
        optionClass:
            'rounded-lg primary-text cursor-pointer hover:bg-gray-cool-300',
    },
    textBlock: {
        containerClass: 'flex-col-is-js w-full',
        labelClass:
            'font-bold primary-text opacity-80 text-lg text-center dark:text-white',
        contentClass: 'font-bold dark:text-white text-xl',
    },

    metricCard: {
        cardContainerClass:
            'w-full cursor-pointer drop-shadow-md hover:drop-shadow-lg',
        contentContainerClass:
            'gap-2 py-4 pl-2 pr-1 min-h-32 min-w-40 flex-col-is-js',
        cardTitleClass: 'text-lg font-semibold font-display drop-shadow-sm',
        cardContentClass: 'mb-1 text-3xl font-bold font-content',
    },
}
