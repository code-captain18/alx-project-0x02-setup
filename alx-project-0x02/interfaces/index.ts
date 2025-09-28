export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (title: string, content: string) => void;
}

export interface ButtonProps {
    children: React.ReactNode;
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export interface PostProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}
