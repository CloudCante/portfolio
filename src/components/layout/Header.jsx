import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-[400px] bg-gradient-to-br from-primary to-secondary p-8 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Placeholder Circle/Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="w-64 h-64 rounded-full bg-gray-200 border-4 border-white shadow-lg"
        >
          {/* Replace this div with my image later:
          <img 
            src="/your-photo.jpg" 
            alt="Your Name" 
            className="w-full h-full rounded-full object-cover"
          /> */}
        </motion.div>

        {/* Name and Title */}
        <motion.div 
          className="text-white md:text-right text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl font-bold mb-4"
          >
            Darvin Lemus
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-gray-200"
          >
            Software Developer & IT Specialist
          </motion.p>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;