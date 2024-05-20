import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ShowBar = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="show-bar scroll"
    >
      {data.map((group, index) => (
        <ul key={index}>
          <li className="mx-4 pt-5">
            <ul>
              <li className="flex flex-col space-y-4 border-b border-secondary pb-3 mb-4">
                <Link href={group.groupTitle === "LAPTOPS" ? "/laptops" : "/tablets"} className="font-medium text-sm">{group.groupTitle}</Link>
                {group.products.map((product) => (
                  <Link key={product._id} className="text-[15px] text-gray-400 hover:text-primary" href={`${product.link}`}>
                    {product.title}
                  </Link>
                ))}
              </li>
            </ul>
          </li>
        </ul>
      ))}
    </motion.div>
  );
};

export default ShowBar;
