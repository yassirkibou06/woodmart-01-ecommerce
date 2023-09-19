import { motion } from "framer-motion";

const ShowBar = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="show-bar scroll"
    >
      <ul>
        {Object.keys(data).map((categoryKey) => {
          const category = data[categoryKey];
          return (
            <li key={categoryKey}
              className={`mx-4 pt-5 ${category.title === "Pcs" ||
                  category.title === "INPUT DEVICES" ||
                  category.title === "HARDWARE & OTHER"
                  ? "border-none"
                  : "border-b-[1px] border-gray-200 mb-2"}`} >
              <a href={category.link} className="font-semibold text-sm uppercase hover:text-primary">{category.title}</a>
              <ul>
                {Object.keys(category.data).map((itemKey) => {
                  const item = category.data[itemKey];
                  return (
                    <li key={itemKey} className="my-3">
                      <a className="text-[15px] text-gray-400 hover:text-primary" href={`${category.link}${item.link}`}>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default ShowBar;

