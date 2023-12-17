import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-bold text-red-500"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-gray-800"
      >
        Oops! Page not found
      </motion.p>
      <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        src="https://images.pexels.com/photos/7625246/pexels-photo-7625246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Error"
        className="mt-8 w-64"
      />
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        href="/"
        className="mt-4 text-blue-500 hover:underline"
      >
        Go back to homepage
      </motion.a>
    </div>
  );
};

export default NotFoundPage;
