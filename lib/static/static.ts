import { X, LoaderCircle, Check, ShieldAlert, Info } from 'lucide-react';

export const notificationPosition = {
    left: {
        up: {
            left: 16,
            top: 16
        },
        middle: {
            left: 16,
            top: '50%',
            translateY: '-50%'
        },
        bottom: {
            left: 16,
            bottom: 16
        }
    },
    center: {
        up: {
            top: 16,
            left: '50%',
            translateX: '-50%'
        },
        middle: {
            top: '50%',
            left: '50%',
            translateY: '-50%',
            translateX: '-50%'
        },
        bottom: {
            bottom: 16,
            left: '50%',
            translateX: '-50%'
        }
    },
    right: {
        up: {
            top: 16,
            right: 16
        },
        middle: {
            right: 16,
            top: '50%',
            translateY: '-50%'
        },
        bottom: {
            right: 16,
            bottom: 16
        }
    }
}

export const mainStyle = {
    borderRadius: 8,
    boxShadow: '0px 0px 4px #efefef',
    maxWidth: '350px',
    width: 'calc(100vw - 40px)'
}

export const buttonStyle = {
    blank: {
        backgroundColor: '#e5e7eb',
        color: '#4b5563'
    },
    loading: {
        backgroundColor: '#e5e7eb',
        color: '#4b5563'
    },
    succesful: {
        backgroundColor: '#4ade80',
        color: '#166534'
    },
    error: {
        backgroundColor: '#fecaca',
        color: '#991b1b'
    },
    warning: {
        backgroundColor: '#f97316',
        color: 'white'
    },
    info: {
        backgroundColor: '#1e3a8a',
        color: 'white'
    }
}

export const notificationStyle = {
    blank: {
        backgroundColor: '#ffffff',
        border: '1px solid #eeeff1',
    },
    loading: {
        backgroundColor: '#ffffff',
        border: '1px solid #eeeff1'
    },
    succesful: {
        backgroundColor: '#dcfce7',
        border: '1px solid #bbf7d0'
    },
    error: {
        backgroundColor: '#fef2f2',
        border: '1px solid #fee2e2',
    },
    warning: {
        backgroundColor: '#ffedd5',
        border: '1px solid #fed7aa'
    },
    info: {
        backgroundColor: '#dbeafe',
        border: '1px solid #ddd6fe'
    }
}

export const textColor = {
    blank: '#1f2937',
    loading: '#1f2937',
    succesful: '#166534',
    error: '#b91c1c',
    warning: '#ea580c',
    info: '#1e3a8a',
}

export const defaultIcons = {
    "loading": LoaderCircle,
    "succesful": Check,
    "error": X,
    "warning": ShieldAlert,
    "info": Info,
    "blank": undefined
}