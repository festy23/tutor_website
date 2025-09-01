import React from 'react';
import { motion } from 'framer-motion';

interface SkillTag {
  id: string;
  label: string;
  span?: number;
}

interface SkillTagsProps {
  tags?: SkillTag[];
}

const defaultTags: SkillTag[] = [
  { id: 'ege', label: '#ЕГЭ' },
  { id: 'oge', label: '#ОГЭ' },
  { id: 'python', label: '#Python (+пет проекты)', span: 2 },
  { id: 'olympiad', label: '#Олимпиады', span: 2 },
];

const SkillTags: React.FC<SkillTagsProps> = ({ tags = defaultTags }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-5" data-aos="fade-up" data-aos-delay="400">
      {tags.map((tag, index) => (
        <motion.div
          key={tag.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
          className={`glass-dark text-white rounded-full px-5 py-3 md:px-6 md:py-4 font-space-grotesk text-base md:text-lg lg:text-xl text-center grain enhanced-shadow ${
            tag.span ? `col-span-${tag.span}` : ''
          }`}
        >
          {tag.label}
        </motion.div>
      ))}
    </div>
  );
};

export default SkillTags;
