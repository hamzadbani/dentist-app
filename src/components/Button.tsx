import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

const Button = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500 shadow-md hover:shadow-lg',
        secondary: 'bg-white text-sky-600 hover:bg-slate-50 focus:ring-sky-500 border border-sky-100 shadow-sm',
        outline: 'border-2 border-sky-500 text-sky-500 hover:bg-sky-50 shadow-sm focus:ring-sky-500',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props as any}
        >
            {children}
        </motion.button>
    );
};

export default Button;
