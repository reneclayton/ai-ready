import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';

interface DimensionCardProps {
    title: string;
    description: string;
    isSelected?: boolean;
    isCompleted?: boolean;
    onClick: () => void;
    index: number;
}

const DimensionCard: React.FC<DimensionCardProps> = ({
    title,
    description,
    isSelected,
    isCompleted,
    onClick,
    index
}) => {
    return (
        <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            className={`relative w-full text-left p-6 rounded-2xl border transition-all duration-300 group
        ${isSelected
                    ? 'bg-white border-primary shadow-lg scale-[1.02]'
                    : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-md'
                }
        ${isCompleted ? 'border-l-4 border-l-green-500' : ''}
      `}
        >
            <div className="flex items-start justify-between">
                <div>
                    <h3 className={`text-lg font-bold mb-2 group-hover:text-primary transition-colors ${isSelected ? 'text-primary' : 'text-gray-900'}`}>
                        {title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed max-w-[90%]">
                        {description}
                    </p>
                </div>

                <div className={`
          w-8 h-8 rounded-full flex items-center justify-center transition-all bg-gray-50
          ${isSelected || isCompleted ? 'bg-primary text-white' : 'text-gray-300 group-hover:bg-blue-50 group-hover:text-primary'}
        `}>
                    {isCompleted ? <Check className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                </div>
            </div>

            {/* Progress Bar Indicator (Visual only) */}
            <div className="absolute bottom-0 left-6 right-6 h-1 bg-gray-50 rounded-full overflow-hidden mt-4">
                {isCompleted && <motion.div layoutId={`prog-${index}`} className="h-full bg-green-500 w-full" />}
            </div>
        </motion.button>
    );
};

export default DimensionCard;
