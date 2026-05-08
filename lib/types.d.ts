export interface IToaster {
    id?: number
    type?: 'loading' | 'succesful' | 'error' | 'warning' | 'info' | 'blank'
    action?: {
        label: string,
        onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        styling?: string
    },
    label: string
    title?: string
    icon?: React.ElementType,
    positionX?: 'left' | 'center' | 'right'
    positionY?: 'up' | 'middle' | 'bottom'
    closeButton?: boolean
    border?: boolean,
    duration?: {
        animation?: number,
        notification?: number
    },
    swipe?: boolean,
    swipeDirection?: 'left' | 'right'
    deleteToast?: () => void
}

