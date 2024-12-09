import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const NotificationMessage = ({ message, isError, isVisible }) => {
  const backgroundColor = isError ? "#FF6B6B" : "#4CAF50"; // Rojo para errores, verde para éxito

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor,
            color: "#fff",
            padding: "15px 20px",
            borderRadius: "5px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 500,
            fontSize: "16px",
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationMessage;
